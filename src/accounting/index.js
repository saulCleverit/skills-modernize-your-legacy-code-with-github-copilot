const readline = require('readline');

/**
 * Student Account Management System - Node.js Implementation
 * Converted from COBOL legacy application while preserving original business logic
 */
class AccountingSystem {
    constructor() {
        // Initialize with default balance as per original COBOL application
        this.storageBalance = 1000.00;
        this.continueFlag = true;
        
        // Create readline interface for user input
        this.rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
    }

    /**
     * Data Module - Equivalent to data.cob
     * Handles balance storage and retrieval operations
     */
    dataModule(operation, balance = null) {
        switch (operation) {
            case 'READ':
                return this.storageBalance;
            case 'WRITE':
                if (balance !== null) {
                    this.storageBalance = balance;
                }
                return this.storageBalance;
            default:
                throw new Error(`Invalid data operation: ${operation}`);
        }
    }

    /**
     * Operations Module - Equivalent to operations.cob
     * Handles all account transaction operations
     */
    async operationsModule(operationType) {
        let finalBalance = this.dataModule('READ');

        switch (operationType) {
            case 'TOTAL':
                console.log(`Current balance: ${finalBalance.toFixed(2)}`);
                break;

            case 'CREDIT':
                try {
                    const amount = await this.getUserInput('Enter credit amount: ');
                    const creditAmount = parseFloat(amount);
                    
                    if (isNaN(creditAmount) || creditAmount < 0) {
                        console.log('Invalid amount. Please enter a positive number.');
                        break;
                    }

                    finalBalance = this.dataModule('READ');
                    const newBalance = finalBalance + creditAmount;
                    
                    // Check if new balance exceeds maximum (9999.99)
                    if (newBalance > 9999.99) {
                        console.log('Credit amount would exceed maximum balance limit.');
                        break;
                    }

                    this.dataModule('WRITE', newBalance);
                    console.log(`Amount credited. New balance: ${newBalance.toFixed(2)}`);
                } catch (error) {
                    console.log('Error processing credit transaction.');
                }
                break;

            case 'DEBIT':
                try {
                    const amount = await this.getUserInput('Enter debit amount: ');
                    const debitAmount = parseFloat(amount);
                    
                    if (isNaN(debitAmount) || debitAmount < 0) {
                        console.log('Invalid amount. Please enter a positive number.');
                        break;
                    }

                    finalBalance = this.dataModule('READ');
                    
                    if (finalBalance >= debitAmount) {
                        const newBalance = finalBalance - debitAmount;
                        this.dataModule('WRITE', newBalance);
                        console.log(`Amount debited. New balance: ${newBalance.toFixed(2)}`);
                    } else {
                        console.log('Insufficient funds for this debit.');
                    }
                } catch (error) {
                    console.log('Error processing debit transaction.');
                }
                break;

            default:
                throw new Error(`Invalid operation type: ${operationType}`);
        }
    }

    /**
     * Main Program Logic - Equivalent to main.cob
     * Provides menu interface and program flow control
     */
    async mainLogic() {
        console.log('Starting Account Management System...\n');

        while (this.continueFlag) {
            this.displayMenu();
            
            try {
                const userChoice = await this.getUserInput('Enter your choice (1-4): ');
                const choice = parseInt(userChoice.trim());

                switch (choice) {
                    case 1:
                        await this.operationsModule('TOTAL');
                        break;
                    case 2:
                        await this.operationsModule('CREDIT');
                        break;
                    case 3:
                        await this.operationsModule('DEBIT');
                        break;
                    case 4:
                        this.continueFlag = false;
                        break;
                    default:
                        console.log('Invalid choice, please select 1-4.');
                        break;
                }
                
                if (this.continueFlag) {
                    console.log(); // Add blank line for readability
                }
            } catch (error) {
                console.log('Error processing input. Please try again.');
            }
        }

        console.log('Exiting the program. Goodbye!');
        this.rl.close();
    }

    /**
     * Display main menu - matches original COBOL formatting
     */
    displayMenu() {
        console.log('--------------------------------');
        console.log('Account Management System');
        console.log('1. View Balance');
        console.log('2. Credit Account');
        console.log('3. Debit Account');
        console.log('4. Exit');
        console.log('--------------------------------');
    }

    /**
     * Get user input asynchronously
     */
    getUserInput(prompt) {
        return new Promise((resolve) => {
            this.rl.question(prompt, (answer) => {
                resolve(answer);
            });
        });
    }

    /**
     * Graceful shutdown handler
     */
    setupGracefulShutdown() {
        process.on('SIGINT', () => {
            console.log('\n\nReceived interrupt signal. Shutting down gracefully...');
            this.continueFlag = false;
            this.rl.close();
            process.exit(0);
        });
    }
}

/**
 * Application Entry Point
 */
async function main() {
    const accountingSystem = new AccountingSystem();
    accountingSystem.setupGracefulShutdown();
    
    try {
        await accountingSystem.mainLogic();
    } catch (error) {
        console.error('Application error:', error.message);
        process.exit(1);
    }
}

// Export for testing
module.exports = { AccountingSystem };

// Run application if this file is executed directly
if (require.main === module) {
    main();
}

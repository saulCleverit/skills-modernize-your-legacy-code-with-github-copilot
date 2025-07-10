# COBOL Student Account Management System - Test Plan

## Overview

This test plan covers all business logic and functionality of the COBOL Student Account Management System. The test cases are designed to validate the system behavior for business stakeholders and will serve as a reference for creating unit and integration tests in the future Node.js implementation.

## Test Environment

- **System Under Test**: COBOL Student Account Management System
- **Initial Account Balance**: $1,000.00
- **Test Data**: Various monetary amounts and menu selections
- **Test Execution**: Manual testing through application interface

## Test Cases

### Menu Navigation and User Interface Tests

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status | Comments |
|--------------|----------------------|----------------|------------|-----------------|---------------|---------|----------|
| TC001 | Display main menu on application start | Application is compiled and ready to run | 1. Execute `./accountsystem` | Main menu displays with options 1-4 and prompts for user choice | | | |
| TC002 | Handle valid menu selection - Option 1 | Application is running and displaying main menu | 1. Enter "1" when prompted for choice | System calls balance inquiry function and displays current balance | | | |
| TC003 | Handle valid menu selection - Option 2 | Application is running and displaying main menu | 1. Enter "2" when prompted for choice | System prompts for credit amount and proceeds to credit transaction | | | |
| TC004 | Handle valid menu selection - Option 3 | Application is running and displaying main menu | 1. Enter "3" when prompted for choice | System prompts for debit amount and proceeds to debit transaction | | | |
| TC005 | Handle valid menu selection - Option 4 | Application is running and displaying main menu | 1. Enter "4" when prompted for choice | System displays goodbye message and exits gracefully | | | |
| TC006 | Handle invalid menu selection | Application is running and displaying main menu | 1. Enter "5" when prompted for choice | System displays error message "Invalid choice, please select 1-4." and returns to menu | | | |
| TC007 | Handle non-numeric menu input | Application is running and displaying main menu | 1. Enter "a" when prompted for choice | System handles invalid input appropriately and returns to menu | | | |
| TC008 | Handle empty menu input | Application is running and displaying main menu | 1. Press Enter without typing anything | System handles empty input appropriately and returns to menu | | | |

### Balance Inquiry Tests

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status | Comments |
|--------------|----------------------|----------------|------------|-----------------|---------------|---------|----------|
| TC009 | View initial account balance | Application started with default balance | 1. Select option 1 from main menu | System displays "Current balance: 1000.00" and returns to main menu | | | |
| TC010 | View balance after credit transaction | Account has been credited with $250.00 | 1. Select option 1 from main menu | System displays current balance reflecting the credit transaction | | | |
| TC011 | View balance after debit transaction | Account has been debited with $150.00 | 1. Select option 1 from main menu | System displays current balance reflecting the debit transaction | | | |
| TC012 | View balance after multiple transactions | Account has multiple credit and debit transactions | 1. Select option 1 from main menu | System displays correct current balance reflecting all transactions | | | |

### Credit Transaction Tests

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status | Comments |
|--------------|----------------------|----------------|------------|-----------------|---------------|---------|----------|
| TC013 | Credit account with valid amount | Account balance is $1,000.00 | 1. Select option 2<br/>2. Enter "250.00" when prompted | System displays "Amount credited. New balance: 1250.00" and returns to menu | | | |
| TC014 | Credit account with integer amount | Account balance is $1,000.00 | 1. Select option 2<br/>2. Enter "500" when prompted | System processes credit and displays "Amount credited. New balance: 1500.00" | | | |
| TC015 | Credit account with small decimal amount | Account balance is $1,000.00 | 1. Select option 2<br/>2. Enter "0.01" when prompted | System processes credit and displays "Amount credited. New balance: 1000.01" | | | |
| TC016 | Credit account with large amount | Account balance is $1,000.00 | 1. Select option 2<br/>2. Enter "5000.99" when prompted | System processes credit and displays "Amount credited. New balance: 6000.99" | | | |
| TC017 | Credit account with maximum allowable amount | Account balance is $1,000.00 | 1. Select option 2<br/>2. Enter "8999.99" when prompted | System processes credit and displays "Amount credited. New balance: 9999.99" (max balance) | | | |
| TC018 | Credit account with zero amount | Account balance is $1,000.00 | 1. Select option 2<br/>2. Enter "0" when prompted | System handles zero credit appropriately | | | |
| TC019 | Credit account with negative amount | Account balance is $1,000.00 | 1. Select option 2<br/>2. Enter "-100" when prompted | System handles negative input appropriately (should reject or handle as per business rules) | | | |
| TC020 | Credit account with invalid input | Account balance is $1,000.00 | 1. Select option 2<br/>2. Enter "abc" when prompted | System handles invalid input appropriately | | | |

### Debit Transaction Tests

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status | Comments |
|--------------|----------------------|----------------|------------|-----------------|---------------|---------|----------|
| TC021 | Debit account with valid amount (sufficient funds) | Account balance is $1,000.00 | 1. Select option 3<br/>2. Enter "250.00" when prompted | System displays "Amount debited. New balance: 750.00" and returns to menu | | | |
| TC022 | Debit account with amount equal to balance | Account balance is $1,000.00 | 1. Select option 3<br/>2. Enter "1000.00" when prompted | System displays "Amount debited. New balance: 0.00" | | | |
| TC023 | Debit account with amount exceeding balance | Account balance is $1,000.00 | 1. Select option 3<br/>2. Enter "1500.00" when prompted | System displays "Insufficient funds for this debit." and balance remains unchanged | | | |
| TC024 | Debit account with small decimal amount | Account balance is $1,000.00 | 1. Select option 3<br/>2. Enter "0.01" when prompted | System processes debit and displays "Amount debited. New balance: 999.99" | | | |
| TC025 | Debit account with integer amount | Account balance is $1,000.00 | 1. Select option 3<br/>2. Enter "100" when prompted | System processes debit and displays "Amount debited. New balance: 900.00" | | | |
| TC026 | Debit account when balance is zero | Account balance is $0.00 | 1. Select option 3<br/>2. Enter "1.00" when prompted | System displays "Insufficient funds for this debit." | | | |
| TC027 | Debit account with zero amount | Account balance is $1,000.00 | 1. Select option 3<br/>2. Enter "0" when prompted | System handles zero debit appropriately | | | |
| TC028 | Debit account with negative amount | Account balance is $1,000.00 | 1. Select option 3<br/>2. Enter "-50" when prompted | System handles negative input appropriately | | | |
| TC029 | Debit account with invalid input | Account balance is $1,000.00 | 1. Select option 3<br/>2. Enter "xyz" when prompted | System handles invalid input appropriately | | | |

### Data Persistence and Accuracy Tests

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status | Comments |
|--------------|----------------------|----------------|------------|-----------------|---------------|---------|----------|
| TC030 | Balance persistence across transactions | Account balance is $1,000.00 | 1. Credit $200<br/>2. View balance<br/>3. Debit $150<br/>4. View balance | Balance shows $1,200.00 after credit, then $1,050.00 after debit | | | |
| TC031 | Balance accuracy with multiple credits | Account balance is $1,000.00 | 1. Credit $100<br/>2. Credit $200<br/>3. Credit $50<br/>4. View balance | Balance shows $1,350.00 (cumulative credits) | | | |
| TC032 | Balance accuracy with multiple debits | Account balance is $1,000.00 | 1. Debit $100<br/>2. Debit $200<br/>3. Debit $50<br/>4. View balance | Balance shows $650.00 (cumulative debits) | | | |
| TC033 | Balance accuracy with mixed transactions | Account balance is $1,000.00 | 1. Credit $500<br/>2. Debit $200<br/>3. Credit $100<br/>4. Debit $300<br/>5. View balance | Balance shows $1,100.00 (net result of all transactions) | | | |

### Business Rules Validation Tests

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status | Comments |
|--------------|----------------------|----------------|------------|-----------------|---------------|---------|----------|
| TC034 | Initial balance validation | Fresh application start | 1. Start application<br/>2. View balance immediately | System displays initial balance of $1,000.00 | | | |
| TC035 | Overdraft protection enforcement | Account balance is $500.00 | 1. Attempt to debit $600.00 | System prevents transaction and displays insufficient funds message | | | |
| TC036 | Credit transaction limit validation | Account balance is $1,000.00 | 1. Attempt to credit amount that would exceed $9,999.99 | System handles according to business rules (accept or reject) | | | |
| TC037 | Balance format validation | Various transaction amounts | 1. Perform transactions with different decimal places | All balances display with exactly 2 decimal places | | | |
| TC038 | Menu loop continuation | Perform any transaction | 1. Complete any transaction | System returns to main menu and allows additional transactions | | | |
| TC039 | Program termination validation | Application is running | 1. Select option 4 (Exit) | System displays goodbye message and terminates cleanly | | | |

### Edge Cases and Error Handling Tests

| Test Case ID | Test Case Description | Pre-conditions | Test Steps | Expected Result | Actual Result | Status | Comments |
|--------------|----------------------|----------------|------------|-----------------|---------------|---------|----------|
| TC040 | Maximum balance boundary test | Account balance is $9,999.98 | 1. Credit $0.01 | System processes to reach maximum balance $9,999.99 | | | |
| TC041 | Minimum balance boundary test | Account balance is $0.01 | 1. Debit $0.01 | System processes to reach minimum balance $0.00 | | | |
| TC042 | Precision handling test | Account balance is $1,000.00 | 1. Credit $0.001 | System handles fractional cents according to business rules | | | |
| TC043 | Large number input test | Account balance is $1,000.00 | 1. Enter very large number (e.g., 999999999) | System handles large input appropriately | | | |
| TC044 | Special character input test | At any input prompt | 1. Enter special characters (!@#$%) | System handles special characters appropriately | | | |
| TC045 | Empty input handling | At amount input prompt | 1. Press Enter without entering amount | System handles empty input with appropriate message | | | |

## Test Execution Instructions

1. **Setup**: Ensure the COBOL application is compiled and ready to run
2. **Execution**: Run each test case in sequence, documenting actual results
3. **Validation**: Compare actual results with expected results
4. **Documentation**: Update the Status column (Pass/Fail) and add comments as needed
5. **Business Review**: Present results to business stakeholders for validation

## Success Criteria

- All menu navigation functions work correctly
- Balance calculations are accurate to 2 decimal places
- Overdraft protection prevents negative balances
- Credit transactions increase balance correctly
- Debit transactions decrease balance correctly (when sufficient funds exist)
- System handles invalid inputs gracefully
- Data persistence works correctly across multiple transactions
- Program exits cleanly when requested

## Notes for Node.js Implementation

This test plan will serve as the foundation for creating:
- **Unit Tests**: Individual function testing for balance calculations, input validation, etc.
- **Integration Tests**: End-to-end transaction flow testing
- **API Tests**: RESTful endpoint testing for the modernized application
- **Business Logic Tests**: Validation of all business rules in the new implementation

Each test case should be automated in the Node.js implementation using appropriate testing frameworks (Jest, Mocha, etc.).

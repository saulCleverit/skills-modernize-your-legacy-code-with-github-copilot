# Student Account Management System - Node.js Implementation

## Overview

This is a Node.js implementation of the legacy COBOL Student Account Management System. The application has been carefully converted to preserve all original business logic, data integrity, and menu options while modernizing the codebase for better maintainability and extensibility.

## Features

- **Account Balance Management**: View current account balance
- **Credit Transactions**: Add funds to student accounts
- **Debit Transactions**: Withdraw funds with overdraft protection
- **Menu-driven Interface**: User-friendly command-line interface
- **Data Persistence**: In-memory balance storage during session
- **Input Validation**: Robust error handling and input validation
- **Graceful Shutdown**: Clean exit handling

## Architecture

The Node.js application maintains the same modular structure as the original COBOL system:

### `AccountingSystem` Class
- **Main Logic**: Entry point and menu handling (equivalent to `main.cob`)
- **Operations Module**: Transaction processing logic (equivalent to `operations.cob`)
- **Data Module**: Balance storage and retrieval (equivalent to `data.cob`)

### Key Components
- **Menu Interface**: Interactive command-line menu
- **Transaction Processing**: Credit and debit operations
- **Balance Management**: Read/write operations with validation
- **Error Handling**: Comprehensive input validation and error messages

## Business Rules Preserved

✅ **Initial Balance**: $1,000.00 default balance  
✅ **Credit Transactions**: No limit on credit amounts  
✅ **Debit Transactions**: Overdraft protection prevents negative balances  
✅ **Balance Format**: 2 decimal places precision  
✅ **Maximum Balance**: $9,999.99 limit  
✅ **Menu Options**: Identical to original COBOL application  
✅ **Error Messages**: Consistent with original behavior  

## Installation

```bash
# Navigate to the accounting directory
cd src/accounting

# Install dependencies
npm install
```

## Running the Application

### Method 1: Command Line
```bash
# Start the application
npm start

# Or run directly with Node.js
node index.js
```

### Method 2: VS Code Debugger
1. Open VS Code in the project root
2. Go to Run and Debug (Ctrl+Shift+D)
3. Select "Launch Node.js Accounting App"
4. Click the green play button

## Usage

1. **Start Application**: The system displays the main menu
2. **Select Option**: Choose from 1-4 options
3. **Follow Prompts**: Enter amounts when requested
4. **View Results**: System displays transaction results
5. **Exit**: Select option 4 to exit gracefully

### Menu Options
- **1. View Balance**: Display current account balance
- **2. Credit Account**: Add funds to the account
- **3. Debit Account**: Withdraw funds (with overdraft protection)
- **4. Exit**: Close the application

## Testing

Run the test suite:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate coverage report:
```bash
npm run test:coverage
```

## Development

### Debug Mode
```bash
npm run dev
```

### VS Code Debugging
Use the provided launch configurations:
- **Launch Node.js Accounting App**: Standard execution
- **Debug Node.js Accounting App**: Debug with breakpoints
- **Run Tests**: Execute test suite

## Data Flow

The application follows the same data flow as the original COBOL system:

1. **User Input** → Main Logic (menu selection)
2. **Main Logic** → Operations Module (transaction type)
3. **Operations Module** → Data Module (read/write balance)
4. **Data Module** → Operations Module (balance data)
5. **Operations Module** → User (transaction result)

## Error Handling

- **Invalid Menu Selection**: Prompts for valid choice (1-4)
- **Invalid Amount**: Rejects non-numeric or negative values
- **Insufficient Funds**: Prevents overdraft with clear message
- **Maximum Balance**: Prevents exceeding $9,999.99 limit
- **Graceful Shutdown**: Handles Ctrl+C interruption

## Future Enhancements

- Database integration for persistent storage
- RESTful API endpoints
- Web-based user interface
- Multi-user support
- Transaction history logging
- Audit trail functionality

## Compatibility

- **Node.js**: 14.0.0 or higher
- **Operating System**: Cross-platform (Windows, macOS, Linux)
- **Dependencies**: Minimal - uses Node.js built-in modules

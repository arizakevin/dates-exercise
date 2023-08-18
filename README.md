# Appointment Scheduler

This project provides utility functions to manage and calculate available appointment slots in a scheduling system.

## Getting Started

These instructions will help you set up the project on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your machine. If not, you can download and install them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/arizakevin/dates-exercices
   ```

2. Navigate to the project directory:

   ```bash
   cd dates-exercices
   ```

3. Install the required modules:
   ```bash
   npm install
   ```

### Running the Code

To run the main code, use the following command:

```bash
npm start
```

### Running the Tests

To run the unit tests, use the following command:

```bash
npm run test
```

## Functions

- `timeToMinutes(time: string)`: Converts a time string to minutes since the start of the day.
- `availableSlotsForDay(appointments: Appointment[])`: Calculates the available 30-minute slots for a given day based on the provided appointments.
- `totalAvailableSlots(weekAppointments: Appointment[][])`: Calculates the total available 30-minute slots for a week based on the provided appointments.


## Code Enhancements and Tooling

### Prettier Code Formatting

The codebase integrates **Prettier**, a popular code formatter, ensuring consistent code style across the project. This helps maintain readability and reduces the chances of style-related issues.


### Husky Pre-commit Hooks

With **Husky**, I've set up pre-commit hooks to ensure that every commit meets our quality standards. Before any commit is made, Husky checks for code formatting and runs tests to ensure everything is in order.


### NPM Scripts

The project includes several npm scripts to streamline common tasks:

- `test`: Runs unit tests using Jest.
- `start`: Compiles the TypeScript code and then runs the main application.
- `format`: Formats the entire codebase using Prettier.
- `prepare`: Sets up Husky hooks.
- `check-types`: Checks TypeScript types without emitting output.
- `check-format`: Checks if the codebase is formatted correctly using Prettier.

To run any of these scripts, use the command `npm run <script-name>`. For example, to run tests, use `npm run test`.

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

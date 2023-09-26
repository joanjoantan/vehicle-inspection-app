# Vehicle Inspection App

The Vehicle Inspection App is a client-side React application that allows users to manage vehicles and inspections. Users can link vehicles with inspections, filter vehicles and inspections based on various criteria, and perform actions such as attaching and removing inspections.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Running Tests](#running-tests)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Assumptions Made](#assumptions-made)
- [Further Improvements](#further-improvements)

## Features

- View a list of vehicles with their attached inspections.
- View a list of available inspections that can be attached to vehicles.
- Attach inspections to vehicles, subject to certain constraints.
- Remove inspections from vehicles.
- Filter vehicles by registration, type, and more.
- Filter inspections by name and allowed type.

## Getting Started

Follow these instructions to set up and run the Vehicle Inspection App on your local machine.

### Prerequisites

- Node.js and npm (Node Package Manager) must be installed on your machine. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. Clone this repository to your local machine:

   ```bash
   git clone <https://github.com/joanjoantan/vehicle-inspection-app.git>
   ```

2. Navigate to the project directory:

   ```bash
   cd vehicle-inspection-app

   ```

3. Install the project dependencies:

```bash
yarn install

```

### Usage

Start the development server:

```bash
yarn start
```

Open your web browser and visit http://localhost:3000 to use the application.

Use the filter form to filter vehicles and inspections based on your criteria.

### Running Tests

To run tests for the app, use the following command:

```bash
yarn test
```

### Technologies Used

The Vehicle Inspection App is built using the following technologies:

React: A JavaScript library for building user interfaces.
TypeScript: A statically typed superset of JavaScript.
HTML/CSS: For structuring and styling the application.
Node.js: For running JavaScript on the server (used for development and testing).
Jest: A JavaScript testing framework.
Git: For version control.

### Folder Structure

The project directory is structured as follows:

- public: Contains static assets and the HTML file.
- src: Contains the source code for the React application.
- components: Contains React components.
- data: Contains example data for vehicles and inspections.
- App.tsx: The main application component.

### Assumptions Made

In developing this app, the following assumptions were made:

Vehicles and inspections are managed on the client side, and there are no server-side API endpoints.
The user interface is in English, and internationalization is not required.

### Further Improvements

Given more time, here are some potential improvements that could be made to the app:

- Implement user authentication and authorization for secure access to the app.
- Add validation and error handling for user inputs and actions.
- Improve the user interface and styling for a better user experience.
- Persist data using a database or local storage for data retention.
- Enhance test coverage with more comprehensive unit and integration tests.
- Implement pagination for better handling of large data sets.

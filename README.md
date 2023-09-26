# Vehicle Inspection App

The Vehicle Inspection App is a client-side React application that allows users to manage vehicles and inspections. Users can link vehicles with inspections, filter vehicles and inspections based on various criteria, and perform actions such as attaching and removing inspections.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)

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
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ``bash
   cd vehicle-inspection-app

   ```

   ```

3. Install the project dependencies:

``bash
yarn install

````


### Usage

Start the development server:

```bash
yarn start
````

Open your web browser and visit http://localhost:3000 to use the application.

Use the filter form to filter vehicles and inspections based on your criteria.

Attach and remove inspections from vehicles as needed.

### Folder Structure

The project directory is structured as follows:

public: Contains static assets and the HTML file.
src: Contains the source code for the React application.
components: Contains React components.
data: Contains example data for vehicles and inspections.
App.tsx: The main application component.
Other project files.

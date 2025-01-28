**Task Management App with MERN Stack**

![image001](https://github.com/user-attachments/assets/3b7e8dbd-70ba-4762-9973-66b8154fd15f)


# Task Management App with MERN Stack

This is a React-based task management application that allows users to perform CRUD (Create, Read, Update, Delete) operations on tasks. Users can also filter tasks based on their completion status: completed, uncompleted, or all tasks. it also contains backend services

---

## Table of Contents
- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
- [Contributing](#contributing)

---

## Features
- Add new tasks with descriptions.
- Edit existing tasks.
- Delete tasks.
- Mark tasks as completed or uncompleted.
- Filter tasks by:
  - All tasks
  - Completed tasks
  - Uncompleted tasks.

---

## Demo
You can see a live demo of the application here - https://taskmanager.valorprojects.com.ng/

---

## Installation

Follow the steps below to set up and run the application locally:

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/): LTS version recommended.
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/): A package manager to install dependencies.

### Steps
1. **Clone the Repository**
   ```bash
   git clone https://github.com/RayIwobi/Task-Management-App.git
   cd task-management-app
   ```

2. **Install Dependencies**
   Run the following command in the project directory to install all required dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the Development Server**
   ```bash
   npm start
   # or
   yarn start
   ```
   This will open the application in your default browser at `http://localhost:3000/`.

---

## Usage

### Adding a Task
1. Locate the input field and "Add Task" button.
2. Enter the task description into the input field.
3. Click the "Add Task" button to create the task.

### Editing a Task
1. Locate the task you want to edit.
2. Click the "Edit" button next to the task.
3. Modify the task description in the provided input field.
4. Save the changes by clicking the "Save" button.

### Deleting a Task
1. Locate the task you want to delete.
2. Click the "Delete" button next to the task.

### Marking a Task as Completed/Uncompleted
1. Click the checkbox next to the task to toggle its completion status.

### Filtering Tasks
1. Use the filter buttons provided:
   - "All" to view all tasks.
   - "Completed" to view only completed tasks.
   - "Uncompleted" to view only uncompleted tasks.

---

## Folder Structure

The project folder is organized as follows:

```
.
├── public
│   ├── index.html
│   └── ...
├── src
│   ├── components
│   │   ├── TaskItem.js
│   │   ├── TaskList.js
│   │   ├── TaskForm.js
│   │   └── FilterButtons.js
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── ...
├── package.json
└── README.md
```

### Key Files and Directories
- **`components/`**: Contains reusable UI components.
- **`App.js`**: The main application component.
- **`index.js`**: Entry point for the React application.

---

## Available Scripts

### `npm start` / `yarn start`
Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test` / `yarn test`
Launches the test runner in the interactive watch mode.

### `npm run build` / `yarn build`
Builds the app for production to the `build` folder.

### `npm run eject` / `yarn eject`
If you want to customize the app configuration, you can "eject" it. This action is irreversible.

---

## Contributing

Contributions are welcome! Please follow the steps below:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Commit your changes.
4. Push to your fork and submit a pull request.




Task Manager Frontend
Overview
This is a simple Task Manager application built for the Frontend Developer Internship Entrance Challenge. The app allows users to view a list of tasks, add new tasks, mark tasks as completed, and delete tasks. It also includes filtering for all, pending, and completed tasks, with validation to ensure task titles are not empty.
Features

View a list of tasks
Add a new task
Mark a task as completed (with different styling for completed tasks)
Delete a task
Filter tasks by All, Pending, or Completed
Validation to prevent empty task titles
Responsive design with Tailwind CSS
Built using React for dynamic UI updates

Technologies Used

React: For building the user interface
Tailwind CSS: For styling the application
Vite: For fast development and build tooling
Node.js: For running the development server and managing dependencies

Setup Instructions

Clone the Repository:git clone <your-repository-url>
cd task-manager


Install Dependencies:npm install


Run the Application:npm run dev

Open http://localhost:5173 in your browser to view the app.
Build for Production (optional):npm run build
npm run preview



Usage

Add a Task: Enter a task title in the input field and click "Add". If the input is empty, an error message will appear.
Mark as Completed: Click on a task title to toggle its completed status. Completed tasks are styled with a strikethrough and a green background.
Delete a Task: Click the "Delete" button next to a task to remove it.
Filter Tasks: Use the filter buttons (All, Pending, Completed) to view specific task categories.

Project Structure

src/App.jsx: Main React component with task management logic and UI.
src/main.jsx: Entry point for the React application.
src/index.css: Tailwind CSS configuration.
index.html: HTML template for the app.
package.json: Project dependencies and scripts.
tailwind.config.js: Tailwind CSS configuration.
postcss.config.js: PostCSS configuration for Tailwind.
README.md: This file with instructions and project details.

Notes

The task data is stored in a hardcoded array within the React state, as no backend is required.
The application is fully responsive and works on both desktop and mobile devices.
The UI is clean and intuitive, with a modern design using Tailwind CSS.




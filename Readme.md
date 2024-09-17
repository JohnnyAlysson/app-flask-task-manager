# Flask Todo App

A simple Todo application built with Flask and SQLAlchemy, featuring a responsive design with dark mode support.

## Features

- Add new tasks
- View all tasks
- Delete tasks
- Update existing tasks
- Dark mode toggle

## Project Structure

- `app.py`: Main application file
- `templates/`: HTML templates
  - `base.html`: Base template
  - `index.html`: Home page template
  - `update.html`: Update task template
- `static/`: Static files
  - `style.css`: CSS styles for the application
- `test.db`: SQLite database file (created automatically)

## Setup

1. Install dependencies:
   ```
   pip install flask flask_sqlalchemy
   ```

2. Run the application:
   ```
   python app.py
   ```

3. Access the app at `http://localhost:5000`

## Database

The app uses SQLite with SQLAlchemy ORM. The `Todo` model includes:
- `id`: Unique identifier
- `content`: Task description (max 200 characters, cannot be blank)
- `date_created`: Timestamp of task creation

## Routes

- `/`: Home page (GET, POST)
  - GET: Display all tasks
  - POST: Add a new task
- `/delete/<id>`: Delete a task
- `/update/<id>`: Update a task (GET, POST)
  - GET: Display update form
  - POST: Update task content

## Templates

- `base.html`: Contains the base structure for other templates
- `index.html`: Displays the task list and add task form
- `update.html`: Contains the form to update a task

## Styling

The `style.css` file provides:
- Responsive design for various screen sizes
- Dark mode support with toggle functionality
- Styling for tables, forms, and buttons
- Font Awesome icons for delete and update actions

## Dark Mode

The application includes a dark mode feature that can be toggled using a button in the top-right corner of the page. The dark mode changes the color scheme of the entire application for better visibility in low-light environments.

## Contributing

Feel free to fork this project and submit pull requests for any improvements or bug fixes.

## License

[MIT License](https://opensource.org/licenses/MIT)
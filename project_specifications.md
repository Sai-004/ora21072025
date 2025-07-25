# Project Specification: Incident Reporting Web Application

## Overview
This project is a basic web-based Incident Reporting System that allows users to:
- Report incidents (e.g., Fire, Traffic, EMS, etc.) through a form.
- View submitted reports in a tabular format (Customers page).
- Visualize incident statistics on a dashboard with a bar graph.
- Learn about the system on the About page.

The application uses:
- **HTML5** for structure
- **Tailwind CSS** for styling
- **JavaScript / jQuery** for interactivity
- **Flask** as the backend web framework
- **SQLite3** as the database

---

## Project Structure

```
incident_app_tailwind/
│
├── static/
│   ├── css/
│   ├── js/
│   └── chart/
│
├── templates/  (Not used; HTML files are served as static)
│
├── pages/
│   ├── dashboard.html
│   ├── customers.html
│   ├── incidents.html
│   └── about.html
│
├── incidents.db
├── app.py
└── README.md
```

## Features

### 1. Dashboard
- Displays a bar chart summarizing number of incidents by category.
- Data is fetched from the backend via `/api/incidents/summary`.

### 2. Incidents
- A form to report incidents with:
  - Incident Type (Fire, Traffic, EMS, etc.)
  - Location
  - Reporter Name
- Data submitted is sent to `/api/incidents` using AJAX.

### 3. Customers
- Displays a table of people who reported incidents.
- Data is fetched from `/api/customers` via AJAX.

### 4. About
- Simple page containing information about the app.

---

## Step-by-Step Development Instructions

### Step 1: Project Setup
1. Create a folder `incident_app_tailwind`.
2. Initialize a Python virtual environment (optional but recommended).
3. Install Flask:
   ```bash
   pip install flask
   ```

### Step 2: Directory Structure
Create the following folders:
- `static/css` for Tailwind CSS
- `static/js` for JavaScript files
- `pages/` for static HTML files

### Step 3: Design HTML Pages
Create HTML files for each of the four pages with:
- A common layout: header, navbar, main content, and footer
- Tailwind CSS classes for styling

### Step 4: Backend with Flask
- Initialize a Flask app in `app.py`
- Serve static HTML files using `send_from_directory()`
- Create API endpoints:
  - `POST /api/incidents` to save incident reports
  - `GET /api/customers` to list all reports
  - `GET /api/incidents/summary` for dashboard data

### Step 5: Database Setup
- Use `sqlite3` to create `incidents.db` with a table `incidents` having fields:
  - id, reporter_name, incident_type, location, timestamp

### Step 6: JavaScript Integration
- Use `fetch` or jQuery AJAX to submit and retrieve data from Flask APIs.
- Integrate Chart.js (or similar) to plot bar graph on dashboard.

### Step 7: Running the App
```bash
python app.py
```
Access the app at: `http://localhost:5000/pages/dashboard.html`

---

## Additional Notes
- No Flask templates (Jinja) are used. Only static HTML.
- Ensure `app.py` handles CORS if needed for API access from static pages.
- Tailwind CDN is used for simplicity.

---

## Enhancements (Optional)
- Add user authentication.
- Add maps integration for location details.
- Form validation using JavaScript.
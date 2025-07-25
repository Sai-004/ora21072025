from flask import Flask, request, jsonify, send_from_directory
import sqlite3
import os

app = Flask(__name__)

# Initialize database
def init_db():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute('''CREATE TABLE IF NOT EXISTS incidents (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        type TEXT,
        location TEXT,
        details TEXT
    )''')
    conn.commit()
    conn.close()

@app.route('/')
def home():
    return send_from_directory('pages', 'dashboard.html')

@app.route('/<page>')
def serve_page(page):
    return send_from_directory('pages', f'{page}.html')

@app.route('/static/<path:filename>')
def static_files(filename):
    return send_from_directory('static', filename)

@app.route('/assets/<path:filename>')
def assets_files(filename):
    return send_from_directory('assets', filename)

# --- API Endpoints ---

@app.route('/api/incidents', methods=['POST'])
def add_incident():
    data = request.get_json()
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("INSERT INTO incidents (name, type, location, details) VALUES (?, ?, ?, ?)",
              (data['name'], data['type'], data['location'], data['details']))
    conn.commit()
    conn.close()
    return jsonify({'status': 'success'})

@app.route('/api/incidents', methods=['GET'])
def get_incidents():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("SELECT name, type, location, details FROM incidents")
    rows = c.fetchall()
    conn.close()
    return jsonify(rows)

@app.route('/api/incident-counts', methods=['GET'])
def incident_counts():
    conn = sqlite3.connect('database.db')
    c = conn.cursor()
    c.execute("SELECT type, COUNT(*) FROM incidents GROUP BY type")
    rows = c.fetchall()
    conn.close()
    return jsonify(rows)

if __name__ == '__main__':
    init_db()
    app.run(debug=True)

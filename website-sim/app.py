from flask import Flask, send_from_directory, render_template
app = Flask(__name__, static_folder='static', template_folder='templates')

@app.route('/')
def dashboard():
    return send_from_directory('pages', 'dashboard.html')

@app.route('/customers')
def customers():
    return send_from_directory('pages', 'customers.html')

@app.route('/incidents')
def incidents():
    return send_from_directory('pages', 'incidents.html')

@app.route('/about')
def about():
    return send_from_directory('pages', 'about.html')

@app.route('/static/<path:path>')
def static_files(path):
    return send_from_directory('static', path)


if __name__ == '__main__':
    app.run(debug=True)
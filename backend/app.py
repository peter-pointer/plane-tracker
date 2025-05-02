from flask import Flask, jsonify
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# Configuración de la base de datos (usando SQLite para empezar)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///airtracker.db'
db = SQLAlchemy(app)

@app.route('/')
def index():
    return jsonify({"message": "servidor Flask funcionando para Plane_tracker! 🚀"})

if __name__ == '__main__':
    app.run(debug=True)


@app.route('/planes')
def planes():
    return jsonify({"message": "vamos intentar ver aviones"})

if __name__== '__main__':
    app.run(debug=True)
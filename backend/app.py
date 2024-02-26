from flask import Flask, request, jsonify
from flask_cors import CORS
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

app = Flask(__name__)
CORS(app)

# MongoDB connection
uri = "mongodb+srv://javsalgado:5GMYUoGKxc0PumXO@cluster101.bofruwz.mongodb.net/?retryWrites=true&w=majority"

client = MongoClient(uri, server_api=ServerApi('1'))

db = client.form_data
collection = db.Form_Data  

@app.route('/submit-form', methods=['POST'])

def submit_form():
    data = request.get_json()

    
    result = collection.insert_one(data)

    if result.inserted_id:
        return jsonify({'message': 'Form data submitted successfully'}), 200
    else:
        return jsonify({'error': 'Failed to submit form data'}), 500

if __name__ == '__main__':
    app.run(debug=True)

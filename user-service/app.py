from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data
users = [{"id": 1, "name": "Alice"}, {"id": 2, "name": "Bob"}]

# Get Users
@app.route('/users', methods=['GET'])
def get_users():
    return jsonify(users)

# Add User
@app.route('/users', methods=['POST'])
def add_user():
    new_user = request.get_json()
    users.append(new_user)
    return jsonify(new_user), 201

# Remove User
@app.route('/users/<int:user_id>', methods=['DELETE'])
def remove_user(user_id):
    global users
    users = [user for user in users if user['id'] != user_id]
    return jsonify({'message': 'User deleted successfully'}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data
orders = [{"order_id": 1, "product_id": 2, "user_id": 1}]

# Get Orders
@app.route('/orders', methods=['GET'])
def get_orders():
    return jsonify(orders)

# Add Order
@app.route('/orders', methods=['POST'])
def add_order():
    new_order = request.get_json()
    orders.append(new_order)
    return jsonify(new_order), 201

# Remove Order
@app.route('/orders/<int:order_id>', methods=['DELETE'])
def remove_order(order_id):
    global orders
    orders = [order for order in orders if order['order_id'] != order_id]
    return jsonify({'message': 'Order deleted successfully'}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

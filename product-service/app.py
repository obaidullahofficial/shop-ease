from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Sample data
products = [{"id": 1, "name": "Laptop"}, {"id": 2, "name": "Smartphone"}]

# Get Products
@app.route('/products', methods=['GET'])
def get_products():
    return jsonify(products)

# Add Product
@app.route('/products', methods=['POST'])
def add_product():
    new_product = request.get_json()
    products.append(new_product)
    return jsonify(new_product), 201

# Remove Product
@app.route('/products/<int:product_id>', methods=['DELETE'])
def remove_product(product_id):
    global products
    products = [product for product in products if product['id'] != product_id]
    return jsonify({'message': 'Product deleted successfully'}), 200

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

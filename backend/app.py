from flask import Flask, request, jsonify

app = Flask(__name__)
orders = []

@app.route('/new-order', methods=['POST'])
def new_order():
    data = request.json
    orders.append(data)
    print(f"New Order Received: {data}")
    return jsonify({"status": "Order received"}), 200

@app.route('/orders', methods=['GET'])
def view_orders():
    return jsonify(orders)


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)

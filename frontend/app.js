async function fetchData(endpoint, elementId) {
  let url = "";
  if (endpoint === "/users") url = "http://localhost:5001/users";
  else if (endpoint === "/products") url = "http://localhost:5002/products";
  else if (endpoint === "/orders") url = "http://localhost:5003/orders";

  try {
    const response = await fetch(url);
    const data = await response.json();
    document.getElementById(elementId).innerText = JSON.stringify(
      data,
      null,
      2
    );
  } catch (error) {
    document.getElementById(elementId).innerText = "Error fetching data";
  }
}

async function addUser() {
  const id = document.getElementById("userId").value;
  const name = document.getElementById("userName").value;
  const user = { id: parseInt(id), name: name };

  try {
    const response = await fetch("http://localhost:5001/users", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    });
    const data = await response.json();
    console.log("User Added:", data);
    fetchData("/users", "userResponse");
  } catch (error) {
    console.error("Error adding user:", error);
  }
}

async function removeUser() {
  const id = document.getElementById("userId").value;

  try {
    const response = await fetch(`http://localhost:5001/users/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("User Removed:", data);
    fetchData("/users", "userResponse");
  } catch (error) {
    console.error("Error removing user:", error);
  }
}

async function addProduct() {
  const id = document.getElementById("productId").value;
  const name = document.getElementById("productName").value;
  const product = { id: parseInt(id), name: name };

  try {
    const response = await fetch("http://localhost:5002/products", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
    const data = await response.json();
    console.log("Product Added:", data);
    fetchData("/products", "productResponse");
  } catch (error) {
    console.error("Error adding product:", error);
  }
}

async function removeProduct() {
  const id = document.getElementById("productId").value;

  try {
    const response = await fetch(`http://localhost:5002/products/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("Product Removed:", data);
    fetchData("/products", "productResponse");
  } catch (error) {
    console.error("Error removing product:", error);
  }
}

async function addOrder() {
  const orderId = document.getElementById("orderId").value;
  const productId = document.getElementById("orderProductId").value;
  const userId = document.getElementById("orderUserId").value;
  const order = {
    order_id: parseInt(orderId),
    product_id: parseInt(productId),
    user_id: parseInt(userId),
  };

  try {
    const response = await fetch("http://localhost:5003/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(order),
    });
    const data = await response.json();
    console.log("Order Added:", data);
    fetchData("/orders", "orderResponse");
  } catch (error) {
    console.error("Error adding order:", error);
  }
}

async function removeOrder() {
  const id = document.getElementById("orderId").value;

  try {
    const response = await fetch(`http://localhost:5003/orders/${id}`, {
      method: "DELETE",
    });
    const data = await response.json();
    console.log("Order Removed:", data);
    fetchData("/orders", "orderResponse");
  } catch (error) {
    console.error("Error removing order:", error);
  }
}

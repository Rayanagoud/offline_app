document.getElementById("orderForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    const orderDetails = document.getElementById("orderDetails").value;

    const order = { name, orderDetails, timestamp: new Date().toISOString() };

    // Save locally
    let orders = JSON.parse(localStorage.getItem("orders")) || [];
    orders.push(order);
    localStorage.setItem("orders", JSON.stringify(orders));

    // Send to server
    try {
        const response = await fetch("http://192.168.x.x:5000/new-order", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
        });
        if (response.ok) {
            alert("Order sent successfully!");
        } else {
            alert("Order saved locally. Will sync later.");
        }
    } catch {
        alert("Order saved locally. Will sync later.");
    }

    e.target.reset();
});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("/service-worker.js").then(() => {
        console.log("Service Worker Registered");
    });
}

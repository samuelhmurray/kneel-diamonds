export const Orders = async () => {
  const fetchResponse = await fetch(
    "http://localhost:8088/orders?_expand=metal&_expand=style&_expand=size"
  );
  const orders = await fetchResponse.json();

  let html = "";
  const divStringArray = orders.map((order) => {
    const orderPrice = order.metal.price + order.style.price + order.size.price;

    html += `<div>Order #${order.id} cost $${orderPrice} </div>`;
  });

  html += divStringArray.join("");
  return html;
};

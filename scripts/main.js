import { MetalOptions } from "./MetalOptions.js";
import { Orders } from "./Orders.js";
import { SaveSubmission } from "./SaveSubmission.js";
import { SizeOptions } from "./SizeOptions.js";
import { StyleOptions } from "./StyleOptions.js";

const container = document.querySelector("#container");

const render = async () => {
  const metalOptionsHTML = await MetalOptions();
  const sizeOptionsHTML = await SizeOptions();
  const styleOptionsHTML = await StyleOptions();
  const saveSubmissionHTML = SaveSubmission();
  const orderHTML = await Orders();

  const allHTML = `
    <h1>Kneel Diamonds</h1>
    
    <article class="choices">
    <section class="choices__metals options">
    <h2>Metals</h2>
    ${metalOptionsHTML}
    </section>
    
    <section class="choices__sizes options">
    <h2>Sizes</h2>
    ${sizeOptionsHTML}
    </section>
    
    <section class="choices__styles options">
    <h2>Styles</h2>
    ${styleOptionsHTML}
    </section>
    </article>
    
    <article class="order">
    ${saveSubmissionHTML}
    </article>
    
    <article class="customOrders">
    <h2>Custom Jewelry Orders</h2>
    ${orderHTML}
    
    </article>
    `;
  container.innerHTML = allHTML;
};

document.addEventListener("newOrderCreated", render);

render();

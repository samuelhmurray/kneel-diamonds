import { setMetalChoice } from "./TransientState.js";

export const MetalOptions = async () => {
  document.addEventListener("change", handleMetalChoice);

  const response = await fetch("http://localhost:8088/metals");
  const metals = await response.json();

  let html = "";
  const divStringArray = metals.map((metal) => {
    return ` <div>
                        <input type='radio' 
                        name='metal'
                        value='${metal.id}'/> 
                        ${metal.metal}
                     </div>`;
  });

  html += divStringArray.join("");

  return html;
};

const handleMetalChoice = (event) => {
  if (event.target.name === "metal") {
    setMetalChoice(parseInt(event.target.value));
  }
};

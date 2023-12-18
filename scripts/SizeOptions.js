import { setSizeChoice } from "./TransientState.js";

export const SizeOptions = async () => {
  document.addEventListener("change", handleSizeChoice);

  const response = await fetch("http://localhost:8088/sizes");
  const sizes = await response.json();

  let html = "";
  const divStringArray = sizes.map((size) => {
    html += `<div>
                <input type='radio'
                name='size'
                value=${size.id}/>
                ${size.carets}
            </div>`;
  });

  html += divStringArray.join("");
  return html;
};

const handleSizeChoice = (event) => {
  if (event.target.name === "size") {
    setSizeChoice(parseInt(event.target.value));
  }
};

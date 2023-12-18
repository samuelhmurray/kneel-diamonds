import { setStyleChoice } from "./TransientState.js";

export const StyleOptions = async () => {
  document.addEventListener("change", handleStyleChoice);

  const response = await fetch("http://localhost:8088/styles");
  const styles = await response.json();

  let html = "";
  const divStringArray = styles.map((style) => {
    return `<div>
                <input type='radio'
                name='style'
                value=${style.id}/>
                ${style.style}
            </div>`;
  });

  html += divStringArray.join("");

  return html;
};

const handleStyleChoice = (event) => {
  if (event.target.name === "style") {
    setStyleChoice(parseInt(event.target.value));
  }
};

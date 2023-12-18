const transientState = {
  metalId: 0,
  sizeId: 0,
  styleId: 0,
};

export const setMetalChoice = (chossenMetal) => {
  transientState.metalId = chossenMetal;
  console.log(transientState);
};

export const setSizeChoice = (chossenSize) => {
  transientState.sizeId = chossenSize;
  console.log(transientState);
};

export const setStyleChoice = (chossenStyle) => {
  transientState.styleId = chossenStyle;
  console.log(transientState);
};

export const placeOrder = async () => {
  const postOptions = {
    method: "POST",
    headers: {
      "content-Type": "application/json",
    },
    body: JSON.stringify(transientState),
  };
  // Send the transient state to your API
  const response = await fetch("http://localhost:8088/orders", postOptions);

  const customEvent = new CustomEvent("newOrderCreated");
  document.dispatchEvent(customEvent);
};

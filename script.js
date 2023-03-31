const parent = document.querySelector("#parent");
let selectedDiv = null;

parent.addEventListener("dragstart", (e) => {
  selectedDiv = e.target;
});

parent.addEventListener("dragover", (e) => {
  e.preventDefault();
});

parent.addEventListener("drop", (e) => {
  e.preventDefault();
  const targetDiv = e.target;
  const parent = targetDiv.parentNode;
  if (targetDiv !== selectedDiv) {
    parent.insertBefore(selectedDiv, targetDiv);
  }
});

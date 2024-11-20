let clicked = false;
const header = document.getElementById("editable-header");
const button = document.getElementById("edit-btn");

button.addEventListener("click", function(e) {
  clicked = !clicked;
  const headerText = clicked ? "Although, I prefer to go by Myco." : "Hello, my name is Miriam.";
  header.classList.remove("focus");
  void header.offsetWidth;
  header.textContent = headerText;
  header.classList.add("focus");
})

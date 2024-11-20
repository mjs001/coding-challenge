let clicked = false;

const changeHeader = () => {
  clicked = !clicked;
  const header = document.getElementById("editable-header");
  const headerText = clicked ? "Although, I prefer to go by Myco." : "Hello, my name is Miriam.";
  header.textContent = headerText;
}

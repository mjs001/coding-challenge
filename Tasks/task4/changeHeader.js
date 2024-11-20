let clicked = false;

const changeHeader = () => {
  const header = document.getElementById("editable-header");
  clicked = !clicked;
  let text = "";
  clicked ? text = " Although, I prefer to go by Myco." : text = "Hello, my name is Miriam.";
  header.innerHTML = text;
}

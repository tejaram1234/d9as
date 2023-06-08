function changeBackgroundColor() {
    var dropdown = document.getElementById("colorDropdown");
    var textbox = document.getElementById("textBox");
    var selectedColor = dropdown.value;
    textbox.style.backgroundColor = selectedColor;
}
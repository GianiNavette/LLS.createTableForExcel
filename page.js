function removeThis(e, n) {
  for (i = 1; i <= n; i++) {
    e = e.parentElement;
  }
  e.remove();
}

function addTags() {
  var select = document.getElementById("SelectableTags");
  var selectedTags = document.getElementById("selectedTags");
  var li = document.createElement("li");
  var span = document.createElement("span");
  span.textContent = select.value;
  var button = document.createElement("button");
  button.innerHTML = "X";
  button.setAttribute("onclick", "removeThis(this,2)");
  span.appendChild(button);
  li.appendChild(span);
  selectedTags.appendChild(li);
}
var oldOption = "unique";
function changeSize(option) {
document.querySelector("."+oldOption).classList.add("disabled");
oldOption = option;
var el = document.querySelector("."+option);
el.classList.remove("disabled");


}

const selecRow = null;

function showMessage(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

document.querySelector("#items").addEventListener("click", (e) => {
  target = e.target;
  if(target.classList.contains("delete")){
    target.parentElement.parentElement.remove();
    showMessage("Item Deleted of the ToDo List", "danger");
  }
});

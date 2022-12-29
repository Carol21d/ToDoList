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

document.querySelector("#addItem").value = " ";

document.querySelector("#form-ToDo").addEventListener("submit", (e) => {
  e.preventDefault();

  const addItem = document.querySelector("#addItem").value;

  if (addItem == " ") {
    showMessage("Empty Field, Please fill the Field", "danger");
  } else {
    if (selecRow == null) {
      const listItems = document.querySelector("#items");
      const rowItems = document.createElement("tr");

      rowItems.innerHTML = `
                 <td>${addItem}</td>
                
                 <td>
                 <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                 <a href="#" class="btn btn-info btn-sm edit">Edit</a>
                `;
                listItems.appendChild(rowItems);
                selecRow = null;
                showMessage("added item", "success")

    
    }
  }
});

document.querySelector("#items").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showMessage("Item Deleted of the ToDo List", "danger");
  }
});

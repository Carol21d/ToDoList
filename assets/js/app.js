let selecRow = null;

function showMessage(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;

  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);

  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}

function clear() {
  document.querySelector("#addItem").value = "";
}

document.querySelector("#form-ToDo").addEventListener("submit", (e) => {
  e.preventDefault();

  const addItem = document.querySelector("#addItem").value;

  if (addItem == "") {
    showMessage("Empty Field, Please fill the Field", "danger");
  } else {
    if (selecRow == null) {
      const listItems = document.querySelector("#table-Items");
      const rowItems = document.createElement("tr");

      rowItems.innerHTML = `
                 <td> #
                 <td>${addItem}</td>
                 <td>
                 <a href="#" class="btn btn-danger btn-sm delete">Delete</a>
                 <a href="#" class="btn btn-info btn-sm edit">Edit</a>
                
                `;
      listItems.appendChild(rowItems);
      selecRow = null;
      // console.log(selecRow);
      showMessage("Item added to the List", "success");
    } else {
      selecRow.children[0].textContent = addItem;
      selecRow = null;
      showMessage("Item Edited", "info");
    }

    clear();
  }
});

document.querySelector("#table-Items").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("edit")) {
    selecRow = target.parentElement.parentElement;
    document.querySelector("#addItem").value = selecRow.children[0].textContent;
  }
});

document.querySelector("#table-Items").addEventListener("click", (e) => {
  target = e.target;
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showMessage("Item Deleted of the List", "danger");
  }
});

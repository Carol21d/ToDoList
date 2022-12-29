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

document.querySelector("#form-ToDo").addEventListener("submit", (e) =>{
        e.preventDefault();

        const addItem = document.querySelector("#addItem").value;

        if (addItem == " "){
            showMessage("Empty Field, Please fill the Field", "danger");
        }
    });






document.querySelector("#items").addEventListener("click", (e) => {
  target = e.target;
  if(target.classList.contains("delete")){
    target.parentElement.parentElement.remove();
    showMessage("Item Deleted of the ToDo List", "danger");
  }
});

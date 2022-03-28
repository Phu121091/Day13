let addButton = document.getElementById("add-button");
let toDoEntryBox = document.getElementById("todo-entry-box");
let toDoList = document.getElementById("todo-list");

addButton.addEventListener("click", addToDoItem);

function addToDoItem() {
  let itemText = toDoEntryBox.value;
  newToDoItem(itemText);
}

function newToDoItem(itemText) {
  var toDoItem = document.createElement("li");
  toDoItem.innerHTML = `<span>${itemText}<span><button class="delete">Delete</button><button class ="edit">Edit</button>`;
  toDoList.appendChild(toDoItem);

  const deleteBtn = document.querySelectorAll(".delete");

  deleteBtn.forEach((button) => {
    button.addEventListener("click", () => {
      const parent = button.parentElement.parentElement.parentElement;
      parent.remove();
    });
  });
  // const editBtn = document.querySelectorAll(".edit");
  // editBtn.forEach((button) => {
  //   button.addEventListener("click", () => {
  //     var newedit = prompt("Please Edit");
  //     // const parent = button.parentElement.parentElement.parentElement;
  //     // parent.innerHTML = `<span>${newedit}<span><button class="delete">Delete</button><button class ="edit">Edit</button>`;
  //   });
  // });
};

//Save nè
function saveList() {
  var toDos = [];

  for (var i = 0; i < toDoList.children.length; i++) {
    var toDo = toDoList.children.item(i);

    var toDoInfo = {
      todoname: toDo.innerText.split("Delete")[0],
    };

    toDos.push(toDoInfo);
  }

  localStorage.setItem("toDos", JSON.stringify(toDos));
  alert("Lưu thành công");
}

//Load nè
function loadList() {
  if (localStorage.getItem("toDos") != null) {
    var toDos = JSON.parse(localStorage.getItem("toDos"));

    for (var i = 0; i < toDos.length; i++) {
      var toDo = toDos[i];
      newToDoItem(toDo.todoname);
    }
  }
}

loadList();

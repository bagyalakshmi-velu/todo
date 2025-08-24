
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const deleteTaskBtn = document.getElementById("deleteTaskBtn");
const taskList = document.getElementById("taskList");


addTaskBtn.addEventListener("click", () => {
  const taskText = taskInput.value.trim();

  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  
  const li = document.createElement("li");
  li.className = "list-group-item d-flex justify-content-between align-items-center";
  li.textContent = taskText;

  
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  
  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";
  editBtn.className = "btn btn-sm btn-warning ms-2";
  editBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    const newTask = prompt("Edit your task:", li.firstChild.textContent);
    if (newTask) {
      li.firstChild.textContent = newTask;
    }
  });

  
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.className = "btn btn-sm btn-danger ms-2";
  delBtn.addEventListener("click", (e) => {
    e.stopPropagation(); 
    li.remove();
  });

  
  const btnGroup = document.createElement("div");
  btnGroup.appendChild(editBtn);
  btnGroup.appendChild(delBtn);
  li.appendChild(btnGroup);

  
  taskList.appendChild(li);

  
  taskInput.value = "";
});


deleteTaskBtn.addEventListener("click", () => {
  taskList.innerHTML = "";
});

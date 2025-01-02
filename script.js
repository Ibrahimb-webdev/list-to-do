
function addTask() {
    const tasKInput = document.getElementById("task");
    const tasKList = document.getElementById("task-list");
    const newTask = document.createElement("li");
    const taskText = tasKInput.value;

    newTask.innerText = taskText;


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Supprimer";
    deleteButton.onclick = function () {
    };
    newTask.appendChild(deleteButton);
    newTask.onclick = function() {
        newTask.classList.toggle("completed");
    };
    
    tasKList.appendChild(newTask);
    tasKInput.value = "";
}
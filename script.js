function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskList = document.getElementById("taskList");
        var newTaskDiv = document.createElement("div");
        newTaskDiv.textContent = taskText;
        newTaskDiv.classList.add("task"); // Add a class for styling
        taskList.appendChild(newTaskDiv);
        taskInput.value = "";
    }
}
const agenda = new Map();
agenda.set("Hello!", "Have a Good Day!");

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const timeInput = document.getElementById("taskTime");

    const taskText = taskInput.value.trim();
    const taskTime = timeInput.value.trim();
    
    if (taskText !== "" && taskTime !== "") {
        
        if (agenda.has(taskTime)) {
            const taskTextNew = agenda.get(taskTime) + taskText;
            agenda.set(taskTime, taskTextNew);
        } else {
            agenda.set(taskTime, taskText);
        }
        
    }

    for (const value of agenda) {
        console.log(value[1]);

        var taskList = document.getElementById("taskList");

        while (taskList.firstChild) {
            taskList.removeChild(taskList.firstChild);
        }

        let newTaskDiv = document.createElement("div");
        newTaskDiv.className = "task";
        newTaskDiv.idName = "task#" + value;
        newTaskDiv.innerText = value[0] + " " + value[1];
        document.getElementById("taskList").appendChild(newTaskDiv);
    }     

    taskInput.value = "";
    timeInput.value = "";
}
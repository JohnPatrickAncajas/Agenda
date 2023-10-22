let agenda = [
    {time: "6:00 AM", task: "Good Morning! It's a brand new day, take care!"},
];

function addTask() {

    const taskList = document.querySelector("#taskList");
    taskList.innerHTML = "";

    const taskInput = document.getElementById("taskInput");
    const timeInput = document.getElementById("taskTime");

    const taskText = taskInput.value.trim();
    const taskTime = timeInput.value.trim();
    
    if (taskText !== "" && taskTime !== "") {

        const hours = taskTime[0] + taskTime[1];
        const minutes = taskTime[3] + taskTime[4];

        const hoursValue = parseInt(hours, 10);
        const minutesValue = parseInt(minutes, 10);

        if (minutesValue < 10) {
            minutesDisplayValue = "0" + minutesValue;
        } else {
            minutesDisplayValue = minutesValue;
        }

        const dayPeriod = hoursValue < 12 ? " AM" : " PM";
        const hoursDisplayValue = (hoursValue % 12) || 12;

        const newTask = {time: hoursDisplayValue + ":" + minutesDisplayValue + dayPeriod, task: taskText};
        agenda.push(newTask);

        addTaskElement();

    taskInput.value = "";
    timeInput.value = "";
    }
}

// During the creation of this part is the first time JavaScript hit me with [object Object][object Object]!

function addTaskElement() {
    for (let i = 0; i < agenda.length; i++) {

        const divElement = document.createElement("p");
        const timeElement = document.createElement("p");
        const xElement = document.createElement("p");
        const taskElement = document.createElement("p");

        divElement.className = "task";
        timeElement.className = "timeClass";
        timeElement.innerHTML = agenda[i].time;
        xElement.className = "xClass";
        xElement.innerHTML = "&times; ";
        taskElement.className = "taskClass";
        taskElement.innerHTML = "<hr>" + agenda[i].task;

        divElement.appendChild(timeElement);
        divElement.appendChild(xElement);
        divElement.appendChild(taskElement)
        taskList.appendChild(divElement);
    }
}

window.addEventListener('load', function() {
    const title = document.querySelector("#title");
    const titleText = document.querySelector("#titleText");

    title.textContent = "Agenda";
    titleText.textContent = "Take control of your time and easily structure your day in just a few clicks!";

    addTaskElement();
});
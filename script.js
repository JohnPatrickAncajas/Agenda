let agenda = [
    {time: "6:00 AM", task: "Good Morning! It's a brand new day, take care!"},
];

function addTask() {

    const taskList = document.querySelector("#taskList");
    const taskInput = document.getElementById("taskInput");
    const timeInput = document.getElementById("taskTime");

    const taskText = taskInput.value.trim();
    const taskTime = timeInput.value.trim();
    
    if (taskText !== "" && taskTime !== "") {

        taskList.innerHTML = "";

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

        updateTask();

    taskInput.value = "";
    timeInput.value = "";
    }
}

// During the creation of this part is the first time JavaScript hit me with [object Object][object Object]!

function updateTask() {
    for (let i = 0; i < agenda.length; i++) {

        const divElement = document.createElement("p");
        const timeElement = document.createElement("p");
        const xElement = document.createElement("p");
        const taskElement = document.createElement("p");

        divElement.className = "task";
        divElement.id = "task" + i;
        timeElement.className = "timeClass";
        timeElement.innerHTML = agenda[i].time;
        xElement.className = "xClass";
        xElement.id = "x" + i;
        xElement.innerHTML = "&times;";
        taskElement.className = "taskClass";
        taskElement.innerHTML = "<hr>" + agenda[i].task;

        const firstChild = taskList.firstElementChild;

        divElement.appendChild(timeElement);
        divElement.appendChild(xElement);
        divElement.appendChild(taskElement)

        taskList.insertBefore(divElement, firstChild);
    }
}

const xButton = document.querySelectorAll(".xClass");

xButton.addEventListener('click'), function() {

}

window.addEventListener('load', function() {
    const title = document.querySelector("#title");
    const titleText = document.querySelector("#titleText");

    title.textContent = "Agenda";
    titleText.textContent = "Take control of your time and easily structure your day in just a few clicks!";

    updateTask();
});
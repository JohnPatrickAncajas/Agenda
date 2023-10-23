let agenda = [
    { time: "6:00 AM", task: "Good morning! It's a brand new day, take care!" },
    { time: "7:00 AM", task: "Remember to eat your breakfast!"},
    { time: "12:00 PM", task: "Lunch time! Eat well!"},
    { time: "6:00 PM", task: "Time for dinner!"},
    { time: "10:00 PM", task: "Bedtime!"},
];

function addTask() {
    const taskInput = document.getElementById("taskInput");
    const timeInput = document.getElementById("taskTime");
    const taskText = taskInput.value.trim();
    const taskTime = timeInput.value.trim();

    if (taskText !== "" && taskTime !== "") {
        const hours = taskTime.substring(0, 2);
        const minutes = taskTime.substring(3, 5);
        const hoursValue = parseInt(hours, 10);
        const minutesValue = parseInt(minutes, 10);
        const minutesDisplayValue = (minutesValue < 10) ? "0" + minutesValue : minutesValue;
        const dayPeriodDisplay = hoursValue < 12 ? " AM" : " PM";
        const hoursDisplayValue = (hoursValue % 12) || 12;

        const newTask = { time: hoursDisplayValue + ":" + minutesDisplayValue + dayPeriodDisplay, task: taskText };
        agenda.push(newTask);

        taskInput.value = "";
        timeInput.value = "";

        updateTask();

    } else if (taskText == "" && taskTime == "") {
        taskInput.style.background = "#FFDDDD";
        timeInput.style.background = "#FFDDDD";

        setTimeout(function () {
            taskInput.style.background = "#FFCCCC";
            timeInput.style.background = "#FFCCCC";
        }, 200);

        setTimeout(function () {
            taskInput.style.background = "#FFBBBB";
            timeInput.style.background = "#FFBBBB";
        }, 400);

        setTimeout(function () {
            taskInput.style.background = "#f0f0f0";
            timeInput.style.background = "#f0f0f0";
        }, 600);
        
    } else if (taskText == "" && taskTime !== "") {
        taskInput.style.background = "#FFDDDD";

        setTimeout(function () {
            taskInput.style.background = "#FFCCCC";
        }, 200);

        setTimeout(function () {
            taskInput.style.background = "#FFBBBB";
        }, 400);

        setTimeout(function () {
            taskInput.style.background = "#f0f0f0";
        }, 600);

    } else if (taskText !== "" && taskTime == "") {
        timeInput.style.background = "#FFDDDD";

        setTimeout(function () {
            timeInput.style.background = "#FFCCCC";
        }, 200);

        setTimeout(function () {
            timeInput.style.background = "#FFBBBB";
        }, 400);

        setTimeout(function () {
            timeInput.style.background = "#f0f0f0";
        }, 600);
    }
}

function updateTask() {
    const taskList = document.querySelector("#taskList");
    taskList.innerHTML = "";

    agenda.sort((a, b) => {
        const timeA = new Date("2023-01-01 " + a.time);
        const timeB = new Date("2023-01-01 " + b.time);

        return timeA - timeB;
    });

    for (let i = 0; i < agenda.length; i++) {
        const divElement = document.createElement("div");
        divElement.className = "task";

        const timeElement = document.createElement("p");
        timeElement.className = "timeClass";
        timeElement.innerHTML = agenda[i].time;

        const xElement = document.createElement("p");
        xElement.className = "xClass";
        xElement.innerHTML = "&times;";
        xElement.addEventListener("click", function () {
            agenda.splice(i, 1);
            updateTask();
        });

        const taskElement = document.createElement("p");
        taskElement.className = "taskClass";
        taskElement.innerHTML = "<hr>" + agenda[i].task;

        divElement.appendChild(timeElement);
        divElement.appendChild(xElement);
        divElement.appendChild(taskElement);
        taskList.appendChild(divElement);
    }
}

window.addEventListener("load", function () {
    const title = document.querySelector("#title");
    const titleText = document.querySelector("#titleText");
    title.textContent = "Agenda";
    titleText.textContent = "Take control of your time and easily structure your day in just a few clicks!";
    updateTask();
});
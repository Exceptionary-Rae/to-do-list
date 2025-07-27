const inputField = document.getElementById('task-input')
const addBtn = document.getElementById('add-btn')
const clearbtn =document.getElementById('clear-btn')
const taskContainer = document.getElementById('task-container')

let taskArray = []

if (JSON.parse(localStorage.getItem('myTasks'))) {
    taskArray = JSON.parse(localStorage.getItem('myTasks'))
    render()
}

addBtn.addEventListener('click', function() {
    if (inputField.value) {
        taskArray.push(inputField.value)
        inputField.value = ""
        render()
    }
})

clearbtn.addEventListener('click', function() {
    taskArray = []
    render()
})

function render() {
    localStorage.setItem('myTasks', JSON.stringify(taskArray))
    taskContainer.innerHTML = ""
    for (let i = 0; i < taskArray.length; i++) {
        taskContainer.innerHTML += `<li><p>${taskArray[i]}</p><button onclick="remove(${i})">Complete</button></li>`
    }
}

function remove(n) {
    taskArray.splice(n, 1)
    render()
}
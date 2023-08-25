const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

addButton.addEventListener('click', () => {
    if (taskInput.value.trim() !== '') {
        addTask(taskInput.value);
        taskInput.value = '';
    }
});

function addTask(taskText) {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="deleteButton">Delete</button>
    `;
    taskList.appendChild(taskItem);

    const deleteButton = taskItem.querySelector('.deleteButton');
    deleteButton.addEventListener('click', () => {
        taskList.removeChild(taskItem);
    });

    const checkbox = taskItem.querySelector('input[type="checkbox"]');
    checkbox.addEventListener('change', () => {
        taskItem.querySelector('span').classList.toggle('completed', checkbox.checked);
    });
}

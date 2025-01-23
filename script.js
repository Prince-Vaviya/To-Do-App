
document.getElementById('add-task').addEventListener('click', () => {
    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();
    if (taskText) {
        const taskList = document.getElementById('task-list');
        const taskItem = document.createElement('li');
        taskItem.className = 'list-group-item d-flex justify-content-between align-items-center';
        taskItem.innerHTML = `
            ${taskText}
            <button class="btn btn-danger btn-sm delete-task">Delete</button>
        `;
        taskList.appendChild(taskItem);
        taskInput.value = '';

        taskItem.querySelector('.delete-task').addEventListener('click', () => {
            taskList.removeChild(taskItem);
        });
    }
});

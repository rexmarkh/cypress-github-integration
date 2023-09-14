document.addEventListener("DOMContentLoaded", function () {
    // Selecting elements from the HTML
    const taskList = document.getElementById("task-list");
    const newTaskInput = document.getElementById("new-task");
    const addButton = document.getElementById("add-button");
  
    // Array to store tasks
    const tasks = [];
  
    // Function to render the task list
    function renderTasks() {
      taskList.innerHTML = ""; // Clear the existing list
  
      tasks.forEach((task, index) => {
        const taskItem = document.createElement("li");
        taskItem.classList.add("task");
  
        // Task text
        const taskText = document.createElement("span");
        taskText.textContent = task;
        taskText.classList.add("task-text");
        taskItem.appendChild(taskText);
  
        // Delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.classList.add("delete-button");
  
        // Add click event to delete button
        deleteButton.addEventListener("click", () => {
          tasks.splice(index, 1); // Remove the task from the array
          renderTasks(); // Re-render the updated task list
        });
  
        taskItem.appendChild(deleteButton);
        taskList.appendChild(taskItem);
      });
    }
  
    // Event listener for the "Add" button
    addButton.addEventListener("click", () => {
      const newTask = newTaskInput.value.trim(); // Get the task text
  
      if (newTask !== "") {
        tasks.push(newTask); // Add the task to the array
        newTaskInput.value = ""; // Clear the input field
        renderTasks(); // Re-render the updated task list
      }
    });
  
    // Initial rendering of the task list
    renderTasks();
  });
  
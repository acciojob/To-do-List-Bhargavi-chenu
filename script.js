//your code here

document.addEventListener("DOMContentLoaded", function () {
  const newTodoInput = document.getElementById("newTodoInput");
  const addTodoBtn = document.getElementById("addTodoBtn");
  const todoList = document.getElementById("todoList");

  addTodoBtn.addEventListener("click", function () {
    const newTodoText = newTodoInput.value.trim();

    // Validate if newTodoText is not empty
    if (newTodoText !== "") {
      const todoItem = document.createElement("li");
      todoItem.textContent = newTodoText;
      todoList.appendChild(todoItem);

      // Clear the input after adding the todo item
      newTodoInput.value = "";
    } else {
      alert("Please enter a valid todo item!");
    }
  });
});

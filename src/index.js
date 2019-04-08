
document.addEventListener("DOMContentLoaded", () => {
  let taskListItem = new TaskListItem("Hi there.");
  let taskListItem2 = new TaskListItem("Hey there.");
  const taskList = new TaskList();

  const listContainer = document.getElementById("list");
  const textInput = document.querySelector("#new-task-description")
  const submitForm = document.querySelector("#create-task-form")
  const renderApp = () => {
    while (listContainer.firstChild) {
    listContainer.removeChild(listContainer.firstChild);
    }
    listContainer.append(taskList.render())
  };

  submitForm.addEventListener("submit", (e) => {
    e.preventDefault()
    let taskListItem = new TaskListItem(textInput.value)
    renderApp()
  })

  renderApp()
});

document.getElementById("topicForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const checkboxes = document.querySelectorAll("input[name='topic']:checked");
  const routine = document.getElementById("routine");

  if (checkboxes.length === 0) {
    routine.innerHTML = "<p>Please choose at least one topic.</p>";
    return;
  }

  let result = "<h2>Your Study Routine 🌟</h2><ul>";
  checkboxes.forEach((box, index) => {
    result += `<li>${index + 1}. ${box.value}</li>`;
  });
  result += "</ul>";

  routine.innerHTML = result;
});

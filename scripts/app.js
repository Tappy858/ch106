//global variables
let iconImportant = false;

function saveTask() {
  console.log("Saving task");
  //get the values
  const title = $("#title").val();
  const description = $("#description").val();
  const color = $("#color").val();
  const startDate = $("#startDate").val();
  const status = $("#status").val();
  const budget = $("#budget").val();
  //build the object
  let taskToSave = new Task(title, description, color, startDate, status, budget);
  console.log(taskToSave);

  // Display user inputs in sectionA
  displayUserInputs(taskToSave);

  //save logic
  $.ajax({
    type: "POST",
    url: "http://fsdiapi.azurewebsites.net/api/tasks/",
    data: JSON.stringify(taskToSave),
    contentType: "application/json",
    success: function (res) {
      console.log(res);
    },
    error: function (error) {
      console.log(error);
    },
  });
}

function displayUserInputs(userInputs) {
  let userInputsContent = `
    <h2>User Inputs:</h2>
    <p><strong>Title:</strong> ${userInputs.title}</p>
    <p><strong>Description:</strong> ${userInputs.description}</p>
    <p><strong>Color:</strong> <span style="color:${userInputs.color};">${userInputs.color}</span></p>
    <p><strong>Start Date:</strong> ${userInputs.startDate}</p>
    <p><strong>Status:</strong> ${userInputs.status}</p>
    <p><strong>Budget:</strong> ${userInputs.budget}</p>
  `;

  // Update the content of #userInputs in #sectionA
  $("#userInputs").append(userInputsContent);
}

// Existing functions...

function init() {
  console.log("This is the parent of everything");
  //load data

  //hook events
  $("#btnSave").click(saveTask);
  $("#iImportant").click(changeIcon);
  //document.getElementById("btnSave").click(saveTask);
}

window.onload = init;

var schedule = {};

// Loads planner from local storage
var loadPlanner = function() {
    schedule = JSON.parse(localStorage.getItem("Time Table"));
    // if nothing in local storage, create the new day planner array
    if (!schedule) {
      schedule = {
        time: [9+" am", 10+" am", 11+" am", 12+" pm", 1+" pm", 2+" pm", 3+" pm", 4+" pm", 5+" pm"],
        hourlyTask: ["", "", "", "", "", "", "", "", "" ],
      };
      // console.log(schedule);

    // tasks are saved in an aray that's a property of an object
    localStorage.setItem("Time Table", JSON.stringify(schedule));
    }

    // Display the timetable
    for (let i = 0; i < 9; i++) { 
    // add the new div and give it an ID
    $('<div id="hourBlock' + i + '"class="row col-lg-12 border-top"></div>').appendTo('#todaySchedule');
    // add the time text + styling(bootstrap)
    $('<p class="col-2 p-3">' + schedule.time[i] + '</p>').appendTo('#hourBlock' + i);
    // add the task text + styling(bootstrap) + id
    $('<p id="hourTask' + i + '" class="col-8 p-3">' + schedule.hourlyTask[i] + '</p>').appendTo('#hourBlock' + i);
    // add the save button + styling(bootstrap)
    $('<button class="col-2">save</button>').appendTo('#hourBlock' + i);
    }

// Set the date
var todaysDate = moment().format("dddd, MMMM Do");  
$('#currentDay').text(todaysDate); 

// move to correct time backgrounds 
getTime(schedule);
};

// Track Past, Present, and Future
var getTime = function(schedule) {
    // Get the current time - keep in military hours
    var current = new Date();
    // gets time in military hours
    var currentTime = current.getHours();

    // loop over current time/display
    for (let i = 0; i < 9; i++) { 
      // create a variable to moniter time
      var transfer = schedule.time[i].split(" ");
      // grabs "am"/"pm"
      var dayNight = transfer[1]
      // turn the array "time" value into a number
      let timeString = transfer[0];
      let timeNumber = parseInt(timeString);
  
      var night = "pm";
      // Conditional statement to determine background color
        // if the time variable is "pm" (and it is not 12!) + 12 
        if (dayNight === night && timeNumber != 12){
          // add 12
          var newTime = timeNumber + 12;
          // console.log("Military Time =", newTime);
        }
        // else "am"- do nothing. 
        else {
          var newTime = timeNumber
          // console.log("Military Time =", newTime);
        }

    // Change the background color
        if (newTime < currentTime){
          // grey = past
          $('#hourTask' + i).addClass("bg-secondary");
        }
        else if (newTime > currentTime) {
          // white = future
          $('#hourTask' + i).addClass("bg-success");
          
        }
        else {
          // light blue = current
          $('#hourTask' + i).addClass("bg-danger");
        }
    }
}

// Click on the task to highlight/edit
$("div").on("click", "p", function() {
  var taskdescription = $(this)
    // gets the inner text content of the current element represented by $(this)
    .text()
    // remove any extra white space before or after
    .trim();

  // adds a dynamic "textarea" element w/ previous task description populated
  var changeTaskDescription = $("<textarea>")
  .addClass("form-control col-8")
  .val(taskdescription)
  .attr('id', 'taskChange');

  // replaces the old text input with the new text input
  $(this).replaceWith(changeTaskDescription);

  // console logs the element
  // console.log(this);
  // console.log(taskdescription);
});

// Listens for the User to click "save" to update the highlighted/edited task
$("div").on("click", "button", function() {
  // get the textarea's current value/text
  var newTaskDescription = $('#taskChange')
    .val()
    .trim();
  // console.log(newTaskDescription);  
  
  // GETS THE ID # !!!  
  var hourTracker = $('#taskChange').parent().attr('id')
  var getID = hourTracker.split("");
  var forID = getID[9]
  // console.log(forID);
  
  // Revert to the "p" element upon "save" for the timetable
  var saveTaskDescription = $("<p>")
  .attr('id', 'hourTask' + forID)
  .addClass("col-8 p-3")
  .text(newTaskDescription);

  // replaces the old text input with the new text input
  $('#taskChange').replaceWith(saveTaskDescription);

  // Move to update Local Storage
  saveUpdate(forID, newTaskDescription);
});

// Update Local Storage
var saveUpdate = function(forID, newTaskDescription) {
  // get the local storage(string) 
  schedule = JSON.parse(localStorage.getItem("Time Table"));

  //Swap out the old value w/ the new one
  schedule.hourlyTask[forID] = newTaskDescription

  // Save to local Storage - tasks are saved in an aray that's a property of an object
  localStorage.setItem("Time Table", JSON.stringify(schedule));

  // Pass through time function to udpate background color 
  getTime(schedule);
}


// load tasks for the first time
loadPlanner();
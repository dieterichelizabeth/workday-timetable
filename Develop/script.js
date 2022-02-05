var schedule = {};
var currentID= [];

// Loads planner from local storage
var loadPlanner = function() {
    schedule = JSON.parse(localStorage.getItem("Hourly Schedule"));
    // if nothing in local storage, create the new day planner array
    if (!schedule) {
      schedule = {
        time: [9+" am", 10+" am", 11+" am", 12+" pm", 1+" pm", 2+" pm", 3+" pm", 4+" pm", 5+" pm"],
        hourlyTask: ["drink coffee", "run errands", "homework", "shower", "eat", "run", "project", "challenge", "zoom" ],
      };
      console.log(schedule);
      // targets 2pm
      console.log(schedule.time[5]);
      console.log(schedule.hourlyTask[5]);
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
    // convert the 9-5 to military time for the conditional statement!
      // create a variable to moniter time
      var transfer = schedule.time[i].split(" ");
      // grabs "am"/"pm"
      var dayNight = transfer[1]
      // turn the array "time" value into a number
      let timeString = transfer[0];
      let timeNumber = parseInt(timeString);
  
      var night = "pm";
        // if the time variable is "pm" (and it is not 12!) + 12 
        if (dayNight === night && timeNumber != 12){
          // add 12
          var newTime = timeNumber + 12;
          console.log("Military Time =", newTime);
        }
        // else "am"- do nothing. 
        else {
          var newTime = timeNumber
          console.log("Military Time =", newTime);
        }

    // grab the time blocks BUT change the id="hourTask' background color
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

// click on the task
// brings up a textarea to change
// once a user types, they change the text
// when the save button is pressed, the new text replaces the old 
// this is saved to local storage
// create a way to target that specific # in the array...

// Click on the task to highlight/edit
$("div").on("click", "p", function() {
  var taskdescription = $(this)
    // gets the inner text content of the current element represented by $(this)
    .text()
    // remove any extra white space before or after
    .trim();

  // adds a dynamic textarea element w/ previous task description populated
  var changeTaskDescription = $("<textarea>")
  .addClass("form-control col-8")
  .val(taskdescription)
  .attr('id', 'taskChange');

  // replaces the old text input with the new text input
  $(this).replaceWith(changeTaskDescription);

  // console logs the element
  console.log(this);
  console.log(taskdescription);
});

// Save the clicked highlighted/edited task
$("div").on("click", "button", function() {
  // get the textarea's current value/text
  var newTaskDescription = $('#taskChange')
    .val()
    .trim();
  console.log(newTaskDescription);  
  
  // console.log(this.id); // GETS THE ID!!!  
  // var IDS = $('#taskChange').parent().attr('id')
  // var bleh = IDS.split("");
  // var turtle = bleh[9]
  // console.log(turtle);
  
  // adds a dynamic textarea element w/ previous task description populated
  var saveTaskDescription = $("<p>")
  .addClass("col-8 p-3")
  .attr('id', 'hourTask')
  .text(newTaskDescription);

  // replaces the old text input with the new text input
  $('#taskChange').replaceWith(saveTaskDescription);
});


// load tasks for the first time
loadPlanner();


  // var txt = $('div').html();
  // console.log(taskdescription); // consoles the task text
  // event.preventDefault();
  // console.log(txt); // consoles the whole damn div
  // var help = event.target;
  // var id = help.HTML;
  // console.log(id);

    // console.log(this.id); // GETS THE ID to push into an array!!! 
  // const getId = this.id.split("");
  // var idNumber = getId[8];
  // currentID.push(idNumber);
  // console.log(currentID);
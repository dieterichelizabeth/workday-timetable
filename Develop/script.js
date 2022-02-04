var schedule = {};

// Loads planner from local storage
var loadPlanner = function() {
    schedule = JSON.parse(localStorage.getItem("Hourly Schedule"));
    // if nothing in local storage, create the new day planner array
    if (!schedule) {
      schedule = {
        time: [9+"am", 10+"am", 11+"am", 12+"pm", 1+"pm", 2+"pm", 3+"pm", 4+"pm", 5+"pm"],
        hourlyTask: ["drink coffee", "run errands", "homework", "shower", "eat", "run", "project", "challenge", "zoom" ],
      };
      console.log(schedule);
      // targets 2pm
      console.log(schedule.time[5]);
      console.log(schedule.hourlyTask[5]);
    }

    // loop over arrays
    for (let i = 0; i < 9; i++) { 
    // add the new div and give it an ID
    $('<div id="hourBlock' + i + '"class="row col-lg-12"></div>').appendTo('#todaySchedule');
    // add the time text
    $('<p class="col-2">' + schedule.time[i] + '</p>').appendTo('#hourBlock' + i);
    // add the task text
    $('<p class="col-8">' + schedule.hourlyTask[i] + '</p>').appendTo('#hourBlock' + i);
    // add the save button
    $('<button class="col-2">save</button>').appendTo('#hourBlock' + i);
    }
  };

// load tasks for the first time
loadPlanner();
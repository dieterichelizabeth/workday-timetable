// GIVEN I am using a daily planner to create a schedule
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// WHEN I scroll down
// THEN I am presented with time blocks for standard business hours
// WHEN I view the time blocks for that day
// THEN each time block is color-coded to indicate whether it is in the past, present, or future
// WHEN I click into a time block
// THEN I can enter an event
// WHEN I click the save button for that time block
// THEN the text for that event is saved in local storage
// WHEN I refresh the page
// THEN the saved events persist

/*
Psuedocode
Step 1: Set up the HTML
    done - Center the text
    - add the Current date under the p (id currentDay)

Step 2: 
    done- add blocks of time 9,10,11,12,1,2,3,4,5 (9 total)
    done - blocks should be generated w/ jQuery on load of the page
        - each "block" of time will have a text area
            - the text area will allow typing (click on and highlight)
        - each "block" of time will have a blue save button w/ disk icon
            - when the blue button is pressed, the text saves to local storage for the day
    
Step 3: 
    - Time should change the color of the box (box backgrounds will start green)
    - The box will have a red background if it is that hour
    - the box will turn gray if the hour has passed
        - use if statements?
        - will need to be able to get the current time of the user for the function
Step 4: 
*/


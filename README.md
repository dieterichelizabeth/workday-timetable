# A Workday Timetable ☕️

Need an app which keeps track of your daily schedule (during the "business hours" of 9am to 5pm)? Workday timetable is simple calendar app that allows the user to save events for each hour of the day. The app keeps track of time by changing the colors of the "taskbox" as each hour passes. Users can update tasks by double clicking on the task box itself, entering the task for that time, and clicking the "save" button. The app stores user input, so users can close the page and return to check their schedules throughout the day.

Workday timetable also allows users to quickly re-set their schedules each day by pressing the "New Day!" button at the top of the screen. This will clear the tasks in your timetable for a fresh start. 🍃

Built with - HTML, CSS, jQuery, Moment.js, and Bootstrap.

[Click here to view the deployed application!](https://dieterichelizabeth.github.io/workday-timetable/)

<img width="480" alt="Screen Shot 2022-04-16 at 2 17 37 PM" src="https://user-images.githubusercontent.com/95142863/163688762-e880422a-b158-4332-b6e0-8e81e0aedbc9.png">

This project runs in the browser and features dynamically updated HTML and CSS powered by jQuery. The app includes styling by Bootstrap, Open Iconic and Google Fonts. Based on the user story-

```
"AS AN employee with a busy schedule, I WANT to add important events to a daily planner, SO THAT I can manage my time effectively."
```

Developed on following criteria-

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Installation/Download

To run this application locally, in the terminal-

1. clone the repo

```
git clone https://github.com/dieterichelizabeth/workday-timetable.git
```

2. Open the index.html sheet in your browser

Note: Make sure to use this app during the hours of 9am - 5pm. Else, the "task boxes" will either be greyed out, or white depending on the hour of the day.

This application uses local storage- so you can run it, either locally or through the link at the top of this Readme, without having to worry about other users seeing your schedule.

## Documentation

- [Bootstrap Documentation](https://getbootstrap.com/docs/5.1/getting-started/introduction//)
- [jQuery Documentation](https://api.jquery.com/)
- [string Split Documentation](https://www.w3schools.com/jsref/jsref_split.asp)
- [add elements with jQuery](https://www.w3schools.com/jquery/jquery_dom_add.asp)
- [on() method jQuery Documentation](https://api.jquery.com/on/)
- [each() method jQuery Documentation](https://api.jquery.com/each/)
- [setItem() Documentation](https://developer.mozilla.org/en-US/docs/Web/API/Storage/setItem)
- [Date() constructor and getHours() method javaScript Documentation](https://api.jquery.com/each/)
- [Moment.js (Legacy product)](https://momentjs.com/docs/)
- [Open Iconic](https://useiconic.com/open)

---

© 2022 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.

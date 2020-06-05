# Day Planner

## Getting Started

On this assignment I was tasked with making a day planner that would show the current day, show the current hour by color coding sections, let the user input data into each hour block, and then allowing the user to save their input. 

## What I did

* First I hard coded each hour block into the HTML
* Then I used the moment function to retreive the current day
* Next I wrote a function to display the current day on to the HTML by using jquery and its ID tag
* I then wrote a function that looped through each hour block and determined if it was in the past, present or future
* Using that information, the same function would then highlight the text area based on the result
  * Past received gray
  * Present received green
  * Future received blue
* Then I made an onclick listener for the save button that would then put the user's input into local storage 
* It would label the local storage name based on the id of the hour block
* Next I ran a loop that would pull all the data from local storage and populate the text areas with the saved data
* Debug

## Deployment

https://keithbillings.github.io/Day-Scheduler/

## Screenshot

## Author

Keith Billings

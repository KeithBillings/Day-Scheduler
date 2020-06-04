$(document).ready(function () {
  // Current time
  $("#currentDay").text(moment().format("MMMM Do, YYYY"));

  // Updating each text box to be color based on current time
  function hourRefresh() {
    let currentHour = moment().hours();

    console.log(currentHour);

    $(".time-block").each(function () {
      let blockHour = parseInt($(this).attr("id").split("-")[1]);

      if (blockHour === currentHour) {
        $(this).children("textarea").addClass("currentHour")
      }
      else if (blockHour > currentHour) {
        $(this).children("textarea").addClass("futureHour");
      }
    })
  }
  hourRefresh();
  
  // Button listening to click that will save user input to local storage
  $(".saveBtn").on("click", function(){
    let value = $(this).siblings(".description").val();
    let time = $(this).parent().attr("id")

    console.log(value);
    console.log(time);

    localStorage.setItem(time, value);
  });

  // Getting saved data from local storage and putting into the calendar
  for (hourNum = 0; hourNum < 24; hourNum++){
    let hourID = "#hour-" + hourNum + " .description";
    $(hourID).val(localStorage.getItem("hour-" + hourNum));
  }

})



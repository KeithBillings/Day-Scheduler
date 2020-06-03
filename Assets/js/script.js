let currentHour



$(".time-block").each(function(){
  let blockHour = parseInt($(this).attr("id").split("-")[1]);
  if (blockHour === currentHour){
    $(this).addClass("currentHour")
  }
  else if (blockHour > currentHour){
    $(this).addClass("futureHour");
  }
  
})
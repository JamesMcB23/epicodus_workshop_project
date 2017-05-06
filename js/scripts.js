$(document).ready(function() {

  // alert($("#css-item").text(),$("javaScript-item").text());
  alert($("#javaScript-item").text() + ", " + $("#css-item").text());
  // $("#goal-button").click(function(){
  //     $("#goal-list").append("<li class='list-item'>" + $("#new-goal").val() + "</li>");
  //     $("#new-goal").val("");
  $("#css-item").text("CHANGED TEXT");
  alert($("#javaScript-item").text() + ", " + $("#css-item").text());


  // })
})

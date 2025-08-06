$(function () {
  // YOUR CODE HERE
  $("#toggleButton").on("click", function () {
    $("#myParagraph").toggle();
  });

  $("#colorButton").on("click", function () {
    $("#colorDiv").css("background-color", "yellow");
  });

  $("#addClassButton").on("click", function () {
    $("#classDiv").append("<div id='classDiv'></div>");
  });
  $("#removeClassButton").on("click", function () {
    $("#classDiv").children("div").first().remove();
  });

  $("#fadeInButton").on("click", function () {
    $("#fadeDiv").fadeIn();
  });
  $("#fadeOutButton").on("click", function () {
    $("#fadeDiv").fadeOut();
  });

  $("#slideUpButton").on("click", function () {
    $("#slideDiv").slideUp();
  });
  $("#slideDownButton").on("click", function () {
    $("#slideDiv").slideDown();
  });
});

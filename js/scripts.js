// Business Logic
var beepboop = function(num, name) {
  var arrResults = [];
  for (number=0 ; number <= num ; number++) {
    var numStr = number.toString();
    if (parseInt(numStr)%3===0 && numStr !=="0") {
      numStr = '"I\'m sorry, ' + name +'. I\'m afraid I can\'t do that."';
    }
    else if (numStr.includes("1")) {
      numStr = '"Boop!"';
    }
    else if (numStr.includes("0")) {
      numStr = '"Beep!"';
    }
    console.log(numStr);
    arrResults.push(numStr);
  };
  return(arrResults);
};


// User Interface Logic
$(document).ready(function() {
  $(".inputForm").submit(function(event) {
    event.preventDefault();
    var numInput = parseInt($("#numberInput").val());
    var nameInput = $("#nameInput").val();
    var result = beepboop(numInput, nameInput);
    $(".resultList").empty();
    $("#resultBackward").hide();
    $("#resultOutput").slideDown();
    $("#resetButton").fadeIn(1500);
    $(".spanNumber").text(numInput);
    $(".spanName").text(nameInput);
    $(".resultList").append(result.map(x => "<li>" + x + "</li>"));
  });

  $("#backwardButton").click(function(event) {
    event.preventDefault();
    alert("Boop! Beep! Counting backwards is hard! I will do my best.");
    var numInput = parseInt($("#numberInput").val());
    var nameInput = $("#nameInput").val();
    var result = beepboop(numInput, nameInput);
    $(".resultList").empty();
    $("#resultOutput").hide();
    $("#resultBackward").slideDown();
    $("#resetButton").fadeIn(1500);
    $(".spanNumber").text(numInput);
    $(".spanName").text(nameInput);
    $(".resultList").append(result.reverse().map(x => "<li>" + x + "</li>"));
  });

});

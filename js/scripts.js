// Business Logic
var arr = [];
var beepboop = function(num) {
  for (number=0 ; number <= num ; number++) {
    var numStr = number.toString();
    if (parseInt(numStr)%3===0 && numStr !=="0") {
      numStr = "I'm sorry, Dave. I'm afraid I can't do that.";
    }
    else if (numStr.includes("1")) {
      numStr = "Boop!";
    } else if (numStr.includes("0")) {
      numStr = "Beep!";
    }
    console.log(numStr);
    arr.push(numStr);
  };
  console.log(arr);

};

// User Interface Logic
$(document).ready(function() {
  $(".inputForm").submit(function(event) {
    event.preventDefault();
    $("#resultList").empty();
    var input = parseInt($("#numberInput").val());
    var result = beepboop(input);
    $("#resultOutput").show();
    $("#resultList").text(arr.toString());

  });

});

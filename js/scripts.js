var beepboop = function(num) {
var arr = [];
for (number=0 ; number <= num ; number++) {
  console.log(number);
  arr.push(number);
  if ()

};
};


$(document).ready(function() {
  $(".inputForm").submit(function(event) {
    event.preventDefault();
    $("#resultList").empty();
    var input = parseInt($("#numberInput").val());
    var result = beepboop(input);
    $("#resultOutput").show();
    $("#resultList").append("<li>" + number + "</li>");

  });

});

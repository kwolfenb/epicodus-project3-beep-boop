var beepboop = function(num) {

for (index=0 ; index <= num ; index++) {
  console.log(index);
};
};


$(document).ready(function() {
  $(".inputForm").submit(function(event) {
    event.preventDefault();
    var input = parseInt($("#numberInput").val());
    var result = beeboop(input);
    $("#resultOutput").show();
    $("#resultList").append(result);
  });

});

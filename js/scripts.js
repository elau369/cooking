var one = function(alpha)
{
  return alpha * 16;
};

var two = function(beta)
{
  return beta * 8;
};

var three = function(gamma)
{
  return gamma * 4.2;
};

$(document).ready(function() {
  $("form#first").submit(function(event){
    event.preventDefault();
    var alpha = parseInt($("#lbsToOzs").val());
    var result = one(alpha);
    $("#output").text(result);
  });
  $("form#second").submit(function(event){
    event.preventDefault();
    var beta = parseInt($("#cupsToFlOz").val());
    var result = two(beta);
    $("#output").text(result);
  });
  $("form#third").submit(function(event){
    event.preventDefault();
    var gamma = parseInt($("#litToCups").val());
    var result = three(gamma);
    $("#output").text(result);
  });



});

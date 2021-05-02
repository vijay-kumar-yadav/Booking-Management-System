
var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 3000);

function myBlurFunction(controlObject)
{
controlObject.style.background="white";
controlObject.value = controlObject.value.toUpperCase();
}

function myOnFocusFunction(controlObject)
{
controlObject.style.background="rgb(122, 215, 238)";
}
$(document).ready(function(){
    $("form").submit(function(){
      alert("Thank you for contacting us.");
});
});
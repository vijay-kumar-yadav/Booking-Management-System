function onLoaderFunc()
{
  $(".seatStructure *").prop("disabled", true);
  $(".displayerBoxes *").prop("disabled", true);
}
function takeData()
{
  if (( $("#Username").val().length == 0 ) || ( $("#Numseats").val().length == 0 )||( $("#emailid").val().length == 0 ))
  {
  alert("Please Enter your Name, Number of Seats and Email id");
  }
  else
  {
    $(".inputForm *").prop("disabled", true);
    $(".seatStructure *").prop("disabled", false);
    document.getElementById("notification").innerHTML = "<b style='margin-bottom:0px;background:yellow;'>Please Select your Seats NOW!</b>";
  }
}


function updateTextArea() { 
    
  if ($("input:checked").length == ($("#Numseats").val())&&ticketPrice!=0)
  
    {    
        $(".seatStructure *").prop("disabled", true)  
     var allNameVals = [];
     var allNumberVals = [];
     var allSeatsVals = [];
  
     //Storing in Array
     allNameVals.push($("#Username").val());
     allNumberVals.push($("#Numseats").val());
     $('#seatsBlock :checked').each(function() {
       allSeatsVals.push($(this).val());
     });
    
     //Displaying 
     $('#nameDisplay').val(allNameVals);
     $('#NumberDisplay').val(allNumberVals);
     $('#seatsDisplay').val(allSeatsVals);
     $('#priceDisplay').val(ticketPrice*allSeatsVals.length);
    }
  else
    {
      alert("Please select " + ($("#Numseats").val()) + " seats")
    }
  }


function myFunction() {
  alert($("input:checked").length);
}



$(":checkbox").click(function() {
  if ($("input:checked").length == ($("#Numseats").val())) {
    $(":checkbox").prop('disabled', true);
    $(':checked').prop('disabled', false);
  }
  else
    {
      $(":checkbox").prop('disabled', false);
    }
});
var ticketPrice=0;
const movieSelect = document.getElementById("movie");
movieSelect.addEventListener("change", (e) => {
    ticketPrice = parseInt(e.target.value);
    // alert("ticket price = " + ticketPrice);
});


function onBookTicketClick()
{
    if(ticketPrice===0||( $("#Username").val().length == 0 ) || ( $("#Numseats").val().length == 0 )||( $("#emailid").val().length == 0 ))
    {
      alert("Please select seat first.");
    }
    else
    {
        alert("Thank You For Booking.");
        window.location.assign("index.html","_self");
    }
}

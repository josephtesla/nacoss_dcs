$(function () {

$('#editname').click(function(e){
   e.preventDefault();
   $('#nameform').toggle()
})

$('#editstatus').click(function(e){
  e.preventDefault();
  $('#statusform').toggle()
})

$('#editemail').click(function(e){
   e.preventDefault();
   $('#emailform').toggle()
})

$('#editgender').click(function(e){
   e.preventDefault();
   $('#genderform').toggle()
})

$('#editaddress').click(function(e){
   e.preventDefault();
   $('#addressform').toggle()
})

$('#editlevel').click(function(e){
   e.preventDefault();
   $('#levelform').toggle()
})


$('#picsbtn').click(function(e){
   e.preventDefault();
   $('#profilepics').toggle()
})

})
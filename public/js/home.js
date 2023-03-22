function createClicked(){


  //let val = $("#identifier").val();
  //console.log(typeof(val));

          $.ajax({
            url: "/create",
            type: "POST",
            data: {identifier:$("#identifier").val(),
                    name:$("#name").val(),drives:$("#drives").val(),rating:$("#rating").val()
                  },
            success: function(data){
                if (data.error)
                  alert("bad");
                else
                  alert("good");
              } ,     
            dataType: "json"
          });   
  return false;
}
function readClicked(){
          $.ajax({
            url: "/read",
            type: "GET",
            data: {identifier:$("#identifier").val()},
            success: function(data){
                if (data.error)
                  alert("bad");
                else {
                  console.log("driving = " + data.drives);
                  console.log("rating = " + data.rating);
                  $("#name").val(data.name);
                  $("#drives").val(data.drives);
                  $("#rating").val(data.rating);
                }
              } ,     
            dataType: "json"
          });   
  return false;
}
function updateClicked(){
          $.ajax({
            url: "/update",
            type: "PUT",
            data: {identifier:$("#identifier").val(),
            name:$("#name").val(),drives:$("#drives").val(),rating:$("#rating").val()         
            },
            success: function(data){
                if (data.error)
                  alert("bad");
                else
                  alert("good");
              } ,     
            dataType: "json"
          });   
  return false;
}
function deleteClicked(){

    let trimIdentifier = $("#identifier").val().trim();
    if (trimIdentifier == "") {
      alert("bad");
      return false; 
    }

    $.ajax({
      url: "/delete/" + $("#identifier").val(),
      type: "DELETE",
      success: function(data) { 
        if (data.error)
          alert("bad");
        else
          alert("good");
      } ,   
      dataType: "json"
    });  
    return false;             
}      
        
$(document).ready(function(){ 

  $("#createButton").click(createClicked);
  $("#readButton").click(readClicked);
  $("#updateButton").click(updateClicked);
  $("#deleteButton").click(deleteClicked);

});
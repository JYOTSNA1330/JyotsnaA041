// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("#btn")
      .addEventListener("click", function () {
        
        // Call server to get the name
	$ajaxUtils
          .sendGetRequest("name.json", 
            function (res) {
	      var num = Number(document.getElementById("fname").value); 
	      var arr = res.arr;
	      var arr2 = res.arr2; 
	      
	      var message = "not found"; 

	    for(var i = 0; i < 10; i++){
	      	console.log(arr[i]); 
	   
		if(arr[i] == num){
		   	   message = arr2[i]; 
		   	  var a = arr2.indexOf[num];
	           break; 
		}
	      }
		
              document.querySelector("#content").innerHTML = "<h2>" + message + "</h2>";
	      document.querySelector("#content").innerHTML = "<h2>" + a + "</h2>";
	      
            });


 		
      });
  }
);

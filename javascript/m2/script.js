// Event handling
document.addEventListener("DOMContentLoaded",
  function (event) {
    
    // Unobtrusive event binding
    document.querySelector("button")
      .addEventListener("click", function () {
        
        // Call server to get the name
        $ajaxUtils
          .sendGetRequest("name.json", 
            function (res) {
              var temp =
   document.getElementById("name").value;
          
          function true(){
    document.getElementById("true").checked = true;
    document.getElementById("false").checked = false;
   }

   function false(){
    document.getElementById("true").checked = false;
    document.getElementById("false").checked = true;
   }
                 
              if ( temp === res.student1) {
                var temp2= res.question1
                if (true) {
                  var result = "Correct answer!"

                }
                else {
                  var result = "Wrong answer!"
                }
                
              }
              else if (temp === res.student2) {
                var temp2= res.question2
                if (true) {
                  var result = "Correct answer!"

                }
                else {
                  var result = "Wrong answer!"
                }
                
              }

          else {
            var temp1 = "no such student";
          }
              document.querySelector("#content")
                .innerHTML = "<h2>" + temp+ "</h2>";

              document.querySelector("#content")
                .innerHTML = "<h2>" + temp2+ "</h2>";
              document.querySelector("#content1")
                .innerHTML = "<h2>" + temp1+ "</h2>";
              document.querySelector("#content2")
                .innerHTML = "<h2>" + result+ "</h2>";
            });
      });
  
  }
);

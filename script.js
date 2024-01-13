// Constants
let getData = document.getElementById("getData");

// Event Listeners
getData.addEventListener("click", () => {
  //   Make a request to the server
  let xhr = new XMLHttpRequest();
  // Open the file asynchronusly
  xhr.open("GET", "ajaxdata.txt", true);
  xhr.onprogress = function () {
    console.log("On Progress");
  };
  xhr.onload = function () {
    if (this.status === 200) {
      console.log(this.responseText);
    } else if (this.status === 404) {
      console.log("Not Found");
    }
  };
  //   Send the data
  xhr.send();
});

// Functions

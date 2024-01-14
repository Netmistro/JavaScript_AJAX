// ! Get request in AJAX

// // Constants
// let getData = document.getElementById("getData");

// // Event Listeners
// getData.addEventListener("click", () => {
//   //   Make a request to the server
//   let xhr = new XMLHttpRequest();
//   // Open the file asynchronusly
//   xhr.open("GET", "ajaxdata.txt", true);
//   xhr.onprogress = function () {
//     console.log("On Progress");
//   };
// xhr.onload = function () {
//   // Echo ready states as 1,2,3,4
//   console.log("Ready state is + xhr.readyState");
// };
//   xhr.onload = function () {
//     // Status OK
//     if (this.status === 200) {
//       console.log(this.responseText);
//     } else if (this.status === 404) {
//       // Not found
//       console.log("Not Found");
//     }
//   };
//   // Send the data
//   xhr.send();
// });

// ! POST request in AJAX

// // Constants
// let getData = document.getElementById("getData");

// // Event Listeners
// getData.addEventListener("click", () => {
//   //   Make a request to the server
//   let xhr = new XMLHttpRequest();
//   // Open the file asynchronusly
//   xhr.open("POST", "https://fakestoreapi.com/products", true);
//   xhr.onprogress = function () {
//     console.log("On Progress");
//   };
//   xhr.onload = function () {
//     // Echo ready states as 1,2,3,4
//     console.log("Ready state is + xhr.readyState");
//   };
//   xhr.onload = function () {
//     // Status OK
//     if (this.status === 200) {
//       console.log(this.responseText);
//     } else if (this.status === 404) {
//       // Not found
//       console.log("Not Found");
//     }
//   };
//   data = { title: " AJAX Tutorial" };
//   // Send the data
//   xhr.send(data);
// });

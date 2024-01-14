// Constants
const getData = document.getElementById("getData");

// Event Listeners
getData.addEventListener("click", () => {
  // New http request
  let xhr = new XMLHttpRequest();

  // Open the request
  xhr.open("GET", "https://fakestoreapi.com/products", true);

  //   Check state
  xhr.onreadystatechange = function () {
    console.log("Ready state is", xhr.readyState);
  };

  // Onload
  xhr.onload = function () {
    // Status of 200 means everything is ok
    if (this.status === 200) {
      // Parse the data to object
      let objectData = JSON.parse(this.responseText);
      //   Send the data to console
      console.log(objectData);
      //   Grab the table from html
      let table_data = document.getElementById("table_data");
      // Set the array to blank
      data = `
      <thead class="table-dark">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Image</th>
            </tr>
        </thead>`;
      // Loop through the data
      for (value in objectData) {
        data += `
            <tr>
            <td>${objectData[value].title}</td>
            <td>$${objectData[value].price}</td>
            <td><img src='${objectData[value].image}'</td>
            </tr>
            `;
        table_data.innerHTML = data;
      }
    }
  };
  // Send data
  xhr.send();
});

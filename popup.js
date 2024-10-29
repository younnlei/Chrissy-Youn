function getAffirmation() { //declare a function to retrieve affirmation
  return fetch('https://avyrie.github.io/affirmations-api/affirmations.json') // returning to fetch from the affirmation api
      .then(response => { // after fetching this data 
          console.log(response);  // just checking to see if this works — it works.
          return response.json(); // converts the data into js data
      })
      .then(data => { //looks up the converted data
          console.log(data); // checking here to see if it works - it works.
          const affirmationsArray = data.affirmations; // accessing a property of an object - data (object)  affirmations- this is key (property of an object): 
          //value is an array ofaffirmations.
          return affirmationsArray[Math.floor(Math.random() * affirmationsArray.length)]; //picking and return a random message from our list of affirmations
      })
      .catch(error => { // just error message
          console.error(error);
          return "Remember why you started this journey.";
      });
}

function initialize() {  // setting up everything
  const affirmationDiv = document.getElementById('affirmation');
  affirmationDiv.textContent = "Hang in there.. :)"; // temporary message
  
  getAffirmation() // calling our previous function
      .then(affirmation => { //when the loop works
          console.log(affirmation); //checking to see if it works.
          affirmationDiv.textContent = affirmation; //assigning a string value to the text content propery, replacing any existing text content within that element

      })
}

document.addEventListener('DOMContentLoaded', initialize); //when the web page fully loads run our function.
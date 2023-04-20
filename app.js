const topicRadioButtons = document.querySelectorAll('[name="topic"]');
const hourlyRate = document.getElementById('hourly-rate');
const hourlyRateInput = document.getElementById('rate');

topicRadioButtons.forEach((radio) =>
{
    radio.addEventListener('change', (event) =>
    {
        if (event.target.value === 'hiring')
        {
            hourlyRate.style.display = 'block';
            hourlyRateInput.required = true;
        } else
        {
            hourlyRate.style.display = 'none';
            hourlyRateInput.required = false;
        }
    });
});



function scrollToSection() {
    const section = document.getElementById('contact-c-form');
    section.scrollIntoView({ behavior: 'smooth' });
}
  
const products = window.products;

window.addEventListener("load", function () {
    
    const tbody = document.getElementById("Education");
    const cardContainer = document.createElement("div");
    cardContainer.classList.add("card-container");
    tbody.appendChild(cardContainer);
  
  
  
    window.products
      .filter((product) => product.categories[0] == "Ed")
      .forEach((product) => {
        const card = createProductCard(product);
  
        card.addEventListener("click", () => {
          console.log(product);
        });
  
        cardContainer.appendChild(card);
      });
  

});


function createProductCard(product)
{
  // Create a <div> to hold the card
    const card = document.createElement("div");
  // Add the .card class to the <div>
    card.classList.add("card");

  // Create a product image, use the .card-image class
    const productImage = document.createElement("img");
    productImage.src = product.imageUrl;
    productImage.classList.add("card-image");
    card.appendChild(productImage);

    const cardText = document.createElement("div");
    cardText.classList.add("cardText");
    
    const nameCell = document.createElement("h3");
    nameCell.textContent = product.title;

    const institution = document.createElement("p");
    institution.classList.add("p1")
    institution.textContent = product.institution;
    
    const descCell = document.createElement("p");
    descCell.textContent = product.description;

  const years = document.createElement("p");
  years.classList.add("p2");
    years.textContent = product.years;

    cardText.appendChild(nameCell);
    cardText.appendChild(institution);
    cardText.appendChild(descCell);
    cardText.appendChild(years);

    card.appendChild(cardText);
  
  return card;
}



  function sendFormData() {
    const xhr = new XMLHttpRequest(); // create a new XMLHttpRequest object
    xhr.open('POST', 'https://httpbin.org/post'); // set the request method and URL
    xhr.onload = function() {
      if (xhr.status === 200) { // check if the request was successful
        const data = JSON.parse(xhr.responseText); // parse the JSON response
        console.log(data); // do something with the data
      } else {
        console.log('Error:', xhr.statusText); // log any errors
      }
    };
    const formData = new FormData(document.querySelector('form')); // create a FormData object from the form
    xhr.send(formData); // send the form data as the request body
  }
  const form = document.querySelector('form');
  form.addEventListener('submit', function(event) {
    
    sendFormData(); // call the function to send the form data
  });


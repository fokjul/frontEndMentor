/* --- BUILD HTML --- */ 
//Create <section></section> in HTML
let mainContainer = document.createElement('section');
mainContainer.classList.add('mainContainer');
let buttonValueSelected;

//Define buttons
const buttonArray = [1, 2, 3, 4, 5];

//Wrap button values in <button> tag
const btnContainer = buttonArray.map((buttonValue) => 
{let button = 
    `<div class="button">
        <input type="radio" id="${buttonValue}" name="rating" value="${buttonValue}">
        <label for="${buttonValue}">${buttonValue}</label>
    </div>`; 
return button;
});
    
//Create main content inside <section></section>
const mainPage = `<div class="wrapper">
<div>
  <img src="images/icon-star.svg">
</div>
</div>
<div class="description">
<h2>How did we do?</h2>
<p>Please let us know how we did with your support request. All feedback is appreciated 
  to help us improve our offering!</p>
</div>
<div class="grid-numbers">
${btnContainer.join('')}
</div>
<button id="btn-submit" type="submit">Submit</button>`;

const thankYouPage = 
`<div class="thankYouPageWrapper">
    <img src="images/illustration-thank-you.svg">
</div>
<div class="ratingResults">You selected ... out of 5</div>
<div class="thankYouPageDescription">
    <h2>Thank you!</h2>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
    don\’t hesitate to get in touch!</p>
</div>`;

//Add main content inside <section></section>
mainContainer.innerHTML = mainPage;

//Add <section></section> inside <body></body>
document.querySelector('body').prepend(mainContainer);

/* --- EVENTS --- */ 

//Selecr Rating
let isButtonClicked;
document.querySelectorAll('.grid-numbers input').forEach((button) => 
{
    button.addEventListener('click', function()
    { 
        console.log(button.value);
        buttonValueSelected = button.value;
    });
    
})

//Submit Rating
document.querySelector('#btn-submit').addEventListener('click', ()=> 
{
    mainContainer.innerHTML = thankYouPage;
    document.querySelector('.ratingResults').innerHTML = `You selected ${buttonValueSelected} out of 5`;
    console.log(mainContainer);
})







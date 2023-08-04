//Create <section></section> in HTML
const mainContainer = document.createElement('section');
mainContainer.classList.add('mainContainer');

//Define buttons
const buttonArray = [1, 2, 3, 4, 5];
const btnContainer = [];
buttonArray.forEach((buttonValue) => {
    let button = `<button>${buttonValue}</button>`;
    btnContainer.push(button);
}) 

//Create main content inside <section></section>
// const mainPage = `<div class="wrapper">
// <div>
//   <img src="images/icon-star.svg">
// </div>
// </div>
// <div class="description">
// <h2>How did we do?</h2>
// <p>Please let us know how we did with your support request. All feedback is appreciated 
//   to help us improve our offering!</p>
// </div>
// <div class="grid-numbers">
// ${btnContainer}
// </div>
// <button id="btn-submit">Submit</button>`;

const thankYouPage = 
`<div class="thankYouPageWrapper">
    <img src="images/illustration-thank-you.svg">
</div>
<div class="ratingResults">You selected 4 out of 5</div>
<div class="thankYouPageDescription">
    <h2>Thank you!</h2>
    <p>We appreciate you taking the time to give a rating. If you ever need more support, 
    don\’t hesitate to get in touch!</p>
</div>`;

//Add main content inside <section></section>
mainContainer.innerHTML = thankYouPage;

//Add <section></section> inside <body></body>
document.querySelector('body').prepend(mainContainer);
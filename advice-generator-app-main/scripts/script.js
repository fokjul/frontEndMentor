const adviceId =  document.createElement('p');
adviceId.classList.add('adviceId');
document.querySelector('.advice-container').prepend(adviceId);
const adviceText =  document.createElement('p');
adviceText.classList.add('adviceText');
adviceId.insertAdjacentElement('afterend', adviceText);
const advicePlaceholder = document.querySelector('.advicePlaceholder');

document.querySelector('button').addEventListener('click', function() {
    advicePlaceholder.remove();
    fetch('https://api.adviceslip.com/advice', {cache: "no-cache"})
    .then (response => response.json())
    .then (json => {
        document.querySelector('.adviceId').innerHTML = `Advice #${json.slip.id}`;
        document.querySelector('.adviceText').innerHTML = `"${json.slip.advice}"`;
    })
    .catch ( error =>{
        console.log('error:' + error.message)
    });
})

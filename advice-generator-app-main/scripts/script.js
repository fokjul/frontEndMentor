

let output;

fetch('https://api.adviceslip.com/advice')
    .then (response => response.json())
    .then (json => {
        output = `<p>Advice #${json.slip.id}</p>`;
        output += `<p>"${json.slip.advice}"</p>`;
        document.querySelector('div').innerHTML = output;

    })
    .catch ( error =>{
        console.log('error:' + error.message)
    });

    
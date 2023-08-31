//add new element
let text;
let elementIdIndex = document.querySelectorAll(`[id*="parameter"]`).length;

const elementIndex = function (){
    elementIdIndex++;
    return elementIdIndex
}

class Checkbox {
    constructor(type, id) {
        this.type = type,
        this.id = id
    }

    setCheckboxAttr (element){
        element.setAttribute('type', this.type );
        element.classList.add(this.id);
        return element;
    }

    appendCheckbox (parentElement, element) {
        document.querySelector(parentElement).append(element);
    }
}

class InputElement {
    constructor(type, id, name, action) {
        this.type = type,
        this.id = id,
        this.name = name,
        this.action = action
    }

    createInput(){}

    setInputAttr(element){
        element.setAttribute('type', this.type);  
        element.setAttribute('id', this.id);
        element.setAttribute('name', this.name); 
        element.setAttribute('onblur', this.action); 
        return element;
    }      

    appendInput (parentElement, element) {
        document.querySelector(parentElement).append(element);
    }
}

const addNewRow = function(){
    let elementIdIndex = elementIndex();

    const newCheckbox = new Checkbox('checkbox', `checkbox-${elementIdIndex}`);
    const newCheckboxElement = document.createElement('input');
    newCheckbox.setCheckboxAttr(newCheckboxElement);
    newCheckbox.appendCheckbox('.formContainer', newCheckboxElement);

    const newParameter = new InputElement('text', `parameter-${elementIdIndex}`, `parameter-${elementIdIndex}`, 'getValue(this)');
    const newParameterField = document.createElement('input');
    newParameter.setInputAttr(newParameterField);
    newParameter.appendInput('.formContainer', newParameterField);

    const newValue = new InputElement('text', `value-${elementIdIndex}`, `value${elementIdIndex}`, 'getValue(this)');
    const newValueField = document.createElement('input');
    newValue.setInputAttr(newValueField);
    newValue.appendInput('.formContainer', newValueField);
}



document.querySelector('button').addEventListener('click', addNewRow);

const arrayOfInputValues = [];
function getValue(element){
    let id = element.id;
    arrayOfInputValues.push({id: document.getElementById(id).id, value: document.getElementById(id).value});
    localStorage.setItem('newInputs', JSON.stringify(arrayOfInputValues))
}

// save to local storage
// const saveToLocalStorage = (ev) => {
//     ev.preventDefault();
//     const rowData = new InputElement (document.getElementById('parameter1').value, document.getElementById('value1').value);
//     localStorage.setItem('newInputs', JSON.stringify(rowData))
//     return rowData;
// };

// //save to local storage onblur
// let el = document.getElementById('parameter1')
//     if (el) {
//         el.addEventListener('blur', saveToLocalStorage);
//     }

window.addEventListener("load", function getData(){
    let tempString = JSON.parse(localStorage.getItem('newInputs'));
    tempString.forEach((string) => {
        if (!string.id.includes(1) && string.id.includes('parameter')){
            addNewRow()   
        }
        
        const allInputs = document.querySelectorAll(`input[type*='text']`)
        allInputs.forEach((input) => {
            if(string.id === input.id){
                input.value = string.value;
            }
            else {console.log('err' + string.value)}
        }) 
    })
    
    
})

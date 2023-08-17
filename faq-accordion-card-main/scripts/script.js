//get all buttons
const acc = document.querySelectorAll('button');

//create an array from button node list and itterate over each item to add event listener
Array.from(acc).forEach((singleAccPanel) =>{
    singleAccPanel.addEventListener('click', function(){

        //onclick grab the next sibling (.description) of the clicked element (button)
        let panel = this.nextElementSibling;

        //and the last child (icon) of the clicked element (button)
        let icon = this.lastChild;
        if(panel.style.display === "block"){
            panel.style.display = "none";
            icon.style.transform = "rotate(0deg)";
        }
        else {
            panel.style.display = "block"
            icon.style.transform = "rotate(180deg)"
        }

        //keep only one panel open at a time
        let panels = document.querySelectorAll('.description');
        Array.from(panels).forEach((item) => {
            if(item.style.display === 'block' && item != panel){
                item.style.display = "none";
            }
        })

        let icons = document.querySelectorAll('.title img');
        Array.from(icons).forEach((item) => {
            if(item.style.transform === "rotate(180deg)" && item != icon){
                item.style.transform = "rotate(0deg)";
            }
        })

    })
})
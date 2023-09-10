//get all buttons
const acc = document.querySelectorAll('button');

//create an array from button node list and itterate over each item to add event listener
Array.from(acc).forEach((singleAccPanel) =>{
    singleAccPanel.addEventListener('click', function(){

        //onclick grab the next sibling (.description) of the clicked element (button)
        let panel = this.nextElementSibling;
        
        //and the first child (.panelName) of the clicked element (button)
        let title = this.firstChild;

        //and the last child (img) of the clicked element (button)
        let icon = this.lastChild;

        //if panel is already shown, hide it, rotate the arrow icon to face down and change the Panel Name font weight to regular
        if(panel.style.display === "block"){
            panel.style.display = "none";
            icon.style.transform = "rotate(0deg)";
            title.style.fontWeight = "400";
        }

        //if panel is closed, show it, rotate the arrow icon to face up and change the Panel Name font weight to bold
        else {
            panel.style.display = "block";
            icon.style.transform = "rotate(180deg)";
            title.style.fontWeight = '700';
        }

        /* keep only one panel open at a time:
        - grab all the panels by class name and itterate thru each panel 
        - on click, if any other panel (item) except for the current one (panel) had been shown, hide it 
        */ 
        let panels = document.querySelectorAll('.description');
        Array.from(panels).forEach((item) => {
            if(item.style.display === 'block' && item != panel){
                item.style.display = "none";
            }
        })
       
        /* When the panel closed, change font weight from bold to regular 
        */
        let panelNames = document.querySelectorAll('.panelName');
        Array.from(panelNames).forEach((panelName) => {
            if(panelName.style.fontWeight == '700' && panelName != title){
                console.log(panelName);
                panelName.style.fontWeight = '400';
            }
        })

        /* When the panel closed, rotate an icon to face down 
        */
        let icons = document.querySelectorAll('.title img');
        Array.from(icons).forEach((item) => {
            if(item.style.transform === "rotate(180deg)" && item != icon){
                item.style.transform = "rotate(0deg)";
            }
        })

    })
})
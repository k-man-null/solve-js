
export const FilterModule = () => {

    //Write solution to the Filter task inside this FilterModule function.
    let buttons = document.querySelectorAll("button");
    buttons.forEach(addEventListener('click',setSwitch))
         
    var switcher = None 
    function setSwitch (e) {
        var identifier 
        e.preventDefault()
        //get the id of the button || even if the span is clicked 
        switcher = e.target.id || e.target.closest("button").id
        //switcher contains the id of the clicked button
        switch (switcher) {
            case '0':
                normalDisplay()
                break;
            case '1':
                normalDisplay()
                identifier = 'R'
                nowYouSeeMe(identifier)
                break;
            case '2':
                normalDisplay()
                identifier = 'Y'
                nowYouSeeMe(identifier)
                break;
            case '3':
                normalDisplay()
                identifier = 'G'
                nowYouSeeMe(identifier)
            }
    }
    //set the display to non in the excluded elements
    function nowYouSeeMe(identifier){
        let elements = document.getElementsByClassName("R")
                for(let i=0;i<elements.length;i++){
                    if(elements[i].firstElementChild.innerHTML !== identifier){
                        elements[i].style.display = 'none'
                    }
                }
    }
    //return display to flex
    function normalDisplay(){
        let elements = document.getElementsByClassName("R")
                for(let i=0;i<elements.length;i++){
                    elements[i].style.display = 'flex'           
                }
    }
}


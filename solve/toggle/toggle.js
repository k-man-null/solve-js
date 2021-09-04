
export const ToggleModule = () => {

    //Write solution to the Toggle task inside this ToggleModule function.
    document.getElementById("switch").addEventListener("click", function() {
        let innerText = document.getElementById("status").innerHTML;
        if(innerText == 'OFF'){
            document.getElementById("status").innerHTML = "ON";
            document.getElementById("status").className = "on";
        }else{
            document.getElementById("status").innerHTML = "OFF";
            document.getElementById("status").className = "off";
        }
      }); 
    
}


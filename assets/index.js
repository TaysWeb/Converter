function TempConvert() {
    // variables to store the degree and give out the temperature by temp selected 
    let result = " ";
    let temp = 0 ;
    let degree = document.getElementById("deg").value ;
    let item = document.getElementById("selectTemp") ;
    // calculations

     if (item.value == 2) {
        temp = ((degree * 9 / 5 ) + 32 ).toFixed(2);
        result = temp + " " + "C";  
     } 
       if (item.value == 1) {
        temp = ((degree - 32 ) * 5 / 9 ).toFixed(2);  
        result = temp + " " + "F";   
     }        
    document.getElementById("results").innerHTML =  result ;

}
function reset() {
    document.getElementById("deg").value =  " "  ;
    document.getElementById("results").innerHTML =  " "  ;
    }
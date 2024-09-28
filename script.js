    alert("loading");
function addNewWEField() {
    console.log("adding new feild");
    newNode = document.createElement("textarea");  
    newNode.classList.add("form-control");   
    newNode.classList.add("weField"); newNode.classList.add("mt-2");   
    newNode.setAttribute("rows", 3);   
    newNode.setAttribute("placeholder", "Enter here");    
    let weob document.getElementById("we");    
    let weAddButton0b = document.getElementById("weAddButton");   
    we0b.insertBefore(newNode, weAddButton0b);
    
} 
    function addNewAQField() {  
    newNode = document.createElement("textarea"); 
    newNode.classList.add("form-control"); 
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter here");
}

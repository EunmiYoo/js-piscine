const sections = document.querySelectorAll("li");
sections.forEach((li) => {
    li.addEventListener("mouseover", function(e){
        
e.target.style.color= "#ff0000";
    })
    li.addEventListener("mouseout", function(e){
        e.target.style.color= "black";
    })
    li.addEventListener("click", function(e){
        e.stopPropagation();
        window.alert(this.innerHTML + " is selected !!");
    })
  
});

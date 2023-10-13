function setEnergy() {
    let energy = document.getElementById("에너지");
    energy.value -= 10;
    energy.style.setProperty("--c","red");
}
function setTime() {
    let ele= document.querySelectorAll("progress");
    for(let i = 0; i < ele.length; i++)
        ele[i].value += 5;
}



window.onload = ()=>{
    setEnergy();
    setTimeout(()=> {setTime()},5000)
}
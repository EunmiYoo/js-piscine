let inputBox = document.getElementById("inputText");
let addToDo = document.getElementById("add");
let list = document.getElementById("list");
let n = 1;

addToDo.addEventListener("click", function() {
   let listToDo = document.createElement("li");
  
   if(!inputBox.value)
    {
        alert("내용을 입력해주세요");
    }
    else
    {
        listToDo.setAttribute("class", "eachList") // 각리스트에 클래스 부여 
        listToDo.setAttribute("id", "li" + n); //각리스트 속성에 아이디 부여 
        listToDo.innerHTML = inputBox.value;
        listToDo.innerHTML += "<button style='float: right;' class='deletebutton' onclick='remove("+n+")'>삭제</button>";
        listToDo.innerHTML += "<button style='float: right;' class='mobutton' onclick='modifier("+n+")'>수정</button>";
        list.appendChild(listToDo);
        n++;
        inputBox.value="";
        
    }
    let sections = document.querySelectorAll("li");
    sections.forEach((li) => {
        li.addEventListener("mouseover", function(e){
            e.target.style.color= "red";
        })
        li.addEventListener("mouseout", function(e){
            e.target.style.color= "black";
        })
       
    })
   
})
function remove(n){
    let li = document.getElementById("li"+n);
    list.removeChild(li);
}
function modifier(n){
    let li = document.getElementById("li" + n);
    let updateText = prompt("할 일 수정", "");
    li.innerHTML= updateText;
    li.innerHTML += "<button style='float: right;' class='deletebutton' onclick='remove("+n+")'>삭제</button>";
    li.innerHTML += "<button style='float: right;' class='mobutton' onclick='modifier("+n+")'>수정</button>";
}
    let date = new Date();
	let hours = date.getHours() <= 12 ? date.getHours() : date.getHours() - 12;
	let AmPm = date.getHours() < 12 ? "오전" : "오후";
	let minutes = date.getMinutes();
	let seconds = date.getSeconds();

	let setTime = date.getFullYear()+"."+(date.getMonth()+1)+"."+ date.getDate() + "."+ AmPm + " " + hours + ":" + minutes + ":" + seconds;
	let	displayTime = document.getElementsByTagName("time")[0];
	displayTime.innerHTML = setTime;


    function showProduct(){
        let getUl= document.getElementsByTagName("li")[0];
        const  productText = document.getElementById("product").value;
        getUl.innerHTML = "상품명: " + productText; 
    
    }
    
    function showPrice()
    {
        let getUl= document.getElementsByTagName("li")[1];
        let priceText = document.getElementById("price").value;
        getUl.innerHTML = "원가: " + priceText;
    }
   
    function isMember()
    {
        let member = document.getElementById("member").checked;
        if (member == true)
        {
            document.getElementById("Lv").disabled = false
            console.log("체크되었음");
        }
        else if (member == false)
        {
            document.getElementById("Lv").disabled = true;
            console.log("해제되었음");
        }

    }

    function selectPrice()
    {
        let priceText = document.getElementById("price").value;
        opt = document.getElementById("Lv").options[document.getElementById("Lv").selectedIndex].value;
        {
            {
                if(opt == "Lv1")
                {           
                    let getUl= document.getElementsByTagName("li")[2];
                    getUl.innerHTML = "할인가: " + (priceText*0.95);
                }
                else if(opt == "Lv2")
                {
                    let getUl= document.getElementsByTagName("li")[2];
                    getUl.innerHTML = "할인가: " + (priceText*0.90);
                }
                else if(opt =="Lv3")
                 {  
                    let getUl= document.getElementsByTagName("li")[2];
                    getUl.innerHTML = "할인가: " + (priceText*0.85);
                 }
                else if(opt == "none")
                 {  
                    let getUl= document.getElementsByTagName("li")[2];
                    getUl.innerHTML = "할인가: " ;
                }
           
            }
       
        }
    }
  




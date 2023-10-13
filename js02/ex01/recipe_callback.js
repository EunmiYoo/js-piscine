function randomFail() {
    if (Math.random() < 0.2) throw "제작 실패..!(월급이 삭감되었다 ㅜㅜ)";
  }

function recipe(){
    setTimeout(()=>{
            randomFail();
            console.log("반죽만들기 완성");
            setTimeout(()=>{
                randomFail();
                console.log("1차 발효 완성");
                setTimeout(()=>{
                    randomFail();
                    console.log("성형하기 완성");
                    setTimeout(()=>{
                        randomFail();
                        console.log("2차발효 완성");
                        setTimeout(()=>{
                            randomFail();
                            console.log("튀기기 완성");
                            
                        },5000);
                        
                    },2000);
                    
                },4200);
            },5000);

    }, 3000);
}

recipe();
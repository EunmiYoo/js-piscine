
function step1(){

    return new Promise(function(resolve, reject){  
        setTimeout(function(){
            if (Math.random() < 0.2)
                reject(new Error("반죽만들기 실패"));
            else {
                console.log("반죽만들기 완성");
                resolve();
            }
        })            
    },3000)}
 
function step2(){
    return new Promise(function(resolve, reject){  
        setTimeout(function(){
            if (Math.random() < 0.2)
                reject(new Error("1차발효 실패"));
            else {
                console.log("1차발효 완성")
                resolve();
            }
         
    },5000)})}

function step3(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){  
            if (Math.random() < 0.2)
                reject(new Error("성형하기 실패"));
            else {  
                console.log("성형하기 완성")
                resolve();
            }          
    },4200)
})}

function step4(){
    return new Promise(function(resolve, reject){  
        setTimeout(function(){
            if (Math.random() < 0.2)
                reject(new Error("2차발효 실패"));
            else {  
                console.log("2차발효 완성")
                resolve();
            }         
    },2000)
})}

function step5(){
    return new Promise(function(resolve){  
        setTimeout(function(){
            if (Math.random() < 0.2)
                reject(new Error("튀기기 실패"));
            else {  
                console.log("튀기기 완성")
                resolve();
            }         
    },5000)
})}

step1(console.log).then(step2).then(step3).then(step4).then(step5);



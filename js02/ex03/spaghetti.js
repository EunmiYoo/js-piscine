function A(){

    return new Promise(function(resolve, reject){  
        setTimeout(function(){
            if (Math.random() < 0.2)
                reject(new Error("면삶기 실패"));
            else {
                console.log("면삶기 완성")
                resolve();
            }
        })            
    },10000)}

function B1(){
    return new Promise(function(resolve, reject){  
        setTimeout(function(){
            if (Math.random() < 0.2)
                reject(new Error("브로콜리 대치기 실패"));
            else {
                console.log("브로콜리 대치기 완성")
                resolve();
            }
        })            
    },1000)}


function B2(){
    return new Promise(function(resolve, reject){  
         setTimeout(function(){
            if (Math.random() < 0.2)
                 reject(new Error("마늘과 양파볶기 실패"));
            else {
                 console.log("마늘과 양파볶기 완성")
                 resolve();
             }})            
     },2000)}

function B3(){
    return new Promise(function(resolve, reject){  
         setTimeout(function(){
            if (Math.random() < 0.2)
                 reject(new Error("베이컨과 햄볶기 실패"));
            else {
                 console.log("베이컨과 햄볶기 완성")
                 resolve();
             }})            
     },2000)}

function B4(){
   return new Promise(function(resolve, reject){  
        setTimeout(function(){
           if (Math.random() < 0.2)
                reject(new Error("소스 남은야채 넣고 다같이 볶기 실패"));
           else {
                console.log("소스 남은야채 넣고 다같이 볶기 완성")
                resolve();
            }})            
    },3000)}

function C(){
    return new Promise(function(resolve, reject){  
        setTimeout(function(){
            if (Math.random() < 0.2)
                reject(new Error("면까지 넣고 다같이 볶기 실패"));
             else {
            console.log("면까지 넣고 다같이 볶기 완성")
             resolve();
            }})            
        },3000)}


let B123=Promise.all[B1(),B2(),B3(),B4()];


Promise.all([A(),B123]).then(C());

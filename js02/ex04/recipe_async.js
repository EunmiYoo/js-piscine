async function Test(){
    await baking("반죽만들기", 3000);
    await baking("1차발효", 5000);
    await baking("성형하기", 4200);
    await baking("2차발효", 2000);
    await baking("튀기기", 5000);
}

function baking(step, sec){
    return new Promise(function(resolve, reject){
    setTimeout(function(){
        if (Math.random() < 0.2)
                reject(new Error(step + "실패"));
           else {
                console.log(step);
                resolve();
           }

    },sec)})
}
Test();
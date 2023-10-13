
export function setTimer(callback, interval){
    let count = 0;
    let interId = setInterval(() => {
        if(callback(count))
            count++;
        else
            clearInterval(interId);
    }, interval);    
}

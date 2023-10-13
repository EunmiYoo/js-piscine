
export function setTimer(callback, interval){
    let count = 0;
    setTimeout(function fn(){
        if(callback(count))
        {
            count++;
            setTimeout(fn, interval);
        }
    }, interval);    
}





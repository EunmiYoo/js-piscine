let beforePosition = document.documentElement.scrollTop

window.addEventListener('scroll', function(){ 
    let _direction = window.scrollY - beforePosition >= 0 ? "아래로" : "위로";
    console.log(_direction); // 콘솔창에 스크롤 방향을 출력
    beforePosition = window.scrollY; // Update scrollY

});
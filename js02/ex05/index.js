
function getData(){
    const axios = require("axios");
    let numRandom = [];
     for(let i=0; i<5; i++)
    {
        let num = Math.floor(Math.random() * 100) + 1;
        numRandom.push(num);
    }
    console.log(numRandom);
    let searchId={
    id: numRandom
    }
  
    axios.get("https://jsonplaceholder.typicode.com/posts", {params: searchId})
    .then(function (response) {
        // 성공했을 때
        console.log(response.data);
      })
      .catch(function (error) {
        // 에러가 났을 때
        console.log(error);
      })
}


getData();



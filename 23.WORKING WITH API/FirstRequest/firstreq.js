const axios = require('axios');

axios
	.get('https://jsonplaceholder.typicode.com/todos/2')
   .then((result) => {
       console.log(result.data)
       
   }).catch((err) => {
       
   });
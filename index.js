const axios = require("axios");

console.log("hello vilag!");

const getData = async () => {
    const response = 5 + 5
    return response;
}
// promise jön vissza
console.log(getData());



/* // Make a request for a user with a given ID
axios.get('http://nemzetisport.hu')
  .then(function (response) {
    // handle success
    console.log(response.status);
    console.log(response.headers);
  })
  .catch(function (error) {
    // handle error
    console.log("error");
  })
  .then(function () {
    // always executed
  }); */

const run = async () => {
  const response = await axios.get("http://nemzetisport.hu");
  const resStatus = response.status;
  console.log(resStatus);
  return 5
};

console.log('1');
const promiseOfResult = run()
promiseOfResult.then(
    (promiseResult) => {
        console.log(promiseResult);
        
    }
)
console.log('2');

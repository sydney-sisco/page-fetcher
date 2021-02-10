const request = require('request'); // for http requests
const fs = require('fs'); // for saving locally

const url = process.argv[2];
const localFilePath = process.argv[3];

request(url, (error, response, body) => {  
  if (error) { 
    console.log('There was an error downloading your data:')
    console.log(error); 
  } else {
    fs.writeFile(localFilePath, body, (err) => { 
      if (err) { 
        console.log('There was an error saving your file:');
        console.log(err);
      } else {
        console.log("Your file has been saved!"); 
      } 
    });  
  }
});

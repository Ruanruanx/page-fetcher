const arguments = process.argv;
const request = require('request');
const fs = require('fs');

const url = arguments[2];
const local = arguments[3];

request(url, (error, response, body) => {
  if (error) {
    console.log('error:', error);
  }
  if (response) {
    console.log('statusCode:', response.statusCode);
  }
  if (body) {
    fs.writeFile(local,body,err =>{
      if(err){
        console.log(err);
      }
      console.log('Downloaded and saved '+body.length+' bytes to '+local);
    })
  }
});


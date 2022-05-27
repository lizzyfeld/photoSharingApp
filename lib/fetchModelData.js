import { HelpOutline } from "@material-ui/icons";

var Promise = require("Promise");

/**
  * FetchModel - Fetch a model from the web server.
  *     url - string - The URL to issue the GET request.
  * Returns: a Promise that should be filled
  * with the response of the GET request parsed
  * as a JSON object and returned in the property
  * named "data" of an object.
  * If the requests has an error the promise should be
  * rejected with an object contain the properties:
  *    status:  The HTTP response status
  *    statusText:  The statusText from the xhr request
  *
*/


// function fetchModel(url) {
//   var xhr = new XMLHttpRequest()

//     // get a callback when the server responds
//     xhr.addEventListener('load', () => {
//       // update the state of the component with the result here
//       console.log(xhr.responseText);
//     })
//     // open the request with the verb and the url
//     xhr.open('GET', url)
//     // send the request
//     xhr.send()
//     return xhr.responseText;
// }

// export default fetchModel;


function fetchModel(url) {
  return new Promise(function(resolve, reject) {
      let currentRequest = new XMLHttpRequest();
      currentRequest.open("GET", url);
      currentRequest.send();
      currentRequest.onreadystatechange = function() {
          if (this.readyState != 4) {
              return;
          }
          if (this.status != 200) {
            reject(new Error(request.status, request.statusText));
          } else {
            resolve({ data: currentRequest.response });
          }
      };
  });
}

export default fetchModel;

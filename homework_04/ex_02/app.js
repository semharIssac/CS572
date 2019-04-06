const http = require('http');
const { Subject } = require('rxjs');
const url = require('url');

const subject = new Subject();
subject.subscribe(processRequest);

http.createServer(serverCallback).listen(1000, () => console.log("Server started!!"));

function serverCallback(request, response) {
  subject.next({request: request, response: response});
}

function processRequest(requestResponseObject) {
  const { request, response} = requestResponseObject;
  const pathname = url.parse(request.url, true).query.url;
  if (pathname) {
    response.end("We got some url", pathname);
    console.log(pathname)
  }
  else response.end("We got url. Thanks");
}

var http = require('http');
const isRoot = require('is-root');

var options = {
  host: 'error418.net'
}

var request = http.get(options, function(res) {
  console.log("Teapot")
  console.log("A short and stout program by Alex Baratti")
  var data = '';
  console.log("\nBrewing coffee...");
  res.on('data', function(chunk) {
    data += chunk;
  });
  res.on('end', function() {
    if (!isRoot()) {
      console.log("\x1b[31m", "");
      console.log("Status Code: 418 -- I am a teapot.");
      console.log("Any attempt to brew coffee with a teapot should result in the error code \"418 I'm a teapot\". The resulting entity body MAY be short and stout.");
      console.log("\x1b[33m");
      console.log("Tip: Did you try running as root?");
      console.log("\x1b[0m");
    } else {
      console.log("Status Code: 200 -- OK");
      console.log("Against all odds, the teapot brewed coffee.\n");
      console.log("OUTPUT:");
      console.log("☕️\n");
    }
  });
});
request.on('error', function(e) {
  if (e.message == "getaddrinfo ENOTFOUND error418.net error418.net:80") {
    console.log("\x1b[31m", "");
    console.log("Unable to connect to the internet!");
    console.log("This teapot must be connected to the internet to function.");
    console.log("\x1b[0m");
  } else {
    console.log("\x1b[31m", "");
    console.log("An actual error occurred unrelated to the fact that you are attempting to brew coffee using a teapot.")
    console.log(e.message);
    console.log("\x1b[0m");
  }
});
request.end();

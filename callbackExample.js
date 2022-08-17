function doSomethingForFiveSeconds(cb) {
  setTimeout(() => cb(Math.random()), 5000);
}

// callback function
function doSomethingAfter(res) {
  console.log("callback received value: ", res);
}

doSomethingForFiveSeconds(doSomethingAfter);

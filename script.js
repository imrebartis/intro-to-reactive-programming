var requestStream = Rx.Observable.of('https://api.github.com/users');

// flatMap is now an alias for mergeMap 
// but will work just the same.
var responseStream = requestStream
  .flatMap(requestUrl =>
    Rx.Observable.fromPromise(jQuery.getJSON(requestUrl))
  );

responseStream.subscribe(response => {
  console.log(response)});
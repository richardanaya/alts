#alts.js

##Why Promise.race() Sucks

Simply: it gives you no context of who won the race!

```javascript
var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "Hello!");
});
var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "Hello!");
});

Promise.race([p1, p2]).then(function(value) {
  console.log(value); // "Hello!"
  //WAIT! who just gave me this?
});
```

##Why "alts"?

This function is popular from the clojure world where its used to race channels. Alts comes from the word "alternatives".

##Who shot first?

```javascript
var p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, "Greedo");
});

var p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 100, "Han");
});

alts(p1,p2).then(function(result){
  result.source //p2
  result.value //"Han"
}).catch(function(result){
  console.log("All promises failed! :(")
})
```

#Install

```
<script src="https://cdn.rawgit.com/richardanaya/alts/master/alts.js"></script>
```

or

```
npm install alts
```

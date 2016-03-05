// alts.js
// repo    : https://github.com/richardanaya/alts
// license : MIT

(function (window, module) {
  "use strict";

  function alts(){
    var isResolved = false;
    var rejectCount = 0;

    var promises = Array.prototype.slice.call(arguments);
    function watchPromise(promise,resolve, reject){
      promise.then(function(result){
        if(!isResolved){
          isResolved=true;
          resolve({source:promise,value:result});
        }
      }).catch(function(){
        rejectCount++;
        if(rejectCount==promises.length){
          reject(promises);
        }
      })
    }

    var p = new Promise(function(resolve,reject){
      promises.forEach(function(p){watchPromise(p,resolve,reject);})
    })
    return p;
  }

  window.alts = module.exports = alts;
})(
  typeof window !== "undefined" ? window : {},
  typeof module !== "undefined" ? module : {}
);

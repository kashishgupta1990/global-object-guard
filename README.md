# global-object-guard lets you control and Manage Global Object

`global-object-guard` is a utility module which provides straight-forward, powerful functions
for working with global objects in JavaScript. It designed for
use with [Node.js](http://nodejs.org), it can not used in the
browser.

global-object-guard provides around 4 functions that include the usual 'functional'
suspects (`Create`, `getDifference`, `rePositionGlobalObject`, `refreshGlobalObject`). All these
functions assume you follow the Node.js convention. This will help the `developer` to track their `global object` in node and allow them to check the `status` of the global object and also helps them to `clean` the global object.


## Quick Example

```javascript
// Require this Package
var GlobalObjectGuard = require('global-object-guard');

//My All Global Object Settings
_appSetting = {
    PORT: 2000,
    HOST: "http://localhost"
};

_otherServerSetting = {
    //So on...
};
//--------------------------------------------

// Just Apply GlobalObjectGuard
var gb = GlobalObjectGuard.Create(global);

// Do your code .......

// Some time Mistake get happen
obj = {name: "Kashish", age: 24};

// Don't worry just check the Global Pollution if you want.
var result = gb.getDifference();
console.log("Checking Global Object Pollution: ", result);
// Output: Checking Global Object Pollution:  { obj: [ { name: 'Kashish', age: 24 } ] }

// You can RePosition Your Global Object State
// This will Set Your Current Global State as a default State
// (NOTE: ALL THE GLOBAL POLLUTION BECOME THE PART OF GLOBAL OBJECT)
gb.rePositionGlobalObject(global);

// Recheck the Status
result = gb.getDifference();
console.log("After RePosition the Global Object: " + JSON.stringify(result));
// Output: After RePosition the Global Object: {}

// Lets do some mistake
(function () {
    person = {address: "B4-90 US"}
})();

result = gb.getDifference();
console.log("Opes Just hit the global object: " + JSON.stringify(result));
// Output: Opes Just hit the global object: {"person":[{"address":"B4-90 US"}]}

// Let this GlobalObjectGuard take care this cleaning work.
gb.refreshGlobalObject();

// Check the status. Every Thing is Clean Now.
result = gb.getDifference();
console.log("Everything is clean by GlobalObjectGuard: " + JSON.stringify(result));
// Output: Everything is clean by GlobalObjectGuard: {}

```

## Download

The source is available for download from
[GitHub](https://github.com/kashishgupta1990/global-object-guard).
Alternatively, you can install using Node Package Manager (`npm`):

Installation
------------

``` bash
$ npm install global-object-guard
```


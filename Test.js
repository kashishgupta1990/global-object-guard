/* *
 * Use Of GlobalObjectGuard
 * Description: Now you can clean your global shit and recover your self with Memory Leak Problem
 * Created By: Kashish Gupta
 * *
 * */

// Require this Package
var GlobalObjectGuard = require('./');

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

// You can RePosition Your Global Object State
// This will Set Your Current Global State as a default State
// (NOTE: ALL THE GLOBAL POLLUTION BECOME THE PART OF GLOBAL OBJECT)
gb.rePositionGlobalObject(global);

// Recheck the Status
result = gb.getDifference();
console.log("After RePosition the Global Object: " + JSON.stringify(result));

//Lets do some mistake
(function () {
    person = {address: "B4-90 US"}
})();

result = gb.getDifference();
console.log("Opes Just hit the global object: " + JSON.stringify(result));

// Let this GlobalObjectGuard take care this cleaning work.
gb.refreshGlobalObject();

// Check the status. Every Thing is Clean Now.
result = gb.getDifference();
console.log("Everything is clean by GlobalObjectGuard: " + JSON.stringify(result));
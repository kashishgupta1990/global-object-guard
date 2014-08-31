//Step - 1 Get global object snapshot at different interval of time.
//Step - 2 Compare the number of snapshot we have
//Step - 3 Find Is snapshot is different.
//Step - 4 Return the Filename, Line Number, Property Added in Global Object.

var ObjectMonitor = require('./modules/ObjectMonitor');

exports = module.exports.Create = function (GlobalObject) {
    var obj = {}, ObjectOne;
    if (GlobalObject) {
        ObjectOne = ObjectMonitor.getObjectSnapShot(GlobalObject);
    } else {
        ObjectOne = {};
    }

    obj.rePositionGlobalObject = function (globalObject) {
        ObjectOne = ObjectMonitor.getObjectSnapShot(globalObject);
    };

    obj.getDifference = function () {
        var result = {};
        var gb = ObjectMonitor.getObjectSnapShot(global);
        result = ObjectMonitor.getDifferenceBetweenObject(ObjectOne, gb);
        delete result.process;
        return  result;
    };

    obj.refreshGlobalObject = function () {
        var toBeRemoved = obj.getDifference();
        for (var key in toBeRemoved) {
            if (toBeRemoved.hasOwnProperty(key)) {
                delete global[key];
            }
        }
    };

    return obj;
};











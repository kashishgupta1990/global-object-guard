exports = module.exports = (function () {

    // Including jsondiffpatch Dependence
    var jsondiffpatch = require('jsondiffpatch');

    // Create a configured instance, match objects by name
    var diffpatcher = jsondiffpatch.create({
        objectHash: function (obj) {
            return obj.name;
        }
    });

    function getObjectSnapShot(objectName) {
        // Removing Circular reference
        var cache = [];
        var result = JSON.stringify(objectName, function (key, value) {
            if (typeof value === 'object' && value !== null) {
                if (cache.indexOf(value) !== -1) {
                    // Circular reference found, discard key
                    return;
                }
                // Store value in our collection
                cache.push(value);
            }
            return value;
        });
        cache = null; // Enable garbage collection
        return JSON.parse(result);
    }

    function getDifferenceBetweenObject(objectOne, objectTwo, ignoreObjectPropertyArray) {

        var diff = diffpatcher.diff(objectOne, objectTwo);
        return diff || {};
    }

    //Interface Object of Object Module
    return{
        getObjectSnapShot: getObjectSnapShot,
        getDifferenceBetweenObject: getDifferenceBetweenObject
    }

})();
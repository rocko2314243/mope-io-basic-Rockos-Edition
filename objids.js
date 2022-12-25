let objids = 1
function objidsload() {
    this.a = 1
}
objidsload.prototype = {
    giveid: function (up) {
        if (objids > Infinity) {
            objids = 1
        }
        var oldid = objids
        if (up) {
            objids++
        }
        return oldid;

    }
}
module.exports = objidsload

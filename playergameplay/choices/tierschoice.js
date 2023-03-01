const utils1 = require("../../modules/IMPmodules/util")
const util = new utils1()
function tiers() {
    this.a = 0
}
tiers.prototype = {
    tier13: function (isall) {

        let lava = [
         88, 0, 0,
        ]
        let land = [
            48, 0, 0,
            52, 0, 0,
            65, 0, 0,
            87, 6, 0,
            1, 0, 0,
        ]

        let sea = [
            49, 1, 0,
        ]
        let ice = [
            43, 2, 0,
        ]

        let t = [];
        t = t.concat(lava)
        t = t.concat(land)
        t = t.concat(sea)
        t = t.concat(ice)
        return t;

    },
    tier14: function (isall) {


        let lava = [
            68, 3, 0,
            68, 3, 1,
            68, 3, 2,
        ]
        let land = [
            14, 0, 1,
            14, 0, 6,
            14, 0, 12,
            14, 0, 13,

            53, 0, 0,
            53, 0, 1,
            53, 0, 2,

            77, 0, 0,
            77, 0, 1,
            77, 0, 2,
            77, 0, 12,
            80, 0, 0,
            85, 0, 0,
        ]

        let sea = [
            24, 1, 0,
            24, 1, 1,
            24, 1, 2,
            83, 1, 0,

            61, 1, 0,
            61, 1, 1,
            61, 1, 2,
        ]
        let ice = [
            32, 2, 0,
            32, 2, 1,
            32, 2, 2,
            84, 2, 0,
        ]
  
        let t = [];
        t = t.concat(lava)
        t = t.concat(land)
        t = t.concat(sea)
        t = t.concat(ice)
        return t;

    },
    tier15: function (isall) {

        let lava = [
            71, 3, 0,
        ]
        let land = [
            73, 0, 0,
            78, 0, 0,
            78, 0, 1,
            78, 0, 2,
            76, 0, 0,
        ]

        let sea = [
            70, 1, 0,
        ]
        let ice = [
            72, 2, 0,
        ]

        let t = [];
        t = t.concat(lava)
        t = t.concat(land)
        t = t.concat(sea)
        t = t.concat(ice)
        return t;

    },
    tier16: function (isall) {

        let lava = [
            79, 3, 0,
            79, 3, 1,
            79, 3, 2,
            79, 3, 3,
            79, 3, 4,
            79, 3, 69,
            79, 3, 5,
            79, 3, 6,
            79, 3, 200,
            46, 3, 0,
            46, 3, 1,
            46, 3, 2,
        ]
        let land = [

        ]

        let sea = [

        ]
        let ice = [

        ]

        let t = [];
        t = t.concat(lava)
        t = t.concat(land)
        t = t.concat(sea)
        t = t.concat(ice)
        return t;
    },
    bosstier: function () {
        var t = [
            60, 2, 0,
        ]

        return t;
    },
}
module.exports = tiers


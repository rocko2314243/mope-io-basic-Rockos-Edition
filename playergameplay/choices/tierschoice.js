const utils1 = require("../../modules/IMPmodules/util")
const util = new utils1()
function tiers() {
    this.a = 0
}
tiers.prototype = {
         tier1: function (isall) {

        let lava = [
        ]
        let land = [
            1, 0, 0,
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
         tier2: function (isall) {

        let lava = [
        ]
        let land = [
            2, 0, 0,
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
         tier3: function (isall) {

        let lava = [
        ]
        let land = [
            3, 0, 0,
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
         tier4: function (isall) {

        let lava = [
        ]
        let land = [
            4, 0, 0,
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
     tier5: function (isall) {

        let lava = [
        ]
        let land = [
            5, 0, 0,
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
     tier6: function (isall) {

        let lava = [
        ]
        let land = [
            6, 0, 0,
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
    tier12: function (isall) {

        let lava = [
        ]
        let land = [
            12, 0, 0,
            56, 7, 0,
            85, 7, 0,
        ]

        let sea = [
            19, 1, 0,
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
    tier13: function (isall) {

        let lava = [
        ]
        let land = [
            13, 0, 0,
            48, 7, 0,
            65, 7, 0,
            87, 6, 0,
            43, 7, 0,
        ]

        let sea = [
            49, 7, 0,
             26, 1, 0,
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
    tier14: function (isall) {


        let lava = [
           // 68, 3, 0,
        ]
        let land = [
            14, 0, 1,

           // 53, 0, 0,


           // 77, 0, 0,
            
          //  80, 0, 0,
          //  85, 0, 0,
        ]

        let sea = [
            24, 1, 0,
         //   83, 1, 0,

         //   61, 1, 0,
        ]
        let ice = [
          //  32, 2, 0,
         //   84, 2, 0,
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
          //  71, 3, 0,
            46, 3, 0,
          //  46, 3, 1,
         //   46, 3, 2,
        ]
        let land = [
           // 73, 0, 0,
           // 78, 0, 0,
          //  78, 0, 1,
          //  78, 0, 2,
           // 76, 0, 0,
        ]

        let sea = [
          //  70, 1, 0,
        ]
        let ice = [
          //  72, 2, 0,
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
         //   79, 3, 0,
           // 79, 3, 1,
          //  79, 3, 2,
          //  79, 3, 3,
          //  79, 3, 4,
         //   79, 3, 69,
          //  79, 3, 5,
          //  79, 3, 6,
         //   79, 3, 200,
             89, 7, 0,
            90, 7, 0,
            91, 7, 0,
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


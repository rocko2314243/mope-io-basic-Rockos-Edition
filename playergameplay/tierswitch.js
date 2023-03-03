
const tierload1 = require("./choices/tierschoice")
const tierload = new tierload1()
var tier1 = tierload.tier1(true)
var tier2 = tierload.tier2(true)
var tier3 = tierload.tier3(true)
var tier4 = tierload.tier4(true)
var tier5 = tierload.tier5(true)
var tier6 = tierload.tier6(true)
var tier7 = tierload.tier7(true)
var tier8 = tierload.tier8(true)
var tier9 = tierload.tier9(true)
var tier10 = tierload.tier10(true)
var tier11 = tierload.tier11(true)
var tier12 = tierload.tier12(true)
var tier12 = tierload.tier12(true)
var tier13 = tierload.tier13(true)
var tier14 = tierload.tier14(true)
var tier15 = tierload.tier15(true)
var tier16 = tierload.tier16(true)
var bosstier = tierload.bosstier(true)
var t1 = [];
var t2 = [];
var t3 = [];
var t4 = [];
var t5 = [];
var t6 = [];
var t7 = [];
var t8 = [];
var t9 = [];
var t10 = [];
var t11 = [];
var t12 = [];
var t13 = [];
var t14 = [];
var t15 = [];
var t16 = [];
var tboss = []
for (var i = 0; i < tier1.length / 3; i++) {
    t1.push(tier1[i * 3])
}
for (var i = 0; i < tier2.length / 3; i++) {
    t2.push(tier2[i * 3])
}
for (var i = 0; i < tier2.length / 3; i++) {
    t2.push(tier2[i * 3])
}
for (var i = 0; i < tier3.length / 3; i++) {
    t3.push(tier3[i * 3])
}
for (var i = 0; i < tier4.length / 3; i++) {
    t4.push(tier4[i * 3])
}
for (var i = 0; i < tier5.length / 3; i++) {
    t5.push(tier5[i * 3])
}
for (var i = 0; i < tier6.length / 3; i++) {
    t6.push(tier6[i * 3])
}
for (var i = 0; i < tier7.length / 3; i++) {
    t7.push(tier7[i * 3])
}
for (var i = 0; i < tier8.length / 3; i++) {
    t8.push(tier8[i * 3])
}
for (var i = 0; i < tier9.length / 3; i++) {
    t9.push(tier9[i * 3])
}
for (var i = 0; i < tier10.length / 3; i++) {
    t10.push(tier10[i * 3])
}
for (var i = 0; i < tier11.length / 3; i++) {
    t11.push(tier11[i * 3])
}

for (var i = 0; i < tier12.length / 3; i++) {
    t12.push(tier12[i * 3])
}
for (var i = 0; i < tier13.length / 3; i++) {
    t13.push(tier13[i * 3])
}
for (var i = 0; i < tier14.length / 3; i++) {
    t14.push(tier14[i * 3])
}
for (var i = 0; i < tier15.length / 3; i++) {
    t15.push(tier15[i * 3])
}
for (var i = 0; i < tier16.length / 3; i++) {
    t16.push(tier16[i * 3])
}
for (var i = 0; i < bosstier.length / 3; i++) {
    tboss.push(bosstier[i * 3])
}
function animalswitcher(player, writer, id) {
    var innerWidth = 950
    var innerHeight = innerWidth * 0.65


    switch (player.tier) {
        case 16:
            player.oldupxp = 30000000
            player.maxhp = player.hp = 250
            player.angles.anglespeed = 20
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            if (!player.isbot) {
                if (player.isplayer) {

                    player.playcamera = 1.5;

                    for (var m in t13) {
                        player.preys.push(t13[m])
                        player.tailbite.push(t13[m])
                    }
                    for (var m in t14) {
                        player.preys.push(t14[m])
                        player.tailbite.push(t14[m])
                    }
                    for (var m in t15) {
                        player.preys.push(t15[m])
                        player.tailbite.push(t15[m])
                    }
                    for (var m in t16) {

                        player.tailbite.push(t16[m])
                    }
                    for (var m in tboss) {

                        player.tailbite.push(tboss[m])
                    }
                    player.zoomwidth = innerWidth / 1.4
                    player.zoomheight = innerHeight / 1.4
                }
            }
            break;

        case 15:
            player.oldupxp = 10000000
            player.maxhp = player.hp = 150
            player.angles.anglespeed = 23
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.55;

                    player.tailbite = [t14,
                        t15, t16]
                    player.predators = [t16]
                    player.preys = [t14]
                    for (var m in t13) {
                        player.preys.push(t13[m])
                        player.tailbite.push(t13[m])
                    }
                    for (var m in t14) {
                        player.preys.push(t14[m])
                        player.tailbite.push(t14[m])
                    }
                    for (var m in t15) {

                        player.tailbite.push(t15[m])
                    }
                    for (var m in t16) {
                        player.predators.push(t16[m])
                        player.tailbite.push(t16[m])
                    }
                    for (var m in tboss) {

                        player.predators.push(tboss[m])
                    }
                    player.zoomwidth = innerWidth / 1.45
                    player.zoomheight = innerHeight / 1.45
                }
            }
            break;
        case 14:
            player.oldupxp = 1000000
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 25
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.6;
                          for (var m in t12) {
                        player.preys.push(t12[m])
                        player.tailbite.push(t12[m])
                    }
                    for (var m in t13) {
                        player.preys.push(t13[m])
                        player.tailbite.push(t13[m])
                    }
                    for (var m in t14) {
                        player.tailbite.push(t14[m])
                    }
                    for (var m in t15) {
                        player.predators.push(t15[m])
                        player.tailbite.push(t15[m])
                    }
                    for (var m in t16) {
                        player.predators.push(t16[m])
                        player.tailbite.push(t16[m])
                    }
                    for (var m in tboss) {

                        player.predators.push(tboss[m])
                    }
                    player.zoomwidth = innerWidth / 1.5
                    player.zoomheight = innerHeight / 1.5
                }
            }
            break;
        case 13:
            player.oldupxp = 500000
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                        for (var m in t12) {
                        player.preys.push(t12[m])
                        player.tailbite.push(t12[m])
                    }
                    for (var m in t14) {
                        player.predators.push(t14[m])
                        player.tailbite.push(t14[m])
                    }
                    for (var m in t15) {
                        player.predators.push(t15[m])
                        player.tailbite.push(t15[m])
                    }
                    for (var m in t16) {
                        player.predators.push(t16[m])
                        player.tailbite.push(t16[m])
                    }
                    for (var m in tboss) {

                        player.predators.push(tboss[m])
                    }
                    player.zoomwidth = innerWidth / 1.4
                    player.zoomheight = innerHeight / 1.4
                }
            }
            break;
      case 12:
            player.oldupxp = 125000
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                       for (var m in t13) {
                        player.predators.push(t13[m])
                        player.tailbite.push(t13[m])
                    }
                    for (var m in t14) {
                        player.predators.push(t14[m])
                        player.tailbite.push(t14[m])
                    }
                    for (var m in t15) {
                        player.predators.push(t15[m])
                        player.tailbite.push(t15[m])
                    }
                    for (var m in t16) {
                        player.predators.push(t16[m])
                        player.tailbite.push(t16[m])
                    }
                    for (var m in tboss) {

                        player.predators.push(tboss[m])
                    }
                    player.zoomwidth = innerWidth / 1.3
                    player.zoomheight = innerHeight / 1.3
                }
            }
            break;
                  case 1:
            player.oldupxp = 0
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                   
                    player.zoomwidth = innerWidth / 1.3
                    player.zoomheight = innerHeight / 1.3
                }
            }
            break;
                              case 2:
            player.oldupxp = 50
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                   
                    player.zoomwidth = innerWidth / 1.3
                    player.zoomheight = innerHeight / 1.3
                }
            }
            break;
                              case 3:
            player.oldupxp = 100
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                   
                    player.zoomwidth = innerWidth / 1.3
                    player.zoomheight = innerHeight / 1.3
                }
            }
            break;
                              case 4:
            player.oldupxp = 500
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                   
                    player.zoomwidth = innerWidth / 1.3
                    player.zoomheight = innerHeight / 1.3
                }
            }
            break;
                              case 5:
            player.oldupxp = 1000
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                   
                    player.zoomwidth = innerWidth / 1.3
                    player.zoomheight = innerHeight / 1.3
                }
            }
            break;
                              case 6:
            player.oldupxp = 2000
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                   
                    player.zoomwidth = innerWidth / 1.3
                    player.zoomheight = innerHeight / 1.3
                }
            }
            break;
                              case 7:
            player.oldupxp = 5000
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                   
                    player.zoomwidth = innerWidth / 1.3
                    player.zoomheight = innerHeight / 1.3
                }
            }
            break;
                                          case 7:
            player.oldupxp = 5000
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                   
                    player.zoomwidth = innerWidth / 1.3
                    player.zoomheight = innerHeight / 1.3
                }
            }
            break;
                                          case 8:
            player.oldupxp = 8000
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                   
                    player.zoomwidth = innerWidth / 1.3
                    player.zoomheight = innerHeight / 1.3
                }
            }
            break;
                                          case 9:
            player.oldupxp = 12000
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                   
                    player.zoomwidth = innerWidth / 1.3
                    player.zoomheight = innerHeight / 1.3
                }
            }
            break;
                                          case 10:
            player.oldupxp = 60000
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                   
                    player.zoomwidth = innerWidth / 1.3
                    player.zoomheight = innerHeight / 1.3
                }
            }
            break;
                                          case 11:
            player.oldupxp = 80000
            player.foods = [50, 51, 83, 82, 35, 37, 32, 48, 22, 24, 21]
            player.angles.anglespeed = 28
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.75;
                   
                    player.zoomwidth = innerWidth / 1.3
                    player.zoomheight = innerHeight / 1.3
                }
            }
            break;
        default:
            player.foods = []
            if (!player.isbot) {
                if (player.isplayer) {
                    player.playcamera = 1.2;
                    player.tailbite = []
                    player.predators = []
                    player.preys = []
                    player.zoomwidth = innerWidth
                    player.zoomheight = innerHeight
                }
            }
    }
    if (!player.isbot) {
        player.ws.send(writer.aniinfo(player.species, id, player.nextxp, player.secondaryType, player.predators, player.preys, player.tailbite, player.foods));
        player.predators = []
        player.preys = []
        player.tailbite = []

    }
}
animalswitcher.prototype = {}
module.exports = animalswitcher

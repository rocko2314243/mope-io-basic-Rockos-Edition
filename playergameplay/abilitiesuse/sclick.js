
const tailslapuse = require('../../entity/abilitys/kdtailslap')
const thunderabil = require('../../entity/abilitys/thunderabil')

const utils1 = require("../../modules/IMPmodules/util")

const util = new utils1()
function abilities(aobjids, player, entities) {
    if (entities[player]) {

        if (entities[player].bar.normalbar != 3) {

        } else {

            if (entities[player].secondaryType == 89) {
                if (entities[player].canUseTailslap && entities[player].tailState == 0) {

                    entities[player].tailState = 0
                    entities[player].canUseTailslap = true
                   // new tailslapuse(aobjids, entities, player)
                    new thunderabil(entities, player, aobjids, writer, which)
                }
            }
        }
    }
}
abilities.prototype = {}
module.exports = abilities

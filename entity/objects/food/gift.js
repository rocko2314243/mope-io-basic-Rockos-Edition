
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


function gift(id, newid, x, y) {
    this.class = 'Food'
    this.isdead = false;

    this.id = id;

    this.radius = randomNumber(20, 30)
    this.isbiome = false;
    this.sendhp = false
    this.type = 85; //object type (animal. hill bush)
    this.collideable = true
    this.xp = 99999
    this.water = 10
    this.spawned = false
    this.isloaded = false
    this.energy = 20
    this.spawnedby2 = newid
    this.biome = 1
    this.movable = false
    this.speed = 10
    this.killerid = 0
    this.isinvisible = false
    this.x = x
    this.y = y
    this.isinquadtree = false
    this.lowestrespawnsec = 30
    this.bigestrespawnsec = 60
    this.veloX = 0
    this.veloY = 0
    this.deathtime = 80
    this.spawnedtime = Date.now();
};


gift.prototype = {

};
gift.prototype.customdatawriteoncreate = function (buf, off) {
}
gift.prototype.customdatawriteonupdate = function (buf, off) {
}

module.exports = gift;

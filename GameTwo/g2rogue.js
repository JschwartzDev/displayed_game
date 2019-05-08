let rogueCreator = new Function("empty",`
  this.name = "Rogue";
  this.rand = Math.floor(Math.random() * 10);
  this.level = 1;
  this.health = 125;
  this.potHealAmount = 50;
  this.potionCount = 3;
  this.gold = 0;
  this.strength = 13;
  this.defense = 0;
  this.inventory = [];
  this.combat = function(){

    let attacks = {
      envenom: Math.floor(Math.random() * this.strength) + 5,
      sinisterStrike: Math.floor(Math.random() * this.strength) + 5,
      rupture: Math.floor(Math.random() * this.strength) + 5,
      eviscerate: Math.floor(Math.random() * this.strength) + 5,
      backstab: Math.floor(Math.random() * this.strength) + 5,
      ambush: Math.floor(Math.random() * this.strength) + 5,
      shadowStep: Math.floor(Math.random() * this.strength) + 5,
      throwWeapon: Math.floor(Math.random() * this.strength) + 5,
      pistolShot: Math.floor(Math.random() * this.strength) + 5,
      kidneyShot: Math.floor(Math.random() * this.strength) + 5,
    }

    let keys = [];
    function keyReader(object, array){
      for(let key in object){
        array.push(key);
      }
    }

    keyReader(attacks,keys);
    return attacks[keys[this.rand]];
  }
`);

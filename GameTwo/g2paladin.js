let paladinCreator = new Function("empty",`
  this.name = "Paladin";
  this.rand = Math.floor(Math.random() * 10);
  this.level = 1;
  this.health = 150;
  this.potHealAmount = 50;
  this.potionCount = 3;
  this.gold = 0;
  this.strength = 15;
  this.defense = 0;
  this.inventory = [];
  this.combat = function(){

    let attacks = {
      divineStorm: Math.floor(Math.random() * this.strength) + 5,
      judgement: Math.floor(Math.random() * this.strength) + 5,
      holyShock: Math.floor(Math.random() * this.strength) + 5,
      hammerOfJustice: Math.floor(Math.random() * this.strength) + 5,
      consecration: Math.floor(Math.random() * this.strength) + 5,
      lightOfDawn: Math.floor(Math.random() * this.strength) + 5,
      beaconOfLight: Math.floor(Math.random() * this.strength) + 5,
      templarsVerdict: Math.floor(Math.random() * this.strength) + 5,
      crusaderStrike: Math.floor(Math.random() * this.strength) + 5,
      bladeOfJustice: Math.floor(Math.random() * this.strength) + 5,
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

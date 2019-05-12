let warriorCreator = new Function("empty",`
  this.name = "Warrior";
  this.rand = Math.floor(Math.random() * 10);
  this.level = 1;
  this.exp = 0;
  this.health = 300;
  this.maxHealth = 300;
  this.mana = 0;
  this.maxMana = 1;
  this.potHealAmount = this.maxHealth/2;
  this.potionCount = 5;
  this.gold = 200;
  this.strength = 12 + this.level;
  this.intellect = 10;
  this.agility = 10;
  this.defense = 0;
  this.inventory = [];
  this.ironOreCount = 0;
  this.ironBarCount = 0;
  this.mithrilOreCount = 0;
  this.mithrilBarCount = 0;
  this.thoriumOreCount = 0;
  this.thoriumBarCount = 0;
  this.craftingLevel = 0;
  this.craftingExperience = 0;
  this.combat = function(){

    let attacks = {
      overPower: Math.floor(Math.random() * this.strength) + 5,
      cleave: Math.floor(Math.random() * this.strength) + 5,
      slam: Math.floor(Math.random() * this.strength) + 5,
      maul: Math.floor(Math.random() * this.strength) + 5,
      execute: Math.floor(Math.random() * this.strength) + 5,
      revenge: Math.floor(Math.random() * this.strength) + 5,
      heroicStrike: Math.floor(Math.random() * this.strength) + 5,
      throwWeapon: Math.floor(Math.random() * this.strength) + 5,
      hamstring: Math.floor(Math.random() * this.strength) + 5,
      blaseFlurry: Math.floor(Math.random() * this.strength) + 5,
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


let paladinCreator = new Function("empty",`
  this.name = "Paladin";
  this.rand = Math.floor(Math.random() * 10);
  this.level = 1;
  this.exp = 0;
  this.health = 250 * this.level;
  this.maxHealth = 250;
  this.mana = 0;
  this.maxMana = 1;
  this.potHealAmount = this.maxHealth/2;
  this.potionCount = 5;
  this.gold = 200;
  this.strength = 12 + this.level;
  this.intellect = 10;
  this.agility = 10;
  this.defense = 0;
  this.inventory = [];
  this.ironOreCount = 0;
  this.ironBarCount = 0;
  this.mithrilOreCount = 0;
  this.mithrilBarCount = 0;
  this.thoriumOreCount = 0;
  this.thoriumBarCount = 0;
  this.craftingLevel = 0;
  this.craftingExperience = 0;
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

let rogueCreator = new Function("empty",`
  this.name = "Rogue";
  this.rand = Math.floor(Math.random() * 10);
  this.level = 1;
  this.exp = 0;
  this.health = 250 * this.level;
  this.maxHealth = 250;
  this.mana = 0;
  this.maxMana = 1;
  this.potHealAmount = this.maxHealth/2;
  this.potionCount = 5;
  this.gold = 200;
  this.agility = 12 + this.level;
  this.strength = 10;
  this.intellect = 10;
  this.defense = 0;
  this.inventory = [];
  this.ironOreCount = 0;
  this.ironBarCount = 0;
  this.mithrilOreCount = 0;
  this.mithrilBarCount = 0;
  this.thoriumOreCount = 0;
  this.thoriumBarCount = 0;
  this.craftingLevel = 0;
  this.craftingExperience = 0;
  this.combat = function(){

    let attacks = {
      envenom: Math.floor(Math.random() * this.agility) + 5,
      sinisterStrike: Math.floor(Math.random() * this.agility) + 5,
      rupture: Math.floor(Math.random() * this.agility) + 5,
      eviscerate: Math.floor(Math.random() * this.agility) + 5,
      backstab: Math.floor(Math.random() * this.agility) + 5,
      ambush: Math.floor(Math.random() * this.agility) + 5,
      shadowStep: Math.floor(Math.random() * this.agility) + 5,
      throwWeapon: Math.floor(Math.random() * this.agility) + 5,
      pistolShot: Math.floor(Math.random() * this.agility) + 5,
      kidneyShot: Math.floor(Math.random() * this.agility) + 5,
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

let hunterCreator = new Function("empty",`
  this.name = "Hunter";
  this.rand = Math.floor(Math.random() * 10);
  this.level = 1;
  this.exp = 0;
  this.health = 250 * this.level;
  this.maxHealth = 250;
  this.mana = 0;
  this.maxMana = 1;
  this.potHealAmount = this.maxHealth/2;
  this.potionCount = 5;
  this.gold = 200;
  this.intellect = 10 ;
  this.strength = 10;
  this.agility = 12 + this.level;
  this.defense = 0;
  this.inventory = [];
  this.ironOreCount = 0;
  this.ironBarCount = 0;
  this.mithrilOreCount = 0;
  this.mithrilBarCount = 0;
  this.thoriumOreCount = 0;
  this.thoriumBarCount = 0;
  this.craftingLevel = 0;
  this.craftingExperience = 0;
  this.combat = function(){

    let attacks = {
      envenom: Math.floor(Math.random() * this.intellect) + 5,
      sinisterStrike: Math.floor(Math.random() * this.intellect) + 5,
      rupture: Math.floor(Math.random() * this.intellect) + 5,
      eviscerate: Math.floor(Math.random() * this.intellect) + 5,
      backstab: Math.floor(Math.random() * this.intellect) + 5,
      ambush: Math.floor(Math.random() * this.intellect) + 5,
      shadowStep: Math.floor(Math.random() * this.intellect) + 5,
      throwWeapon: Math.floor(Math.random() * this.intellect) + 5,
      pistolShot: Math.floor(Math.random() * this.intellect) + 5,
      kidneyShot: Math.floor(Math.random() * this.intellect) + 5,
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

let shamanCreator = new Function("empty",`
  this.name = "Shaman";
  this.rand = Math.floor(Math.random() * 10);
  this.level = 1;
  this.exp = 200;
  this.health = 250 * this.level;
  this.maxHealth = 250;
  this.mana = 500;
  this.maxMana = 500;
  this.manaPotionCount = 7;
  this.manaPotionRecoverAmount = this.maxMana/2;
  this.potHealAmount = this.maxHealth/2;
  this.potionCount = 5;
  this.gold = 200;
  this.intellect = 12 + this.level;
  this.strength = 10;
  this.agility = 10;
  this.defense = 0;
  this.inventory = [];
  this.ironOreCount = 0;
  this.ironBarCount = 0;
  this.mithrilOreCount = 0;
  this.mithrilBarCount = 0;
  this.thoriumOreCount = 0;
  this.thoriumBarCount = 0;
  this.craftingLevel = 0;
  this.craftingExperience = 0;
  this.combat = function(){

    let attacks = {
      envenom: Math.floor(Math.random() * this.intellect) + 5,
      sinisterStrike: Math.floor(Math.random() * this.intellect) + 5,
      rupture: Math.floor(Math.random() * this.intellect) + 5,
      eviscerate: Math.floor(Math.random() * this.intellect) + 5,
      backstab: Math.floor(Math.random() * this.intellect) + 5,
      ambush: Math.floor(Math.random() * this.intellect) + 5,
      shadowStep: Math.floor(Math.random() * this.intellect) + 5,
      throwWeapon: Math.floor(Math.random() * this.intellect) + 5,
      pistolShot: Math.floor(Math.random() * this.intellect) + 5,
      kidneyShot: Math.floor(Math.random() * this.intellect) + 5,
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

let mageCreator = new Function("empty",`
  this.name = "Mage";
  this.rand = Math.floor(Math.random() * 10);
  this.level = 1;
  this.exp = 200;
  this.health = 250 * this.level;
  this.maxHealth = 250;
  this.mana = 500;
  this.maxMana = 500;
  this.manaPotionCount = 7;
  this.manaPotionRecoverAmount = this.maxMana/2;
  this.potHealAmount = this.maxHealth/2;
  this.potionCount = 3;
  this.gold = 200;
  this.intellect = 12 + this.level;
  this.strength = 10;
  this.agility = 10;
  this.defense = 0;
  this.inventory = [];
  this.ironOreCount = 0;
  this.ironBarCount = 0;
  this.mithrilOreCount = 0;
  this.mithrilBarCount = 0;
  this.thoriumOreCount = 0;
  this.thoriumBarCount = 0;
  this.craftingLevel = 0;
  this.craftingExperience = 0;
  this.combat = function(){

    let attacks = {
      envenom: Math.floor(Math.random() * this.intellect) + 5,
      sinisterStrike: Math.floor(Math.random() * this.intellect) + 5,
      rupture: Math.floor(Math.random() * this.intellect) + 5,
      eviscerate: Math.floor(Math.random() * this.intellect) + 5,
      backstab: Math.floor(Math.random() * this.intellect) + 5,
      ambush: Math.floor(Math.random() * this.intellect) + 5,
      shadowStep: Math.floor(Math.random() * this.intellect) + 5,
      throwWeapon: Math.floor(Math.random() * this.intellect) + 5,
      pistolShot: Math.floor(Math.random() * this.intellect) + 5,
      kidneyShot: Math.floor(Math.random() * this.intellect) + 5,
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

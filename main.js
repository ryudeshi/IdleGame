//IdleFarm(WIP) By William Harvey
//Idle Game where you develop your village.

//click values
var foodClick = 10; var woodClick = 10; var stoneClick = 10;
//resources
var food = 0; var wood = 0; var stone = 0;
//workers and buildings (production)
var farmers = 0; var lumberjacks = 0; var stonemasons = 0;
var farmland = 0; var sawmill = 0; var quarry = 0;
var farmlandProduction = 0; var sawmillProduction = 0; var quarryProduction = 0;
//total resource production values
var foodProd = 0; var woodProd = 0; var stoneProd = 0;
//initial resource caps
var foodCap = 200; var woodCap = 200; var stoneCap = 200;

function gatherFood(number) {
  if(food <= foodCap){
    food = food + number;
    document.getElementById("food").innerHTML = food;
      if(food >= foodCap){
        food = foodCap;
        document.getElementById("food").innerHTML = food;
    };
  };
};
function gatherWood(number) {
  if(wood <= woodCap){
    wood = wood + number;
    document.getElementById("wood").innerHTML = wood;
      if(wood >= woodCap){
        wood = woodCap;
        document.getElementById("wood").innerHTML = wood;
    };
  };
};
function gatherStone(number) {
  if(stone <= stoneCap){
    stone = stone + number;
    document.getElementById("stone").innerHTML = stone;
      if(stone >= stoneCap){
        stone = stoneCap;
        document.getElementById("stone").innerHTML = stone;
    };
  };
};

//First Tier Upgrades
function buyFarmer(){
  var farmerCost = Math.floor(10 * Math.pow(1.2,farmers));
  if(food >= farmerCost){
    farmers = farmers + 1;
    food = food - farmerCost;
    document.getElementById('farmers').innerHTML = farmers;
    document.getElementById('food').innerHTML = food;
    updateProduction()
  };
  var nextCost = Math.floor(10 * Math.pow(1.2,farmers));
  document.getElementById('farmerCost').innerHTML = nextCost;
};
function buyLumberjack(){
  var lumberjackCost = Math.floor(10 * Math.pow(1.2,lumberjacks));
  if(wood >= lumberjackCost){
    lumberjacks = lumberjacks + 1;
    wood = wood - lumberjackCost;
    document.getElementById('lumberjacks').innerHTML = lumberjacks;
    document.getElementById('wood').innerHTML = wood;
    updateProduction()
  };
  var nextCost = Math.floor(10 * Math.pow(1.2,lumberjacks));
  document.getElementById('lumberjackCost').innerHTML = nextCost;
};
function buyStonemason(){
  var stonemasonCost = Math.floor(10 * Math.pow(1.2,stonemasons));
  if(stone >= stonemasonCost){
    stonemasons = stonemasons + 1;
    stone = stone - stonemasonCost;
    document.getElementById('stonemasons').innerHTML = stonemasons;
    document.getElementById('stone').innerHTML = stone;
    updateProduction()
  };
  var nextCost = Math.floor(10 * Math.pow(1.2,stonemasons));
  document.getElementById('stonemasonCost').innerHTML = nextCost;
};
//End First Tier Upgrades

//Second Tier Upgrades
function buyFarmland(){
  var farmlandCost = Math.floor(100 * Math.pow(1.2,farmland));
  if(food >= farmlandCost){
    farmland = farmland + 1;
    farmlandProduction = farmland * 10
    food = food - farmlandCost;
    document.getElementById('farmland').innerHTML = farmland;
    document.getElementById('food').innerHTML = food;
  };
  var nextFarmlandCost = Math.floor(100 * Math.pow(1.2,farmland));
  document.getElementById('farmlandCost').innerHTML = nextFarmlandCost;
  updateProduction();
};
function buySawmill(){
  var sawmillCost = Math.floor(100 * Math.pow(1.2,sawmill));
  if(wood >= sawmillCost){
    sawmill = sawmill + 1;
    sawmillProduction = sawmill * 10
    wood = wood - sawmillCost;
    document.getElementById('sawmill').innerHTML = sawmill;
    document.getElementById('wood').innerHTML = wood;
  };
  var nextSawmillCost = Math.floor(100 * Math.pow(1.2,sawmill));
  document.getElementById('sawmillCost').innerHTML = nextSawmillCost;
  updateProduction();
};
function buyQuarry(){
  var quarryCost = Math.floor(100 * Math.pow(1.2,quarry));
  if(stone >= quarryCost){
    quarry = quarry + 1;
    quarryProduction = quarry * 10
    stone = stone - quarryCost;
    document.getElementById('quarry').innerHTML = quarry;
    document.getElementById('stone').innerHTML = stone;
  };
  var nextQuarryCost = Math.floor(100 * Math.pow(1.2,quarry));
  document.getElementById('quarryCost').innerHTML = nextQuarryCost;
  updateProduction();
};
//END second tier upgrades

function updateProduction(){
  foodProd = farmers + farmlandProduction;
  document.getElementById('foodProd').innerHTML = foodProd;
  woodProd = lumberjacks + sawmillProduction;
  document.getElementById('woodProd').innerHTML = woodProd;
  stoneProd = stonemasons + quarryProduction;
  document.getElementById('stoneProd').innerHTML = stoneProd;
};

window.setInterval(function(){
  gatherFood(foodProd);
  gatherWood(woodProd);
  gatherStone(stoneProd);
}, 1000);

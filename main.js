//IdleFarm(WIP) By William Harvey
//Idle Game where you develop your village

var food = {
  name:'food',
  total:0,
  increment:1,
  mult:1,
  cap:200
},
wood = {
  name:'wood',
  total:0,
  increment:1,
  mult:1,
  cap:200
},
stone = {
  name:'stone',
  total:0,
  increment:1,
  mult:1,
  cap:200
},
iron = {
  name:'iron',
  total:0,
  increment:1,
  mult:1,
  cap:200
},
farmer = {
  name:'farmer',
  total:0,
  increment:1,
  mult:1,
  cost:{
    food:10,
    wood:0,
    stone:0,
    iron:0
  }
},
lumberjack = {
  name:'lumberjack',
  total:0,
  increment:1,
  mult:1,
  cost:{
    food:10,
    wood:10,
    stone:0,
    iron:0
  }
},
stonemason = {
  name:'stonemason',
  total:0,
  increment:1,
  mult:1,
  cost:{
    food:0,
    wood:10,
    stone:10,
    iron:0
  }
},
blacksmith = {
  name:'blacksmith',
  total:0,
  increment:1,
  mult:1,
  cost:{
    food:0,
    wood:0,
    stone:10,
    iron:10
  }
},
mill = {
  name:'mill',
  total:0,
  increment:3,
  mult:1
},
sawmill = {
  name:'sawmill',
  total:0,
  increment:2,
  mult:1
},
quarry = {
  name:'quarry',
  total:0,
  increment:1,
  mult:1
},
mine = {
  name:'mine',
  total:0,
  increment:0.5,
  mult:1
},
worldMult = 100,
pop = 0,
maxPop = 0,
buildings = 0,
clicks = 0;

function gatherRes(material) {
  material.total = material.total + (material.increment * material.mult * worldMult);
  if(food.total >= food.cap){
    food.total = food.cap;
  }
  if(wood.total >= wood.cap){
    wood.total = wood.cap;
  }
  if(stone.total >= stone.cap){
    stone.total = stone.cap;
  }
  if(iron.total >= iron.cap){
    iron.total = iron.cap;
  }
  updateRes();
};


//First Tier Upgrades
function buyWorker(worker){
  if(food.total >= worker.cost.food && wood.total >= worker.cost.wood
   && stone.total >= worker.cost.stone && iron.total >= worker.cost.iron){
    worker.total = worker.total + 1;
    food.total = food.total - worker.cost.food;
    wood.total = wood.total - worker.cost.wood;
    stone.total = stone.total - worker.cost.stone;
    iron.total = iron.total - worker.cost.iron;
    document.getElementById('farmer').innerHTML = farmer.total;
    //updateProduction()
  }
  document.getElementById('food').innerHTML = food.total;
  updateRes();
  //var nextCost = Math.floor(10 * Math.pow(1.2,farmer));
  //document.getElementById('farmerCost').innerHTML = nextCost;
};

function updateRes(){
  document.getElementById("food").innerHTML = food.total;
  document.getElementById("wood").innerHTML = wood.total;
  document.getElementById("stone").innerHTML = stone.total;
  document.getElementById("iron").innerHTML = iron.total;
};
/*function buyLumberjack(){
  var lumberjackCost = Math.floor(10 * Math.pow(1.2,lumberjack));
  if(wood >= lumberjackCost){
    lumberjack = lumberjack + 1;
    wood = wood - lumberjackCost;
    document.getElementById('lumberjack').innerHTML = lumberjack;
    document.getElementById('wood').innerHTML = wood;
    updateProduction()
  };
  var nextCost = Math.floor(10 * Math.pow(1.2,lumberjack));
  document.getElementById('lumberjackCost').innerHTML = nextCost;
};
function buyStonemason(){
  var stonemasonCost = Math.floor(10 * Math.pow(1.2,stonemason));
  if(stone >= stonemasonCost){
    stonemason = stonemason + 1;
    stone = stone - stonemasonCost;
    document.getElementById('stonemason').innerHTML = stonemason;
    document.getElementById('stone').innerHTML = stone;
    updateProduction()
  };
  var nextCost = Math.floor(10 * Math.pow(1.2,stonemason));
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
};*/
//END second tier upgrades

/*function updateProduction(){
  foodProd = farmer + farmlandProduction;
  document.getElementById('foodProd').innerHTML = foodProd;
  woodProd = lumberjack + sawmillProduction;
  document.getElementById('woodProd').innerHTML = woodProd;
  stoneProd = stonemason + quarryProduction;
  document.getElementById('stoneProd').innerHTML = stoneProd;
};

window.setInterval(function(){
  gatherFood(foodProd);
  gatherWood(woodProd);
  gatherStone(stoneProd);
}, 1000);*/

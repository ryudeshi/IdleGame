//IdleFarm(WIP) By William Harvey
//Idle Game where you develop your village

var food = {
  name:'food',  //resource name
  total:0,      //current amount
  increment:1,  //default increment per click
  mult:1,       //increment multiplier (upgrades increase multiplier)
  cap:200,      //current max storage of a resource (upgrades increase caps)
  auto:0        //how much is automatically being produced (from workers/buildings)
},
wood = {
  name:'wood',
  total:0,
  increment:1,
  mult:1,
  cap:200,
  auto:0
},
stone = {
  name:'stone',
  total:0,
  increment:1,
  mult:1,
  cap:200,
  auto:0
},
iron = {
  name:'iron',
  total:0,
  increment:1,
  mult:1,
  cap:200,
  auto:0
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
foodmill = {
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
forge = {
  name:'mine',
  total:0,
  increment:0.5,
  mult:1
},
globalMult = 1,
pop = 0,
maxPop = 0,
buildings = 0,
clicks = 0,
material = '';
worker = '';

function gatherRes(material) {
  material.total = material.total + (material.increment * material.mult * globalMult);
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
  updatePage();
};

function updatePage(){
  document.getElementById("food").innerHTML = food.total;
  document.getElementById("wood").innerHTML = wood.total;
  document.getElementById("stone").innerHTML = stone.total;
  document.getElementById("iron").innerHTML = iron.total;
  document.getElementById("farmer").innerHTML = farmer.total;
  document.getElementById("lumberjack").innerHTML = lumberjack.total;
  document.getElementById("stonemason").innerHTML = stonemason.total;
  document.getElementById("blacksmith").innerHTML = blacksmith.total;
  document.getElementById("foodProd").innerHTML = food.auto;
  document.getElementById("woodProd").innerHTML = wood.auto;
  document.getElementById("stoneProd").innerHTML = stone.auto;
  document.getElementById("ironProd").innerHTML = iron.auto;
};

function buyWorker(worker){
  if(food.total >= worker.cost.food && wood.total >= worker.cost.wood
    && stone.total >= worker.cost.stone && iron.total >= worker.cost.iron){
    worker.total = worker.total + 1;
    food.total = food.total - worker.cost.food;
    wood.total = wood.total - worker.cost.wood;
    stone.total = stone.total - worker.cost.stone;
    iron.total = iron.total - worker.cost.iron;
    updatePage();
    updateProduction();
  }
};

function updateProduction(){
  food.auto = (farmer.total * farmer.increment * globalMult) + (foodmill.total * foodmill.increment * globalMult);
  wood.auto = (lumberjack.total * lumberjack.increment * globalMult) + (sawmill.total * sawmill.increment * globalMult);
  stone.auto = (stonemason.total * stonemason.increment * globalMult) + (quarry.total * quarry.increment * globalMult);
  iron.auto = (blacksmith.total * blacksmith.increment * globalMult) + (forge.total * forge.increment * globalMult);
  updatePage();
}

function autoProduction(){
  if(food.total < food.cap){
    food.total = food.total + food.auto;
    if(food.total >= food.cap){
      food.total = food.cap;
    }
  }
  if(wood.total < wood.cap){
    wood.total = wood.total + wood.auto;
    if(wood.total >= wood.cap){
      wood.total = wood.cap;
    }
  }
  if(stone.total < stone.cap){
    stone.total = stone.total + stone.auto;
    if(stone.total >= stone.cap){
      stone.total = stone.cap;
    }
  }
  if(iron.total < iron.cap){
    iron.total = iron.total + iron.auto;
    if(iron.total >= iron.cap){
      iron.total = iron.cap;
    }
  }
  updatePage();
}

function setGlobalMult(number){
  globalMult = number;
}


window.setInterval(function(){
  autoProduction();
}, 1000);

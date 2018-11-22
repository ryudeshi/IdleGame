//IdleFarm(WIP) By William Harvey
//Idle Game where you develop your village


var foodClick = 10; var woodClick = 1; var stoneClick = 1;
var food = 0;
var wood = 0;
var stone = 0;
var farmers = 0;
var farmland = 0;
var foodProd = 0;
var farmlandProduction = 0;
var foodCap = 200;
var woodCap = 200;
var stoneCap = 200;

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
  wood = wood + number;
  document.getElementById("wood").innerHTML = wood;
};
function gatherStone(number) {
  stone = stone + number;
  document.getElementById("stone").innerHTML = stone;
};

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

function buyFarmland(){
  var farmlandCost = Math.floor(100 * Math.pow(1.1,farmland));
  if(food >= farmlandCost){
    farmland = farmland + 1;
    farmlandProduction = farmland * 10
    food = food - farmlandCost;
    document.getElementById('farmland').innerHTML = farmland;
    document.getElementById('food').innerHTML = food;
  };
  var nextFarmlandCost = Math.floor(100 * Math.pow(1.1,farmland));
  document.getElementById('farmlandCost').innerHTML = nextFarmlandCost;
  updateProduction();
};

function updateProduction(){
  foodProd = farmers + farmlandProduction;
  document.getElementById('foodProd').innerHTML = foodProd;
};

window.setInterval(function(){
  gatherFood(foodProd);
  //gatherWood(woodProd);
  //gatherStone(stoneProd);
}, 1000);

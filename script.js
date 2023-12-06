console.log("script has loaded!");

let weaponEl;
let weaponOffset = {"x": 0, "y": 0};
function initWeapon(){
  weaponEl = document.getElementById("weapon");
  
  // buster sword offsets
  weapon.style.transformOrigin = "bottom left";
  weaponOffset.x = -280;
  weaponOffset.y = -80;
}
function showWeapon(){
  weaponEl.style.visibility = "visible";
}
function hideWeapon(){
  weaponEl.style.visibility = "hidden";
}
function moveWeapon(event){
  weaponEl.style.top = event.clientY + weaponOffset.y + "px";
  weaponEl.style.left = event.clientX + + weaponOffset.x + "px";
}
function swingWeapon(){
  const weaponSwingAnim = [
    { transform: "rotate(0)" },
    { transform: "rotate(35deg)", offset: 0.2 },
    { transform: "rotate(35deg)", offset: 0.5 },
    { transform: "rotate(0)" },
  ]
  const weaponSwingTiming = { duration: 500, iterations: 1 }
  weaponEl.animate(weaponSwingAnim, weaponSwingTiming);

  setTimeout(killEnemy(), 300);
}

function killEnemy(){
  const textbox = document.getElementById("textbox");
  textbox.innerText = randomArrayElement(deathLines);

  setTimeout(()=>{
    const isLootSheckels = true;
    if(isLootSheckels){
      const count = 30 + Math.floor(Math.random() ** 3 * 470);
      textbox.innerText = `You found ${count} sheckels`;
    }
  }, 1000);

  const enemyEl = document.getElementById("enemy").children[0];
  const deathAnim = randomArrayElement(deathAnims); 
  const deathTiming = { duration: 300, iterations: 1};
  enemyEl.animate(deathAnim, deathTiming);
  setTimeout(()=>{
    enemyEl.remove();
    spawnEnemy();
  }, 300);

  const lootAnim = [
    {transform: "rotateY(0) translate(0%, 0%)", opacity: 1},
    {opacity: 1, offset: 0.5},
    {transform: "rotateY(500deg) translate(0%, -200%)", opacity: 0}
  ]
  const lootTiming = { duration: 800, iterations: 1};
  document.getElementById("loot").animate(lootAnim, lootTiming);
}

function spawnEnemy(){
  const spawnAnim = [
    { opacity: 0 },
    { opacity: 1 }
  ];
  const spawnTiming = { duration: 300, iterations: 1};

  const enemyData = randomArrayElement(enemies);
  const enemyRootEl = document.getElementById("enemy");

  const newEnemy = document.createElement("img");
  newEnemy.src = enemyData.img;
  newEnemy.animate(spawnAnim, spawnTiming);
  enemyRootEl.appendChild(newEnemy);
}

function randomArrayElement(arr){
  const index = Math.floor(Math.random() * arr.length);
  return arr[index]; 
}

const enemies = [
  {
    name: "Pizza Tower",
    img: "assets/cover1.jpg"
  },
  {
    name: "Pong",
    img: "assets/cover2.jpg"
  },
  {
    name: "Crab Nicholson",
    img: "assets/cover3.jpg"
  }
]

const loot = [

]

const deathLines = [
  "OOF",
  "FUCK♂YOU",
  "AIEEEeeee",
  "Bury me with my money...",
  "WOW I WAS BLOCKING",
]

const deathAnims = [
  [
    {transform: "rotate(0) translate3D(0%, 0%, 0)"},
    {transform: "rotate(900deg) translate3D(500%, 500%, 0)"},
  ],
  [
    {transform: "translate3D(0%, 0%, 0) rotate(0)"},
    {transform: "translate3D(500%, 200%, 0) rotate(500deg)"},
  ]
]

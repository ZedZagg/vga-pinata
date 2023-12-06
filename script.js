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
}


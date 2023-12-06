console.log("script has loaded!");

let weaponEl;
let weaponOffset = {"x": 0, "y": 0};
function initWeapon(){
  weaponEl = document.getElementById("weapon");
  
  // buster sword offsets
  weapon.style.transform = "scaleX(-1) rotate(90deg)";
  weapon.style.transformOrigin = "bottom right";
  weaponOffset.x = -360;
  weaponOffset.y = 40;
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

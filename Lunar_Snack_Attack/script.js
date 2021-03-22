document.addEventListener("DOMContentLoaded", function () {
  var mugen = new MUGEN();
  mugen.initialize({titleScreenImageURL: "./img/title-screen.png", actionRadius: 300, timeBetweenNPCs: 3200, removeNPCAfterInteractedDelay: 5000, npcCollisionRadius: 100, actionDuration:800, npcSpeed: 220, jumpHeight: 250});
});
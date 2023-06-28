document.addEventListener("DOMContentLoaded", function() {
    var colaOriginal = ["amarillo", "rosa", "rojo", "verde", "azul", "negro", "morado", "blanco"];
    var cola1 = [];
    var cola2 = [];
  
    for (var i = 0; i < colaOriginal.length; i++) {
      if (i % 2 === 0) {
        cola1.push(colaOriginal[i]);
      } else {
        cola2.push(colaOriginal[i]);
      }
    }
  
    var colaOriginalList = document.getElementById("cola-original");
    colaOriginal.forEach(function(color) {
      var li = document.createElement("li");
      li.textContent = color;
      colaOriginalList.appendChild(li);
    });
  
    var cola1List = document.getElementById("cola1-list");
    cola1.forEach(function(color) {
      var li = document.createElement("li");
      li.textContent = color;
      cola1List.appendChild(li);
    });
  
    var cola2List = document.getElementById("cola2-list");
    cola2.forEach(function(color) {
      var li = document.createElement("li");
      li.textContent = color;
      cola2List.appendChild(li);
    });
  });
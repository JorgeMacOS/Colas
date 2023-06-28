document.addEventListener("DOMContentLoaded", function() {
    var cola = [
      { user: 'User1', ticket: true },
      { user: 'User2', ticket: true },
      { user: 'User3', ticket: false },
      { user: 'User4', ticket: true },
      { user: 'User5', ticket: false },
      { user: 'User6', ticket: false },
      { user: 'User7', ticket: true },
      { user: 'User8', ticket: true },
      { user: 'User9', ticket: true },
      { user: 'User10', ticket: false },
      { user: 'User11', ticket: true }
    ];
  
    var colaInicialList = document.getElementById("cola-inicial-list");
    var usuariosRetiradosList = document.getElementById("usuarios-retirados-list");
    var colaFinalList = document.getElementById("cola-final-list");
  
    cola.forEach(function(usuario) {
      var li = document.createElement("li");
      li.textContent = usuario.user;
      colaInicialList.appendChild(li);
    });
  
    var usuariosRetirados = [];
    var colaFinal = [];
  
    while (cola.length > 0) {
      var usuario = cola.shift();
  
      if (usuario.ticket) {
        colaFinal.push(usuario);
      } else {
        usuariosRetirados.push(usuario);
      }
    }
  
    usuariosRetirados.forEach(function(usuario) {
      var li = document.createElement("li");
      li.textContent = usuario.user;
      usuariosRetiradosList.appendChild(li);
    });
  
    colaFinal.forEach(function(usuario) {
      var li = document.createElement("li");
      li.textContent = usuario.user;
      colaFinalList.appendChild(li);
    });
  });
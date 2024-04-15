function eligeOpcion(opcionUsuario) {
    var opciones = ["piedra", "papel", "tijeras"];
    var opcionComputadora = opciones[Math.floor(Math.random() * 3)];
  
    var mensaje = "";
  
    if (opcionUsuario === opcionComputadora) {
      mensaje = "¡Empate!";
    } else if (
      (opcionUsuario === "piedra" && opcionComputadora === "tijeras") ||
      (opcionUsuario === "papel" && opcionComputadora === "piedra") ||
      (opcionUsuario === "tijeras" && opcionComputadora === "papel")
    ) {
      mensaje = "¡Ganaste!";
    } else {
      mensaje = "¡Perdiste!";
    }
  
    document.getElementById("resultado").style.display = "block";
    document.getElementById("mensaje").innerHTML = mensaje;
  }
  
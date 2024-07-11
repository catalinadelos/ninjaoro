

function resetear () {
  $('#oros').attr('value', 0)
  $('#lista-mensajes').html('');
  // document.getElementById('oros').value = 0;

    // 3. Volvemos a guardar los datos
    localStorage.setItem('oros', '')
    localStorage.setItem('mensajes', '')
}


function ganar (event, lugar) {
    event.preventDefault()
    console.log("lleganding desde " + lugar);
    let min;
    let max;
  
    if (lugar == 'Granja') {
      min = 10;
      max = 20;
    } else if (lugar == 'Caverna') {
      min = 5;
      max = 10;
    } else if (lugar == 'Casa') {
      min = 2;
      max = 5;
    } else {
      min = -50;
      max = 50;
    }
  
    const nuevosOros = generarOros(min, max);
    
    const mensaje = generarMensaje(nuevosOros, lugar)
    console.log(mensaje);
  
    actualizarJuego(nuevosOros, mensaje);
  }
  
  function generarOros (min, max) {
    const nuevosOros = Math.floor((Math.random() * (max - min + 1)) + min);
    return nuevosOros;
  }
  
  function generarMensaje(nuevosOros, lugar) {
    if (nuevosOros < 0) {
      return `Ha perdido ${nuevosOros} oros en ${lugar}`
    } else {
      return `Ha ganado ${nuevosOros} oros en ${lugar}`
    }
  }
  
  function actualizarJuego(nuevosOros, mensaje) {
    // 1. Nos traemos los datos ya guardados
    let oros = localStorage.getItem('oros') || '0'
    oros = parseInt(oros);
  
    let mensajes = localStorage.getItem('mensajes') || '[]'
    mensajes = JSON.parse(mensajes)
  
    console.log(oros, mensajes);
    // 2. Actualizamos estos datos
    oros += nuevosOros;
    mensajes.unshift(mensaje);
  
    // 3. Volvemos a guardar los datos
    localStorage.setItem('oros', oros + '')
    localStorage.setItem('mensajes', JSON.stringify(mensajes))
  
    // 4. Dibujamos los cambios
    $('#oros').attr('value', oros)
    $('#lista-mensajes').html('');
    for (let mensaje of mensajes) {
      $('#lista-mensajes').append(`
        <h6 class="mensajes border border-success rounded-4 text-center">
          ${mensaje}
        </h6>
        <br>
      `)
    }
  }
  
  function inicia_pagina () {
    // 1. Nos traemos los datos ya guardados
    let oros = localStorage.getItem('oros') || '0'
    oros = parseInt(oros);
  
    let mensajes = localStorage.getItem('mensajes') || '[]'
    mensajes = JSON.parse(mensajes)
  
    // 4. Dibujamos los cambios
    $('#oros').attr('value', oros)
    $('#lista-mensajes').html('');
    for (let mensaje of mensajes) {
      $('#lista-mensajes').append(`
          <p class="mensajes border border-success rounded-4 text-center">
            ${mensaje}
          </p>
          <br>
    
      `)
    }
  }
  


  inicia_pagina()
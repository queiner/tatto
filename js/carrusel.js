var carrusel = document.getElementById('carrusel-portada');

if (carrusel != null) {
  var foto = carrusel.querySelector('.portada-foto');
  var puntos = carrusel.querySelectorAll('.carrusel-puntos button');
  var flechas = carrusel.querySelectorAll('.carrusel-flecha');
  
  var imagenes = [
    { src: 'imagenes-tatto/carusel-1.jpg', alt: 'Tatuaje de líneas negras en una mano' },
    { src: 'imagenes-tatto/carusel-2.jpg', alt: 'Tatuaje en tinta negra sobre la piel' },
    { src: 'imagenes-tatto/carusel-3.jpg', alt: 'Tatuaje artístico en el estudio' },
    { src: 'imagenes-tatto/carusel-4.jpg', alt: 'Detalle de un tatuaje del estudio' }
  ];
  
  var actual = 0;
  var temporizador;
  
  function mostrarImagen(indice) {
    actual = (indice + imagenes.length) % imagenes.length;
    foto.src = imagenes[actual].src;
    foto.alt = imagenes[actual].alt;
    
    for (var i = 0; i < puntos.length; i++) {
      if (i === actual) {
        puntos[i].setAttribute('aria-current', 'true');
      } else {
        puntos[i].removeAttribute('aria-current');
      }
    }
  }
  
  function iniciarCarrusel() {
    clearInterval(temporizador);
    temporizador = setInterval(function() {
      mostrarImagen(actual + 1);
    }, 5000);
  }
  
  for (var i = 0; i < flechas.length; i++) {
    flechas[i].addEventListener('click', function() {
      var movimiento = parseInt(this.getAttribute('data-movimiento'));
      mostrarImagen(actual + movimiento);
      iniciarCarrusel();
    });
  }
  
  for (var j = 0; j < puntos.length; j++) {
    (function(indice) {
      puntos[indice].addEventListener('click', function() {
        mostrarImagen(indice);
        iniciarCarrusel();
      });
    })(j);
  }
  
  iniciarCarrusel();
}

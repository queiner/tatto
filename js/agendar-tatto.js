var formulario = document.getElementById('formulario-cita');
var lista = document.getElementById('lista-citas');
var campoFecha = document.getElementById('fecha');

if (formulario != null && lista != null && campoFecha != null) {
  var hoy = new Date();
  var fechaLocal = hoy.getFullYear() + '-' + 
    String(hoy.getMonth() + 1).padStart(2, '0') + '-' + 
    String(hoy.getDate()).padStart(2, '0');
  campoFecha.min = fechaLocal;
  
  formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();
    
    var datos = new FormData(formulario);
    var item = document.createElement('li');
    item.className = 'solicitud-item';
    
    var titulo = document.createElement('h3');
    titulo.textContent = datos.get('estilo') + ' · ' + datos.get('tamano');
    
    var detalle = document.createElement('p');
    detalle.textContent = datos.get('nombre') + ' · ' + datos.get('fecha');
    
    var correo = document.createElement('p');
    correo.textContent = datos.get('correo');
    
    var idea = document.createElement('p');
    idea.textContent = datos.get('idea');
    
    item.appendChild(titulo);
    item.appendChild(detalle);
    item.appendChild(correo);
    item.appendChild(idea);
    
    var vacio = lista.querySelector('.lista-vacia');
    if (vacio != null) {
      vacio.parentNode.removeChild(vacio);
    }
    
    lista.appendChild(item);
    formulario.reset();
    campoFecha.min = fechaLocal;
  });
}

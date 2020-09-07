//comando para esteblecer la conexion
var socket = io();
var label = $('#lblNuevoTicket');

socket.on('estadoActual', function(resp) {
    console.log('Desconectado al servidor');
    label.text(resp.actual);
});


socket.on('connect', function() {
    console.log('connectado al servidor');
});

socket.on('disconnect', function() {
    console.log('Desconectado al servidor');
});

$('button').on('click', function() {

    socket.emit('siguienteTicket', null, function(siguienteTicket) {
        label.text(siguienteTicket);
    });
});
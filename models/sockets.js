class Sockets {

    constructor( io ) {
        this.io = io;
        this.socketEvents();
    }

    socketEvents() {
        // On connection
        this.io.on('connection', ( socket ) => {
            
            // Escuchar evento: mensaje-to-server
            socket.on('mensaje-to-server', ( data ) => {
                // Emite a TODOS los clientes conectados
                console.log( data );
                this.io.emit( 'mensaje-from-server', data );
            });
            
            socket.emit('mensaje-bienvenida', {
                msg: 'Bienvenido al server',
                fecha: new Date()
            });
        
            socket.on('mensaje-cliente', ( data ) => {
                console.log(data);
            });
        });
    }

}

module.exports = Sockets;
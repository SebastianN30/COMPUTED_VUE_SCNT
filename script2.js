const app = new Vue({

    el: '#app',
    /* Inicializamos nuestros datos o campos en el data */
    data: {
        mensaje: 'Hola',
        contador: 0
    },
    /* computed: lugar donde paso datos con logica */
    computed: {
        invertido(){
            return this.mensaje.split('').reverse().join('');
        },
        color(){
            return {
                'bg-success' : this.contador <= 10,
                'bg-warning' : this.contador >= 11 && this.contador < 20,
                'bg-danger' : this.contador >= 20
            }
        }
    }
});
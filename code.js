var paises = [ "armenia", "moldavia", "estonia", "letonia", "lituania", "georgia", "azerbaiyan", "tayikistan",
               "kirguistan", "bielorusia", "uzbekistan", "turkmenistan", "ucrania", "kazajistan", "rusia", 
               "albania","alemania oriental", "bulgaria", "checoslovaquia", "hungria", "polonia", "rumania"

];


// 


var app = new Vue({
    el: "#app",
    data: {
        enJuego: false,
        letras: [],
        pais_alteatorio: [],
        letraJugada: "",
        vidas: ["❤", "❤", "❤", "❤"]
    },
    methods: {
        iniciarJ: function () {
            this.enJuego = true
            var numero_alteatorio = Math.floor(Math.random() * (paises.length));
            this.pais_alteatorio = paises[numero_alteatorio]
            console.log(this.pais_alteatorio)
            for (i = 0; i < this.pais_alteatorio.length; i++) {
                this.letras.push("___");
            }
        },

        ingresarLetra: function () {
            this.letraJugada = this.letraJugada.toLowerCase()
            for (let index = 0; index < this.pais_alteatorio.length; index++) {
                if (this.pais_alteatorio[index] === this.letraJugada) {
                    this.letras[index] = index === 0 ? this.letraJugada.toUpperCase():this.letraJugada

                }
            }
           
            if (this.pais_alteatorio.indexOf(this.letraJugada) === -1) {
                this.vidas.pop();

           }
           this.letraJugada = "";
        },
        stopJ: function () {
            this.enJuego = false
            this.letras = []
            this.pais_alteatorio = []
            this.vidas = ["❤", "❤", "❤", "❤"]
        }

    }

});


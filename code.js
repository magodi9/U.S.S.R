var paises = ["Albania", "Alemania Oriental", "Bulgaria", "Checoslovaquia", "Hungria", "Polonia", "Rumania"
    , "Armenia", "Moldavia", "Estonia", "Letonia", "Lituania", "Georgia", "Azerbaiyan", "Tayikistan"
    , "Kirguistan", "Bielorusia", "Uzbekistan", "Turkmenistan", "Ucrania", "Kazajistan", "Rusia"
];


// 


var app = new Vue({
    el: "#app",
    data: {
        enJuego: false,
        letras: [],
        pais_alteatorio: [],
        letraJugada: "",
        vidas:["❤","❤","❤","❤"]
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
            for (let index = 0; index < this.pais_alteatorio.length; index++) {
                if(this.pais_alteatorio[index] === this.letraJugada){
                    this.letras[index] = this.letraJugada

                }
                else{
                    this.vidas.pop()
                }
            }
            this.letraJugada = "";
        },
        stopJ: function(){
            this.enJuego = false
            this.letras=[]
        }

    }

});


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
        pais_alteatorio: "",
        letraJugada:"",
        caracter:""
    },
    methods: {
        iniciarJ: function () {
            this.enJuego = true
            var numero_alteatorio = Math.floor(Math.random() * (paises.length));
            this.pais_alteatorio = paises[numero_alteatorio]
            for (i = 0; i < this.pais_alteatorio.length; i++) {
                 this.letras.push("___");
            }
    },

        ingresarLetra: function () {
            this.caracter = this.pais_alteatorio.indexOf(this.letraJugada)
            if (this.caracter != -1  ) {
                this.letras[this.caracter] = this.letraJugada
             
           }
            this.letraJugada = "";   


            
            
        }    

    }

});

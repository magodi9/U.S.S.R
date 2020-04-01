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
        seleccion: []
    },
    methods: {
        iniciarJ: function () {
            this.enJuego = true
            var paises_alteatorio = Math.floor(Math.random() * (paises.length));
            this.seleccion = paises[paises_alteatorio]
            for (i = 0; i < this.seleccion.length; i++) {
                this.letras.push("___");
            }



        }


        //Solo me compartio VsCode...

    }

});

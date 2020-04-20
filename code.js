



var paises = ["armenia", "moldavia", "estonia", "letonia", "lituania", "georgia", "azerbaiyan", "tayikistan",
    "kirguistan", "bielorusia", "uzbekistan", "turkmenistan", "ucrania", "kazajistan", "rusia",
    "albania", "alemania oriental", "bulgaria", "checoslovaquia", "hungria", "polonia", "rumania"

];


// 


var app = new Vue({
    el: "#app",
    data: {
        enJuego: false,
        letras: [],
        pais_alteatorio: "",
        letraJugada: "",
        vidas: ["❤", "❤", "❤", "❤"],
        gameOver:false,
        mensaje:"",
        img: "",
        infoP: ""
    },
    methods: {
        iniciarJ: function () {
            this.enJuego = true
            var numero_alteatorio = Math.floor(Math.random() * (paises.length));
            this.pais_alteatorio = paises[numero_alteatorio]
            this.obtenerImfPais()
            
            for (i = 0; i < this.pais_alteatorio.length; i++) {
                this.letras.push(" _ ");
            }
        },

        ingresarLetra: function () {
            if (this.letraJugada.length === 0 || this.letraJugada.length > 1) {
                this.letraJugada = "";
                return;
            }
            this.letraJugada = this.letraJugada.toLowerCase()
            if(this.letraJugada.length > 0 && this.pais_alteatorio.indexOf(this.letraJugada) != -1){
                for (let index = 0; index < this.pais_alteatorio.length; index++) {
                    if (this.pais_alteatorio[index] === this.letraJugada) {
                        this.letras[index] = index === 0 ? this.letraJugada.toUpperCase():this.letraJugada
    
                    }
                }
            }else {
                this.vidas.pop();
            }
           if (this.vidas.length === 0) {
                this.mensaje ="Has perdido😔☠"
                this.gameOver = true
            }
           if (this.letras.join("").toLowerCase() === this.pais_alteatorio) {
               this.mensaje = "Muy bien has adivinado✨✨"
               this.gameOver = true
               
           }
           this.letraJugada = "";
        },
        stopJ: function () {
            this.enJuego = false
            this.letras = []
            this.pais_alteatorio = ""
            this.vidas = ["❤", "❤", "❤", "❤"]
            this.gameOver = false
        },
        obtenerImfPais: function (){        
            fetch("https://es.wikipedia.org/api/rest_v1/page/summary/" + this.pais_alteatorio)
            .then(data => {
                return data.json();
            })
            .then(infoLista => {
               this.img = infoLista.originalimage.source
               this.infoP = infoLista.extract
            })
            .catch(error => {
                console.log(error);
            });
        }
    }
});
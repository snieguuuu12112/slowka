let pl = [
    "koń", "każdy", "upadać", "kawa", "kawiarnia", "kalkulator", "obliczać",
    "obliczenia", "małomówny", "ulica", "łysy", "łóżko", "kelner", "reszta",
    "koszula", "koszulka", "kanada", "kanadyjczyk", "piosenka", "siwy",
    "zmęczony", "piosenkarz", "śpiewać", "twarz", "charakter", "karaiby",
    "mięso", "sklep mięsny", "drogi", "teczka", "plakat", "dom", "prawie",
    "prawie nigdy", "kasztanowy", "czternaście", "cebula", "obchodzić",
    "kolacja", "jeść kolację", "cent", "centrum handlowe", "blisko",
    "płatki śniadaniowe", "zero", "szampon", "kurtka", "chłopak",
    "dziewczyna", "chile", "chilijczyk", "chiny", "chińczyk", "czekolada",
    "uderzenie", "kotlet", "ciastka smażone na głębokim oleju", "niebo",
    "sto", "nauki społeczne", "pięć", "pięćdziesiąt", "kino", "spotkanie",
    "miasto", "jasny", "klasa", "klient", "klinika dla zwierząt",
    "tradycyjny gulasz", "gotować", "kucharz", "szkoła", "naszyjnik",
    "kolumbia", "kolumbijczyk", "kolor", "kolorowy", "kolumna", "jeść",
    "jedzenie", "komisariat", "jak", "kolega", "towarzystwo", "uzupełniać",
    "kupować", "zakupy", "sprawdzić", "komunikacja", "wspólnota", "z",
    "kartą", "koncert", "wniosek", "łączyć", "królik", "znać", "uważany",
    "budować", "konsultować", "liczyć", "zadowolony", "z tobą", "kontynent",
    "kieliszek", "serce", "korea", "koreańczyk", "poprawny", "email",
    "biegać", "odpowiadać", "krótki", "rzecz", "kosztować", "zwyczaj",
    "jak", "tworzyć", "wierzyć", "uważam", "chorwacja", "chorwat",
    "krokiety rybne", "zeszyt", "ramka", "czterdzieści", "ile", "ile czasu",
    "kwadrans", "cztery", "kuba", "łyżka", "łyżeczka", "nóż", "rachunek",
    "opowiadanie", "ciało", "ostrożnie", "urodziny", "szwagier", "kurs"
];

let esp = [
    "el caballo", "cada", "caer", "el café", "la cafetería", "la calculadora",
    "calcular", "los cálculos", "callado", "la calle", "calvo", "la cama",
    "el camarero", "el cambio", "la camisa", "la camiseta", "Canadá",
    "canadiense", "la canción", "canoso", "cansado", "el cantante", "cantar",
    "la cara", "el carácter", "Caribe", "la carne", "la carnicería", "caro",
    "la carpeta", "el cartel", "la casa", "casi", "casi nunca", "castaño",
    "catorce", "la cebolla", "celebrar", "la cena", "cenar", "el céntimo",
    "el centro comercial", "cerca", "los cereales", "cero", "champú",
    "la chaqueta", "el chico", "la chica", "Chile", "el chileno", "China",
    "chino", "el chocolate", "el choque", "la chuleta", "los churros",
    "el cielo", "cien", "las ciencias sociales", "cinco", "cincuenta",
    "el cine", "la cita", "la ciudad", "claro", "la clase", "el cliente",
    "clínica de animales", "el cocido madrileño", "cocinar", "el cocinero",
    "el colegio", "el collar", "Colombia", "colombiano", "el color",
    "colorido", "la columna", "comer", "la comida", "la comisaría", "como",
    "el compañero", "compañía", "completar", "comprar", "las compras",
    "comprobar", "la comunicación", "la comunidad", "con", "con tarjeta",
    "el concierto", "la conclusión", "conectar", "el conejo", "conocer",
    "considerado", "construir", "consultar", "contar", "contento", "contigo",
    "el continente", "la copa", "el corazón", "Corea", "coreano", "correcto",
    "el correo electrónico", "correr", "corresponder", "corto", "la cosa",
    "costar", "la costumbre", "como", "crear", "creer", "creo que", "Croacia",
    "croata", "croquetas de pescado", "el cuaderno", "el cuadro", "cuarenta",
    "cuanto", "cuanto tiempo", "el cuarto", "cuatro", "Cuba", "la cuchara",
    "la cucharilla", "el cuchillo", "la cuenta", "el cuento", "el cuerpo",
    "cuidado", "el cumpleaños", "el cuñado", "el curso"
];

const check = document.getElementById('check');
const slowo = document.getElementById('slowo');
const czy = document.getElementById('czy');
const odpInput = document.getElementById('odp');

let lang = 0;
let random = 0;
let isFirstClick = true; 

odpInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        check.click();
    }
});

check.addEventListener("click", function(){
    let odp = odpInput.value.trim();
    
    if (!isFirstClick) {
        if (lang == 1) { 
            if (odp.toLowerCase() === esp[random].toLowerCase()) {
                czy.innerHTML = "Dobrze!";
                czy.className = "correct";
            } else {
                czy.innerHTML = "Źle, prawidłowa odpowiedź to: " + esp[random];
                czy.className = "wrong"; 
            }
        } 
        else if (lang == 0) { 
            if (odp.toLowerCase() === pl[random].toLowerCase()) {
                czy.innerHTML = "Dobrze!";
                czy.className = "correct";
            } else {
                czy.innerHTML = "Źle, prawidłowa odpowiedź to: " + pl[random];
                czy.className = "wrong";
            }
        }
    }
    
    isFirstClick = false;

    random = Math.floor(Math.random() * esp.length);
    let nowyJezyk = Math.floor(Math.random() * 2); 
    
    if (nowyJezyk == 0) {
        slowo.innerHTML = pl[random];
        lang = 1; 
    } else {
        slowo.innerHTML = esp[random];
        lang = 0; 
    }

    odpInput.value = "";
    odpInput.focus();
});

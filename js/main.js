document.getElementById('demo').innerHTML = 'Halo Fajar '+ Date('2015');

// innerHTML disebut method atau action untuk menambahkan text di html

//method bisa kita buat sendiri dengan function
function ChangeText(){
    document.getElementById('change-text').innerHTML = "Javascript is Sexy"
}

//window.alert("Haloo")
function tulis() {
    document.write("Belajar Javascript")
}

function lamponoff() {
    var img = document.getElementById('lampon');
    if (img.src.match('lampoff')){
        img.src = 'http://res.cloudinary.com/medio/image/upload/v1467519618/pic_bulboff_diye3u.gif';
    }
    else {
        img.src = 'http://res.cloudinary.com/medio/image/upload/v1467519606/pic_bulbon_hnaava.gif';
    }
}

//Javascript Function
function add (a,b){
    return a + b
}

console.log(add(10,50))
//alert(add(30,20))
document.getElementById('add').innerHTML = add(10,3)
//window.console.log('Hallo Js')

//Javascrip Object
var mobil = {
    merk: 'BMW',
    roda: 8,
    tahun: 2018,
    warna: 'White'
};

document.getElementById('car').innerHTML = 'Merk mobil apa = ' +mobil.merk+ '<br>Warna mobile apa = ' +mobil.warna+ '<br> Tahun mobile berapa = '+mobil.tahun+'<br>Roda mobil berapa = '+mobil.roda;


//Javascript String Method
var str = "Mari Belajar javascript dengan gembira"
var kata = str.length
var gembira = str.indexOf('gembira')
var gembira1 = str.lastIndexOf('gembira')
var slice = str.slice(-14,-1)


var myElement = document.getElementById('string')
myElement.innerHTML = 'Jumlah Char : ' + kata + ' <br>Index Number : ' + gembira + '<br> Last Index of : ' + gembira1 + '<br> Slice : ' + slice


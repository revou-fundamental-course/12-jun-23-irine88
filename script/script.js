
function convert() {
    var teks = document.getElementById("suhuawal").innerHTML;
    // console.log(teks);
    if (teks == "Celcius") {
    var celc = document.getElementById("angkainput").value;
    var fahr = ((celc * 9 )/ 5) + 32;
    // console.log(fahr);
    document.getElementById("angkahasil").value = fahr;
    } else {
    var fahr = document.getElementById("angkainput").value;
    var celc = ((fahr - 32 )* 5) / 9;
    // console.log(celc);
    document.getElementById("angkahasil").value = celc;
    }
}

function hapus() {
    var display = ""
    // console.log("OK Hapus");
    document.getElementById("angkainput").value = display;
    document.getElementById("angkahasil").value = display;
}

function tukar() {
    hapus();
    var teks = document.getElementById("suhuawal").innerHTML;
    // console.log("OK Tukar");
    // console.log(teks);
    if (teks == "Celcius") {
        document.getElementById("suhuawal").innerHTML = "Fahrenheit"
        document.getElementById("suhuhasil").innerHTML = "Celcius"
        document.getElementById("formula").innerHTML = "<sup>o</sup>C = (<sup>o</sup>F -32) x 5/9"
        } else {
        document.getElementById("suhuawal").innerHTML = "Celcius"
        document.getElementById("suhuhasil").innerHTML = "Fahrenheit"
        document.getElementById("formula").innerHTML = "<sup> o</sup>F = (<sup>o</sup>C x 9/5) + 32"
        }
}
function showvalue() {
    
    console.log("oke");

}
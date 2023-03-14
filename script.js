const operasi = (prompt("masukan operator"))
const angka1 = parseInt(prompt("masukan angka 1"));
const angka2 = parseInt(prompt("masukan angka 2"));

if(operasi == "+"){
    let tambah = angka1 + angka2;
    console.log(tambah);
}else if(operasi == "-"){
    let kurang = angka1 - angka2;
    console.log(kurang);
}else if(operasi == "*"){
    let kali = angka1 * angka2;
    console.log(kali);
}else(operasi == "/")
    let bagi = angka1 / angka2;
    console.log(bagi);

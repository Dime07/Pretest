// Galeri
var img1 =document.getElementById("img-1");
var img2 =document.getElementById("img-2");
var img3 =document.getElementById("img-3");
var display = document.getElementById("display");

let kurang = document.getElementById("btn-kurangi");
let tambah = document.getElementById("btn-tambah");
let nilai = document.getElementById("nilai");

let kurang2 = document.getElementById("btn-kurangi2");
let tambah2 = document.getElementById("btn-tambah2");
let nilai2 = document.getElementById("nilai2");

let kurang3 = document.getElementById("btn-kurangi3");
let tambah3 = document.getElementById("btn-tambah3");
let nilai3 = document.getElementById("nilai3");

let hasil = document.getElementById("result");
var akhir = 0


tambah.addEventListener("click", function(){
    nilai.value = parseInt(nilai.value) + 1;
    akhir = nilai.value * 40000;
    hasil.innerHTML="IDR " + akhir
    return akhir
});


kurang.addEventListener("click", function(){
    nilai.value = parseInt(nilai.value) - 1;
    akhir = nilai.value * 40000;
    hasil.innerHTML="IDR " + akhir
    return akhir
});


tambah2.addEventListener("click", function(){
    nilai2.value = parseInt(nilai2.value) + 1;
    akhir2 = nilai2.value * 30000;
    hasil.innerHTML="IDR " + (akhir + akhir2)
    return akhir
});

kurang2.addEventListener("click", function(){
    nilai2.value = parseInt(nilai2.value) - 1;
    akhir2 = nilai2.value * 30000;
    hasil.innerHTML="IDR " + (akhir + akhir2)
    return akhir
});

tambah3.addEventListener("click", function(){
    nilai3.value = parseInt(nilai3.value) + 1;
    akhir3 = nilai2.value * 30000;
    hasil.innerHTML="IDR " + (akhir + akhir2 + akhir3)
    return akhir
});

kurang3.addEventListener("click", function(){
    nilai3.value = parseInt(nilai3.value) - 1;
    akhir3 = nilai2.value * 30000;
    hasil.innerHTML="IDR " + (akhir + akhir2 + akhir3)
    return akhir
});











function change(){
    display.src="image/gambar1.png";
}
function change2(){
    display.src="image/gambar2.png";
}
function change3(){
    display.src="image/gambar3.png";
}


img1.onclick = change;
img2.onclick = change2;
img3.onclick = change3;

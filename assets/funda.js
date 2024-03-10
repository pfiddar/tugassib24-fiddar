//fungsi pop up
function popAlert() {
    alert("Halo! Ini alert");
}
function popConfirm() {
    let response = confirm("Halo! Kamu sudah tahu kan kalo ini confirm?")
    alert("Jawabanmu adalah "+ response);
}
function popPrompt() {
    let response = prompt("Halo! Kamu sudah tahu kan kalo ini prompt?");
    alert("Kamu menjawab "+ response);
}

//fungsi operator
function operator() {
    let operasi = document.getElementById("operasi").value;
    let bil1 = parseFloat(document.getElementById("bil1").value);
    let bil2 = parseFloat(document.getElementById("bil2").value);
    let hasil;
    
    if (operasi == "tambah") {
        hasil = bil1 + bil2;
    }else if(operasi == "kurang"){
        hasil = bil1 - bil2;
    }else if (operasi == "bagi") {
        hasil = bil1 / bil2;
    } else if (operasi == "kali") {
        hasil = bil1 * bil2;
    }

    document.getElementById("hitung").innerHTML = hasil;
}
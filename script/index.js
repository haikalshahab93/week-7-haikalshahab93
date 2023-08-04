"use strict";
// let models:Array<Object> = [];
// Tahapan Awal Setelah Mengisi Data Dari Index HTML  dan Mensubmit Masuk Ke Dalam Action Get Input
const getInput = () => {
    // fungsi mengambil nilai dari form type 2= Cash Out  1= Cash In 0 = Undefined
    let formtipe = document.getElementById("type").value;
    // fungsi melogikakan form tipe dari form value yang di dapat pada saat submit
    let formconvertype = formtipe == "1" ? "Cash In" : formtipe == "0" ? "Undefined" : "Cash Out";
    // fungsi mengambil nilai dari form untuk nama
    let formname = document.getElementById("name").value;
    // fungsi mengambil nilai dari form untuk details
    let formdetails = document.getElementById("details")
        .value;
    // fungsi mengambil nilai dari form untuk ammount
    let formamounts = parseInt(document.getElementById("amount").value);
    // fungsi random id dari string panjang 16 kemudian di ambil dari array nomoe 2 dan sampai ke baris 8
    let formid = "id_" + Math.random().toString().slice(2, 8);
    // Menampilkan Data Dengan Inputan
    ViewElement(Data(formid, formconvertype, formname, formdetails, formamounts));
};
const Data = (id, type, name, details, jumlah) => ({
    id,
    type,
    name,
    details,
    jumlah,
});
const deleteRow = (id) => {
    var _a;
    const elem = document.getElementById(id);
    (_a = elem.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(elem);
};
const ViewElement = (obj) => {
    const myClass = document.querySelector(".wrapper");
    if (obj.type == "Undefined") {
        myClass.innerHTML += `
    <div class="card text-center mt-2 card bg-danger text-white " id="${obj.id}">
  <div class="card-body">
  <h4 class="card-title"> ${obj.type}</h4>
    <h5 class="card-title">Data Kosong</h5>
    <button type="button" class="btn btn-success" onclick="deleteRow('${obj.id}')">Delete</button>
  </div>
</div>
     
      `;
    }
    else {
        myClass.innerHTML += `
    <div class="card text-center mt-2 card bg-success text-white" id="${obj.id}">
    <div class="card-body">
      <h5 class="card-title"> ${obj.type}</h5>
      <p class="card-text">Yth ${obj.name} telah melakukan ${obj.details} sebesar ${obj.jumlah}  </p>
      <button type="button" class="btn btn-danger" onclick="deleteRow('${obj.id}')">Delete</button>
    </div>
  </div>  
    `;
    }
};

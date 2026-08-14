const DATA = [
  {id:"baru", title:"Paspor Baru", icon:"🌐", desc:"Informasi membuat paspor baru", category:"Paspor",
   keywords:["paspor baru","buat paspor","bikin paspor","paspor pertama","persyaratan paspor"],
   intro:"Berikut panduan umum untuk pengajuan paspor baru.",
   sections:[
    ["Persyaratan umum",["KTP elektronik","Kartu Keluarga","Dokumen pendukung sesuai kebutuhan (misalnya akta kelahiran/ijazah/buku nikah)","Paspor lama jika pernah memiliki paspor"]],
    ["Alur singkat",["Siapkan dokumen asli","Ajukan permohonan melalui kanal resmi yang berlaku","Datang sesuai jadwal untuk pemeriksaan dokumen, foto dan biometrik","Lakukan pembayaran sesuai tarif yang ditetapkan","Ambil paspor sesuai pemberitahuan"]]
   ]},
  {id:"ganti", title:"Penggantian Paspor", icon:"🔄", desc:"Penggantian paspor habis berlaku", category:"Paspor",
   keywords:["penggantian paspor","ganti paspor","paspor habis","paspor expired","paspor kadaluarsa"],
   intro:"Penggantian paspor dapat dilakukan karena masa berlaku habis, halaman penuh, perubahan data, atau kondisi tertentu.",
   sections:[
    ["Pilihan alasan",["Masa berlaku habis","Halaman penuh","Perubahan data","Paspor rusak","Alasan lainnya sesuai ketentuan"]],
    ["Catatan",["Bawa dokumen identitas dan paspor lama bila masih ada","Persyaratan dapat berbeda menurut alasan penggantian"]]
   ]},
  {id:"hilang", title:"Paspor Hilang", icon:"🪪", desc:"Prosedur jika paspor hilang", category:"Paspor",
   keywords:["paspor hilang","kehilangan paspor","surat kehilangan"],
   intro:"Jika paspor hilang, segera laporkan kehilangan dan ikuti pemeriksaan sesuai prosedur.",
   sections:[
    ["Yang perlu disiapkan",["Identitas diri","Surat keterangan kehilangan dari kepolisian","Dokumen pendukung lain sesuai hasil pemeriksaan petugas"]],
    ["Catatan penting",["Jangan menggunakan atau melaporkan data yang tidak benar","Biaya atau sanksi dapat mengikuti ketentuan yang berlaku"]]
   ]},
  {id:"rusak", title:"Paspor Rusak", icon:"📕", desc:"Prosedur jika paspor rusak", category:"Paspor",
   keywords:["paspor rusak","paspor sobek","paspor basah","paspor rusak berat"],
   intro:"Paspor yang rusak perlu diperiksa oleh petugas untuk menentukan proses selanjutnya.",
   sections:[
    ["Yang perlu dibawa",["Paspor yang rusak","KTP dan dokumen identitas","Dokumen pendukung bila diminta petugas"]],
    ["Catatan",["Jangan memperbaiki atau mengubah fisik paspor sendiri sebelum pemeriksaan"]]
   ]},
  {id:"anak", title:"Paspor Anak", icon:"👶", desc:"Informasi paspor untuk anak", category:"Paspor",
   keywords:["paspor anak","anak","paspor bayi","paspor anak kecil"],
   intro:"Paspor anak memerlukan dokumen anak dan dokumen orang tua/wali sesuai ketentuan.",
   sections:[
    ["Dokumen yang umumnya diperlukan",["Identitas anak","Kartu Keluarga","Dokumen kelahiran anak","Dokumen identitas orang tua/wali sesuai kondisi"]]
   ]},
  {id:"biaya", title:"Biaya Paspor", icon:"💳", desc:"Informasi tarif layanan paspor", category:"Paspor",
   keywords:["biaya paspor","tarif paspor","harga paspor"],
   intro:"Tarif paspor mengikuti jenis paspor dan ketentuan PNBP yang berlaku.",
   sections:[
    ["Catatan",["Gunakan tarif resmi terbaru pada kanal pemerintah/UPT Imigrasi.","Hindari membayar kepada pihak yang tidak berwenang."]]
   ]},
  {id:"syarat", title:"Persyaratan", icon:"📋", desc:"Dokumen dan ketentuan layanan", category:"Panduan",
   keywords:["persyaratan","syarat","dokumen","berkas"],
   intro:"SAPA FIND membantu mengelompokkan dokumen yang biasanya dibutuhkan berdasarkan jenis layanan.",
   sections:[
    ["Tips dokumen",["Bawa dokumen asli","Pastikan data identitas sesuai","Siapkan dokumen pendukung jika ada perubahan data","Ikuti instruksi petugas jika ada pemeriksaan tambahan"]]
   ]},
  {id:"prosedur", title:"Prosedur & Waktu", icon:"⏱️", desc:"Tahapan dan perkiraan proses", category:"Panduan",
   keywords:["prosedur","proses","waktu","berapa lama","alur"],
   intro:"Tahapan layanan dapat meliputi pendaftaran, pemeriksaan dokumen, foto/biometrik, pembayaran, dan pengambilan.",
   sections:[
    ["Tips",["Datang sesuai jadwal","Pastikan dokumen lengkap sebelum datang","Simpan bukti pendaftaran/pembayaran"]]
   ]},
  {id:"lokasi", title:"Lokasi Pelayanan", icon:"📍", desc:"Informasi lokasi dan jam layanan", category:"Kantor",
   keywords:["lokasi","alamat","kantor","jam layanan","buka","pelayanan"],
   intro:"Gunakan informasi resmi kantor untuk memastikan lokasi dan jadwal pelayanan terbaru.",
   sections:[
    ["Jam layanan (contoh)",["Senin–Jumat, 08.00–15.30 WIB","Jadwal dapat berubah pada hari libur atau kebijakan khusus."]]
   ]},
  {id:"kontak", title:"Kontak & Bantuan", icon:"💬", desc:"Cara mendapatkan bantuan", category:"Kantor",
   keywords:["kontak","telepon","bantuan","hubungi","pengaduan"],
   intro:"Untuk informasi yang belum tersedia di SAPA FIND, gunakan kanal kontak resmi Kantor Imigrasi Selatpanjang.",
   sections:[
    ["Penting",["Jangan berikan OTP, PIN, atau data rahasia kepada pihak lain.","Gunakan kanal resmi untuk konfirmasi informasi."]]
   ]}
];

const popular = ["baru","ganti","hilang","rusak","anak","biaya"];
const quick = ["baru","ganti","hilang","rusak","anak","biaya","syarat","prosedur","lokasi"];

const $ = s => document.querySelector(s);
const landing = $("#landing"), mainApp = $("#mainApp");
const messages = $("#chatMessages"), searchInput = $("#searchInput");
const modal = $("#detailModal"), toast = $("#toast");

function item(id){return DATA.find(x=>x.id===id)}
function makeCard(d){
  const el=document.createElement("button");
  el.className="cat-card"; el.innerHTML=`<div class="cat-icon">${d.icon}</div><h4>${d.title}</h4><p>${d.desc}</p>`;
  el.addEventListener("click",()=>showDetail(d));
  return el;
}
function renderLanding(){
  const box=$("#landingCategories"); box.innerHTML="";
  popular.map(item).forEach(d=>box.appendChild(makeCard(d)));
  const side=$("#sideMenu"); side.innerHTML="";
  quick.forEach(id=>{
    const d=item(id); const b=document.createElement("button");
    b.className="side-item"; b.textContent=`${d.icon}  ${d.title}`;
    b.onclick=()=>ask(d.title);
    side.appendChild(b);
  });
}
function renderQuick(){
  const box=$("#quickButtons"); box.innerHTML="";
  quick.slice(0,8).forEach(id=>{
    const d=item(id); const b=document.createElement("button");
    b.className="quick"; b.textContent=d.title; b.onclick=()=>ask(d.title);
    box.appendChild(b);
  });
}
function addMessage(html,type="bot"){
  const d=document.createElement("div"); d.className=`msg ${type}`; d.innerHTML=html;
  messages.appendChild(d); messages.scrollTop=messages.scrollHeight;
}
function introChat(){
  messages.innerHTML="";
  addMessage(`<div class="msg-title">👋 Halo! Saya SAPA FIND.</div>Saya siap membantu Anda menemukan informasi seputar layanan PASPOR. Apa yang ingin Anda ketahui?`);
}
function start(){
  landing.classList.add("hidden"); mainApp.classList.remove("hidden");
  introChat(); renderQuick(); setTimeout(()=>searchInput.focus(),100);
}
function showDetail(d){
  $("#modalIcon").textContent=d.icon; $("#modalCategory").textContent=d.category;
  $("#modalTitle").textContent=d.title;
  let html=`<p>${d.intro}</p>`;
  d.sections.forEach(([head,items])=>{
    html+=`<h4>${head}</h4><ul>${items.map(x=>`<li>${x}</li>`).join("")}</ul>`;
  });
  html+=`<p><b>Catatan:</b> Informasi pada prototype ini bersifat panduan. Pastikan memeriksa ketentuan resmi terbaru sebelum datang.</p>`;
  $("#modalBody").innerHTML=html;
  $("#modalActions").innerHTML=`<button onclick="askFromModal('${d.id}')">💬 Tanya di SAPA FIND</button><button onclick="closeModal()">← Tutup</button>`;
  modal.classList.remove("hidden");
}
function closeModal(){modal.classList.add("hidden")}
function askFromModal(id){closeModal();start();ask(item(id).title)}
function ask(text){
  if(mainApp.classList.contains("hidden")) start();
  addMessage(text,"user");
  const q=text.toLowerCase().trim();
  const found=DATA.filter(d=>d.keywords.some(k=>q.includes(k)) || d.title.toLowerCase().includes(q));
  setTimeout(()=>{
    if(found.length){
      const d=found[0];
      addMessage(`<div class="msg-title">${d.icon} ${d.title}</div>${d.intro}<br><br><b>Ringkas:</b> ${d.sections[0][1].slice(0,3).join(" • ")}<br><button class="quick" style="margin-top:10px" onclick="showDetail(item('${d.id}'))">Lihat detail</button>`);
    }else{
      const suggestions=DATA.filter(d=>d.title.toLowerCase().includes(q.split(" ")[0])).slice(0,3);
      addMessage(`<div class="msg-title">🔎 Saya belum menemukan jawaban yang tepat.</div>Coba kata kunci seperti <b>paspor baru</b>, <b>paspor hilang</b>, <b>biaya paspor</b>, atau pilih menu di bawah.${suggestions.length?`<br><br><b>Mungkin yang Anda cari:</b> ${suggestions.map(d=>d.title).join(", ")}`:""}`);
    }
  },350);
}
function submitSearch(){
  const v=searchInput.value.trim(); if(!v)return;
  searchInput.value=""; ask(v);
}
function help(){showToast("Pilih kategori atau ketik pertanyaan Anda. SAPA FIND akan menampilkan panduan yang relevan.")}
function showToast(t){toast.textContent=t;toast.classList.add("show");setTimeout(()=>toast.classList.remove("show"),2600)}

$("#startBtn").addEventListener("click",start);
$("#sendBtn").addEventListener("click",submitSearch);
searchInput.addEventListener("keydown",e=>{if(e.key==="Enter")submitSearch()});
$("#closeModal").addEventListener("click",closeModal);
modal.addEventListener("click",e=>{if(e.target===modal)closeModal()});
$("#backHome").addEventListener("click",()=>{mainApp.classList.add("hidden");landing.classList.remove("hidden")});
document.querySelectorAll('[data-action="help"]').forEach(b=>b.addEventListener("click",help));
window.item=item; window.showDetail=showDetail; window.closeModal=closeModal; window.askFromModal=askFromModal;
renderLanding();

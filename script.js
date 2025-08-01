// Logik permainan Roda Ayat Sakti
// Soalan disusun bersama pilihan jawapan dan penjelasan.

let masa = 0;
let skor = 0;
let timer = null;
let sedangMula = false;
let indexSoalan = 0;

// Ambil elemen audio untuk muzik latar
const muzik = document.getElementById('muzikLatar');
let sudahKlik = false;
muzik.volume = 1;
muzik.muted = false;

// Bunyi untuk putaran roda
const bunyiRoda = new Audio('https://cdn.pixabay.com/download/audio/2023/07/03/audio_b2d55362b0.mp3?filename=tick-121160.mp3');
bunyiRoda.volume = 1;

// Aktifkan muzik selepas klik pertama (menangani sekatan auto‑play pelayar)
document.body.addEventListener(
  'click',
  () => {
    if (!sudahKlik) {
      muzik
        .play()
        .catch((e) => console.warn('Autoplay disekat:', e));
      sudahKlik = true;
    }
  },
  { once: true }
);

// Kawalan muzik latar
document.getElementById('btnMain').onclick = () => muzik.play();
document.getElementById('btnJeda').onclick = () => muzik.pause();
document.getElementById('larasBunyi').oninput = (e) => {
  muzik.volume = e.target.value;
};

// Kawalan pemasa
document.getElementById('btnHenti').onclick = () => {
  clearInterval(timer);
  timer = null;
};

document.getElementById('btnReset').onclick = () => {
  clearInterval(timer);
  timer = null;
  masa = 0;
  document.getElementById('masa').textContent = formatMasa(masa);
};

// Sambung semula pemasa yang dihentikan
const btnSambung = document.getElementById('btnSambung');
if (btnSambung) {
  btnSambung.onclick = () => {
    if (!timer) {
      mulaMasa();
    }
  };
}

// Data soalan – boleh ditambah atau diubah suai mengikut keperluan
const semuaSoalan = [
  {
    soalan:
      'Pokok rambutan di belakang rumah datuk saya itu ________ buahnya.',
    pilihan: ['lebat', 'kasar', 'buruk', 'sunyi'],
    jawapan: 'lebat',
    penjelasan:
      '"Lebat" ialah kata adjektif yang menerangkan kuantiti atau banyaknya buah, sesuai untuk konteks pokok yang mengeluarkan hasil dengan banyak.',
  },
  {
    soalan:
      'Suara murid yang memenangi Pertandingan Bintang Kecil itu ________ merdu.',
    pilihan: ['sungguh', 'benar', 'betul', 'nian'],
    jawapan: 'sungguh',
    penjelasan:
      '"Sungguh" berfungsi sebagai kata penguat bagi kata adjektif "merdu" dan menyatakan tahap kemerduan yang tinggi.',
  },
  {
    soalan:
      'Peserta ekspedisi itu perlu tahan ________ kerana mereka akan mengharungi arus deras.',
    pilihan: ['lasak', 'lembut', 'manja', 'tenang'],
    jawapan: 'lasak',
    penjelasan:
      '"Lasak" ialah kata adjektif yang bermaksud kuat dan tahan cabaran fizikal. Sesuai untuk menggambarkan peserta ekspedisi.',
  },
  {
    soalan: 'Pak Cik Hasyim menyiram sayur-sayuran supaya hidup ________.',
    pilihan: ['subur', 'haus', 'tumpul', 'licin'],
    jawapan: 'subur',
    penjelasan:
      '"Subur" bermaksud tumbuhan yang tumbuh dengan baik dan sihat, sesuai digunakan bagi menggambarkan hasil tanaman.',
  },
  {
    soalan:
      'Tolong bantu ____________ mengangkat barang ini," kata Li Wei kepada Vijay.',
    pilihan: ['saya', 'dia', 'kamu', 'kita'],
    jawapan: 'saya',
    penjelasan:
      '"Saya" ialah kata ganti nama diri pertama yang digunakan oleh penutur untuk merujuk kepada dirinya sendiri.',
  },
  {
    soalan:
      '"Bolehkah saya bantu ____________ untuk menyiapkan projek itu?" tanya Fatin kepada rakan-rakannya.',
    pilihan: ['kalian', 'kami', 'awak', 'kita'],
    jawapan: 'kalian',
    penjelasan:
      '"Kalian" ialah kata ganti nama diri kedua yang digunakan untuk merujuk kepada sekumpulan orang yang sedang diajak bercakap.',
  },
  {
    soalan:
      '"Pada petang ini, ____________ bertiga akan hadir ke majlis hari jadi Ravi" kata Zhi Shan, Jun Hung dan Gui Xian kepada Jia Ying.',
    pilihan: ['kami', 'mereka', 'kita', 'anda'],
    jawapan: 'kami',
    penjelasan:
      '"Kami" ialah kata ganti nama diri pertama jamak, tidak termasuk orang yang diajak bercakap.',
  },
  {
    soalan:
      'Pasar tani itu bermula pada pukul 7:00 pagi ________ 12:00 tengah hari.',
    pilihan: ['hingga', 'sambil', 'lalu', 'kerana'],
    jawapan: 'hingga',
    penjelasan:
      '"Hingga" ialah kata hubung yang menunjukkan jangka masa dari satu titik ke satu titik yang lain.',
  },
  {
    soalan: 'Ayah membaca buku ________ ibu menyediakan makanan.',
    pilihan: ['manakala', 'kerana', 'lalu', 'dan'],
    jawapan: 'manakala',
    penjelasan:
      '"Manakala" ialah kata hubung yang menunjukkan perbezaan subjek dan tindakan dalam ayat majmuk.',
  },
  {
    soalan: 'Ayah melawat nenek ________ sedang dirawat di hospital.',
    pilihan: ['yang', 'kerana', 'lalu', 'apabila'],
    jawapan: 'yang',
    penjelasan:
      '"Yang" ialah kata hubung pancangan relatif yang digunakan untuk menghubungkan frasa nama dengan frasa penerang.',
  },
];

// Pilih 10 soalan secara rawak (jika lebih daripada itu)
const soalanSet = semuaSoalan
  .sort(() => Math.random() - 0.5)
  .slice(0, 10);

// Format masa dalam minit dan saat
function formatMasa(s) {
  const min = Math.floor(s / 60);
  const sec = s % 60;
  return min > 0 ? `${min} minit ${sec} saat` : `${sec} saat`;
}

// Mulakan pemasa jika belum berjalan
function mulaMasa() {
  if (!timer) {
    timer = setInterval(() => {
      masa++;
      document.getElementById('masa').textContent = formatMasa(masa);
    }, 1000);
  }
}

// Paparkan soalan semasa
function renderSoalan() {
  const app = document.getElementById('app');
  app.innerHTML = '';

  if (indexSoalan >= soalanSet.length) {
    clearInterval(timer);
    timer = null;
    document.getElementById('btnPutar').disabled = true;
    app.innerHTML = `<h2 class="text-xl font-bold">🎉 Tamat!</h2><p>Skor anda: ${skor} / ${soalanSet.length}</p><p>Masa: ${formatMasa(masa)}</p><button id="mulaSemula" class="mt-4 bg-green-500 text-white px-4 py-2 rounded-full">🔁 Mula Semula</button>`;
    document.getElementById('mulaSemula').onclick = () => location.reload();
    return;
  }

  const s = soalanSet[indexSoalan];
  const box = document.createElement('div');
  box.className = 'bg-white p-4 rounded-xl shadow';
  box.innerHTML = `<h3 class="font-semibold mb-2">${s.soalan}</h3>`;

  // Susun pilihan secara rawak supaya jawapan tidak sentiasa di posisi yang sama
  s.pilihan.sort(() => Math.random() - 0.5).forEach((p) => {
    const btn = document.createElement('button');
    btn.className = 'bg-yellow-200 hover:bg-yellow-300 m-1 px-4 py-2 rounded';
    btn.innerText = p;
    btn.onclick = () => {
      // Jika sudah ada butang yang disabled, soalan telah dijawab
      if (document.querySelector('.bg-yellow-200[disabled]')) return;
      const betul = p === s.jawapan;
      if (betul) {
        skor++;
        confetti({ particleCount: 50, spread: 60 });
      }
      const feedback = document.createElement('p');
      feedback.className = 'mt-2';
      feedback.innerHTML = `${betul ? '✅ Betul!' : '❌ Salah.'} <br> <strong>Penjelasan:</strong> ${s.penjelasan}`;
      box.appendChild(feedback);
      document.getElementById('paparSkor').textContent = skor;
      // Disable semua butang pilihan supaya hanya satu jawapan diterima
      const allBtns = box.querySelectorAll('button');
      allBtns.forEach((b) => (b.disabled = true));
      indexSoalan++;
      document.getElementById('btnPutar').disabled = false;
    };
    box.appendChild(btn);
  });

  app.appendChild(box);
}

// Putar roda dan papar soalan seterusnya
document.getElementById('btnPutar').onclick = (() => {
  let totalRotation = 0;
  return function () {
    const roda = document.getElementById('roda');
    totalRotation += 360;
    roda.style.transition = 'transform 1.5s cubic-bezier(0.33, 1, 0.68, 1)';
    roda.style.transform = `rotate(${totalRotation}deg)`;

    bunyiRoda.currentTime = 0;
    bunyiRoda.play().catch((e) => console.warn('Gagal mainkan bunyi roda:', e));

    // Muzik latar tidak akan dimainkan semula secara automatik.  
    // Jika pemain menekan Jeda, muzik kekal jeda sehingga butang Main ditekan semula.
    // if (muzik.paused) muzik.play();
    // Mulakan pemasa hanya sekali, pada pusingan pertama
    if (!sedangMula) {
      sedangMula = true;
      mulaMasa();
    }
    setTimeout(() => {
      renderSoalan();
      // Butang putar dinyahaktif selepas soalan keluar sehingga soalan dijawab
      document.getElementById('btnPutar').disabled = true;
    }, 1000);
  };
})();
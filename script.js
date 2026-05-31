function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth"
    });
  }
}

function copyPrompt() {
  const promptText = document.getElementById("systemPrompt");

  promptText.select();
  promptText.setSelectionRange(0, 99999);

  navigator.clipboard.writeText(promptText.value)
    .then(() => {
      alert("Prompt sistem berhasil disalin.");
    })
    .catch(() => {
      alert("Gagal menyalin prompt. Silakan salin secara manual.");
    });
}

function showPrompt(type) {
  const output = document.getElementById("prompt-output");

  const prompts = {
    bab1: `Prompt Analisis BAB I:

Analisis BAB I tesis saya berdasarkan alur deduktif, idealitas, realitas, gap penelitian, urgensi, solusi, novelty, rumusan masalah, tujuan penelitian, dan kesesuaian dengan judul.

Berikan hasil dalam format:
1. Kekuatan BAB I.
2. Kelemahan BAB I.
3. Bagian yang belum logis.
4. Saran revisi per paragraf.
5. Versi revisi akademik.`,

    bab2: `Prompt Kajian Pustaka BAB II:

Bantu saya menyusun kajian pustaka tesis tentang Project Based Learning, sistem koloid, pasta gigi berbasis ekstrak bahan alam lokal dan VCO, literasi halal, serta kemampuan berpikir kritis.

Susun dengan format:
1. Landasan teori.
2. Hubungan antarvariabel.
3. Penelitian terdahulu.
4. Research gap.
5. Novelty.
6. Kerangka berpikir.`,

    bab3: `Prompt Metodologi BAB III:

Susun BAB III untuk penelitian mixed methods dengan desain nonequivalent control group design.

Konteks penelitian:
Penerapan Project Based Learning melalui pembuatan pasta gigi dari ekstrak bahan alam lokal dan VCO pada materi koloid untuk meningkatkan literasi halal dan kemampuan berpikir kritis siswa.

Susun bagian:
1. Jenis dan desain penelitian.
2. Variabel penelitian.
3. Populasi dan sampel.
4. Prosedur penelitian.
5. Instrumen penelitian.
6. Teknik pengumpulan data.
7. Teknik analisis data kuantitatif.
8. Teknik analisis data kualitatif.`,

    instrumen: `Prompt Instrumen Penelitian:

Buat instrumen penelitian untuk tesis saya yang mencakup:
1. Tes literasi halal.
2. Tes kemampuan berpikir kritis.
3. Lembar observasi keterlaksanaan PjBL.
4. Rubrik proyek pasta gigi.
5. Angket respons siswa.
6. Pedoman wawancara.
7. Lembar validasi ahli.

Setiap instrumen harus memiliki indikator, subindikator, bentuk data, rubrik penskoran, dan kriteria interpretasi.`,

    data: `Prompt Analisis Data:

Saya akan mengirimkan data penelitian berupa nilai pretest, posttest, angket, observasi, validasi ahli, dan wawancara.

Analisis data tersebut dengan langkah:
1. Statistik deskriptif.
2. N-gain.
3. Uji normalitas.
4. Uji homogenitas.
5. Uji beda.
6. Interpretasi hasil.
7. Narasi hasil untuk BAB IV.
8. Pembahasan berbasis teori dan temuan penelitian.`,

    sidang: `Prompt Simulasi Sidang Tesis:

Buat daftar pertanyaan penguji yang mungkin muncul dari tesis saya.

Judul tesis:
Penerapan Model Project Based Learning melalui Pembuatan Pasta Gigi dari Ekstrak Bahan Alam Lokal dan VCO pada Materi Koloid untuk Meningkatkan Literasi Halal dan Kemampuan Berpikir Kritis Siswa.

Berikan:
1. Pertanyaan penguji.
2. Jawaban akademik.
3. Risiko kelemahan jawaban.
4. Versi jawaban singkat untuk presentasi lisan.`
  };

  output.textContent = prompts[type] || "Prompt tidak ditemukan.";
}

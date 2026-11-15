# MEMORY: progres portofolio

Diperbarui: 15 November 2026. Isinya keadaan folder ini saat ini, supaya sesi berikutnya tidak mengulang pekerjaan.

## Pembaruan terakhir â€” 15 November 2026 (kartu wellness + studi kasus KERN)

- **Kartu wellness di meja sudah diperbaiki.** Isinya kini **Copenhagen, Denmark** (bukan Lisbon, Portugal), tujuan dan audiensnya disamakan dengan brief KERN, status berubah dari "In progress" menjadi **"Live"**, dan di bawah meja ada tombol "Read the KERN case study". Datanya di `src/content/projects.ts` (field baru `live` dan `caseHref`); label status di `src/components/Desk.tsx`. Kartu kontraktor dan villa tetap "In progress".
- **Halaman studi kasus `/work/kern`** (`src/app/work/kern/page.tsx`): hero 1440, tangkapan movement screen 375, bagian Studio 1440, brief, masalah, enam keputusan desain, "What testing changed", skor Lighthouse 95â€“96/100/100/100, dan tombol ke situs live. Gambar di `public/work/kern/` â€” 2880Ã—1800 dan 750Ã—1624, cocok dengan `width`/`height` di kode, jadi tidak ada pergeseran layout.
- **Kartu share dibuat sendiri.** `src/app/work/kern/opengraph-image.tsx` menghasilkan PNG **1200Ã—630** dengan Archivo, charcoal dan satu aksen oranye. Sebelumnya halaman ini memakai foto hero 2880Ã—1800 (rasio 8:5) yang akan terpotong di WhatsApp/X. Loader font dipindah ke `src/lib/og-font.ts` dan dipakai kedua kartu share.
- **Sitemap** bertambah `/work/kern`. `DESIGN.md` dan `CASE-STUDY.md` disinkronkan dengan label status baru ("Concept project" + status build), karena keduanya masih menulis semua kartu "in progress".
- **Verifikasi:** `npm run lint` dan `npm run build` lolos; `/work/kern` di-prerender. Uji `next start` lokal: `/work/kern` 200, `og:image` dan `twitter:image` menunjuk PNG 1200Ã—630 (dicek sampai ukuran piksel), kartu beranda tidak berubah, gambar kartu berisi 417 warna (bukan bidang kosong).
- **Commit:** `1a347c3` (kartu + halaman studi kasus + sitemap + docs) dan `72fa6ee` (kartu share 1200Ã—630 + `MEMORY.md` + `CLAUDE.md`). `CLAUDE.md` dan `MEMORY.md` akhirnya ikut di-commit, sama seperti di repo `01-wellness`.
- **Lighthouse `/work/kern` (live, 15 November 2026):** mobile **97 / 100 / 100 / 100** (LCP 2,5 s, Speed Index 3,0 s, CLS 0, TBT 50 ms), desktop **100 / 100 / 100 / 100** (LCP 0,5 s, CLS 0). Sebelumnya mobile hanya **89** (LCP 2,6 s, Speed Index 7,4 s) karena prop `priority` pada `next/image` sudah **dideprekasi di Next 16** sehingga gambar hero tidak dipreload; diganti `preload` (commit `0404268`) dan link `imagesrcset` kini muncul di `<head>` (diverifikasi di HTML live). Sisa insight yang sengaja belum diambil: Lighthouse menyarankan `fetchpriority="high"` pada link preload itu, sedangkan dokumen Next 16 melarang menggabung `preload` dengan `fetchPriority`. Pembanding: beranda mobile **100** (LCP 0,9 s) dengan GA dan Lenis yang sama, jadi angka halaman ini sudah sekelas.
- **Belum:** review visual `/work/kern` oleh mata atau model vision (model sesi ini text-only).
- **BLOCKER domain â€” SELESAI 15 November 2026.** Riwayat: sejak sekitar 5 November 2026 `belfamuhammad.com` didelegasikan ke **NS1/NS2.NONVERIFIEDDOMAIN.COM** yang **NXDOMAIN**, sehingga seluruh zona gagal (SERVFAIL di Google, Cloudflare, AdGuard, dan 8.8.8.8). Akibatnya `www.belfamuhammad.com` dan `kern.belfamuhammad.com` **tidak bisa dibuka pengunjung**, termasuk seluruh portfolio dan tiga link di Upwork. **Panel Domainesia tetap menampilkan "Active"** (dicek pemilik 15 November 2026); status panel tidak mencerminkan delegasi di registry, jadi jangan dipakai sebagai bukti domain sehat. Yang menentukan: RDAP Verisign â†’ NS = `NS1/NS2.NONVERIFIEDDOMAIN.COM`, `delegationSigned: false` (bukan masalah DNSSEC), registrasi 21 Oktober 2026, last changed 5 November 2026 â€” sekitar 15 hari setelah registrasi, yaitu tenggat verifikasi kontak registran ICANN (RAA 2014). Langkah: cari email verifikasi dari Domainesia (21 Oktâ€“5 Nov), atau minta support mengecek status verifikasi kontak dan mengembalikan nameserver ke DNS Domainesia. **Bukti tambahan 15 November 2026:** panel Domainesia justru sudah menampilkan nameserver yang benar (`ns1.domainesia.net` / `ns2.domainesia.net`), jadi tidak ada yang bisa diperbaiki dari panel â€” masalahnya di sisi registrar. Keempat IP `ns1`/`ns2.domainesia.net` menjawab normal untuk `domainesia.net` tetapi **SERVFAIL untuk `belfamuhammad.com`**, jadi zona DNS-nya juga tidak terbit di DNS Domainesia (dicek langsung ke 36.50.77.54, 172.104.178.251, 139.162.241.138, 45.33.9.238, dengan kueri kontrol yang berhasil). Satu-satunya jalan: support Domainesia mengeskalasi ke WebNic. Sementara itu situs bisa dicek lewat `belfamuhammad-website.vercel.app`. **Panel juga tidak bisa memperbaiki:** saat "Use default nameservers" disimpan, Domainesia menampilkan *"An issue was encountered while updating the domain nameservers. Please contact support."* â€” update nameserver ditolak di sisi registrar, jadi tombol support (dan eskalasi ke WebNic) satu-satunya jalan.

  **Penyelesaian 15 November 2026:** pemilik memverifikasi email dari Domainesia, dan delegasi registry langsung berubah ke `NS1.DOMAINESIA.NET` / `NS2.DOMAINESIA.NET` (last changed 15 November 2026 06:39 UTC). Dicek di domain asli dan semuanya hidup: `/` 200 dengan kartu "Copenhagen, Denmark" (tanpa "Lisbon"), `/work/kern` 200 dengan canonical benar dan kartu share 1200Ã—630 (dicek sampai ukuran piksel), empat aset gambar 200, sitemap 2 URL, plus `kern.belfamuhammad.com` dan `/credits` 200 dengan penanda motion (`hero-line`, `scroll-progress`, `data-reveal`) ada. Pelajaran untuk sesi berikutnya: status "Active" di panel registrar bukan bukti domain sehat; pakai RDAP Verisign.

## Pembaruan terakhir â€” 15 November 2026 (demo 2: Kelso & Reid)

- **Demo 2 selesai dan live:** situs konsep kontraktor renovasi fiktif di Melbourne di `https://renovation.belfamuhammad.com` (repo `belfamrf/kelso-reid`, project Vercel `kelso-reid`, terhubung ke GitHub untuk auto-deploy). Lighthouse mobile **100 / 100 / 100 / 100** (LCP 0,9 s, CLS 0) di domain asli. Keputusan desain dan QA ada di `..\02-jasa-lokal\` (`BRIEF.md`, `DESIGN.md`, `MEMORY.md`).
- **Kartu meja kontraktor kini terhubung:** `src/content/projects.ts` mendapat `name: "Kelso & Reid"`, `live`, dan `caseHref`; label status berubah sendiri dari "In progress" jadi **"Live"** karena `Desk.tsx` sudah membaca `project.live`, dan muncul tombol "Read the Kelso & Reid case study".
- **Halaman studi kasus `/work/renovation`** (`src/app/work/renovation/page.tsx`): tiga tangkapan layar situs live (hero 1440, pembanding 1440, pembanding 375 â€” diambil lewat `scripts/capture-work.mjs` di repo 02), brief, masalah, enam keputusan desain, dan bagian "What testing changed" yang mencatat dua perubahan nyata: kolom pembanding tidak diredamkan karena kontras jatuh di bawah AA, dan tabel tiga kolom di HP menjadi dua daftar dengan `aria-pressed` plus live region. Gambar LCP memakai prop `preload`, bukan `priority` yang sudah dideprekasi.
- **Kartu share halaman itu** dibuat sendiri (`src/app/work/renovation/opengraph-image.tsx`, 1200Ã—630, Archivo, charcoal + oranye). Sitemap kini tiga URL.
- **Lighthouse:** `/work/renovation` mobile **98 / 100 / 100 / 100** (LCP 2,4 s, CLS 0) Â· `/work/kern` mobile 97 Â· beranda mobile 100.
- **Commit:** `ea134fc` (halaman studi kasus + kartu + sitemap) sudah di-push dan live.
- **Belum:** review visual kartu dan halaman oleh pemilik atau model vision; demo 3 (`03-hospitality`) belum dimulai.

## Status per folder

| Folder | Isi | Status |
|---|---|---|
| `00-website-pribadi` | Website portofolio Belfa (Next.js) | **Selesai dan online** |
| `01-wellness` | Proyek demo 1 (personal training, dengan logo) | **Live di https://kern.belfamuhammad.com**, kartu dan studi kasus sudah terhubung |
| `02-jasa-lokal` | Proyek demo 2 (kontraktor/klinik) | **Kosong**, belum ada git |
| `03-hospitality` | Proyek demo 3 (villa/restoran) | **Kosong**, belum ada git |
| `_referensi` | Analisis referensi desain + teks profil Upwork | Selesai, siap dipakai |

## 00-website-pribadi (website utama)

- **Live:** https://www.belfamuhammad.com (HTTPS, domain sendiri)
- **Repo:** https://github.com/belfamrf/belfamuhammad-website (public, branch `main`, sinkron dengan GitHub; commit terakhir 15 November 2026)
- **Stack:** Next.js 16 (App Router) + Tailwind 4, Motion, Lenis, Lucide, font Archivo.
- **Isi halaman (satu halaman):** hero "Premium websites, designed by a marketer." + meja kartu proyek, Process, Pricing, About, Contact, Footer.
- **Elemen khas:** meja kerja gelap dengan kartu proyek kertas yang bisa dibalik (sisi belakang = brief marketing) dan bisa digeser di layar lebar.
- **Gaya:** charcoal `#1c1b19`, kertas `#f2f0eb`, satu aksen oranye `#ff5b1f`; judul Archivo kondensasi kapital. Panduan lengkap di `DESIGN.md`.
- **Lighthouse (live):** mobile **98 / 100 / 100 / 100**, desktop **100 / 100 / 100 / 100** (Performance, Accessibility, Best Practices, SEO).
- **Kontak:** form ke Formspree (endpoint ada di `.env.local`, tidak masuk git), email tujuan belfamrf39@gmail.com. Sudah diuji kirim sungguhan pada 23 Oktober 2026 dan pesan masuk ke email. Tombol LinkedIn dan Upwork aktif.
- **Google Analytics:** sudah aktif di live dengan ID `G-3FGCCYW7LE` (dipasang lewat environment variable Vercel, bukan di kode).
- **SEO:** metadata, gambar share (OG), `sitemap.xml`, `robots.txt`, schema.org (Person + ProfessionalService), ikon BM.
- **Foto:** `public/belfa.jpg` (foto studio Belfa, hitam-putih). Sumber dicatat di `CREDITS.md`.
- **Dokumen proyek:** `PRODUCT.md` (fakta & batasan), `BRIEF.md` (brief awal), `DESIGN.md` (sistem desain), `CASE-STUDY.md` (studi kasus), `CREDITS.md`.
- **Skor review Impeccable:** 24/32, verdict ship. Semua temuan P0/P1 sudah diperbaiki.

### Keputusan yang sudah dikunci

- Nama tampil **Belfa Muhammad**; posisi "web designer yang paham brand & marketing", netral industri.
- Kalimat posisi: "Based in Indonesia, working with clients worldwide."
- Harga: website mulai **$900**, brand identity mulai **$600**; paket gabungan lewat email.
- Ketentuan: 2â€“3 minggu, dua kali revisi per tahap, bayar 50/50, file jadi milik klien setelah lunas, balasan maksimal dua hari kerja.
- Tidak boleh ada testimoni, logo klien, angka, nama perusahaan, atau jabatan yang dikarang. Tiga demo berlabel **concept project**.
- AI ditawarkan sebagai tambahan di dalam proyek website (bukan layanan ketiga).
- Link Upwork sudah dipasang di website: bagian Contact, Footer, dan `sameAs` di data terstruktur.
- **Arsitektur portfolio (keputusan 23 Oktober 2026):** tiap proyek demo punya folder, repo GitHub, dan deploy Vercel sendiri (subdomain, misalnya `wellness.belfamuhammad.com`). Website pribadi tetap menjadi pintu masuk: kartu proyek di meja mengarah ke halaman studi kasus di repo ini, lalu dari halaman itu ada tombol ke situs demo. Tiga proyek dikerjakan di repo masing-masing lebih dulu, baru kembali ke sini.
- **Animasi:** `liquid-gooey` (efek cairan) tidak dipakai di website pribadi karena bertabrakan dengan konsep meja-kertas dan elemen khas yang sudah ada. Boleh dipertimbangkan untuk 01-wellness kalau arah desainnya organik.
- **Bahan yang harus disimpan dari tiap demo** untuk dipakai lagi di sini: 3â€“4 screenshot (HP dan laptop), file logo, palet warna, font, ringkasan masalahâ€“solusiâ€“hasil, dan link situs live. Semua ini dipakai untuk halaman studi kasus dan item portfolio Upwork.

## _referensi

- `ANALISIS-REFERENSI.md`: pola desain dari ~20 website referensi (gelap, premium, satu aksen berani, satu elemen interaktif yang diingat).
- `UPWORK-PROFIL.md`: judul, overview, 15 skill, rate **$30/jam**, dan 3 item portfolio siap tempel. Teks profil dan foto profil sudah diterapkan Belfa ke Upwork. Link profilnya sudah dipasang di website. Sisa tugas manual: verifikasi identitas.

## Yang belum selesai

1. **Satu dari tiga proyek demo belum dibangun.** KERN (`/work/kern`) dan Kelso & Reid (`/work/renovation`) sudah live dan kartunya bisa diklik; sisa villa di `03-hospitality`.
2. **Profil Upwork:** teks dan foto profil sudah diterapkan, link sudah ada di website. Verifikasi identitas **ditunda** sampai tiga proyek demo selesai (keputusan 23 Oktober 2026). Upwork meminta **35 Connects**, saldo Belfa **0**; beli Connects hanya lewat Upwork sendiri. Badge berlaku 3 tahun.
3. **Halaman studi kasus** sudah ada dua (`/work/kern`, `/work/renovation`); satu lagi menyusul setelah demo 3 dibangun.
4. **`inject.py` di akar folder** bukan bagian portofolio: skrip installer OpenAgentic yang mengubah settings Claude Code di luar folder ini. Jangan dijalankan; sebaiknya dipindah atau dihapus setelah minta izin.

## Langkah berikutnya (urutan rekomendasi)

1. **02-jasa-lokal**, lalu **03-hospitality** â€” pola yang sama seperti KERN: repo + Vercel sendiri, lalu satu halaman studi kasus di repo ini plus kartu yang dihubungkan.
2. Setelah tiga demo selesai: beli Connects dan verifikasi identitas Upwork, unggah 3 item portfolio (butuh screenshot tiap demo).
3. Perbarui `CASE-STUDY.md` dan ulangi Lighthouse tiap kali halaman baru masuk.
4. Review visual `/work/kern` (375 dan 1440) oleh mata atau model vision; sesi pembuatnya text-only.
5. Cek Google Analytics realtime sekali.
6. Ganti foto/teks mana pun yang berubah, lalu commit dan push tiap bagian besar.

## Perintah harian

```powershell
cd 00-website-pribadi
npm run dev     # lihat website di http://localhost:3000
npm run lint    # cek aturan kode
npm run build   # cek versi siap online
```

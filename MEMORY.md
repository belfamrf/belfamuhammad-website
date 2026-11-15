# MEMORY: progres portofolio

Diperbarui: 15 November 2026. Isinya keadaan folder ini saat ini, supaya sesi berikutnya tidak mengulang pekerjaan.

## Pembaruan terakhir — 15 November 2026 (kartu wellness + studi kasus KERN)

- **Kartu wellness di meja sudah diperbaiki.** Isinya kini **Copenhagen, Denmark** (bukan Lisbon, Portugal), tujuan dan audiensnya disamakan dengan brief KERN, status berubah dari "In progress" menjadi **"Live"**, dan di bawah meja ada tombol "Read the KERN case study". Datanya di `src/content/projects.ts` (field baru `live` dan `caseHref`); label status di `src/components/Desk.tsx`. Kartu kontraktor dan villa tetap "In progress".
- **Halaman studi kasus `/work/kern`** (`src/app/work/kern/page.tsx`): hero 1440, tangkapan movement screen 375, bagian Studio 1440, brief, masalah, enam keputusan desain, "What testing changed", skor Lighthouse 95–96/100/100/100, dan tombol ke situs live. Gambar di `public/work/kern/` — 2880×1800 dan 750×1624, cocok dengan `width`/`height` di kode, jadi tidak ada pergeseran layout.
- **Kartu share dibuat sendiri.** `src/app/work/kern/opengraph-image.tsx` menghasilkan PNG **1200×630** dengan Archivo, charcoal dan satu aksen oranye. Sebelumnya halaman ini memakai foto hero 2880×1800 (rasio 8:5) yang akan terpotong di WhatsApp/X. Loader font dipindah ke `src/lib/og-font.ts` dan dipakai kedua kartu share.
- **Sitemap** bertambah `/work/kern`. `DESIGN.md` dan `CASE-STUDY.md` disinkronkan dengan label status baru ("Concept project" + status build), karena keduanya masih menulis semua kartu "in progress".
- **Verifikasi:** `npm run lint` dan `npm run build` lolos; `/work/kern` di-prerender. Uji `next start` lokal: `/work/kern` 200, `og:image` dan `twitter:image` menunjuk PNG 1200×630 (dicek sampai ukuran piksel), kartu beranda tidak berubah, gambar kartu berisi 417 warna (bukan bidang kosong).
- **Commit:** `1a347c3` (kartu + halaman studi kasus + sitemap + docs) dan `72fa6ee` (kartu share 1200×630 + `MEMORY.md` + `CLAUDE.md`). `CLAUDE.md` dan `MEMORY.md` akhirnya ikut di-commit, sama seperti di repo `01-wellness`.
- **Belum:** review visual `/work/kern` oleh mata atau model vision (model sesi ini text-only), dan Lighthouse khusus halaman itu di live.
- **BLOCKER domain (bukan tugas coding):** sejak sekitar 5 November 2026 `belfamuhammad.com` didelegasikan ke **NS1/NS2.NONVERIFIEDDOMAIN.COM** yang **NXDOMAIN**, sehingga seluruh zona gagal (SERVFAIL di Google, Cloudflare, AdGuard, dan 8.8.8.8). Akibatnya `www.belfamuhammad.com` dan `kern.belfamuhammad.com` **tidak bisa dibuka pengunjung**, termasuk seluruh portfolio dan tiga link di Upwork. **Panel Domainesia tetap menampilkan "Active"** (dicek pemilik 15 November 2026); status panel tidak mencerminkan delegasi di registry, jadi jangan dipakai sebagai bukti domain sehat. Yang menentukan: RDAP Verisign → NS = `NS1/NS2.NONVERIFIEDDOMAIN.COM`, `delegationSigned: false` (bukan masalah DNSSEC), registrasi 21 Oktober 2026, last changed 5 November 2026 — sekitar 15 hari setelah registrasi, yaitu tenggat verifikasi kontak registran ICANN (RAA 2014). Langkah: cari email verifikasi dari Domainesia (21 Okt–5 Nov), atau minta support mengecek status verifikasi kontak dan mengembalikan nameserver ke DNS Domainesia. **Bukti tambahan 15 November 2026:** panel Domainesia justru sudah menampilkan nameserver yang benar (`ns1.domainesia.net` / `ns2.domainesia.net`), jadi tidak ada yang bisa diperbaiki dari panel — masalahnya di sisi registrar. Keempat IP `ns1`/`ns2.domainesia.net` menjawab normal untuk `domainesia.net` tetapi **SERVFAIL untuk `belfamuhammad.com`**, jadi zona DNS-nya juga tidak terbit di DNS Domainesia (dicek langsung ke 36.50.77.54, 172.104.178.251, 139.162.241.138, 45.33.9.238, dengan kueri kontrol yang berhasil). Satu-satunya jalan: support Domainesia mengeskalasi ke WebNic. Sementara itu situs bisa dicek lewat `belfamuhammad-website.vercel.app`. **Panel juga tidak bisa memperbaiki:** saat "Use default nameservers" disimpan, Domainesia menampilkan *"An issue was encountered while updating the domain nameservers. Please contact support."* — update nameserver ditolak di sisi registrar, jadi tombol support (dan eskalasi ke WebNic) satu-satunya jalan.

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
- Ketentuan: 2–3 minggu, dua kali revisi per tahap, bayar 50/50, file jadi milik klien setelah lunas, balasan maksimal dua hari kerja.
- Tidak boleh ada testimoni, logo klien, angka, nama perusahaan, atau jabatan yang dikarang. Tiga demo berlabel **concept project**.
- AI ditawarkan sebagai tambahan di dalam proyek website (bukan layanan ketiga).
- Link Upwork sudah dipasang di website: bagian Contact, Footer, dan `sameAs` di data terstruktur.
- **Arsitektur portfolio (keputusan 23 Oktober 2026):** tiap proyek demo punya folder, repo GitHub, dan deploy Vercel sendiri (subdomain, misalnya `wellness.belfamuhammad.com`). Website pribadi tetap menjadi pintu masuk: kartu proyek di meja mengarah ke halaman studi kasus di repo ini, lalu dari halaman itu ada tombol ke situs demo. Tiga proyek dikerjakan di repo masing-masing lebih dulu, baru kembali ke sini.
- **Animasi:** `liquid-gooey` (efek cairan) tidak dipakai di website pribadi karena bertabrakan dengan konsep meja-kertas dan elemen khas yang sudah ada. Boleh dipertimbangkan untuk 01-wellness kalau arah desainnya organik.
- **Bahan yang harus disimpan dari tiap demo** untuk dipakai lagi di sini: 3–4 screenshot (HP dan laptop), file logo, palet warna, font, ringkasan masalah–solusi–hasil, dan link situs live. Semua ini dipakai untuk halaman studi kasus dan item portfolio Upwork.

## _referensi

- `ANALISIS-REFERENSI.md`: pola desain dari ~20 website referensi (gelap, premium, satu aksen berani, satu elemen interaktif yang diingat).
- `UPWORK-PROFIL.md`: judul, overview, 15 skill, rate **$30/jam**, dan 3 item portfolio siap tempel. Teks profil dan foto profil sudah diterapkan Belfa ke Upwork. Link profilnya sudah dipasang di website. Sisa tugas manual: verifikasi identitas.

## Yang belum selesai

1. **Dua dari tiga proyek demo belum dibangun.** KERN sudah live dan kartunya di meja sudah bisa diklik ke `/work/kern`; kartu kontraktor dan villa masih "In progress" dan belum punya studi kasus.
2. **Profil Upwork:** teks dan foto profil sudah diterapkan, link sudah ada di website. Verifikasi identitas **ditunda** sampai tiga proyek demo selesai (keputusan 23 Oktober 2026). Upwork meminta **35 Connects**, saldo Belfa **0**; beli Connects hanya lewat Upwork sendiri. Badge berlaku 3 tahun.
3. **Halaman studi kasus** baru ada satu, `/work/kern`; dua lainnya menyusul setelah demonya dibangun.
4. **`inject.py` di akar folder** bukan bagian portofolio: skrip installer OpenAgentic yang mengubah settings Claude Code di luar folder ini. Jangan dijalankan; sebaiknya dipindah atau dihapus setelah minta izin.

## Langkah berikutnya (urutan rekomendasi)

1. **02-jasa-lokal**, lalu **03-hospitality** — pola yang sama seperti KERN: repo + Vercel sendiri, lalu satu halaman studi kasus di repo ini plus kartu yang dihubungkan.
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

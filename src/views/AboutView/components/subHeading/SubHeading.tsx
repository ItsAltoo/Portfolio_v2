import SplitWord from "@/components/anim/SplitWord/SplitWord";
import React from "react";
import styles from "./style.module.scss";
import AnimateImage from "@/components/anim/AnimateImage/AnimateImage";

const SubHeading = () => {
  return (
    <div className={styles.container}>
      <div className={styles.profile}>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <AnimateImage
              key={i}
              src={`path/to/image${i}.jpg`}
              alt={`Image ${i}`}
              className={styles.image}
            />
          ))}
      </div>

      <div className={styles.paraf}>
        <SplitWord>
          SAYA ADALAH MAHASISWA BERUSIA 19 TAHUN YANG SAAT INI BERKULIAH DI
          UNIVERSITAS MUHAMMADIYAH KALIMANTAN TIMUR. KETIKA SAYA MASUK SMKN 18
          SAMARINDA, SAYA MENGAMBIL JURUSAN MULTIMEDIA. AWALNYA, SAYA FOKUS PADA
          DESAIN DAN ANIMASI, DAN DARI SANA SAYA MULAI TERTARIK PADA BAGAIMANA
          SESUATU, TERUTAMA WEBSITE, DIBANGUN DARI SISI TEKNIS.
        </SplitWord>
        <br />
        <SplitWord>
          SEBAGAI LULUSAN MULTIMEDIA, SAYA MENYADARI BAHWA SAYA MENIKMATI ASPEK
          KREATIF DAN TEKNIS DARI PEKERJAAN SAYA, DAN SAYA MEMBUAT TRANSISI
          PENUH KE DUNIA KODE. SEJAK SAAT ITU, SAYA MENDEDIKASIKAN WAKTU SAYA
          UNTUK MENDALAMI WEB DEVELOPMENT SECARA OTODIDAK MAUPUN DI PERKULIAHAN.
          DI LUAR CODING, HOBI SAYA MENGGAMBAR DAN MENULIS TERUS MENGASAH SISI
          KREATIF SAYA.
        </SplitWord>
      </div>
    </div>
  );
};

export default SubHeading;

import SplitWord from "@/components/anim/SplitWord/SplitWord";
import React from "react";
import styles from "./style.module.scss";
import AnimateImage from "@/components/anim/AnimateImage/AnimateImage";
import { useIsMobile } from "@/lib/services/useIsMobile";

const SubHeading = () => {
  const { isMobile } = useIsMobile();

  return (
    <div className={`${styles.container} ${isMobile ? styles.mobile : ""}`}>
      <div className={styles.profile}>
        {Array(3)
          .fill(0)
          .map((_, i) => (
            <AnimateImage
              key={i}
              src={`/profile/profile${i + 1}.jpg`}
              alt={`Image ${i}`}
              className={styles.image}
              width={isMobile ? 120 : 200}
              height={isMobile ? 120 : 200}
              delay={isMobile ? 1.8 : 1}
            />
          ))}
      </div>

      <div
        className={styles.paragContainer}
        key={isMobile ? "mobile" : "desktop"}
      >
        <SplitWord className={styles.paragraph}>
          SAYA ADALAH MAHASISWA BERUSIA 19 TAHUN YANG SAAT INI BERKULIAH DI
          UNIVERSITAS MUHAMMADIYAH KALIMANTAN TIMUR. KETIKA SAYA MASUK SMKN 18
          SAMARINDA, SAYA MENGAMBIL JURUSAN MULTIMEDIA. AWALNYA, SAYA FOKUS PADA
          DESAIN DAN ANIMASI, DAN DARI SANA SAYA MULAI TERTARIK PADA BAGAIMANA
          SESUATU, TERUTAMA WEBSITE, DIBANGUN DARI SISI TEKNIS.
        </SplitWord>
        <br />
        <SplitWord className={styles.paragraph}>
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

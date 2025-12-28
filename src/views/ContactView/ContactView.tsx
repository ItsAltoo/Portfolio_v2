import React from "react";
import ContactForm from "./components/ContactForm";
import Image from "next/image";
import styles from "./style.module.scss";
import { useIsMobile } from "@/lib/services/useIsMobile";

const ContactView = () => {
  const { isMobile } = useIsMobile();

  return (
    <div className={`${styles.container} ${isMobile ? styles.mobile : ""}`}>
      <ContactForm />
      {!isMobile && (
        <Image
          src="/hyacine.gif"
          width={200}
          height={110}
          alt="hyacine"
          unoptimized
          className={styles.mascot}
        />
      )}
    </div>
  );
};

export default ContactView;

import React from "react";
import styles from "./style.module.scss";
import Link from "next/link";
import Image from "next/image";
import { mediaLinks, sitemap } from "@/lib/data/footer";
import { useIsMobile } from "@/lib/services/useIsMobile";

const Footer = () => {
  const { isMobile } = useIsMobile();

  return (
    <div className={`${styles.container} ${isMobile ? styles.mobile : ""}`}>
      <div className={styles.leftContainer}>
        <p className={styles.quote}>
          &quot;The only thing that matters is whether you&apos;ve done something for the
          world.&quot; - Gojo Satoru
        </p>
        {!isMobile && (
          <Image
            src={"/Gojo.webp"}
            alt="Gojo Satoru"
            width={100}
            height={100}
          />
        )}
      </div>

      <div className={styles.rightContainer}>
        {/* sitemap */}
        <div className={styles.sitemap}>
          <span className={styles.label}>Sitemap</span>
          <div className={styles.links}>
            {sitemap.map(({ name, url }) => (
              <Link key={name} href={url} className={styles.sitemapLink} >
                {name}
              </Link>
            ))}
          </div>
        </div>

        {/* connect */}
        <div className={styles.sitemap}>
          <span className={styles.label}>Let&apos;s connect</span>
          <div className={styles.links}>
            {mediaLinks.map(({ name, url }) => (
              <Link key={name} href={url} className={styles.sitemapLink} target="_blank">
                {name}
              </Link>
            ))}
          </div>
        </div>

        {!isMobile && <div />}

        {/* Copyright */}
        <div className={styles.sitemap}>
          <span className={styles.label}>Copyright</span>
          <div className={styles.links}>
            <span className={styles.sitemapLink}>
              &copy; 2024 Malik S.A. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

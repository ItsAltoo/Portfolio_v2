import Layout from "@/components/layout/Layout";
import Navbar from "@/components/navbar/Navbar";
import { useIsMobile } from "@/lib/services/useIsMobile";
import React from "react";

const index = () => {
  const { isMobile } = useIsMobile();

  return (
    <>
      <Navbar />
      {!isMobile ? (
        <Layout>
          <div>Contact</div>
        </Layout>
      ) : (
        <div>Contact</div>
      )}
    </>
  );
};

export default index;

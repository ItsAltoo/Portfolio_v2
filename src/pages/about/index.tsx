import Layout from "@/components/layout/Layout";
import Navbar from "@/components/navbar/Navbar";
import { useIsMobile } from "@/lib/services/useIsMobile";
import AboutView from "@/views/AboutView/AboutView";
import React from "react";

const index = () => {
  const { isMobile } = useIsMobile();
  return (
    <>
      <Navbar />
      {!isMobile ? (
        <Layout>
          <AboutView />
        </Layout>
      ) : (
        <AboutView />
      )}
    </>
  );
};

export default index;

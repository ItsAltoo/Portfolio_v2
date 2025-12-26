import Layout from "@/components/layout/Layout";
import Navbar from "@/components/navbar/Navbar";
import { useIsMobile } from "@/lib/services/useIsMobile";
import ContactView from "@/views/ContactView/ContactView";
import React from "react";

const Index = () => {
  const { isMobile } = useIsMobile();

  return (
    <>
      <Navbar />
      {!isMobile ? (
        <Layout>
          <ContactView />
        </Layout>
      ) : (
        <ContactView />
      )}
    </>
  );
};

export default Index;

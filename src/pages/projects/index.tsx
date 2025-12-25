import Layout from "@/components/layout/Layout";
import Navbar from "@/components/navbar/Navbar";
import { useIsMobile } from "@/lib/services/useIsMobile";
import ProjectView from "@/views/ProjectView/ProjectView";
import React from "react";

const Index = () => {
  const { isMobile } = useIsMobile();
  return (
    <>
      <Navbar />
      {!isMobile ? (
        <Layout>
          <ProjectView />
        </Layout>
      ) : (
        <ProjectView />
      )}
    </>
  );
};

export default Index;

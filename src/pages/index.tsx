import Layout from "@/components/layout/Layout";
import Navbar from "@/components/navbar/Navbar";
import { useIsMobile } from "@/lib/services/useIsMobile";
import HomeView from "@/views/HomeView/HomeView";

export default function Home() {
  const { isMobile } = useIsMobile();

  return (
    <>
      <Navbar />
      {!isMobile ? (
        <Layout>
          <HomeView />
        </Layout>
      ) : (
        <HomeView />
      )}
    </>
  );
}

import DashboardView from "@/views/DashboardView/DashboardView";
import { GetServerSideProps } from "next";
import React from "react";
import { parse } from "cookie";
import prisma from "@/lib/prisma";

interface DashboardProps {
  user: {
    id: string;
    email: string;
  };
}

const index = ({ user }: DashboardProps) => {
  return (
    <div>
      <DashboardView user={user} />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const cookies = parse(context.req.headers.cookie || "");
  const authCookie = cookies.auth;

  // Jika tidak ada cookie auth, redirect ke login
  if (!authCookie) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  try {
    // Verifikasi user dari database
    const user = await prisma.user.findUnique({
      where: { id: authCookie },
      select: { id: true, email: true },
    });

    if (!user) {
      return {
        redirect: {
          destination: "/login",
          permanent: false,
        },
      };
    }

    return {
      props: {
        user,
      },
    };
  } catch (error) {
    console.error("Auth error:", error);
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }
};

export default index;

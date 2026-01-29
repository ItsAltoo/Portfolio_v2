import LoginView from "@/views/LoginVIew/LoginView";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const index = () => {
  const { status } = useSession();
  const router = useRouter();

  if (status === "authenticated") {
    router.push("/dashboard");
  }

  return (
    <div>
      <LoginView />
    </div>
  );
};

export default index;

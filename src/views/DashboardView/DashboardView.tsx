import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

const DashboardView = () => {
  return (
    <div>
      data
      <Button onClick={() => signOut()}>SignOut</Button>
    </div>
  );
};

export default DashboardView;

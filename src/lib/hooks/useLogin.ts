import { createTheme } from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useLogin = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success" as "success" | "error" | "warning" | "info",
  });
  const router = useRouter();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#08CB00",
      },
    },
  });

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    if (!auth.email || !auth.password) {
      setLoading(false);
      return;
    }

    const res = await signIn("credentials", {
      email: auth.email,
      password: auth.password,
      redirect: false,
    });

    setLoading(false);

    if (res?.ok) {
      setSnackbar({
        open: true,
        message: "Login successful!",
        severity: "success",
      });
      setTimeout(() => {
        if (window.history.length > 1) {
          router.push("/dashboard");
        } else {
          router.push("/");
        }
      }, 1000);
    } else {
      setSnackbar({
        open: true,
        message: "Invalid email or password",
        severity: "error",
      });
    }
  };

  return {
    handleSubmit,
    handleCloseSnackbar,
    theme,
    setAuth,
    error,
    loading,
    auth,
    snackbar,
  };
};

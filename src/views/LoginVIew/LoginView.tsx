import { Send } from "@mui/icons-material";
import {
  Alert,
  Button,
  Container,
  createTheme,
  Paper,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const LoginView = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#08CB00",
      },
    },
  });

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
      console.log("Login successful");
      if (window.history.length > 1) {
        router.back();
      } else {
        router.push("/");
      }
    } else {
      console.log("Invalid email or password");
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Paper
          elevation={2}
          component={"form"}
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: 2,
            width: "40%",
            p: 4,
          }}
          onSubmit={handleSubmit}
        >
          {error && (
            <Alert severity="error" sx={{ width: "100%" }}>
              {error}
            </Alert>
          )}

          <TextField
            label="admin@gmail.com"
            type="email"
            name="email"
            fullWidth
            required
            variant="outlined"
            value={auth.email}
            onChange={(e) => setAuth({ ...auth, email: e.target.value })}
          />

          <TextField
            label="password"
            type="password"
            name="password"
            fullWidth
            required
            variant="outlined"
            value={auth.password}
            onChange={(e) => setAuth({ ...auth, password: e.target.value })}
          />

          <Button
            type="submit"
            variant="outlined"
            size="small"
            endIcon={<Send />}
            fullWidth
            disabled={loading}
            sx={{
              mt: 2,
              py: 1.5,
              color: "#414141",
              ":hover": { color: "#08CB00" },
            }}
          >
            {loading ? "Loading..." : "Submit"}
          </Button>

          <Typography
            variant="caption"
            sx={{
              color: "#666",
              textAlign: "center",
              fontStyle: "italic",
            }}
          >
            only admin can access
          </Typography>
        </Paper>
      </Container>
    </ThemeProvider>
  );
};

export default LoginView;

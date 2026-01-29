import { useLogin } from "@/lib/hooks/useLogin";
import { Send } from "@mui/icons-material";
import {
  Alert,
  Button,
  Container,
  Paper,
  Snackbar,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";

const LoginView = () => {
  const {
    theme,
    error,
    loading,
    handleCloseSnackbar,
    handleSubmit,
    setAuth,
    auth,
    snackbar,
  } = useLogin();

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

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </ThemeProvider>
  );
};

export default LoginView;

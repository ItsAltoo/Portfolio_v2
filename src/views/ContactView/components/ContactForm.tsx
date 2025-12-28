import React, { JSX } from "react";
import {
  TextField,
  Typography,
  Box,
  Alert,
  Snackbar,
  Button,
  Container,
  Paper,
  Grid,
  IconButton,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useContactForm } from "@/lib/services/useContactForm";
import { Send } from "@mui/icons-material";
import SplitWord from "@/components/anim/SplitWord/SplitWord";
import { mediaLinks } from "@/lib/data/contact";
import { Slide } from "@/components/anim/Slide/Slide";
import { useIsMobile } from "@/lib/services/useIsMobile";
import { FadeIn } from "@/components/anim/FadeIn/FadeIn";

export default function ContactForm() {
  const {
    formData,
    loading,
    snackbar,
    handleSubmit,
    handleChange,
    handleCloseSnackbar,
  } = useContactForm();

  const { isMobile } = useIsMobile();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#08CB00",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xl"
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: { xs: 6, md: 8 },
        }}
      >
        <Paper
          elevation={isMobile ? 0 : 2}
          sx={{
            p: { xs: 0, md: 3 },
            backgroundColor: { xs: "transparent", md: "background.paper" },
            width: { xs: "100%", md: "50%" },
            overflowX: "hidden",
          }}
        >
          <SplitWord>
            <Typography
              variant="h4"
              component="h2"
              align="left"
              gutterBottom
              fontWeight={600}
              sx={{
                mt: 3,
                fontSize: { xs: "1.5rem", sm: "2rem", md: "2.25rem" },
                lineHeight: { xs: 1.2, md: 1.5 },
              }}
            >
              Hubungi Saya
            </Typography>
          </SplitWord>

          <SplitWord>
            <Typography
              variant="body2"
              color="textSecondary"
              align="justify"
              sx={{
                fontSize: { xs: "0.875rem", md: "1rem" },
                lineHeight: { xs: 1.5, md: 1.7 },
              }}
            >
              Saya berkomitmen untuk menjaga privasi Anda. Informasi yang Anda
              berikan melalui formulir ini hanya akan digunakan untuk tujuan
              menanggapi pesan Anda dan tidak akan dibagikan dengan pihak ketiga
              tanpa izin Anda.
            </Typography>
          </SplitWord>

          <SplitWord>
            <Typography
              variant="body2"
              color="textSecondary"
              align="justify"
              sx={{
                mt: 2,
                fontSize: { xs: "0.9rem", md: "1rem" },
                fontWeight: "bold",
              }}
            >
              Let&apos;s connect
            </Typography>
          </SplitWord>

          <Grid sx={{ mt: 1, display: "flex" }}>
            {mediaLinks.map((link, index) => (
              <FadeIn delay={(index + 1) * 0.3} key={index}>
                <IconButton
                  aria-label={link.ariaLabel}
                  href={link.url}
                  target="_blank"
                  sx={{ ":hover": { color: "#08CB00" } }}
                >
                  {link.icon}
                </IconButton>
              </FadeIn>
            ))}
          </Grid>
        </Paper>

        {/* BAGIAN FORM (KANAN) */}
        <Slide direction="left">
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              fullWidth
              label="Nama Lengkap"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Alamat Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              variant="outlined"
            />

            <TextField
              fullWidth
              label="Pesan Anda"
              name="message"
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              required
              multiline
              rows={4}
              variant="outlined"
            />

            <Button
              type="submit"
              variant="text"
              size="small"
              endIcon={<Send />}
              disabled={loading}
              sx={{
                mt: 3,
                mb: 1,
                py: 1.5,
                color: "#414141",
                ":hover": { color: "#08CB00" },
              }}
            >
              {loading ? "Sedang Mengirim..." : "Kirim Pesan"}
            </Button>
          </Box>
        </Slide>
      </Container>

      {/* Komponen Notifikasi Pop-up */}
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
}

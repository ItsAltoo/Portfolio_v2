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
} from "@mui/material";
import { useContactForm } from "@/lib/services/useContactForm";
import { Send } from "@mui/icons-material";
import SplitWord from "@/components/anim/SplitWord/SplitWord";
import { mediaLinks } from "@/lib/data/contact";

export default function ContactForm() {
  const {
    formData,
    loading,
    snackbar,
    handleSubmit,
    handleChange,
    handleCloseSnackbar,
  } = useContactForm();

  return (
    <>
      <Container maxWidth="lg" sx={{ display: "flex", gap: 4, mt: 5 }}>
        <Paper elevation={2} sx={{ p: 3, mb: 2, width: "50%" }}>
          <SplitWord>
            <Typography
              variant="h4"
              component="h2"
              align="justify"
              gutterBottom
              fontWeight={500}
              sx={{ mt: 3 }}
            >
              Hubungi Saya
            </Typography>
          </SplitWord>

          <SplitWord>
            <Typography variant="body2" color="textSecondary" align="justify">
              Saya berkomitmen untuk menjaga privasi Anda. Informasi yang Anda
              berikan melalui formulir ini hanya akan digunakan untuk tujuan
              menanggapi pesan Anda dan tidak akan dibagikan dengan pihak ketiga
              tanpa izin Anda.
            </Typography>
          </SplitWord>

          <Typography
            variant="body2"
            color="textSecondary"
            align="justify"
            sx={{ mt: 2 }}
          >
            Let's connect
          </Typography>

          <Grid sx={{ mt: 1 }}>
            {mediaLinks.map((link, index) => (
              <IconButton
                key={index}
                aria-label={link.ariaLabel}
                href={link.url}
                target="_blank"
              >
                {link.icon}
              </IconButton>
            ))}
          </Grid>
        </Paper>

        <Box component="form" onSubmit={handleSubmit} noValidate>
          <TextField
            fullWidth
            label="Nama Lengkap"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            required
            variant="standard"
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
            variant="standard"
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
            variant="standard"
          />

          <Button
            type="submit"
            variant="text"
            size="small"
            endIcon={<Send />}
            disabled={loading}
            sx={{ mt: 3, mb: 1, py: 1.5, color: "#414141" }}
          >
            {loading ? "Sedang Mengirim..." : "Kirim Pesan"}
          </Button>
        </Box>
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
    </>
  );
}

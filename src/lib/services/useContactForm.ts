import axios from "axios";
import React, { FormEvent, useState } from "react";

export const useContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // State untuk loading
  const [loading, setLoading] = useState(false);

  // State untuk notifikasi (Snackbar)
  const [snackbar, setSnackbar] = useState<{
    open: boolean;
    severity: "success" | "error";
    message: string;
  }>({
    open: false,
    severity: "success", // default
    message: "",
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post("/api/contact", formData);

      const data = await res.data;

      if (res.status === 200 && data.success) {
        // Reset form dan tampilkan sukses
        setFormData({ name: "", email: "", message: "" });
        setSnackbar({
          open: true,
          severity: "success",
          message: "Pesan berhasil dikirim!",
        });
      } else {
        throw new Error(data.message || "Gagal mengirim pesan");
      }
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        severity: "error",
        message: "Terjadi kesalahan. Silakan coba lagi.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };
  return {
    formData,
    loading,
    snackbar,
    handleSubmit,
    handleChange,
    handleCloseSnackbar,
  };
};

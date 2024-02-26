import { Snackbar, Alert } from "@mui/material";
import { SnackbarProps } from "../../types";

export default function Notification({
  message,
  severity,
  open,
  onClose,
}: SnackbarProps) {
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={onClose}>
      <Alert
        severity={severity}
        sx={{ width: "300px", position: "fixed", top: 20, right: 20 }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

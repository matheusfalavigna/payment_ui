export interface PaymentsProps {
  id?: string;
  name: string;
  card_number: string;
  amount: string;
  expiration_date: string;
  cvv: string;
}

export interface SnackbarProps {
  message: string;
  severity: "error" | "success" | "info" | "warning" | undefined;
  open: boolean;
  onClose: () => void;
}

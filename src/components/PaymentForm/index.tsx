import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, CircularProgress } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { PaymentsProps } from "../../types";

import { schema } from "../../schema";

import Notification from "../Notification/NotificationComponent";
import { Container, StyledTextField } from "./styles";

export default function PaymentForm() {
  const [loading, setLoading] = useState(false);
  const [notificationOpen, setNotificationOpen] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState("");
  const [notificationSeverity, setNotificationSeverity] = useState<
    "success" | "error" | "info" | "warning" | undefined
  >(undefined);

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<PaymentsProps>({
    resolver: yupResolver(schema),
  });

  const handleCloseNotification = () => {
    setNotificationOpen(false);
  };

  useEffect(() => {
    console.log(errors);
  }, [errors]);

  async function onSubmit(data: PaymentsProps) {
    setLoading(true);

    try {
      await api.post("/create-payment", data);

      await new Promise((resolve) => setTimeout(resolve, 2000));

      setLoading(false);

      setNotificationOpen(true);
      setNotificationMessage("Pagamento criado com sucesso!");
      setNotificationSeverity("success");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setNotificationOpen(true);
      setNotificationMessage("Erro ao enviar formulário");
      setNotificationSeverity("error");
    }
  }

  return (
    <>
      <Container>
        <form onSubmit={handleSubmit(onSubmit)}>
          <StyledTextField
            id="outlined-basic"
            label="Nome"
            variant="outlined"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
          <StyledTextField
            id="outlined-basic"
            label="Número do Cartão"
            variant="outlined"
            {...register("card_number")}
          />
          {errors.card_number && <p>{errors.card_number.message}</p>}
          <StyledTextField
            id="outlined-basic"
            label="Data de Vencimento"
            variant="outlined"
            {...register("expiration_date")}
          />
          {errors.expiration_date && <p>{errors.expiration_date.message}</p>}
          <StyledTextField
            id="outlined-basic"
            label="CVV"
            variant="outlined"
            {...register("cvv")}
          />
          {errors.cvv && <p>{errors.cvv.message}</p>}
          <StyledTextField
            id="outlined-basic"
            label="Valor"
            variant="outlined"
            {...register("amount")}
          />
          {errors.amount && <p>{errors.amount.message}</p>}
          <Button type="submit" variant="contained">
            {loading ? (
              <CircularProgress size={24} color="secondary" />
            ) : (
              "Enviar"
            )}
          </Button>
        </form>
      </Container>
      <Notification
        message={notificationMessage}
        severity={notificationSeverity}
        open={notificationOpen}
        onClose={handleCloseNotification}
      />
    </>
  );
}

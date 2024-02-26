import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Nome obrigatório"),
  card_number: yup
    .string()
    .required("Número do cartão obrigatório")
    .length(16, "Número do cartão inválido"),
  amount: yup.string().required("Valor obrigatório"),
  expiration_date: yup
    .string()
    .required("Data de vencimento obrigatória")
    .length(5, "Data de vencimento inválida"),
  cvv: yup.string().required("CVV obrigatório").length(3, "CVV inválido"),
});

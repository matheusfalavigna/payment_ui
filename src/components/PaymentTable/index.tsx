import { useState, useEffect } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { api } from "../../services/api";
import { PaymentsProps } from "../../types";

export default function PaymentsTable() {
  const [payments, setPayments] = useState<PaymentsProps[]>([]);

  useEffect(() => {
    loadPayments();
  }, []);

  async function loadPayments() {
    try {
      const response = await api.get("/payments");
      setPayments(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Nome</TableCell>
              <TableCell>Número do Cartão</TableCell>
              <TableCell>Data de Vencimento</TableCell>
              <TableCell>CVV</TableCell>
              <TableCell>Valor</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {payments.map((payment) => (
              <TableRow key={payment.id}>
                <TableCell>{payment.name}</TableCell>
                <TableCell>
                  {payment.card_number.replace(/(.{4})/g, "$1 ")}
                </TableCell>
                <TableCell>{payment.expiration_date}</TableCell>
                <TableCell>{payment.cvv}</TableCell>
                <TableCell>R$ {payment.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

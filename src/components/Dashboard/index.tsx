import { Route, Routes } from "react-router-dom";

import PaymentForm from "../PaymentForm";
import PaymentsTable from "../PaymentTable";
import { Container, Content } from "./styles";

export default function Dashboard() {
  return (
    <Container>
      <Content>
        <Routes>
          <Route path="/" element={<PaymentsTable />} />
          <Route path="/create-payment" element={<PaymentForm />} />
        </Routes>
      </Content>
    </Container>
  );
}

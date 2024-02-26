import { Button } from "@mui/material";
import { Container, Content, StyledTypography, StyledLink } from "./styles";
import { useLocation } from "react-router-dom";

export default function Header() {
  const { pathname } = useLocation();

  return (
    <Container>
      <Content>
        <StyledTypography variant="h4">API de Pagamentos</StyledTypography>
        <Button>
          <StyledLink to={pathname === "/" ? "/create-payment" : "/"}>
            {pathname === "/" ? "Novo pagamento" : "Voltar"}
          </StyledLink>
        </Button>
      </Content>
    </Container>
  );
}

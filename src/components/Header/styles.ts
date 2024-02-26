import styled from "styled-components";
import { Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.header`
  background: #2f0549;
  padding: 16px;
`;

export const Content = styled.div`
  max-width: 980px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  Button {
    font-size: 16px;
    background: #820ad1;
    padding: 0 16px;
    height: 48px;
    border-radius: 20px;

    &:hover {
      background: #6e069d;
    }
  }
`;

export const StyledTypography = styled(Typography)`
  color: white;
`;

export const StyledLink = styled(RouterLink)`
  color: white;
  text-decoration: none;
`;

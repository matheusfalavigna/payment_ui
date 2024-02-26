import { TextField } from "@mui/material";
import styled from "styled-components";

export const Container = styled.div`
  max-width: 490px;

  margin: 0 auto;

  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  Button {
    font-size: 16px;
    background: #820ad1;
    padding: 0 16px;
    height: 48px;

    &:hover {
      background: #6e069d;
    }
  }

  p {
    color: #dc143c;
    padding: 0 16px;
  }
`;

export const StyledTextField = styled(TextField)`
  background: #fff;
`;

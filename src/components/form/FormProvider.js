import { FormProvider as RHFormProvider } from "react-hook-form";
import styled from "styled-components";
const CustomForm = styled.div`
  background: rgba(0, 0, 0, 0.1);
  height: 400px;
  z-index: 9999;
  padding: 40px;
  position: relative;
  top: 100px
`;
function FormProvider({ children, onSubmit, methods }) {
  return (
    <CustomForm>
      <RHFormProvider {...methods}>
        <form onSubmit={onSubmit}>{children}</form>
      </RHFormProvider>
    </CustomForm>
  );
}

export default FormProvider;
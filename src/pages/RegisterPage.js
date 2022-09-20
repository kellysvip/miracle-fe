import { yupResolver } from "@hookform/resolvers/yup";
import React, { useState } from "react";
import useAuth from "../hooks/useAuth";
import * as Yup from "yup";
import { FTextField } from "../components/form";
import { FormProvider } from "../components/form";
import { Link, useNavigate } from "react-router-dom";
import { Container, Stack } from "@mui/system";
import { Alert, IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useForm } from "react-hook-form";
import { LoadingButton } from "@mui/lab";
const registerSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  passwordConfirmation: Yup.string()
    .required("Please confirm your password")
    .oneOf([Yup.ref("password")], "Password must match"),
});

const defaultValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
};

const RegisterPage = () => {
  const auth = useAuth();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirmation, setShowPasswordConfirmation] =
    useState(false);
  const methods = useForm({
    resolver: yupResolver(registerSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    setError,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    let { name, email, password, passwordConfirmation } = data;
    
    try {
     await auth.register({ name, email, password, passwordConfirmation }, () => {
        navigate("/", { replace: true });
      });
    } catch (error) {
      reset();
      console.log(error);
      setError("responseError", error);
    }
  };
  return (
    <Container maxWidth="xs">
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          {!!errors.responseError && (
            <Alert severity="error">{errors.responseError.message}</Alert>
          )}
          <Alert severity="info">
            You already have an account?{" "}
            <Link variant="subtitle2" to="/login">
              Sign in
            </Link>
          </Alert>

          <FTextField name="name" label="Full name" />
          <FTextField name="email" label="Email address" />

          <FTextField
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() => setShowPassword(!showPassword)}
                    edge="end"
                  >
                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <FTextField
            name="passwordConfirmation"
            label="Password Confirmation"
            type={showPasswordConfirmation ? "text" : "password"}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    onClick={() =>
                      setShowPasswordConfirmation(!showPasswordConfirmation)
                    }
                    edge="end"
                  >
                    {showPasswordConfirmation ? (
                      <VisibilityIcon />
                    ) : (
                      <VisibilityOffIcon />
                    )}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <LoadingButton
            fullWidth
            size="large"
            type="submit"
            variant="contained"
            loading={isSubmitting}
           
          >
            Register
          </LoadingButton>
        </Stack>
      </FormProvider>
    </Container>
  );
};

export default RegisterPage;

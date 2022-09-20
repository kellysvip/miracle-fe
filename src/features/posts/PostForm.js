import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FTextField } from "../../components/form";
import { FormProvider } from "../../components/form";
import { Card } from "@mui/material";
import { alpha, Box, Stack } from "@mui/system";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "react-redux";
import { createPost } from "./postSlice";
const postSchema = Yup.object().shape({
  content: Yup.string().required("Content is required"),
});

const defaultValues = {
  content: "",
  image: '',
};

const PostForm = () => {
  const methods = useForm({
    resolver: yupResolver(postSchema),
    defaultValues,
  });
  const {
    handleSubmit,
    reset,
    setError,
    setValue,
    formState: { isSubmitting },
  } = methods;
  const dispatch = useDispatch()
  const onSubmit = (data) => {
    dispatch(createPost(data)).then(() => reset())
  };
  return (
    <Card sx={{ p: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <FTextField
            name="content"
            multiline
            fullWidth
            rows={4}
            placeholder="Write something..."
            sx={{
              "& fieldset": {
                borderWidth: `1px !important`,
                borderColor: alpha("#919EAB", 0.32),
              },
            }}
          />
          <FTextField name="image" placeholder="Image" />

          <Box
            sx={{
              dispaly: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
          >
            <LoadingButton
              type="submit"
              variant="contained"
              size="small"
              loading={isSubmitting }
            >
              Post
            </LoadingButton>
          </Box>
        </Stack>
      </FormProvider>
    </Card>
  );
};

export default PostForm;

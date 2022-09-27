import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import { FTextField } from "../../components/form";
import { FormProvider } from "../../components/form";
import { Card } from "@mui/material";
import { alpha, Box, Stack } from "@mui/system";
import { LoadingButton } from "@mui/lab";
import { useDispatch } from "react-redux";
import { changePost, getPosts } from "./postSlice";
import { FUploadImage } from "../../components/form";

const postSchema = Yup.object().shape({
  content: Yup.string().required("Content is required"),
});

const defaultValues = {
  content: "",
  image: "",
};

const PostFormChange = ({ postId, userId }) => {
  const methods = useForm({
    resolver: yupResolver(postSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    reset,
    setValue,
    formState: { isSubmitting },
  } = methods;
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(changePost(postId, data))
      .then(() => reset())
      .then(dispatch(getPosts({ userId })))
      .then(dispatch(getPosts({ userId })))
  };

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      if (file) {
        setValue(
          "image",
          Object.assign(file, { preview: URL.createObjectURL(file) })
        );
      }
    },
    [setValue]
  );

  return (
    <Card sx={{ p: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <FTextField name="postId" sx={{ display: "none" }}>
            {postId}
          </FTextField>
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

          <FUploadImage
            name="image"
            accept="image/*"
            maxSize={3145728}
            onDrop={handleDrop}
          />
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
              loading={isSubmitting}
            >
              Post
            </LoadingButton>
          </Box>
        </Stack>
      </FormProvider>
    </Card>
  );
};

export default PostFormChange;

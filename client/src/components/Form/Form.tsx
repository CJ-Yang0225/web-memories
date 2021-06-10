import React, { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

import styled from "@emotion/styled";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
/* @ts-ignore */
import FileBase from "react-file-base64";
import { createPost } from "../../actions/posts";

type Props = {
  postId: string;
  setPostId: (id: string) => void;
};

type Base64 = {
  base64: string;
};

const initialPost = {
  creator: "",
  title: "",
  message: "",
  selectedFile: "",
  isFavorite: false,
  likes: [],
  tags: [],
};

const isNotValidValue = (value: any) => {
  if (typeof value === "string") return value.trim() === "";
  else return value === "";
};

function Form(/* { postId, setPostId }: Props */) {
  const [postData, setPostData] = useState(initialPost);
  const [isDisable, setIsDisable] = useState(true);
  const dispatch = useDispatch();

  const isNotValidForm = useCallback(
    () => Object.values(postData).some(isNotValidValue),
    [postData]
  );

  useEffect(() => {
    setIsDisable(isNotValidForm());
  }, [isNotValidForm]);

  const clearPostData = () => {
    setPostData(initialPost);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    dispatch(createPost(postData));
    clearPostData();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setPostData({
      ...postData,
      [name]: value,
    });
  };

  return (
    <Container>
      <NativeForm
        action="post"
        autoComplete="off"
        // noValidate
        onSubmit={handleSubmit}
      >
        <Typography>Creating a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          required={true}
          value={postData.creator}
          onChange={handleChange}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={handleChange}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={postData.message}
          onChange={handleChange}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={handleChange}
        />
        <FileBox>
          <FileBase
            name="selectedFile"
            type="file"
            multiple={false}
            onDone={({ base64 }: Base64) => {
              setPostData({ ...postData, selectedFile: base64 });
            }}
          />
        </FileBox>
        <Submit
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          disabled={isDisable}
        >
          Submit
        </Submit>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clearPostData}
        >
          Clear
        </Button>
      </NativeForm>
    </Container>
  );
}

const Container = styled(Paper)`
  padding: 16px;
`;

const NativeForm = styled.form`
  display: flex;
  flex-direction: column;
  flex-wrap: "wrap";
  align-items: center;

  & .MuiTextField-root {
    margin: 8px;
  }
`;

const FileBox = styled.div`
  width: 96%;
  margin: 8px 0;
`;

const Submit = styled(Button)`
  margin-bottom: 8px;
`;

export default Form;

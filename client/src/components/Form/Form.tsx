import React, { useState, useEffect, useRef, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";

import styled from "@emotion/styled";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
/* @ts-ignore */
import FileBase from "react-file-base64";
import { createPost, updatePost } from "../../actions/posts";
import { RootState } from "../../store";
import { Post } from "../../types";

type Props = {
  postId: string | null;
  setEditingPostId: (id: string | null) => void;
};

type Base64 = {
  base64: string;
};

const initialState = {
  creator: "",
  title: "",
  message: "",
  selectedFile: "",
  isFavorite: false,
  tags: [""],
};

const isNotValidValue = (value: unknown) => {
  if (typeof value !== "string") return;
  return String(value).trim() === "";
};

function Form({ postId, setEditingPostId }: Props) {
  const [formData, setFormData] = useState(initialState);
  const [isDisabled, setIsDisabled] = useState(true);
  const formRef = useRef<HTMLFormElement>(null);
  const dispatch = useDispatch();

  const post = useSelector((state: RootState) =>
    state.postsReducer.find((post: Post) => post._id === postId)
  );

  const isNotValidForm = useCallback(
    () => Object.values(formData).some(isNotValidValue),
    [formData]
  );

  useEffect(() => {
    if (post) {
      setFormData(post);
    }
  }, [post]);

  useEffect(() => {
    setIsDisabled(isNotValidForm());
  }, [isNotValidForm]);

  const formTitle = postId ? (
    <>
      Editing{" "}
      <span style={{ color: "#00b7ff", fontWeight: "bold" }}>
        {post?.title}
      </span>
    </>
  ) : (
    "Creating a Memory"
  );

  const clearFormData = () => {
    setFormData(initialState);
    setEditingPostId(null);

    if (formRef.current) {
      formRef.current.reset(); // clear file input
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (postId) {
      dispatch(updatePost(postId, formData));
    } else {
      dispatch(createPost(formData));
    }

    clearFormData();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <Container>
      <NativeForm
        action="post"
        noValidate
        autoComplete="off"
        onSubmit={handleSubmit}
        ref={formRef}
      >
        <Typography>{formTitle}</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={formData.creator}
          onChange={handleChange}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={formData.title}
          onChange={handleChange}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={formData.tags}
          placeholder="ex: ReactJS,NodeJS"
          onChange={(event) =>
            setFormData({
              ...formData,
              tags: event.target.value.split(","),
            })
          }
        />
        <FileBox>
          <FileBase
            name="selectedFile"
            type="file"
            multiple={false}
            onDone={({ base64 }: Base64) => {
              setFormData({ ...formData, selectedFile: base64 });
            }}
          />
        </FileBox>
        <Submit
          type="submit"
          variant="contained"
          color="primary"
          size="large"
          fullWidth
          disabled={isDisabled}
        >
          {postId ? "Update" : "Submit"}
        </Submit>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          fullWidth
          onClick={clearFormData}
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

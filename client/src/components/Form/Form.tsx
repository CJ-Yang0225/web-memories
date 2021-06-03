import React from "react";
import styled from "@emotion/styled";
import { Button, Paper, TextField, Typography } from "@material-ui/core";
/* @ts-ignore */
import FileBase from "react-file-base64";

type Props = {
  postId: string;
  setPostId: (id: string) => void;
};

function Form(/* { postId, setPostId }: Props */) {
  return (
    <Container>
      <NativeForm action="post" autoComplete="off" noValidate>
        <Typography></Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          // value={""}
          onChange={() => false}
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          // value={""}
          onChange={() => false}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          multiline
          rows={4}
          // value={""}
          onChange={() => false}
        />
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          // value={""}
          onChange={() => false}
        />
        <FileBox>
          <FileBase type="file" multiple={false} />
        </FileBox>
        <Submit variant="contained" color="primary" size="large" fullWidth>
          Submit
        </Submit>
        <Button variant="contained" color="secondary" size="small" fullWidth>
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

import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "@material-ui/core";
import { Navbar } from "./components/Navbar";
import Home from "./components/Home";

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="lg">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;

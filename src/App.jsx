import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Grid } from "@mui/material";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  return (
    <>
      <div>
        <h1>Phone Book</h1>

        <Grid container spacing={2}>
          <Grid size={6}>
            <ContactForm />
          </Grid>
          <Grid size={6}>
            <ContactList />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;

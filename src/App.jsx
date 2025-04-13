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
      <h1 className="title">Phone Book</h1>

      <Grid
        container
        spacing={{ xs: 1, sm: 2 }}
        sx={{
          padding: { xs: "0 5%", sm: "0 8%" },
          height: "70vh",
          overflow: "hidden",
        }}
      >
        <Grid
          size={6}
          sx={{ border: "4px solid #ccc", padding: 1, height: "fit-content" }}
        >
          <ContactForm />
        </Grid>
        <Grid
          size={6}
          sx={{
            border: "4px solid #ccc",
            padding: 0.5,
            maxHeight: "100%",
            overflowY: "hidden",
          }}
        >
          <ContactList />
        </Grid>
      </Grid>
    </>
  );
}

export default App;

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
        <h1 className="title">Phone Book</h1>

        <Grid
          container
          spacing={2}
          sx={{ padding: { xs: "0 5%", sm: "0 8%" } }}
        >
          <Grid size={6} sx={{ border: "4px solid #ccc", padding: 2 }}>
            <ContactForm />
          </Grid>
          <Grid size={6} sx={{ border: "4px solid #ccc", padding: 2 }}>
            <ContactList />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default App;

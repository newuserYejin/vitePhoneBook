import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import usePhoneBookStore from "../store/usePhonBookStore";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const { addContact } = usePhoneBookStore();

  const handleAddContact = () => {
    if (!name.trim() || !phoneNumber.trim()) {
      return;
    }

    addContact(name, phoneNumber);
  };

  return (
    <Box display="flex" flexDirection="column" alignItems="center" gap={2}>
      <TextField
        value={name}
        id="name"
        label="이름"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        value={phoneNumber}
        id="phoneNumber"
        label="전화번호"
        variant="outlined"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />

      <Button variant="contained" size="large" onClick={handleAddContact}>
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;

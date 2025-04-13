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
    setName("");
    setPhoneNumber("");
  };

  // 하이픈을 적용한 포맷터
  const formatPhoneNumber = (value) => {
    const onlyNums = value.replace(/\D/g, "").slice(0, 11); // 숫자만, 최대 11자리

    if (onlyNums.length < 4) return onlyNums;
    if (onlyNums.length < 8) {
      return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3)}`;
    }
    return `${onlyNums.slice(0, 3)}-${onlyNums.slice(3, 7)}-${onlyNums.slice(
      7
    )}`;
  };

  function settingNumber(input) {
    const formatted = formatPhoneNumber(input);

    setPhoneNumber(formatted);
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      gap={2}
      sx={{ padding: { xs: "0", sm: "10px 10%", md: "30px 20%" } }}
    >
      <TextField
        fullWidth
        required
        value={name}
        id="name"
        label="이름"
        variant="outlined"
        onChange={(e) => setName(e.target.value)}
      />
      <TextField
        fullWidth
        required
        error={false}
        value={phoneNumber}
        id="phoneNumber"
        label="전화번호"
        variant="outlined"
        inputProps={{ inputMode: "numeric" }}
        onChange={(e) => settingNumber(e.target.value)}
      />
      <Button
        fullWidth
        variant="contained"
        size="large"
        onClick={handleAddContact}
      >
        추가
      </Button>
    </Box>
  );
};

export default ContactForm;

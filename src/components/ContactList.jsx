import React, { useEffect, useMemo, useRef, useState } from "react";
import usePhoneBookStore from "../store/usePhonBookStore";
import { Box, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const ContactList = () => {
  const [searchInput, setSearchInput] = useState("");
  const debounceTimer = useRef(null);

  const { phoneBook } = usePhoneBookStore();

  function searchPerson(input) {
    if (debounceTimer.current) clearTimeout(debounceTimer.current);

    debounceTimer.current = setTimeout(() => {
      setSearchInput(input);
    }, 300);
  }

  const filteredPhoneBook = useMemo(() => {
    return searchInput?.trim() === ""
      ? phoneBook
      : phoneBook.filter((item) => item.name.includes(searchInput));
  }, [searchInput, phoneBook]);

  useEffect(() => {
    console.log("필터링된 결과:", filteredPhoneBook);
  }, [filteredPhoneBook]);

  return (
    <div>
      <Box display="flex" alignItems="flex-end" gap={2}>
        <SearchIcon />
        <TextField
          id="searchInput"
          label="search"
          variant="standard"
          onChange={(e) => searchPerson(e.target.value)}
        />
      </Box>
      {filteredPhoneBook.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;

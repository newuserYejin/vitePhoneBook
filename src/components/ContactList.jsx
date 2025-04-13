import React, { useEffect, useMemo, useRef, useState } from "react";
import usePhoneBookStore from "../store/usePhonBookStore";
import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { Padding } from "@mui/icons-material";

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
    <Box sx={{ height: "100%" }} display="flex" flexDirection="column" gap={1}>
      <Box display="flex" alignItems="center" justifyContent="center" gap={2}>
        <TextField
          id="searchInput"
          variant="standard"
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            },
          }}
          sx={{ width: "100%", margin: "10px" }}
          onChange={(e) => searchPerson(e.target.value)}
        />
      </Box>
      {/* <Box sx={{ padding: "0 10px", color: "#797979" }}>연락처 목록</Box> */}
      <Box
        sx={{
          maxHeight: "90%",
          padding: "0 10px",
          overflow: "auto",
        }}
        display="flex"
        flexDirection="column"
        gap={2}
      >
        {filteredPhoneBook.length == 0 ? (
          <Box sx={{ fontWeight: "bold" }}>추가된 연락처가 없습니다.</Box>
        ) : (
          filteredPhoneBook.map((item) => (
            <Box
              key={item.id}
              display="flex"
              gap={{ xs: 1, md: 2 }}
              flexDirection={{ xs: "column", md: "row" }}
              sx={{ borderBottom: "solid 1px rgb(25, 118, 210)" }}
            >
              <Box>{item.name}</Box>
              <Box sx={{ marginBottom: "10px" }}>{item.phoneNumber}</Box>
            </Box>
          ))
        )}
      </Box>
    </Box>
  );
};

export default ContactList;

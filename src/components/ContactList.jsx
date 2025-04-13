import React from "react";
import usePhoneBookStore from "../store/usePhonBookStore";

const ContactList = () => {
  const { phoneBook } = usePhoneBookStore();
  console.log("phoneBook : ", phoneBook);

  return (
    <div>
      {phoneBook.map((item) => (
        <div key={item.id}>
          <p>{item.name}</p>
          <p>{item.phoneNumber}</p>
        </div>
      ))}
    </div>
  );
};

export default ContactList;

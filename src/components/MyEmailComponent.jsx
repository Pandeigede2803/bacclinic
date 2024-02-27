// Adjust the component to accept props

import React from "react";
import { Html, Head, Body, Button } from "@react-email/components";

const MyEmailComponent = ({ name, message,email }) => {
  return (
    <Html>
      <Head>
        <title>Email Saya</title>
      </Head>
      <Body>
        <p>Pesan dari : {name}</p>
        <p>Isi pesan: {message}</p>

        <p> from :{email}</p>
        <Button
          href="https://example.com"
          style={{
            background: "#007bff",
            color: "#ffffff",
            padding: "10px 20px",
            textDecoration: "none",
            borderRadius: "5px",
          }}
        >
          Kunjungi Situs Kami
        </Button>
      </Body>
    </Html>
  );
};

export default MyEmailComponent;

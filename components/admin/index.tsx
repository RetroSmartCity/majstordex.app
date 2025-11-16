"use client";

import { GetServerSideProps } from "next";

export default function Admin() {
  return null;
}

export const getServerSideProps: GetServerSideProps = async () => {
  return {
    redirect: {
      destination: "/admin-client",
      permanent: false,
    },
  };
};

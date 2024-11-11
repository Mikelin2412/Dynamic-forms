import React from "react";
import Form from "../components/form/Form";
import styles from "./styles/createPage.module.css";

const CreatePage = () => {
  return (
    <main className={styles.main}>
      <Form title="Create a record" />
    </main>
  );
};

export default CreatePage;

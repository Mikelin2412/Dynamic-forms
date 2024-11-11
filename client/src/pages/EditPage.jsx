import React, { useEffect, useState } from "react";
import Form from "../components/form/Form";
import styles from "./styles/editPage.module.css";
import { getRecordById } from "../api/api";
import { useParams } from "react-router-dom";

const EditPage = () => {
  const [itemData, setItemData] = useState();
  const { id } = useParams();

  useEffect(() => {
    getRecordById(id).then((data) => setItemData(data));
  }, [id]);

  return (
    <main className={styles.main}>
      <Form title="Edit a record" listData={itemData} />
    </main>
  );
};

export default EditPage;

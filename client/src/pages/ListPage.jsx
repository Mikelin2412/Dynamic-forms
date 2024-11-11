import React, { useCallback, useEffect, useState } from "react";
import List from "../components/list/List";
import { useNavigate } from "react-router-dom";
import { getAllRecords } from "../api/api";

const ListPage = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getAllRecords().then((response) => setData(response));
  }, []);

  const handleEdit = useCallback((id) => navigate(`/edit/${id}`), [data]);

  return (
    <div>
      <h1>Data Table</h1>
      <List data={data} onEdit={handleEdit} />
    </div>
  );
};

export default ListPage;

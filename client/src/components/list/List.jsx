import React from "react";
import styles from "./styles.module.css";
import { useNavigate } from "react-router-dom";

const List = ({ data, onEdit }) => {
  const navigate = useNavigate();

  return (
    <>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Subject</th>
            <th>Role</th>
            <th>Additional Info</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.firstName}</td>
              <td>{item.lastName}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>{item.phone}</td>
              <td>{item.subject}</td>
              <td>{item.role}</td>
              <td>
                {item.additionalInfo && item.additionalInfo.length > 0 ? (
                  <ul>
                    {item.additionalInfo.map((info, index) => (
                      <ul key={index}>
                        {Object.entries(info).map(([key, value]) => (
                          <li key={key}>
                            {key.charAt(0).toUpperCase() + key.slice(1)}:{" "}
                            {value}
                          </li>
                        ))}
                      </ul>
                    ))}
                  </ul>
                ) : (
                  "N/A"
                )}
              </td>
              <td>
                <button
                  onClick={() => onEdit(item.id)}
                  className={styles.editButton}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button
        className={styles.createButton}
        onClick={() => navigate("/create")}
      >
        Create a record
      </button>
    </>
  );
};

export default List;

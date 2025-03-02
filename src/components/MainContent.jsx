import React, { useState } from 'react';
import { AiOutlineEye, AiOutlineExport } from 'react-icons/ai';
import './MainContent.css';


export default function MainContent({ isSidebarOpen }) {
    const [selectedRows, setSelectedRows] = useState([]);
  
  const tableData = [
    {
      id: 1,
      name: "John Doe",
      invoiceDate: "2024-01-15",
      projectDate: "2024-01-01",
      status: "success"
    },
    {
      id: 2,
      name: "Jane Smith",
      invoiceDate: "2024-01-20",
      projectDate: "2024-01-05",
      status: "pending"
    },
    {
      id: 3,
      name: "Louhaishi",
      invoiceDate: "2024-01-20",
      projectDate: "2024-01-05",
      status: "pending"
    },
    {
      id: 4,
      name: "Mohamed Amine",
      invoiceDate: "2024-01-20",
      projectDate: "2024-01-05",
      status: "pending"
    },
  ];

  const handleCheckboxChange = (id) => {
    if (id === 'all') {
      if (selectedRows.length === tableData.length) {
        setSelectedRows([]); // Deselect all
      } else {
        setSelectedRows(tableData.map(row => row.id)); // Select all
      }
    } else {
      if (selectedRows.includes(id)) {
        setSelectedRows(selectedRows.filter(rowId => rowId !== id));
      } else {
        setSelectedRows([...selectedRows, id]);
      }
    }
  };

  return (
    <main className={`main-content ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>
                <input
                  type="checkbox"
                  checked={selectedRows.length === tableData.length}
                  onChange={() => handleCheckboxChange('all')}
                  className="select-all-checkbox"
                />
              </th>
              <th>Subjects</th>
              <th>Invoice Date</th>
              <th>Project Date</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr key={row.id} style={{ backgroundColor: row.id % 2 === 0 ? '#333333' : '#464646' }}>
                <td>
                  <input
                    type="checkbox"
                    checked={selectedRows.includes(row.id)}
                    onChange={() => handleCheckboxChange(row.id)}
                  />
                </td>
                <td>{row.name}</td>
                <td>{row.invoiceDate}</td>
                <td>{row.projectDate}</td>
                <td>
                  <span className={`status-badge ${row.status}`}>
                    {row.status}
                  </span>
                </td>
                <td>
                  <button className="action-button">
                    <AiOutlineEye className="button-icon" />
                    <span>View invoice</span>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="button-container">
        <button className="import-button">Import Invoice</button>
        <button className="export-button">
          <AiOutlineExport className="button-icon" />
          Export as CSV
        </button>
      </div>
    </main>
  );
}
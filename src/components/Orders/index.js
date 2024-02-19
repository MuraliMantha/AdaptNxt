import React, { useState } from 'react';
import './index.css'; // Import CSS file for styling

const Orders = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [currentStatus, setCurrentStatus] = useState('Pending'); // Track current status

  // Sample data (replace with your actual data)
  const data = [
    { id: 1, channel: 'Online', orderNo: 'ORD001', orderDate: '2024-02-19', city: 'New York', customerName: 'John Doe', orderValue: 100, status: 'Pending' },
    { id: 2, channel: 'In-store', orderNo: 'ORD002', orderDate: '2024-02-20', city: 'Los Angeles', customerName: 'Jane Smith', orderValue: 150, status: 'Pending' },
    { id: 3, channel: 'Phone', orderNo: 'ORD003', orderDate: '2024-02-21', city: 'Chicago', customerName: 'Bob Johnson', orderValue: 120, status: 'Pending' },
    // Add more data as needed
  ];

  // Filter data based on current status
  const filteredData = data.filter(item => item.status === currentStatus);

  // Calculate total pages
  const totalPages = Math.ceil(filteredData.length / 4);

  // Calculate start and end index for current page
  const startIndex = (currentPage - 1) * 4;
  const endIndex = Math.min(startIndex + 4, filteredData.length);

  // Function to handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  // Function to handle status change
  const handleStatusChange = (status) => {
    setCurrentStatus(status);
    setCurrentPage(1); // Reset page to 1 when status changes
  }

  return (
    <div className="orders-container">
      <div className="status-options">
        {/* Display status options */}
        {['Pending', 'Accepted', 'AWB Created', 'Ready to Ship', 'Completed', 'Shipped', 'Cancelled'].map(status => (
          <button
            key={status}
            className={currentStatus === status ? 'active' : ''}
            onClick={() => handleStatusChange(status)}
          >
            {status}
          </button>
        ))}
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th><input type="checkbox" /></th>
              <th>ID</th>
              <th>Channel</th>
              <th>Order No</th>
              <th>Order Date</th>
              <th>City</th>
              <th>Customer Name</th>
              <th>Order Value</th>
              <th>Status</th>
              <th>Operations</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.slice(startIndex, endIndex).map(item => (
              <tr key={item.id}>
                <td><input type="checkbox" /></td>
                <td>{item.id}</td>
                <td>{item.channel}</td>
                <td>{item.orderNo}</td>
                <td>{item.orderDate}</td>
                <td>{item.city}</td>
                <td>{item.customerName}</td>
                <td>{item.orderValue}</td>
                <td>{item.status}</td>
                <td>
                  <select>
                    <option value="edit">Actions</option>
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="pagination">
        {/* Pagination */}
        {Array.from({ length: totalPages }, (_, index) => (
          <button key={index + 1} onClick={() => handlePageChange(index + 1)} className={currentPage === index + 1 ? 'active' : ''}>{index + 1}</button>
        ))}
      </div>
    </div>
  );
}

export default Orders;

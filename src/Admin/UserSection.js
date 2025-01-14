import React, { useContext, useEffect, useState } from 'react';
import AdminNavBar from '../Component/AdminNavBar';
import axios from 'axios';
import { ContextOfAll } from '../Context/ContextProvider';
import { useNavigate } from 'react-router-dom';

function UserSection() {
  const [users, setUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');  // State to hold search query
  const { userShow } = useContext(ContextOfAll);
  const navigate = useNavigate();

  const eventHandle = (userId) => {
    if (userId === '' || userId === null) {
      // Handle invalid user ID case
    } else {
      navigate('/userfullshow');
      userShow(userId);
    }
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://ijjasss.onrender.com/api/v1/auth/allusers');
        const filteredUsers = response.data.filter((val) => val.role !== 1);
        setUsers(filteredUsers);
        
        let username = sessionStorage.getItem('username');
        if (!username) {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    };
    fetchUsers();
  }, [navigate]);

  // Filter users based on search query
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    user.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <>
      <AdminNavBar />
      <div className="container mt-5">
        <h2 className="text-center mb-4" style={{ color: '#343a40', fontWeight: '600' }}>
          User Management
        </h2>

        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            className="form-control"
            placeholder="Search by name or email"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}  // Update search query state
            style={{
              borderRadius: '30px',
              padding: '10px',
              fontSize: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>

        <div className="row">
          {filteredUsers.length > 0 ? (
            filteredUsers.map(user => (
              <div key={user._id} className="col-md-4 mb-4" onClick={() => eventHandle(user._id)}>
                <div
                  className="card shadow-lg"
                  style={{
                    cursor: 'pointer',
                    borderRadius: '15px',
                    border: '1px solid #e0e0e0',
                    transition: 'transform 0.2s',
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                >
                  <div className="card-body">
                    <h5 className="card-title" style={{ fontWeight: 'bold', color: '#007bff' }}>
                      {user.name}
                    </h5>
                    <p className="card-text" style={{ color: '#555' }}>
                      <strong>Email:</strong> {user.email}
                    </p>
                    <p className="card-text" style={{ color: '#555' }}>
                      <strong>ID:</strong> {user.id}
                    </p>
                    <p
                      className="card-text"
                      style={{
                        color: user.isBlock ? 'red' : 'green',
                        fontWeight: 'bold',
                      }}
                    >
                      <strong>Status:</strong> {user.isBlock ? 'Blocked' : 'Active'}
                    </p>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12 text-center">
              <p>No users found.</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default UserSection;

import React, { useState, useEffect } from "react";
import api from "../services/api.js";
import { Container, Card, Button, Pagination, Form, Modal, Alert } from "react-bootstrap";
import "./UserList.css"; 

const UserList = () => {
  // State for storing users, pagination, search, and UI state
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  // Fetch users when the page number changes
  useEffect(() => {
    fetchUsers(page);
  }, [page]);

  // Function to fetch users from API
  const fetchUsers = async (pageNum) => {
    try {
      const response = await api.get(`/api/users?page=${pageNum}`);
      setUsers(response.data.data);
      setTotalPages(response.data.total_pages);
    } catch (err) {
      console.error("Error fetching users:", err);
      setError("Failed to fetch users.");
    }
  };

  // Handle edit button click, set selected user and open modal
  const handleEditClick = (user) => {
    setSelectedUser(user);
    setShowModal(true);
    setError("");
    setSuccessMessage("");
  };

  // Handle input changes inside the edit modal
  const handleInputChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  // Function to update user details via API
  const handleUpdateUser = async () => {
    try {
      const response = await api.put(`/api/users/${selectedUser.id}`, {
        first_name: selectedUser.first_name,
        last_name: selectedUser.last_name,
        email: selectedUser.email,
      });

      if (response.status === 200) {
        // Update user in the list without fetching again
        setUsers(users.map((user) => (user.id === selectedUser.id ? selectedUser : user)));
        setSuccessMessage("User updated successfully!");

        // Close the modal after 1 second
        setTimeout(() => {
          setShowModal(false);
          setSuccessMessage("");
        }, 1000);
      }
    } catch (err) {
      console.error("Update Error:", err);
      setError("Failed to update user.");
    }
  };

  // Function to delete a user
  const handleDeleteUser = async (id) => {
    if (!window.confirm("Are you sure you want to delete this user?")) return;

    try {
      const response = await api.delete(`/api/users/${id}`);

      if (response.status === 200 || response.status === 204) {
        // Remove deleted user from list
        setUsers(users.filter((user) => user.id !== id));
        setSuccessMessage("User deleted successfully!");
      } else {
        throw new Error("Deletion failed.");
      }
    } catch (err) {
      console.error("Delete Error:", err);
      setError("Failed to delete user.");
    }
  };

  return (
    <Container className="user-container mt-5">
      <h2 className="text-center fw-bold">Users List</h2>

      {error && <Alert variant="danger">{error}</Alert>}
      {successMessage && <Alert variant="success">{successMessage}</Alert>}

      <Form.Control
        type="text"
        placeholder="Search users..."
        className="search-bar mb-3"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {users.length > 0 ? (
        <div className="user-grid">
          {users
            .filter((user) =>
              `${user.first_name} ${user.last_name}`.toLowerCase().includes(search.toLowerCase())
            )
            .map((user) => (
              <Card className="user-card" key={user.id}>
                <Card.Img variant="top" src={user.avatar} className="user-avatar" />
                <Card.Body>
                  <Card.Title>{user.first_name} {user.last_name}</Card.Title>
                  <Card.Text>{user.email}</Card.Text>
                  <div className="button-group">
                    <Button variant="primary" onClick={() => handleEditClick(user)}>
                      Edit
                    </Button>
                    <Button variant="danger" onClick={() => handleDeleteUser(user.id)}>
                      Delete
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            ))}
        </div>
      ) : (
        <Alert variant="info">No users found.</Alert>
      )}

      <Pagination className="justify-content-center">
        {[...Array(totalPages).keys()].map((num) => (
          <Pagination.Item key={num + 1} active={num + 1 === page} onClick={() => setPage(num + 1)}>
            {num + 1}
          </Pagination.Item>
        ))}
      </Pagination>

      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error && <Alert variant="danger">{error}</Alert>}
          {successMessage && <Alert variant="success">{successMessage}</Alert>}
          {selectedUser && (
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" name="first_name" value={selectedUser.first_name} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" name="last_name" value={selectedUser.last_name} onChange={handleInputChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={selectedUser.email} onChange={handleInputChange} />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleUpdateUser}>Save Changes</Button>
          <Button variant="secondary" onClick={() => setShowModal(false)}>Cancel</Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default UserList;

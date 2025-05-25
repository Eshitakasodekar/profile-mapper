import React, { useState } from 'react';

const initialForm = {
  name: '',
  photo: '',
  description: '',
  address: '',
  skills: '',
};

const AdminPanel = ({ profiles, setProfiles }) => {
  const [formData, setFormData] = useState(initialForm);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAdd = () => {
    const newProfile = {
      id: Date.now(),
      ...formData,
      skills: formData.skills.split(',').map((s) => s.trim()),
    };
    setProfiles((prev) => [...prev, newProfile]);
    setFormData(initialForm);
  };

  const handleDelete = (id) => {
    setProfiles((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div style={{ padding: '1rem', border: '1px solid #ccc', marginTop: '2rem' }}>
      <h2>Admin Panel</h2>

      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        name="photo"
        placeholder="Photo URL"
        value={formData.photo}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        name="address"
        placeholder="Address"
        value={formData.address}
        onChange={handleChange}
        style={styles.input}
      />
      <input
        type="text"
        name="skills"
        placeholder="Skills (comma-separated)"
        value={formData.skills}
        onChange={handleChange}
        style={styles.input}
      />
      <button onClick={handleAdd} style={styles.addBtn}>Add Profile</button>

      <ul style={{ marginTop: '1rem' }}>
        {profiles.map((p) => (
          <li key={p.id} style={styles.item}>
            {p.name}
            <button onClick={() => handleDelete(p.id)} style={styles.deleteBtn}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const styles = {
  input: {
    display: 'block',
    marginBottom: '0.5rem',
    padding: '0.5rem',
    width: '100%',
    maxWidth: '300px',
  },
  addBtn: {
  padding: '0.6rem 1.2rem',
  backgroundColor: '#1976d2',
  color: '#fff',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontSize: '1rem',
  transition: 'background-color 0.3s ease',
  },
  deleteBtn: {
  marginLeft: '1rem',
  backgroundColor: '#f44336',
  color: 'white',
  border: 'none',
  padding: '0.3rem 0.8rem',
  borderRadius: '5px',
  cursor: 'pointer',
  fontSize: '0.9rem',
  transition: 'background-color 0.3s ease',
  },
  item: {
    marginBottom: '0.5rem',
  },
};

export default AdminPanel;

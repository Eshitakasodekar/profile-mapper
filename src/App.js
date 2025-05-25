import React, { useState } from 'react';
import ProfileCard from './components/ProfileCard';
import ProfileModal from './components/ProfileModal';
import initialProfiles from './data/profiles.json';
import MapView from './components/MapView';
import AdminPanel from './components/AdminPanel';

function App() {
  const [profiles, setProfiles] = useState(initialProfiles);
  const [selectedProfile, setSelectedProfile] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [selectedSkill, setSelectedSkill] = useState(null);

  const handleSummaryClick = (profile) => {
    setSelectedProfile(profile);
  };

  const handleCloseModal = () => {
    setSelectedProfile(null);
  };

  const filteredProfiles = profiles
    .filter((profile) =>
      profile.name.toLowerCase().includes(searchText.toLowerCase())
    )
    .filter((profile) =>
      selectedSkill ? profile.skills.includes(selectedSkill) : true
    );

  return (
    <div style={{
      padding: '2rem',
      maxWidth: '1000px',
      margin: '0 auto',
      fontFamily: 'Inter, sans-serif',
      backgroundColor: '#f5f7fa',
      minHeight: '100vh',
      borderRadius: '12px',
      boxShadow: '0 0 10px rgba(0,0,0,0.05)'
    }}>


      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>Profile Mapper</h1>

      <input
        type="text"
        placeholder="Search by name..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        style={{
          padding: '0.6rem 1rem',
          marginBottom: '1.5rem',
          width: '100%',
          maxWidth: '300px',
          fontSize: '1rem',
          borderRadius: '6px',
          border: '1px solid #ccc',
          boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          backgroundColor: '#fff'
        }}

      />

      {selectedSkill && (
        <div style={{
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '1rem'
        }}>
          <strong>Filtered by:</strong>
          <span style={{
            backgroundColor: '#f44336',
            color: 'white',
            border: 'none',
            padding: '0.4rem 0.8rem',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s',
            fontSize: '0.9rem'
          }}>{selectedSkill}</span>
          <button
            onClick={() => setSelectedSkill(null)}
            style={{
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              padding: '0.4rem 0.8rem',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'all 0.3s',
              fontSize: '0.9rem'
            }}
          >
            Clear
          </button>
        </div>
      )}

      {selectedProfile && (
        <>
          <MapView address={selectedProfile.address} />
          <ProfileModal profile={selectedProfile} onClose={handleCloseModal} />
        </>
      )}

      {filteredProfiles.length === 0 && <p style={{ textAlign: 'center' }}>No profiles found.</p>}

      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1.5rem'
      }}>
        {filteredProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            onSummaryClick={handleSummaryClick}
            onTagClick={(skill) => setSelectedSkill(skill)}
          />
        ))}
      </div>

      <AdminPanel profiles={profiles} setProfiles={setProfiles} />
    </div>
  );
}

export default App;

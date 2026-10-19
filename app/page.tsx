'use client';

import { useState, useEffect } from 'react';

const mockProfiles = [
  { id: 1, name: 'Amina', age: 26, county: 'Nairobi', bio: 'Loves hiking and Sheng slang. Looking for real connections.', distance: '2 km', interests: ['Music', 'Travel'] },
  { id: 2, name: 'Brian', age: 29, county: 'Mombasa', bio: 'Beach lover, professional in tech. Church mode optional.', distance: '15 km', interests: ['Tech', 'Sports'] },
  { id: 3, name: 'Faith', age: 24, county: 'Kiambu', bio: 'Student mode. Enjoys local food and tribe culture chats.', distance: '8 km', interests: ['Food', 'Culture'] },
  { id: 4, name: 'David', age: 32, county: 'Kisumu', bio: 'Lake region vibes. Professional, open to long-term.', distance: '5 km', interests: ['Business', 'Music'] },
];

export default function Home() {
  const [location, setLocation] = useState<string>('Detecting...');
  const [filterCounty, setFilterCounty] = useState<string>('All');
  const [profiles, setProfiles] = useState(mockProfiles);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setLocation(`Lat: ${pos.coords.latitude.toFixed(2)}, Lng: ${pos.coords.longitude.toFixed(2)}`);
          // In real app: send to backend for nearby matches
        },
        () => setLocation('Location permission denied - using mock Nairobi')
      );
    } else {
      setLocation('Geolocation not supported');
    }
  }, []);

  const filtered = filterCounty === 'All' ? profiles : profiles.filter(p => p.county === filterCounty);

  return (
    <div className="container">
      <header>
        <h1>💖 Kenya Connect</h1>
        <p>Location-based dating for Kenyans. Match nearby by county, interests, and more.</p>
        <p>Your location: {location}</p>
      </header>

      <div className="filters">
        <label>Filter by County: </label>
        <select value={filterCounty} onChange={(e) => setFilterCounty(e.target.value)}>
          <option>All</option>
          <option>Nairobi</option>
          <option>Mombasa</option>
          <option>Kiambu</option>
          <option>Kisumu</option>
        </select>
        <p style={{marginTop: '10px'}}>Supports M-Pesa premium, Sheng vibes, Student/Pro/Church modes (coming soon).</p>
      </div>

      <div>
        {filtered.map(profile => (
          <div key={profile.id} className="card">
            <div className="profile-img" style={{background: `hsl(${profile.id * 60}, 70%, 60%)`}}></div>
            <h3>{profile.name}, {profile.age}</h3>
            <p><strong>{profile.county}</strong> • {profile.distance}</p>
            <p>{profile.bio}</p>
            <p>Interests: {profile.interests.join(', ')}</p>
            <button style={{marginTop: '10px', padding: '8px 16px', background: '#667eea', color: 'white', border: 'none', borderRadius: '6px'}}>
              Like 👍
            </button>
          </div>
        ))}
      </div>

      <footer style={{textAlign: 'center', color: 'white', padding: '40px'}}>
        <p>Built for Kenya 🇰🇪 | Safety first: Report system coming | Real chat & GPS matching next.</p>
      </footer>
    </div>
  );
}

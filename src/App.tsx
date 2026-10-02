import React, { useState } from 'react';
import './index.css';
import './detail.css';
import logoImg from '../logo.png';

// SVG Icons
const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const HomeIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
    <polyline points="9 22 9 12 15 12 15 22"></polyline>
  </svg>
);

const ListIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="8" y1="6" x2="21" y2="6"></line><line x1="8" y1="12" x2="21" y2="12"></line><line x1="8" y1="18" x2="21" y2="18"></line><line x1="3" y1="6" x2="3.01" y2="6"></line><line x1="3" y1="12" x2="3.01" y2="12"></line><line x1="3" y1="18" x2="3.01" y2="18"></line>
  </svg>
);

const MessageIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
  </svg>
);

const SettingsIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
  </svg>
);

const SearchIcon = () => (
  <svg className="search-icon" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const PlusIcon = () => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const StarIcon = () => (
  <svg className="meta-icon" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

const MapPinIcon = () => (
  <svg className="meta-icon" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CloseIcon = () => (
  <svg className="close-icon" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
);

const VerifiedIcon = () => (
  <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor" stroke="none">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12l2 2 4-4" stroke="#050505" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

// Types
type Item = {
  id: string;
  title: string;
  description: string;
  image: string;
  owner: {
    name: string;
    trustScore: number;
  };
  condition: string;
  location: string;
  available: boolean;
};

// Dummy Data
const ITEMS: Item[] = [
  {
    id: '1',
    title: 'Drafting Board & T-Square',
    description: 'Standard size drafting board with T-square. Perfect for first-year engineering students. Has a few scratches but perfectly functional.',
    image: 'https://images.unsplash.com/photo-1603484477859-abe6a73f9366?auto=format&fit=crop&q=80&w=600',
    owner: { name: 'Alex Johnson', trustScore: 98 },
    condition: 'Good Condition',
    location: 'North Campus',
    available: true,
  },
  {
    id: '2',
    title: 'Scientific Calculator (FX-991EX)',
    description: 'Barely used calculator, allowed in most university exams. Don\'t buy a new one for just one semester! Includes the sliding hard case.',
    image: 'https://images.unsplash.com/photo-1574607407408-1e681c46041d?auto=format&fit=crop&q=80&w=600',
    owner: { name: 'Sam Rivera', trustScore: 100 },
    condition: 'Like New',
    location: 'Library Area',
    available: true,
  },
  {
    id: '3',
    title: 'Chemistry Lab Coat & Goggles',
    description: 'Size Medium. Cleaned and ready to use. Only used for one semester of Chem 101. No chemical stains.',
    image: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?auto=format&fit=crop&q=80&w=600',
    owner: { name: 'Jamie Doe', trustScore: 85 },
    condition: 'Fair Use',
    location: 'South Dorms',
    available: false,
  }
];

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [items, setItems] = useState<Item[]>(ITEMS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);
  const [activeTab, setActiveTab] = useState('Home');

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const filteredItems = items.filter(item => 
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    item.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isLoading) {
    return (
      <div className="loader-container">
        <svg className="infinity-loader" viewBox="0 0 100 50">
          <defs>
            <linearGradient id="blueGreenGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" />
              <stop offset="100%" stopColor="#10b981" />
            </linearGradient>
          </defs>
          <path 
            d="M 50,25 C 30,5 10,5 10,25 C 10,45 30,45 50,25 C 70,5 90,5 90,25 C 90,45 70,45 50,25 Z" 
            className="infinity-path"
          />
        </svg>
      </div>
    );
  }

  return (
    <div className="app-container">
      <header className="header">
        <div className="logo">
          <img src={logoImg} alt="Swapify Logo" className="logo-img" />
          Swapify
        </div>
        <div className="controls">
          <div className="search-wrapper">
            <SearchIcon />
            <input 
              type="text" 
              placeholder="Search available items..." 
              className="search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <button className="btn btn-primary" onClick={() => setIsModalOpen(true)}>
            <PlusIcon />
            Post Item
          </button>
        </div>
      </header>

      <div className="layout-content">
        <aside className="sidebar">
          <nav className="sidebar-nav">
             <a href="#" className={`sidebar-link ${activeTab === 'Home' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab('Home'); setSelectedItem(null); }}>
               <HomeIcon /> Home
             </a>
             <a href="#" className={`sidebar-link ${activeTab === 'Categories' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab('Categories'); setSelectedItem(null); }}>
               <ListIcon /> Categories
             </a>
             <a href="#" className={`sidebar-link ${activeTab === 'Messages' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab('Messages'); setSelectedItem(null); }}>
               <MessageIcon /> Messages
             </a>
             <a href="#" className={`sidebar-link ${activeTab === 'Settings' ? 'active' : ''}`} onClick={(e) => { e.preventDefault(); setActiveTab('Settings'); setSelectedItem(null); }}>
               <SettingsIcon /> Settings
             </a>
          </nav>
        </aside>

        <main className="main-content">
        {selectedItem ? (
          <div className="detail-view">
            <button className="back-btn" onClick={() => setSelectedItem(null)}>
              <ArrowLeftIcon /> Back to items
            </button>
            
            <div className="detail-content">
              <div className="detail-image-wrapper">
                <img src={selectedItem.image} alt={selectedItem.title} className="detail-image" />
                <span className={`status-badge ${selectedItem.available ? 'status-available' : 'status-rented'}`}>
                  {selectedItem.available ? 'Available' : 'Rented out'}
                </span>
              </div>
              
              <div className="detail-info">
                <h2 className="detail-title">{selectedItem.title}</h2>
                <div className="detail-meta">
                  <div className="meta-pill">
                    <StarIcon /> {selectedItem.condition}
                  </div>
                  <div className="meta-pill">
                    <MapPinIcon /> {selectedItem.location}
                  </div>
                </div>
                
                <p className="detail-description">{selectedItem.description}</p>
                
                <div className="detail-owner-card">
                  <div className="detail-owner-info">
                    <div className="detail-avatar">{selectedItem.owner.name.charAt(0)}</div>
                    <div className="user-details">
                      <span className="user-name">{selectedItem.owner.name}</span>
                      <span className="trust-score">
                        <VerifiedIcon /> Trust Score: {selectedItem.owner.trustScore}
                      </span>
                    </div>
                  </div>
                </div>
                
                <button className={`btn btn-primary detail-action-btn`} disabled={!selectedItem.available}>
                  {selectedItem.available ? 'Request to Borrow' : 'Currently Unavailable'}
                </button>
              </div>
            </div>
          </div>
        ) : activeTab !== 'Home' ? (
          <div className="empty-state">
            <h2 style={{ color: 'var(--primary)', marginBottom: '1rem' }}>{activeTab}</h2>
            <p style={{ color: 'var(--text-muted)' }}>This section is currently under construction. Check back soon!</p>
          </div>
        ) : (
          <>
        <div className="items-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="item-card">
              <div className="item-image-wrapper">
                <img src={item.image} alt={item.title} className="item-image" />
                <span className={`status-badge ${item.available ? 'status-available' : 'status-rented'}`}>
                  {item.available ? 'Available' : 'Rented out'}
                </span>
              </div>
              
              <div className="item-content">
                <h3 className="item-title">{item.title}</h3>
                
                <div className="item-meta">
                  <div className="meta-pill">
                    <StarIcon /> {item.condition}
                  </div>
                  <div className="meta-pill">
                    <MapPinIcon /> {item.location}
                  </div>
                </div>

                <p className="item-description">{item.description}</p>
                
                <div className="item-footer">
                  <div className="user-profile">
                    <div className="avatar">
                      {item.owner.name.charAt(0)}
                    </div>
                    <div className="user-details">
                      <span className="user-name">{item.owner.name}</span>
                      <span className="trust-score">
                        <VerifiedIcon /> Trust Score: {item.owner.trustScore}
                      </span>
                    </div>
                  </div>
                  <button className="btn btn-secondary btn-request" onClick={() => setSelectedItem(item)}>
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        </>
        )}
        </main>
      </div>

      {/* Post Item Modal */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <div className="modal-header">
              <h2>Post a new item</h2>
              <button className="close-btn" onClick={() => setIsModalOpen(false)}>
                <CloseIcon />
              </button>
            </div>
            <form onSubmit={(e) => { e.preventDefault(); setIsModalOpen(false); }}>
              <div className="form-group">
                <label className="form-label">Item Title</label>
                <input type="text" className="form-control" placeholder="What are you sharing?" required />
              </div>
              <div className="form-group">
                <label className="form-label">Description & Details</label>
                <textarea className="form-control" rows={4} placeholder="Describe the item, its condition, and any rules for borrowing..." required></textarea>
              </div>
              <div className="form-group">
                <label className="form-label">Condition</label>
                <select className="form-control">
                  <option>Brand New</option>
                  <option>Like New</option>
                  <option>Good Condition</option>
                  <option>Fair Use</option>
                </select>
              </div>
              <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', marginTop: '2.5rem' }}>
                <button type="button" className="btn btn-secondary" onClick={() => setIsModalOpen(false)}>Cancel</button>
                <button type="submit" className="btn btn-primary">Publish Item</button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;

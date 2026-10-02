import React, { useState, useEffect } from 'react';
import { 
  Search, Repeat, BookOpen, Monitor, PenTool, 
  Dumbbell, Home as HomeIcon, ShieldCheck, 
  Banknote, Star, Lock, Camera, Wrench, Menu, X, ArrowRight,
  CheckCircle2, Bell, MessageSquare, ArrowRightLeft, MapPin
} from 'lucide-react';
import './index.css';

// Data
const CATEGORIES = [
  { name: 'Academic', icon: BookOpen },
  { name: 'Books', icon: BookOpen },
  { name: 'Drafting', icon: PenTool },
  { name: 'Electronics', icon: Monitor },
  { name: 'Lab Equipment', icon: BookOpen },
  { name: 'Sports', icon: Dumbbell },
  { name: 'Hostel Essentials', icon: HomeIcon },
  { name: 'Photography', icon: Camera },
  { name: 'Tools', icon: Wrench },
];

const POPULAR_ITEMS = [
  {
    id: 1,
    title: 'Engineering Drafter',
    condition: 'Like New',
    price: '₹20/day',
    location: 'Campus North',
    owner: 'Rahul',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1603484477859-abe6a73f9366?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 2,
    title: 'Scientific Calculator',
    condition: 'Good',
    price: '₹15/day',
    location: 'Library Quad',
    owner: 'Priya',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 3,
    title: 'Engineering Mathematics',
    condition: 'Good',
    price: 'Free to borrow',
    location: 'South Dorms',
    owner: 'Amit',
    rating: 5.0,
    image: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80',
  },
  {
    id: 4,
    title: 'Lab Coat (Medium)',
    condition: 'Like New',
    price: '₹10/day',
    location: 'Science Block',
    owner: 'Sneha',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&w=400&q=80',
  }
];

const FREE_ITEMS = [
  { id: 101, title: 'Calculus Textbook', category: 'Books', image: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=400&q=80' },
  { id: 102, title: 'Mini Drafter', category: 'Drafting', image: 'https://images.unsplash.com/photo-1622322977797-1725514065ea?auto=format&fit=crop&w=400&q=80' },
  { id: 103, title: 'Lab Coat', category: 'Lab Equipment', image: 'https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?auto=format&fit=crop&w=400&q=80' },
  { id: 104, title: 'Sports Equipment', category: 'Sports', image: 'https://images.unsplash.com/photo-1626224583764-f87db24ac4ea?auto=format&fit=crop&w=400&q=80' },
];

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="landing-page">
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-icon">
              <ArrowRightLeft strokeWidth={2.5} size={24} />
            </div>
            <span className="logo-text">SWAPIFY</span>
          </div>
          
          <div className="nav-center desktop-only">
            <a href="#explore">Explore</a>
            <a href="#how-it-works">How It Works</a>
            <a href="#categories">Categories</a>
            <a href="#trust">Trust & Safety</a>
          </div>

          <div className="nav-right desktop-only">
            <a href="#" className="login-link">Log In</a>
            <button className="btn btn-primary">Get Started</button>
          </div>

          <button 
            className="mobile-menu-btn mobile-only"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* HERO SECTION */}
      <header className="hero-section">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">
              THE STUDENT REUSE MARKETPLACE
            </div>
            <h1 className="hero-title">
              <span className="highlight-blue">Find what you need.</span><br />
              <span className="highlight-green">Share what you don't.</span>
            </h1>
            <p className="hero-subtitle">
              Borrow, rent, and reuse useful items from students around you instead of buying things you'll only need for a short time.
            </p>
            <div className="hero-actions">
              <button className="btn btn-primary btn-large">Explore Items</button>
              <button className="btn btn-secondary btn-large">List an Item</button>
            </div>
            <p className="hero-footer-text">Built for students • Designed for reuse</p>
          </div>
          
          <div className="hero-visual desktop-only">
            <div className="visual-composition">
              {/* Central Logo Symbol */}
              <div className="central-symbol">
                <ArrowRightLeft size={48} color="white" />
              </div>
              
              {/* Floating Items */}
              <div className="orbit-item item-1">
                <img src="https://images.unsplash.com/photo-1603484477859-abe6a73f9366?auto=format&fit=crop&w=150&q=80" alt="Drafter" />
              </div>
              <div className="orbit-item item-2">
                <img src="https://images.unsplash.com/photo-1574607383476-f517f260d30b?auto=format&fit=crop&w=150&q=80" alt="Calculator" />
              </div>
              <div className="orbit-item item-3">
                <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=150&q=80" alt="Textbooks" />
              </div>
              <div className="orbit-item item-4">
                <img src="https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?auto=format&fit=crop&w=150&q=80" alt="Headphones" />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* HERO SEARCH */}
      <section className="search-section">
        <div className="search-container">
          <h2>What are you looking for?</h2>
          <div className={`main-search-wrapper ${searchFocused ? 'focused' : ''}`}>
            <Search className="search-icon-inside" size={24} />
            <input 
              type="text" 
              placeholder="Search drafters, calculators, books, electronics..." 
              onFocus={() => setSearchFocused(true)}
              onBlur={() => setSearchFocused(false)}
            />
            <button className="btn btn-primary search-submit">Search</button>
          </div>
          <div className="popular-searches">
            <span className="ps-label">Popular searches:</span>
            <div className="ps-tags">
              <a href="#">Drafter</a>
              <a href="#">Calculator</a>
              <a href="#">Engineering Books</a>
              <a href="#">Lab Equipment</a>
              <a href="#">Sports Equipment</a>
            </div>
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="social-proof-strip">
        <div className="strip-container">
          <span className="strip-title">Built for student communities</span>
          <div className="strip-items">
            <div className="strip-item"><CheckCircle2 size={18} /> Verified Students</div>
            <div className="strip-item"><CheckCircle2 size={18} /> Community Ratings</div>
            <div className="strip-item"><CheckCircle2 size={18} /> Transparent Pricing</div>
            <div className="strip-item"><CheckCircle2 size={18} /> Easy Requests</div>
          </div>
        </div>
      </section>

      {/* PROBLEM SECTION */}
      <section className="problem-section section-padding">
        <div className="section-header center">
          <h2 className="section-title">Why buy something you'll only use for a few weeks?</h2>
        </div>
        <div className="cards-grid-3">
          <div className="problem-card">
            <div className="p-card-icon">1</div>
            <h3>Need it temporarily</h3>
            <p>Maybe you need a drafter for one semester.</p>
          </div>
          <div className="problem-card">
            <div className="p-card-icon">2</div>
            <h3>Already have it</h3>
            <p>Someone else on campus may already own one.</p>
          </div>
          <div className="problem-card">
            <div className="p-card-icon">3</div>
            <h3>Give it another life</h3>
            <p>Instead of letting useful items sit unused, share them with someone who needs them.</p>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION */}
      <section className="solution-section section-padding">
        <div className="section-header center">
          <h2 className="section-title">One platform. A smarter way to reuse.</h2>
        </div>
        <div className="solution-comparison">
          <div className="s-flow old-way">
            <div className="s-step">BUY</div>
            <ArrowRight className="s-arrow" />
            <div className="s-step">USE</div>
            <ArrowRight className="s-arrow" />
            <div className="s-step bad">STORE</div>
          </div>
          <div className="s-vs">versus</div>
          <div className="s-flow new-way">
            <div className="s-step good">FIND</div>
            <ArrowRight className="s-arrow" />
            <div className="s-step good">BORROW / RENT</div>
            <ArrowRight className="s-arrow" />
            <div className="s-step good">RETURN</div>
            <ArrowRight className="s-arrow" />
            <div className="s-step best">REUSE</div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="how-it-works-section section-padding">
        <div className="section-header center">
          <h2 className="section-title">How SWAPIFY works</h2>
        </div>
        <div className="cards-grid-4">
          <div className="hiw-card">
            <div className="hiw-number">01</div>
            <h3>SEARCH</h3>
            <p>Find the item you need.</p>
          </div>
          <div className="hiw-card">
            <div className="hiw-number">02</div>
            <h3>COMPARE</h3>
            <p>Check price, condition, availability, and owner ratings.</p>
          </div>
          <div className="hiw-card">
            <div className="hiw-number">03</div>
            <h3>REQUEST</h3>
            <p>Send a borrow or rental request.</p>
          </div>
          <div className="hiw-card">
            <div className="hiw-number">04</div>
            <h3>RETURN</h3>
            <p>Use it and return it when you're done.</p>
          </div>
        </div>
      </section>

      {/* FEATURED CATEGORIES */}
      <section id="categories" className="categories-section section-padding bg-surface">
        <div className="section-header center">
          <h2 className="section-title">Everything students need</h2>
        </div>
        <div className="category-scroll-container">
          <div className="category-cards">
            {CATEGORIES.map((cat, i) => (
              <div key={i} className="category-card">
                <div className="category-icon-wrapper">
                  <cat.icon size={24} />
                </div>
                <h3>{cat.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POPULAR ITEMS PREVIEW */}
      <section id="explore" className="popular-section section-padding">
        <div className="section-header">
          <div>
            <h2 className="section-title">Things students are looking for</h2>
            <p className="section-subtitle">Discover useful items available around your campus.</p>
          </div>
        </div>
        <div className="items-grid">
          {POPULAR_ITEMS.map((item) => (
            <div key={item.id} className="item-card">
              <div className="item-image-container">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="item-content">
                <h3 className="item-title">{item.title}</h3>
                <div className="item-price">{item.price}</div>
                <div className="item-meta">
                  <span className="item-condition">{item.condition}</span>
                  <span className="item-availability">Available</span>
                </div>
                <div className="item-footer">
                  <div className="item-location"><MapPin size={14}/> {item.location}</div>
                  <div className="item-rating"><Star size={14} fill="currentColor"/> {item.rating}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="center mt-4">
          <button className="btn btn-outline btn-large">Explore all items</button>
        </div>
      </section>

      {/* FREE TO BORROW */}
      <section className="free-section section-padding">
        <div className="free-container">
          <div className="free-header">
            <h2 className="section-title">Some things are better shared.</h2>
            <p className="section-subtitle">Find students willing to lend useful items for free.</p>
            <button className="btn btn-primary mt-4">Explore free items</button>
          </div>
          <div className="free-scroll-container">
            <div className="free-grid">
              {FREE_ITEMS.map((item) => (
                <div key={item.id} className="free-card">
                  <img src={item.image} alt={item.title} />
                  <div className="free-card-content">
                    <span className="free-badge">FREE</span>
                    <h4>{item.title}</h4>
                    <p>{item.category}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SMART REQUEST FEATURE */}
      <section className="request-section section-padding bg-surface">
        <div className="request-container">
          <div className="request-content">
            <h2 className="section-title">Can't find what you need?</h2>
            <p className="section-subtitle">Create a request and let students know what you're looking for.</p>
            
            <div className="request-example">
              <div className="re-label">Looking for:</div>
              <div className="re-text">"Engineering drafter for 2 weeks"</div>
            </div>
            
            <button className="btn btn-primary btn-large">Create a Request</button>
            <p className="re-subtext mt-2">When someone lists a matching item, you'll be notified.</p>
          </div>
        </div>
      </section>

      {/* TRUST SECTION */}
      <section id="trust" className="trust-section section-padding">
        <div className="section-header center">
          <h2 className="section-title">Built around trust</h2>
        </div>
        <div className="trust-grid">
          <div className="trust-feature">
            <div className="trust-icon"><ShieldCheck size={28} /></div>
            <h3>VERIFIED STUDENTS</h3>
            <p>Know who you're dealing with.</p>
          </div>
          <div className="trust-feature">
            <div className="trust-icon"><Star size={28} /></div>
            <h3>RATINGS & REVIEWS</h3>
            <p>See feedback from other students.</p>
          </div>
          <div className="trust-feature">
            <div className="trust-icon"><Banknote size={28} /></div>
            <h3>TRANSPARENT PRICING</h3>
            <p>Know the cost before you request.</p>
          </div>
          <div className="trust-feature">
            <div className="trust-icon"><Lock size={28} /></div>
            <h3>SECURE REQUESTS</h3>
            <p>Keep rentals organized from request to return.</p>
          </div>
        </div>
      </section>

      {/* SUSTAINABILITY SECTION */}
      <section className="sustainability-section section-padding">
        <div className="sus-container">
          <div className="sus-content">
            <h2 className="section-title">Reuse more. Waste less.</h2>
            <p className="section-subtitle">Every item shared gives something useful another chance to be used.</p>
          </div>
          <div className="stats-container">
            <div className="stat-card">
              <div className="stat-icon"><Repeat size={24}/></div>
              <div className="stat-label">Items reused</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><Banknote size={24}/></div>
              <div className="stat-label">Money saved</div>
            </div>
            <div className="stat-card">
              <div className="stat-icon"><HomeIcon size={24}/></div>
              <div className="stat-label">Student communities</div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta-section section-padding">
        <div className="cta-container">
          <h2>Your next useful item might already be nearby.</h2>
          <p>Stop buying things you'll barely use. Find, borrow, rent, and reuse with SWAPIFY.</p>
          <div className="cta-actions">
            <button className="btn btn-primary btn-large">Explore Items</button>
            <button className="btn btn-secondary btn-large">Join SWAPIFY</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="logo-container">
              <div className="logo-icon">
                <ArrowRightLeft strokeWidth={2.5} size={24} />
              </div>
              <span className="logo-text">SWAPIFY</span>
            </div>
            <p>Find what you need. Share what you don't.</p>
          </div>
          <div className="footer-links">
            <div className="link-column">
              <h4>Product</h4>
              <a href="#">Explore</a>
              <a href="#">Categories</a>
              <a href="#">How It Works</a>
              <a href="#">Create Request</a>
            </div>
            <div className="link-column">
              <h4>Community</h4>
              <a href="#">Trust & Safety</a>
              <a href="#">Reviews</a>
              <a href="#">List an Item</a>
            </div>
            <div className="link-column">
              <h4>Support</h4>
              <a href="#">Help</a>
              <a href="#">Contact</a>
              <a href="#">Terms</a>
              <a href="#">Privacy</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 SWAPIFY</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

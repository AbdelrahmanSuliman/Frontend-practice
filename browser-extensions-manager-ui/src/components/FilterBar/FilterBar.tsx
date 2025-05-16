import { useState } from 'react';
import './FilterBar.css';

export default function FilterBar() {
  const [activeFilter, setActiveFilter] = useState('All');

  const handleClick = (filter: string) => {
    setActiveFilter(filter);
  };

  return (
    <div className="extensions-header">
      <h2 className="title">Extensions List</h2>
      <nav className="filter-bar" aria-label="Extension Filter">
        <button
          className={`filter-btn ${activeFilter === 'All' ? 'active' : ''}`}
          onClick={() => handleClick('All')}
        >
          All
        </button>
        <button
          className={`filter-btn ${activeFilter === 'Active' ? 'active' : ''}`}
          onClick={() => handleClick('Active')}
        >
          Active
        </button>
        <button
          className={`filter-btn ${activeFilter === 'Inactive' ? 'active' : ''}`}
          onClick={() => handleClick('Inactive')}
        >
          Inactive
        </button>
      </nav>
    </div>
  );
}

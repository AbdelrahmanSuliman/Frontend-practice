import './FilterBar.css';

type FilterBarProps = {
  activeFilter: string;
  setActiveFilter: (filter: string) => void;
};

export default function FilterBar({ activeFilter, setActiveFilter }: FilterBarProps) {

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

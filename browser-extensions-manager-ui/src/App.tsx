import './App.css'
import './assets/variables.scss'
import ExtensionCard from './components/ExtensionCard/ExtensionCard'
import FilterBar from './components/FilterBar/FilterBar'
import Extension from './components/Extension/Extension'
import data from '../data.json'
import { useEffect, useState } from 'react'

function App() {
  const [filteredData, setFilteredData] = useState(data)
  const [activeFilter, setActiveFilter] = useState(localStorage.getItem('activeFilter') || 'All')
  useEffect(() => {
    if(activeFilter == 'Active'){
      setFilteredData(data.filter((ext) => ext.isActive == true))
    } else if (activeFilter == 'Inactive') {
      setFilteredData(data.filter((ext) => ext.isActive != true))
    } else{
      setFilteredData(data);
    }
  }, [activeFilter])

  useEffect(() => {
    localStorage.setItem('activeFilter', activeFilter);
  }, [activeFilter]);

  return (
    <main>
      <ExtensionCard />
      <FilterBar activeFilter={activeFilter} setActiveFilter={setActiveFilter}/>
      <div className='extensions-display'>
        {filteredData.map((ext) => (
            <Extension 
            key={ext.name}
            name={ext.name}
            logo={ext.logo}
            description={ext.description}
            isActive={ext.isActive}
            />
        ))}
      </div>
    </main>
  )
}

export default App

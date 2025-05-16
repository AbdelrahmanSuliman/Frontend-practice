import './App.css'
import ExtensionCard from './components/ExtensionCard/ExtensionCard'
import FilterBar from './components/FilterBar/FilterBar'
import Extension from './components/Extension/Extension'
import data from '../data.json'

function App() {

  return (
    <main>
      <ExtensionCard />
      <FilterBar/>
      <div className='extensions-display'>
        {data.map((ext) => (
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

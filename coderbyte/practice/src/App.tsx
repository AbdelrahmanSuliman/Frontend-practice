import { useState } from "react"

function App() {
  const [items, setItems] = useState(['banana','apple','watermelon','grapes'])
  const [searchWord, setSearchWord] = useState('')

  function searchItem(searchWord: string){
    if(searchWord?.trim() === '') return;
    setItems(items.filter((word) => word ===  searchWord))
  }
  return (
    <div>
      <input value={searchWord} onChange={(e) => setSearchWord(e.target.value)}/>
      <ul>
        {items.map((item) => <li>{item}</li>)}
      </ul>
    </div>
  )
}

export default App

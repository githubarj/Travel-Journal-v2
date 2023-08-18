import './App.css'
import Header from './Components/Header/Header'
import Card from './Components/Card/Card'
import data from "./Components/Card/cardData"

function App() {
      const card = data.map((item)=> {
        return (
          <Card 
          key={item.id}
          {...item}
          />
        )
      })
  return (
    <div className="page-container">
      <Header />
      {card}
    </div>
  )
}

export default App

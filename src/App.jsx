import './App.css'
import Card from './Card'
import Footer from './Footer'
import Jumbotron from './Jumbotron'
import NavBar from './NavBar'


const cardData = [
  {
    id: 1,
    title: 'Card 1',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur voluptatum corporis iusto impedit consectetur nesciunt nostrum harum repellendus aperiam exercitationem sapiente enim obcaecati, commodi, unde at maxime earum tempora?"
  },
  {
    id: 2,
    title: 'Card 2',
    text: "Gain alignment future-proof agile, nor it's not hard guys, yet programmatically ramp up deliverables."
  },
  {
    id: 3,
    title: 'Card 3',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, consequuntur voluptatum corporis iusto impedit consectetur nesciunt nostrum harum repellendus aperiam exercitationem sapiente enim obcaecati, commodi, unde at maxime earum tempora?"
  },
  {
    id: 4,
    title: 'Card 4',
    text: "Gain alignment future-proof agile, nor it's not hard guys, yet programmatically ramp up deliverables."
  }
]

function App() {

  return (
    <>
    <NavBar/>
    <Jumbotron/>
    <Card/>
    <Footer/>
    </>
  )
}

export default App

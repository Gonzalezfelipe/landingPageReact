import './App.css';
import Card from './Card';
import Footer from './Footer';
import Jumbotron from './Jumbotron';
import NavBar from './NavBar';

const cardData = [
  {
    id: 1,
    title: 'Card',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 2,
    title: 'Card 2',
    text: "Gain alignment future-proof agile, nor it's not hard guys."
  },
  {
    id: 3,
    title: 'Card',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
  },
  {
    id: 4,
    title: 'Card',
    text: "Gain alignment future-proof agile, nor it's not hard guys."
  }
];

function App() {
  return (
    <>
      <NavBar />
      <Jumbotron />
      <div className="container">
        <div className="row">
          {cardData.map(card => (
            <Card key={card.id} title={card.title} text={card.text} />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;


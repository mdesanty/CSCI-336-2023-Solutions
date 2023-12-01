import ToysTable from './components/ToysTable';
import './App.css';

function App() {
  const mikesFavoriteChildhoodToys = [
    {rank: 1, name: 'Creepy Crawlers Oven', url: 'https://www.youtube.com/watch?v=PTFiJAH63xo'},
    {rank: 2, name: 'Stretch Armstrong', url: 'https://www.youtube.com/watch?v=4TFobtlCBos'},
    {rank: 3, name: 'Pogs', url: 'https://www.youtube.com/watch?v=hUykcjZKhLk'},
    {rank: 4, name: 'Super Soaker', url: 'https://www.youtube.com/watch?v=_eWU8UCXgHk'},
    {rank: 5, name: 'Vac-Man', url: 'https://www.youtube.com/watch?v=xkj9ptYsjTg'},
    {rank: 6, name: 'Teenage Mutant Ninja Turtles Action Figures', url: 'https://www.youtube.com/watch?v=nFq3umDUNAk'},
    {rank: 7, name: 'Deluxe Talkboy', url: 'https://www.youtube.com/watch?v=ePrAxox-sq0'},
    {rank: 8, name: 'Transformers', url: 'https://www.youtube.com/watch?v=eqCW7M5ju2s'},
    {rank: 9, name: 'Monster Face', url: 'https://www.youtube.com/watch?v=HMrC1C175Zk'},
    {rank: 10, name: 'Terminator 2 Bio-Flesh Regenerator', url: 'https://www.youtube.com/watch?v=CjVrZEh6YNs'},
  ];

  return (
    <div style={{ 'paddingLeft': 25, 'paddingTop': 10 }}>
      <h1>Mike's Favorite Childhood Toys</h1>
      <ToysTable toys={ mikesFavoriteChildhoodToys } />
    </div>
  );
}

export default App;

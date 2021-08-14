/* import 'bootstrap/dist/css/bootstrap.min.css' */
import SearchBar from './components/SearchBar';
import Heroes from './components/Heroes';

function App() {

  const { search } = window.location
  const textform = new URLSearchParams(search).get('search_bar')
  console.log(textform)

  return (
    <div className="container">
      <SearchBar/>
      {
        textform &&
        <Heroes heroe={textform}/>
      }
    </div>
  );
}

export default App;

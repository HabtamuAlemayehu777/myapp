import logo from './logo.svg';
import './App.css';
import Header from './Conponent/Header/Header'
import Menu from './Conponent/Menu/Menu'
function App() {
  const mycss = {
    color: "white"
  }
  const second = {
        color: "#33C3AC"

  }
  return (
    <div className="App">
      <Header/>
      <main className="main-content">
        <section>
          <h1 style={mycss}>Welcome <span style={second}>to My Portfolio</span></h1>
          <p>This is a long scrollable section.</p>
          {/* Add a lot of content here to test scroll */}
        </section>
      </main>
    </div>
  );
}

export default App;

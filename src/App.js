import './App.css';
import Counter  from "./components/Counter";

function App() {
  return (
    <div className="App">
        <nav className={"appNav"}>
            <h1>BlockBuster</h1>
            {/*<ul>*/}
            {/*    <li><a href={"#"}>Home</a></li>*/}
            {/*    <li><a href={"#"}>Service</a></li>*/}
            {/*    <li><a href={"#"}>About</a></li>*/}
            {/*    <li><a href={"#"}>Movie Genre</a></li>*/}
            {/*</ul>*/}
            <div className={"profileIcon"}>

            </div>
        </nav>

        <div className="counterSection">
            <Counter/>
        </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import BT3Header from './Components/BT3Header/BT3Header';
import BT3SideBar from './Components/BT3SideBar/BT3SideBar';
import BT3Content from './Components/BT3Content/BT3Content';
import BT3Footer from './Components/BT3Footer/BT3Footer';

function App() {
  return (
    <div className="App">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top mb-4">
      <BT3Header />
      </nav>
      <div className="container-fluid mt-4 p-4">
        <div className="row">
          <div className="col-3 mt-4">
            <BT3SideBar />
          </div>
          <div className="col-9">
            <BT3Content />
          </div>

        </div>
      </div>
      <BT3Footer/>
    </div>
  );
}

export default App;

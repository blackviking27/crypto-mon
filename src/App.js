import './App.css';
import TableData from './components/Table/Table';
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div className="App">

      <div className="content-container" >
          <div className="app-heading" >
            Crypto<span style={{color: '#185ADB'}} >Mon</span>
          </div>
          <TableData />
          <Footer />
      </div>
    </div>
  );
}

export default App;
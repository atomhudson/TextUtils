// import logo from './logo.svg';
import './App.css';
import Aboutus from './components/Aboutus';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
function App() {
  return (
    <>
      
      {/* <Navbar title = "TextUtils" aboutText = "About TextUtils"/> */}
      {/* <Navbar/> */}
      <Navbar title = "TextUtils"/>
      <div className="container my-3">
        <TextForm heading="Enter the Text To Analyze"/>
        <Aboutus />
      </div>

    </>

  );

}

export default App;


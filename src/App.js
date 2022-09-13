import {useState} from "react"
import './App.css';

function App() {
  const [file, setFile] = useState("");

  const handleChange = (event) => {
    setFile(event.target.files[0]);
  }
  console.log(file)
  return (
    <div className="App">
      <input type="file" accept="image/*" onChange={handleChange}/>
      <button>Upload to Firebase</button>
    </div>
  );
}

export default App;

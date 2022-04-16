import './App.css';
import Header from './Header';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './Login';
import Home from './Home';
import Page404 from './Page404';
import Logout from './Logout';
import Voices from './Voices';
import VoiceDetail from './VoiceDetail';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
        <Route path="*" element={<Page404 />} />
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path='/logout' element={<Logout />} />
          <Route exact path='/voices' element={<Voices />} />
          <Route path='/voice/:id' element={<VoiceDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

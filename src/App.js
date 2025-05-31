import './App.css';
import MainScreen from './Components/MainScreen';
import Sidebar from "./Components/Sidebar";
import Topbar from './Components/Topbar';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';

function App() {
  return (
    <div>

      <header>
        <Topbar />
      </header>
      <div className="body">
        <aside>
          <Sidebar />
        </aside>
        <main>
          <Router>
            <Routes>
              <Route path="/*" element={<MainScreen />} />
            </Routes>
          </Router>
        </main>
      </div>


    </div>
  );
}

export default App;
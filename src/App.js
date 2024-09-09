import React from "react";
import HomeScreen from "./screens/HomeScreen";
import AthleteScreen from "./screens/AthleteScreen";
import SearchScreen from "./screens/SearchScreen";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './styles/App.css'; // Importa o arquivo CSS

function App() {
    return (
        <div className="App"> {/* Aplicando a classe App */}
            <Router>
                <div className="Page"> {/* Estilo aplicado a cada página */}
                    <Routes>
                        <Route path="/" element={<HomeScreen />} />
                        <Route path="/HomeScreen" element={<HomeScreen />} />
                        <Route path="/AthleteScreen" element={<AthleteScreen />} />
                        <Route path="/SearchScreen" element={<SearchScreen />} />
                    </Routes>
                </div>
            </Router>
        </div>
    );
}

export default App;
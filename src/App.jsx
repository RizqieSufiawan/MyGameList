import { useState } from "react";
import HeaderApp from "./components/HeaderApp";
import RingkasanGame from "./components/RingkasanGame";
import FormTambahGame from "./components/FormTambahGame";
import DaftarGame from "./components/DaftarGame";
import "./App.css";

const dataAwal = [
  { id: 1, judul: "Elden Ring", platform: "PC", genre: "Action RPG", status: "Tamat", rating: 10 },
  { id: 2, judul: "Genshin Impact", platform: "Mobile", genre: "Open World RPG", status: "Sedang Main", rating: 8 },
  { id: 3, judul: "Hollow Knight", platform: "Switch", genre: "Metroidvania", status: "Tamat", rating: 9 },
  { id: 4, judul: "Persona 5 Royal", platform: "PS5", genre: "JRPG", status: "Ingin Main", rating: 0 },
  { id: 5, judul: "Cyberpunk 2077", platform: "PC", genre: "Action RPG", status: "Drop", rating: 6 },
];

function App() {
  const [daftarGame, setDaftarGame] = useState(dataAwal);

  function tambahGame(gameBaru) {
    setDaftarGame([...daftarGame, { id: Date.now(), ...gameBaru }]);
  }

  return (
    <div className="app">
      <HeaderApp
        judul="MyGameList"
        subjudul="Catat game yang sedang, sudah, dan ingin kamu mainkan"
      />
      <RingkasanGame daftarGame={daftarGame} />
      <FormTambahGame onTambah={tambahGame} />
      <DaftarGame daftarGame={daftarGame} />
    </div>
  );
}

export default App;
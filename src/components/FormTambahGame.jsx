import { useState } from "react";

function FormTambahGame({ onTambah }) {
  const [judul, setJudul] = useState("");
  const [platform, setPlatform] = useState("PC");
  const [genre, setGenre] = useState("");
  const [status, setStatus] = useState("Ingin Main");
  const [rating, setRating] = useState(0);

  function handleSubmit(e) {
    e.preventDefault();

    if (judul.trim() === "" || genre.trim() === "") {
      return;
    }

    onTambah({
      judul: judul.trim(),
      platform: platform,
      genre: genre.trim(),
      status: status,
      rating: Number(rating),
    });

    setJudul("");
    setPlatform("PC");
    setGenre("");
    setStatus("Ingin Main");
    setRating(0);
  }

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Tambah Game</h2>

      <div className="form-grid">
        <label>
          Judul
          <input
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="contoh: Hades"
            required
          />
        </label>

        <label>
          Genre
          <input
            type="text"
            value={genre}
            onChange={(e) => setGenre(e.target.value)}
            placeholder="contoh: Roguelike"
            required
          />
        </label>

        <label>
          Platform
          <select value={platform} onChange={(e) => setPlatform(e.target.value)}>
            <option value="PC">PC</option>
            <option value="PS5">PS5</option>
            <option value="Switch">Switch</option>
            <option value="Mobile">Mobile</option>
          </select>
        </label>

        <label>
          Status
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="Ingin Main">Ingin Main</option>
            <option value="Sedang Main">Sedang Main</option>
            <option value="Tamat">Tamat</option>
            <option value="Drop">Drop</option>
          </select>
        </label>

        <label>
          Rating (0 = belum dinilai)
          <input
            type="number"
            min="0"
            max="10"
            value={rating}
            onChange={(e) => setRating(e.target.value)}
          />
        </label>
      </div>

      <button type="submit">Tambah</button>
    </form>
  );
}

export default FormTambahGame;
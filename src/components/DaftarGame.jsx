import KartuGame from "./KartuGame";

function DaftarGame({ daftarGame }) {
  if (daftarGame.length === 0) {
    return <p className="kosong">Belum ada data game</p>;
  }

  return (
    <section className="daftar">
      {daftarGame.map((game) => (
        <KartuGame
          key={game.id}
          judul={game.judul}
          platform={game.platform}
          genre={game.genre}
          status={game.status}
          rating={game.rating}
        />
      ))}
    </section>
  );
}

export default DaftarGame;
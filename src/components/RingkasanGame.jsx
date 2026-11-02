function RingkasanGame({ daftarGame }) {
  const total = daftarGame.length;
  const tamat = daftarGame.filter((g) => g.status === "Tamat").length;
  const sedangMain = daftarGame.filter((g) => g.status === "Sedang Main").length;

  const sudahDinilai = daftarGame.filter((g) => g.rating > 0);
  const rataRata =
    sudahDinilai.length > 0
      ? (sudahDinilai.reduce((jumlah, g) => jumlah + g.rating, 0) / sudahDinilai.length).toFixed(1)
      : "-";

  return (
    <section className="ringkasan">
      <div className="ringkasan-item">
        <span>Total Game</span>
        <strong>{total}</strong>
      </div>
      <div className="ringkasan-item">
        <span>Sedang Main</span>
        <strong>{sedangMain}</strong>
      </div>
      <div className="ringkasan-item">
        <span>Tamat</span>
        <strong>{tamat}</strong>
      </div>
      <div className="ringkasan-item">
        <span>Rata-rata Rating</span>
        <strong>{rataRata}</strong>
      </div>
    </section>
  );
}

export default RingkasanGame;
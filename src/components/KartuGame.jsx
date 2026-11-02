function KartuGame({ judul, platform, genre, status, rating }) {
  const kelasStatus = "status status-" + status.toLowerCase().replace(" ", "-");

  return (
    <div className="kartu">
      <div className="kartu-atas">
        <h3>{judul}</h3>
        <span className={kelasStatus}>{status}</span>
      </div>
      <p className="kartu-info">
        {platform} • {genre}
      </p>
      <p className="kartu-rating">⭐ {rating > 0 ? rating + "/10" : "-"}</p>
    </div>
  );
}

export default KartuGame;
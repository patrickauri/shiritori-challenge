const Landing = ({ changePage }) => {
  return (
    <>
      <div className="title-wrapper">
        <h1>Shiritori Challenge</h1>
      </div>
      <div className="play-wrapper">
        <h2>Play</h2>
        <button onClick={() => changePage(1)}>Player vs Computer</button>
        <a title="PvP mode is not yet implemented">
          <button className="btn-disabled">Player vs Player</button>
        </a>
      </div>
      <div className="info-wrapper">
        <h3>What is Shiritori?</h3>
        <p>
          Shiritori (しりとり) is a Japanese word game in which the players are
          required to say a word which begins with the final kana of the
          previous word. No distinction is made between hiragana, katakana or
          kanji. "Shiritori" literally means "taking the end" or "taking the
          rear".
        </p>
      </div>
      <div className="footer">
        Created by{" "}
        <a href="https://patrickauri.com" target="_blank">
          Patrick Auri
        </a>
      </div>
    </>
  )
}

export default Landing

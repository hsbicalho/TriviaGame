const SavePlayerRank = (player, hits, score) => {
  const NewPlayer = {
    player,
    hits,
    score,
  };
  let oldStorage = [];
  if (localStorage.getItem('playersRank')) {
    oldStorage = JSON.parse(localStorage.getItem('playersRank'));
  }
  oldStorage.push(NewPlayer);
  localStorage.setItem('playersRank', JSON.stringify(oldStorage));
};

export default SavePlayerRank;

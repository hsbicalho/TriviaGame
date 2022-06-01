const SavePlayerRank = (player, score, image, token) => {
  const NewPlayer = {
    player,
    score,
    image,
    token,
  };
  let oldStorage = [];
  if (localStorage.getItem('playersRank')) {
    oldStorage = JSON.parse(localStorage.getItem('playersRank'));
  }
  oldStorage.push(NewPlayer);
  localStorage.setItem('playersRank', JSON.stringify(oldStorage));
};

const ReceivePlayerRank = () => {
  if (localStorage.getItem('playersRank')) {
    return JSON.parse(localStorage.getItem('playersRank'));
  }
};

export { SavePlayerRank, ReceivePlayerRank };

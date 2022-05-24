const fetchToken = async () => {
  const fItem = await fetch('https://opentdb.com/api_token.php?command=request');
  const item = await fItem.json();
  return item;
};
if (typeof module !== 'undefined') {
  module.exports = {
    fetchToken,
  };
}

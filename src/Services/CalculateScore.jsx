const questValue = {
  easy: 1,
  medium: 2,
  hard: 3,
};

const calcScore = (difficulty, time) => {
  const baseValue = 10;
  if (difficulty === 'easy') return baseValue + (time * questValue.easy);
  if (difficulty === 'medium') return baseValue + (time * questValue.medium);
  return baseValue + (time * questValue.hard);
};

export default calcScore;

const Table = () => {
  const ranks = [2, 3, 4, 5, 6, 7, 8, 9, "J", "Q", "K", "A"];
  const suits = ["H", "S", "D", "C"];
  const cardNames = [];
  const numCards = 2; //can change this or dynamically load as prop for more cards;

  for (let i = 1; i <= numCards; i++) {
    let randRank = ranks[Math.floor(Math.random() * ranks.length)];
    let randSuit = suits[Math.floor(Math.random() * suits.length)];
    cardNames.push({ id: i, rank: randRank, suit: randSuit });
    if (cardNames.includes(randRank + randSuit)) i -= 1;
  }

  const total = cardNames.reduce(
    (sum, card) => {
      if (card.rank === "A") {
        sum += 11;
      } else if (typeof card.rank === "number") {
        sum += card.rank;
      } else {
        sum += 10;
      }
      return sum;
    },

    0
  );

  return (
    <div className="table">
      <div className="cardContainer">
        {cardNames.map(({ id, rank, suit }) => {
          return (
            <img
              key={`${id}`}
              src={`https://deckofcardsapi.com/static/img/${rank + suit}.png`}
            />
          );
        })}
      </div>
      <h2>Score: {total}</h2>
      <h3>{total === 21 ? "🤑🤑🤑BLACKJACK!!!🤑🤑🤑" : ""}</h3>
    </div>
  );
};

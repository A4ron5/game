export const win = (count, deck) => ({
  type: 'ROUND_WIN',
  deck,
  count
})

export const lose = (count) => ({
  type: 'ROUND_LOSE',
  count
})

export const select = (selectedCards) => ({
  type: 'SELECT',
  selectedCards
})

export const filter = (cardsInGame) => ({
  type: 'FILTER',
  cardsInGame
})

export const clear = () => ({
  type: 'CLEAR',
  selectedCards: [] 
})

export const flag = (flag) => ({
  type: 'SELECT_FLAG',
  flag
})
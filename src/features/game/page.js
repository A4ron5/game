import React from 'react'
import { GamePage } from '../../ui/templates/GamePage'
import { Cards } from './cards'
import { Header } from './header'

export const game = () => (
  <GamePage data-tid="Deck">
    <Header/>
    <Cards/>
  </GamePage>
)
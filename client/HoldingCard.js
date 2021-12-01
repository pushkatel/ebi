import React from 'react'
import {MiniBuyButton} from './MiniBuyButton'
import {MiniSellButton} from './MiniSellButton'

export const HoldingCard = ({stock}) => {
  const singleHoldingStyle = {
    display: 'flex',
    margin: '10px',
    justifyContent: 'space-evenly',
    maxWidth: '50vw',
    border: '1px solid black'
  }
  return (
    <div style={singleHoldingStyle}>
      <div>{stock.contract}</div>
      <div>{stock.ticker}</div>
      <div>{stock.quantity}</div>
      {['Call', 'Put', 'Spread'].includes(stock.contract) ? (
        <>
          <div>{stock.expire.substring(0, 10)}</div>
          <div>{stock.strike}</div>
        </>
      ) : (
        <>
          <div></div>
          <div></div>
        </>
      )}
      <MiniSellButton />
      <MiniBuyButton />
    </div>
  )
}

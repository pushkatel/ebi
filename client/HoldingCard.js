import React from 'react'

export const HoldingCard = ({stock}) => {
  const singleHoldingStyle = {
    display: 'flex',
    margin: '10px',
    justifyContent: 'space-evenly',
    maxWidth: '50vw'
  }
  return (
    <div style={singleHoldingStyle}>
      <div>{stock.contract}</div>
      <div>{stock.key}</div>
      {['Call', 'Put', 'Spread'].includes(stock.contract) ? (
        <>
          <div>{stock.expire}</div>
          <div>{stock.strike}</div>
        </>
      ) : (
        <>
          <div></div>
          <div></div>
        </>
      )}
      <div>{stock.quantity}</div>
    </div>
  )
}

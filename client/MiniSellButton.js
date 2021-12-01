import React from 'react'

export const MiniSellButton = () => {
  const miniButtonStyle = {
    height: '25px',
    width: '25px'
  }

  return (
    <div style={miniButtonStyle}>
      <button type="button" style={{backgroundColor: 'red'}}>
        Sell
      </button>
    </div>
  )
}

import React from 'react'

export const MiniBuyButton = () => {
  const miniButtonStyle = {
    height: '25px',
    width: '25px'
  }

  return (
    <div style={miniButtonStyle}>
      <button type="button" style={{backgroundColor: 'green'}}>
        Buy
      </button>
    </div>
  )
}

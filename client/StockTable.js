import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {HoldingCard} from './HoldingCard'

const StockTable = () => {
  const [stocks, setStocks] = useState([])
  useEffect(() => {
    const fetchStocks = async () => {
      const res = await axios.get('/api/holdings/all')
      setStocks(res.data)
    }
    fetchStocks()
  }, [])

  return (
    <div>
      {stocks.map(stock => (
        <HoldingCard key={stock.key} stock={stock} />
      ))}
    </div>
  )
}

export default StockTable

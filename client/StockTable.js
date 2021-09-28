import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Grid} from 'gridjs-react'

const StockTable = () => {
  const [stocks, setStocks] = useState([{id: 0}])
  useEffect(() => {
    const fetchStocks = async () => {
      const res = await axios.get('/api/holdings/all')
      setStocks(res.data)
    }
    fetchStocks()
  }, [])
  console.log('test', stocks)

  return (
    <div>
      <Grid data={stocks} />
    </div>
  )
}

export default StockTable

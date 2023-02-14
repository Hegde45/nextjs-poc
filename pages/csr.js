import React, { useState, useEffect } from 'react'
import fetch from 'isomorphic-unfetch'

const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      await new Promise(f => setTimeout(f, Math.random()));
      setData([{name: new Date().toString()}])
    }
    getData()
  })
  return (
    <main>
      <h1>The Starwars films</h1>
      <ul>
        {data.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </main>
  )
}

export default Home

import React from 'react'
import fetch from 'isomorphic-unfetch'

const Home = ({ data }) => {
  return (
    <main onClick={api} >
      <h1>The Starwars films</h1>
      <ul>
        {data.map(item => (
          <li key={item.name}>{item.name}</li>
        ))}
      </ul>
    </main>
  )
}

async function api() {
  await fetch('http://localhost:3000/api/hello', {mode:'cors'});
}

export async function getServerSideProps (req, res) {
  console.log('------------------------------------------ start');
  console.log(req);
  console.log('------------------------------------------ logs');
  console.log(res);
  console.log('------------------------------------------ end');
  await new Promise(f => setTimeout(f, Math.random()));
  return { props: { data: [{name: new Date().toString()}] } }
}

export default Home

import axios from 'axios'
import Head from 'next/head'
import { useState } from 'react'
import HomeImage from '../components/HomeImage'
import MemoriesList from '../components/MemoriesList'
import Navbar from '../components/Navbar'

export default function Home({memoriesList}) {
  
  const [query , setQuery] = useState("")
  const [memories , setMemories] = useState(memoriesList)
  return (
    <div>
      <Head>
        <title>Memories App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
        <h1 style={{textAlign:"center"}}>Welcome to memories!</h1>
        <HomeImage />
        <MemoriesList memories={memories}/>
      </main>

    </div>
  )
}


export const getServerSideProps = async () =>{
  const hostname = process.env.NEXT_PUBLIC_SITE_URL
  console.log(hostname)
  const res = await axios.get(`${hostname}/api/memorie`)
  // console.log(res)

  return {
    props:{
      memoriesList:res.data
    }
  }
}
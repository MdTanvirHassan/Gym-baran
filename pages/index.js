import Healthy from '@/components/Healthy'
import Hero from '@/components/Hero'
import Morning from '@/components/Morning'
import Static from '@/components/Static'
import Workout from '@/components/Workout'
import Works from '@/components/Works'
import Head from 'next/head'
//import Image from 'next/image'


export default function Home() {
  return (
    <>
      <Head>
        <title>GYM-baran</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero/>
      <Healthy/>
      <Static/>
      <Workout/>
      <Morning/>
      <Works/>
      
    </>
  )
}

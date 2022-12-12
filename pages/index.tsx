import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>/pages/index.js</h1>
      <ul>
        <li><a href="/sub">/pages/sub/index.tsx</a></li>
        <li><a href="/sub/about">/pages/sub/index.tsx</a></li>
        <li><a href="/sub/1">/pages/sub/[1].tsx</a></li>
        <li><a href="/sub/2 ">/pages/sub/[1].tsx</a></li>
        <li><a href="/sub/fetch">/pages/sub/fetch.tsx</a></li>
      </ul>
    </div>
  )
}

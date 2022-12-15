import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <h1>/pages/index.js</h1>
      <ul>
        <li>
          <Link href="/sub">
            <a>/pages/sub/index.tsx</a>
          </Link>
        </li>
        <li>
          <Link href="/sub/about">
            <a>/pages/sub/index.tsx</a>
          </Link>
        </li>
        <li>
          <Link href="/sub/1">
            <a>/pages/sub/[1].tsx</a>
          </Link>
        </li>
        <li>
          <Link href="/sub/2 ">
            <a>/pages/sub/[1].tsx</a>
          </Link>
        </li>
        <li>
          <Link href="/sub/fetch">
            <a>/pages/sub/fetch.tsx</a>
          </Link>
        </li>
      </ul>
    </div>
  )
}

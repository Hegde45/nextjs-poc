import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1 className="title">
        <div>Home Page</div>
        <br />
        <div>
          <Link href="https://on-demand-isr.vercel.app/">ON DEMAND ISR</Link>
        </div>
        <br />
        <div>
          <Link href="https://www.smashingmagazine.com/2021/04/incremental-static-regeneration-nextjs/">ISR</Link>
        </div>
        <br />
        <div>
          <Link href="/ssg">ssg</Link>
        </div>
        <br />
        <div>
          <Link href="/ssr">ssr</Link>
        </div>
        <br />
        <div>
          <Link href="/csr">csr</Link>
        </div>
      </h1>
    </div>
  )
}

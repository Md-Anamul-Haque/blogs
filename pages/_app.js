import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (<>
    <header>
      <nav className='mainnav'>
        <ul>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/about'>About</Link></li>
          <li><Link href='/blogs'>Blogs</Link></li>
          <li><Link href='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp

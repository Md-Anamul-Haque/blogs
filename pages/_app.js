import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (<>
    <header>
      <nav className='mainnav'>
        <ul>
          <li><Link className={router.pathname == "/" ? "active" : ""} href='/'>Home</Link></li>
          <li><Link className={router.pathname == "/about" ? "active" : ""} href='/about'>About</Link></li>
          <li><Link className={router.pathname == "/blogs" ? "active" : ""} href='/blogs'>Blogs</Link></li>
          <li><Link className={router.pathname == "/contact" ? "active" : ""} href='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp

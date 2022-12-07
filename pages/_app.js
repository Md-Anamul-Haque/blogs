import Link from 'next/link';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (<>
    <header>
      <nav className='mainnav'>
        <ul>
          <li className={router.pathname == "/" ? "active" : ""}><Link href='/'>Home</Link></li>
          <li className={router.pathname == "/about" ? "active" : ""}><Link href='/about'>About</Link></li>
          <li className={router.pathname == "/blogs" ? "active" : ""}><Link href='/blogs'>Blogs</Link></li>
          <li className={router.pathname == "/contact" ? "active" : ""}><Link href='/contact'>Contact</Link></li>
        </ul>
      </nav>
    </header>
    <Component {...pageProps} />
  </>
  )
}

export default MyApp

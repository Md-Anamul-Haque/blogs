import * as fs from 'fs';
import styles from '../../styles/blogpost.module.css';


const Slug = (props) => {

  const blog = props.blog;
  // const clindBrowserInGetData = () => {
  //   const router = useRouter()
  //   const { slug } = router.query;
  //   useEffect(() => {
  //     if (!router.isReady) return
  //     axios.get(`/api/getblog?slug=${slug}`)
  //       .then(res => {
  //         setBlog(res.data)
  //       })
  //       .catch(err => {
  //         alert(err.message)
  //       })

  //   }, [router.isReady])
  // }
  // clindBrowserInGetData()
  return (
    <div className={styles.main} >
      {blog &&
        <>
          <h2 className={styles.heading} >{blog.title}</h2>
          <p className={styles.title} >{blog.content}</p>
        </>
      }
    </div >
  )
}
// export async function getServerSideProps(context) {
//   const slug = context.params.slug;
//   const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
//   const blog = await res.json();
//   return {
//     props: { blog }, // will be passed to the page component as props
//   }

// }


export async function getStaticPaths() {
  return {
    paths: [{ params: { slug: 'how-to-learn-javascript' } },
    { params: { slug: 'how-to-learn-reactjs' } },
    { params: { slug: 'how-to-learn-nextjs' } },
    ],
    fallback: false, // can also be true or 'blocking'
  }
}

// `getStaticPaths` requires using `getStaticProps`
export async function getStaticProps(context) {
  const slug = context.params.slug;
  const blog = await fs.promises.readFile(`blogdata/${slug}.json`, 'utf-8')
  // const res = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`);
  // const blog = await res.json();
  console.log(blog)
  return {
    props: { blog: JSON.parse(blog) }, // will be passed to the page component as props
  }

}

export default Slug

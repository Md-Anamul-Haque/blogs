import * as fs from 'fs';
import Link from 'next/link';
import React from 'react';
import styles from '../styles/blogs.module.css';

const blogs = (props) => {
    console.log(props.blogs)
    const blogs = props.blogs;

    return (
        <div className={styles.container}>
            <main className={styles.main}>
                {blogs && blogs.map((blog, i) => {
                    return (
                        <div key={i} className={styles.blogsItems}>
                            <Link className={styles.blogsItemsLink}
                                href={`/blogpost/${blog.slug}`}>
                                <h3>{blog.title}</h3>
                            </Link>
                            <p>{blog.content.substr(0, 400)}</p>
                        </div>
                    )
                })}
            </main>
        </div>
    )
}
export async function getStaticProps(context) {
    // const res = await fetch('http://localhost:3000/api/blogs');
    // const blogs = await res.json();
    let allBlogs = []
    let files = await fs.promises.readdir('blogdata');
    for (let i = 0; i < files.length; i++) {
        let data = await fs.promises.readFile((`blogdata/${files[i]}`), 'utf-8');
        allBlogs.push(JSON.parse(data));
    }
    return {
        props: { blogs: allBlogs }, // will be passed to the page component as props
    }
}
export default blogs

import axios from 'axios';
import * as fs from 'fs';
import Link from 'next/link';
import React, { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from '../styles/blogs.module.css';

const Blogs = (props) => {
    const [count, setCount] = useState(1)
    const [blogs, setBlogs] = useState(props.blogs);

    const fetcheData = async () => {
        // a fake async api call like which sends
        const d = await axios.get(`/api/blogs/?count=${count}&&oldLength=${blogs.length}`);
        // 20 more records in 1.5 secs
        setCount(count + 1)
        setBlogs(d.data);
        // setTimeout(() => {
        //     this.setState({
        //         items: this.state.items.concat(Array.from({ length: 20 }))
        //     });
        // }, 1500);
        // alert(props.allCount !== count)

    };
    return (
        <div className={styles.container}>
            <main className={styles.main}>




                <InfiniteScroll
                    dataLength={blogs.length} //This is important field to render the next data
                    next={fetcheData}
                    hasMore={blogs.length == props.allCount ? false : props.allCount < blogs.length ? false : true}
                    loader={<h4>Loading...</h4>}
                    endMessage={
                        <p style={{ textAlign: 'center' }}>
                            <b>Yay! You have seen it all</b>
                        </p>
                    }
                // below props only if you need pull down functionality
                >
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
                </InfiniteScroll>




                {/* {blogs && blogs.map((blog, i) => {
                    return (
                        <div key={i} className={styles.blogsItems}>
                            <Link className={styles.blogsItemsLink}
                                href={`/blogpost/${blog.slug}`}>
                                <h3>{blog.title}</h3>
                            </Link>
                            <p>{blog.content.substr(0, 400)}</p>
                        </div>
                    )
                })} */}
            </main>
        </div>
    )
}
export async function getStaticProps(context) {
    // const res = await fetch('http://localhost:3000/api/blogs');
    // const blogs = await res.json();
    let allBlogs = []
    let files = await fs.promises.readdir('blogdata');
    const allCount = files.length;
    for (let i = 0; i < 2; i++) {
        let data = await fs.promises.readFile((`blogdata/${files[i]}`), 'utf-8');
        allBlogs.push(JSON.parse(data));
    }
    return {
        props: { blogs: allBlogs, allCount }, // will be passed to the page component as props
    }
}
export default Blogs

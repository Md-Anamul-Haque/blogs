// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import * as fs from 'fs';

export default async function handler(req, res) {
  let allBlogs = []
  let files = await fs.promises.readdir('blogdata');
  files = files.slice(0, req.query.count)
  for (let i = 0; i < files.length; i++) {
    let data = await fs.promises.readFile((`blogdata/${files[i]}`), 'utf-8');
    allBlogs.push(JSON.parse(data));
  }
  res.status(200).json(allBlogs)
}

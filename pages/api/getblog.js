// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// const fs = require('fs');
import * as fs from 'fs';
export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, 'utf-8', (err, data) => {
    if (err) {
      res.status(500).json({ error: 'No such blog found' })

    } else {
      console.log(data)
      res.status(200).json(JSON.parse(data))
    }

  });
}

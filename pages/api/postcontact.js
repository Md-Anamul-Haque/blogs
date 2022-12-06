import * as fs from 'fs';

export default async function handler(req, res) {
    try {
        if (req.method === 'POST') {
            // Process a POST request
            console.log(req.body)
            res.status(200).send('post contact');
            const files = await fs.promises.readdir('fsdata/contactdata/')
            await fs.promises.writeFile(`fsdata/contactdata/${files.length + 1}.json`, JSON.stringify(req.body))
        }
        else {
            // Handle any other HTTP method
            res.status(200).send('get contact')
        }
    } catch (error) {
        console.log(error)
    }
}
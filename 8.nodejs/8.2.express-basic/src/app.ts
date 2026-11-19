import express, { Request, Response } from "express";
const app = express();
const PORT = 3000;

app.use(express.json()); //parser body json
app.use(express.urlencoded()); //parser body urlendcoded

app.get('/', (req: Request, res: Response) => {
    // let a: number = 'An';
    return res.send(`<h1>Học lập trình không khó</h1>`)
});

app.get('/users', (req: Request, res: Response) => {
    // const headers = req.headers;
    // console.log(headers);
    // console.log(req.get('x-api-key'));
    console.log(req.query);

    //response
    // - res.json()
    // - res.status()
    // - res.send()
    // res.setHeader('abc', '123');
    res.set('abc', '123');
    return res.status(201).json({
        message: 'Get list users'
    });
});

app.get('/users/:id', (req: Request, res: Response) => {
    console.log(req.params);

    return res.json({});
});

app.post('/users', (req: Request, res: Response) => {
    console.log(req.body);
    return res.json({});
})

//app.{tenmethod}(pathname, callback(req, res) {})

app.listen(PORT, () => {
    console.log(`Server running: ${PORT}`);
})
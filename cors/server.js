import express from 'express';
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/api/jokes',(req,res)=>{
    const jokes = [
        {
            id:1,
            joke:"I am joke 1"
        },
        {
            id:2,
            joke:"I am joke 2"
        },
        {
            id:3,
            joke:"I am joke 3"
        },
        {
            id:4,
            joke:"I am joke 4"
        },
        {
            id:5,
            joke:"I am joke 5"
        },
    ]
    res.send(jokes);
})

app.listen(port, () => {
    console.log(`⚙️  Server listening on port ${port} : http://localhost:${port}`);
})
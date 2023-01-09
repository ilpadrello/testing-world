import app from './app';


const port = 9000;
app.listen(port, () => {
    console.log(`server is launched at port ${port}`);
})
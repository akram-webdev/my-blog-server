const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();

const port = process.env.PORT || 5000;

const app = express();

app.use(cors())
app.use(express.json())





 
const uri = `mongodb+srv://${process.env.MY_USER}:${process.env.MY_PASS}@cluster0.yx6bvjp.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
 

 
 

async function run(){
    try {
        await client.connect();
        const blogCollection = client.db('myBlog').collection('blog');
 

        app.get('/blog', async (req, res) =>{
            const query = {};
            const cursor = blogCollection.find(query);
            const blogs = await cursor.toArray()
            res.send(blogs)
         
        })

        
    }

    finally{

    }
}

run().catch(console.dir)






//middleware


app.get('/', (req,res) =>{
    res.send('my blog server is running')
});

app.listen(port, () =>{
    console.log('port is running');
})
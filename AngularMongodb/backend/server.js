
// // "mongodb+srv://sejalmac:sHRmmpHXwKjT7hLM@cluster0.h7joqyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const express = require('express')
const mongoose=require('mongoose')
const cors=require('cors')

const app=express()
app.use(cors())
app.use(express.json())

const { MongoClient } = require('mongodb');

const uri = "mongodb+srv://sejalmac:sHRmmpHXwKjT7hLM@cluster0.h7joqyc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const PORT=8080;
deletID={
    id:500
  }
//start listning to your server
app.listen(PORT,(res)=>{
    console.log(`server running on ${PORT}...`)
    
})



// fetching data from mongodb 

app.get('/data' , async(req,res)=>{
    const client =new MongoClient(uri)
    //res.setEncoding('utf8');
    console.log(client)
    try{
        await client.connect()
        console.log('connected to client')
        const database=client.db('Googleformclone')
        console.log('databasee ' , database)
        const users=database.collection('googleformclone')
        const returnedusers=await users.find().toArray()
        res.send(returnedusers)
    }finally{
await client.close()
    }
})
// fetch from different database
app.get('/items',async(req,res)=>{
    const client = new MongoClient(uri);
    try{
        await client.connect()
        const db=client.db('ecom')
        const ecomitem=db.collection('ecomitems')
        const itemData =await ecomitem.findOne({id:2})
        res.send(itemData)

    }finally{
await client.close()
    }

})
app.post('/add',async(req,res)=>{
    const client = new MongoClient(uri);
    try{
        await client.connect()
        const db=client.db('ecom')
        const ecomitem=db.collection('ecomitems')
        const itemData =await ecomitem.insertMany(req.body)
        res.send(itemData)

    }finally{
await client.close()
    }
})
app.delete('/delete',async(req,res)=>{
    const client = new MongoClient(uri);
    try{
        await client.connect()
        const db=client.db('ecom')
        const ecomitem=db.collection('ecomitems')
        const itemData =await ecomitem.deleteMany({
            price:
            695})
        res.send(itemData)

    }finally{
await client.close()
    }
})
app.put('/update',async(req,res)=>{
    const client = new MongoClient(uri);
    try{
        await client.connect()
        const db=client.db('ecom')
        const ecomitem=db.collection('ecomitems')
        const itemData =await ecomitem.updateMany({ name:'Akshay'},{$set:{age:31}}
           )
        res.send(itemData)

    }finally{
await client.close()
    }
})
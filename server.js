console.log('Good news everyone!')
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const MongoClient = require('mongodb').MongoClient
const DB_CONNECTION_STRING = require('dotenv').config()
const favePort = 3000



MongoClient.connect(process.env.DB_CONNECTION_STRING)
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('futurama-quotes')
    const quotesCollection = db.collection('quotes')
    app.set('view engine', 'ejs')
    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static('public'))
    app.use(bodyParser.json())

    app.get('/', (req, res)  => {
        quotesCollection.find().toArray() 
            .then(results => {
              res.render('index.ejs', {quotes: results})
              console.log(results)
            })
            .catch(error => console.errror(error))   
    })

    app.post('/quotes', (req, res) => {
        quotesCollection.insertOne(req.body)
            .then(result => {
              res.send()   
              console.log(result)
            })
            .catch(error => console.error(error))
    })

    app.put('/quotes', (req, res) => {
      quotesCollection.findOneAndUpdate(
        {name: 'Fry'},
        {
            $set: {
              name: req.body.name,
              quote: req.body.quote
            }
          },
          {
            upsert: true
          }
      )
      .then(result => {
        res.json('Success')
      })
      .catch(error => console.error(error))
    })

    app.delete('/quotes', (req, res) => {
        quotesCollection.deleteOne(
        {name: req.body.name }, //flexible variable instead of hardcoding Bender
        )
        .then(result => {
          if (result.deletedCount === 0) {
            return res.json('No quote to delete')
          }
          res.json('Deleted Bender quote')
        })
        .catch(error => console.error(error))
    })

    app.listen(process.env.PORT || favePort, function() {
        console.log(`Listening in on port ${favePort}`)
    })
  })
  .catch(error => console.error(error))









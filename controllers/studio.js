const express = require('express');
const router = express.Router();

const Studio = require('../models/studio.js');

// ROUTES

// Main Page
router.get('/', (req, res)=>{
  Studio.find({}, (error, allStudio)=>{
    res.render('index.ejs', {
      studio: allStudio
      })
  })
})


// index Instruments
router.get('/instruments', (req, res)=>{
  Studio.find({category: 'instrument'}, (error, allStudio)=>{
    res.render('instruments/index.ejs', {
      studio: allStudio
      })
  })
})
// Index effects
router.get('/effects', (req, res)=>{
  Studio.find({category: 'effects'}, (error, allStudio)=>{
    res.render('effects/index.ejs', {
      studio: allStudio
      })
  })
})

// Index software
router.get('/software', (req, res)=>{
  Studio.find({category: 'software'}, (error, allStudio)=>{
    res.render('software/index.ejs', {
      studio: allStudio
      })
  })
})

// Index accessories
router.get('/accessories', (req, res)=>{
  Studio.find({category: 'accessories'}, (error, allStudio)=>{
    res.render('accessories/index.ejs', {
      studio: allStudio
      })
  })
})

// new Instrument
router.get('/instruments/new', (req, res) => {
  res.render('instruments/new.ejs');
})

// new effects
router.get('/effects/new', (req, res) => {
  res.render('effects/new.ejs');
})

// new software
router.get('/software/new', (req, res) => {
  res.render('software/new.ejs');
})

// new accessories
router.get('/accessories/new', (req, res) => {
  res.render('accessories/new.ejs');
})

// post Instrument
router.post('/instruments', (req, res)=>{
  Studio.create(req.body, (error, createdStudio)=>{
    res.redirect('/studio/instruments');
  })
})

// post effects
router.post('/effects', (req, res)=>{
  Studio.create(req.body, (error, createdStudio)=>{
    res.redirect('/studio/effects');
  })
})

// post software
router.post('/software', (req, res)=>{
  Studio.create(req.body, (error, createdStudio)=>{
    res.redirect('/studio/software');
  })
})

// post accessories
router.post('/accessories', (req, res)=>{
  Studio.create(req.body, (error, createdStudio)=>{
    res.redirect('/studio/accessories');
  })
})

// edit instrument
router.get('/instruments/:id/edit', (req, res)=>{
  Studio.findById(req.params.id, (err, foundStudio)=>{ 
      res.render('instruments/edit.ejs', 
        { studio: foundStudio, 
      })
  })
})

// edit effects
router.get('/effects/:id/edit', (req, res)=>{
  Studio.findById(req.params.id, (err, foundStudio)=>{ 
      res.render('effects/edit.ejs', 
        { studio: foundStudio, 
      })
  })
})

// edit software
router.get('/software/:id/edit', (req, res)=>{
  Studio.findById(req.params.id, (err, foundStudio)=>{ 
      res.render('software/edit.ejs', 
        { studio: foundStudio, 
      })
  })
})

// edit accessories
router.get('/accessories/:id/edit', (req, res)=>{
  Studio.findById(req.params.id, (err, foundStudio)=>{ 
      res.render('accessories/edit.ejs', 
        { studio: foundStudio, 
      })
  })
})

// update instrument
router.put('/instruments/:id', (req, res)=>{
  Studio.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel)=> {
  
    res.redirect('/studio/instruments');
  })
})

// update effects
router.put('/effects/:id', (req, res)=>{
  Studio.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel)=> {
  
    res.redirect('/studio/effects');
  })
})

// update software
router.put('/software/:id', (req, res)=>{
  Studio.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel)=> {
  
    res.redirect('/studio/software');
  })
})

// update accessories
router.put('/accessories/:id', (req, res)=>{
  Studio.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedModel)=> {
  
    res.redirect('/studio/accessories');
  })
})

// show Instruments
router.get('/instruments/:id', (req, res) =>{
  Studio.findById(req.params.id, (err, foundStudio)=>{
    // console.log(err, foundStudio) for debug
    res.render('instruments/show.ejs', {
      studio: foundStudio,
    })
  })
})

// Show Effects
router.get('/effects/:id', (req, res) =>{
  Studio.findById(req.params.id, (err, foundStudio)=>{
    res.render('effects/show.ejs', {
      studio: foundStudio,
    })
  })
})

// Show software
router.get('/software/:id', (req, res) =>{
  Studio.findById(req.params.id, (err, foundStudio)=>{
    res.render('software/show.ejs', {
      studio: foundStudio,
    })
  })
})

// Show accessories
router.get('/accessories/:id', (req, res) =>{
  Studio.findById(req.params.id, (err, foundStudio)=>{
    res.render('accessories/show.ejs', {
      studio: foundStudio,
    })
  })
})

// delete instrument
router.delete('/instruments/:id', (req, res) => {
  Studio.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, data)=>{
    res.redirect('/studio/instruments') 
  })
})

// delete effects
router.delete('/effects/:id', (req, res) => {
  Studio.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, data)=>{
    res.redirect('/studio/effects') 
  })
})

// delete software
router.delete('/software/:id', (req, res) => {
  Studio.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, data)=>{
    res.redirect('/studio/software') 
  })
})

// delete accessories
router.delete('/accessories/:id', (req, res) => {
  Studio.findByIdAndRemove(req.params.id, { useFindAndModify: false }, (err, data)=>{
    res.redirect('/studio/accessories') 
  })
})



module.exports = router;
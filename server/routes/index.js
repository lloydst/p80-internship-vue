import { Router } from 'express'
import Website from '../models/website'
import Event from '../models/events'
const router = Router()
const website = Website
const event = Event

router.route('/websites') 
    // GET ALL WEBSITES
    .get(function(req, res) {
        website.find(function(err, websites) {
            if (err)
                res.send(err);
      
            res.json(websites);
        });
    })
    // CREATE NEW WEBSITE
    .post(function(req,res) {

    })
    router.route('/websites/:id')
    // FIND ONE WEBSITE AND UPDATE
    .put(function(req,res, body) {
        website.findByIdAndUpdate(id, body, function(err, res) {
            if (err)
                res.send(err);
      
            res.json(res);
        })
    })
    // FIND ONE WEBSITE AND DELETE
    .delete(function(req,res) {
        website.findByIdAndRemove(id, function(err, res){
            if (err)
                res.send(err);
      
            res.json(res);
        })
    })

  router.get('/events',function(req, res) {
    event.find(function(err, events) {
        if (err)
            res.send(err);
  
        res.json(events);
    });
  });
export default router

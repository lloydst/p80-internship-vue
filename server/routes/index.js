import { Router } from 'express'
import { Website } from '../models/Website'
import users from './users'

const router = Router()

router.get('/',function(req, res) {
    Website.find(function(err, websites) {
        if (err)
            res.send(err);
  
        res.json(websites);
    });
  });

export default router

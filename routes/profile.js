var express = require('express');
var back = require('express-back');
var profileRoute = express.Router();
const Score = require('../models/score');

profileRoute.get("/findmusic/:tag", (req, res, next) => {
    const tag = req.params.tag;
    Score.find({tag: tag}, (err, scores) => {
        if (err) { return next(err); }
        res.render('layouts/profile.ejs', {scores: scores, siteTag: tag});
    })
});

profileRoute.post('/deletemusic/:id/:tag', (req, res, next) => {
    const id = req.params.id;
    const tag = req.params.tag;
    const tagDel = req.body.tagDel;
    console.log(id, tagDel)
    Score.findById({_id: id}, (err, song) => {
        console.log(song)
        var tagArr = song.tag.filter(tag => tag != tagDel);
         console.log(tagArr)
        Score.findByIdAndUpdate(id, {tag: tagArr}, (err) => {
            if (err) {
                // res.json({message: 'user updated'})
            }
           return res.back();
        })
    })
})

profileRoute.post('/addtag/:id/:tag', (req, res, next) => {
    const id = req.params.id;
    const tag = req.params.tag;
    const name = req.body.name;
    console.log(tag)
        Score.findByIdAndUpdate({_id: id}, {$push: {tag: name}}, (err) => {
            if (err) {
                console.log(err);
                return;
            }

            res.back();
        })
})

module.exports = profileRoute;

const json  = require('express');
const express = require('express');
const router = express.Router();

//reservation Model
const Game = require('../models/Game')
//@router GET /games
//@Desc get all games
router.get('/',(req,res)=>{
    Game.find()
    .then(games=>res.json(games))
})
//@router POST /games
//@Desc add a game
router.post('/',(req,res)=>{
    const newGame = new Game({
        title: req.body.title,
        description:req.body.description,
        price:req.body.price,
    });
    newGame.save()
    .then(games=>res.json(games))
    
})
//@router DELETE /games
//@Desc delete a game
router.delete('/:id',(req,res)=>{
    Game.findById(req.params.id)
    .then(game=>game.remove()
    .then(()=>res.json("Successfully Deleted"))
    ).catch(err=>res.status(404).json("Failed to delete Game"))
})

//@router PUT /games
//@Desc update a game
router.put("/:id", (req, res) => {
    let { _id } = req.params;
    Game.findByIdAndUpdate({ _id }, { $set: { ...req.body } })
      .then(() => res.send("Game has been updated"))
      .catch((err) => res.send(err));
  });


  router.get('/:id', async(req, res) => {
    await Game.findOne({ _id: req.params.id }, (err, game) => {
        if (err) {
            return res.status(400).json({ success: false, error: err })
        }
        if (!game) {
            return res
                .status(404)
                .json({ success: false, error: `Game not found` })
        }
        return res.status(200).json({ success: true, data: game })
    }).catch(err => console.log(err))
});









module.exports=router;
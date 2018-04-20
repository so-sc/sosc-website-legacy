var express = require('express');
var router = express.Router();

let oldEvents = {
            'events' : [{ 
                            'name' : 'Python Bootcamp Day1',
                            'date' : '21/03/2018'},
                        {
                            'name' : 'Rustathon 2k18',
                            'date' : '10/02/2018'
                        },
                        {
                            'name' : 'Git and Github Workshop',
                            'date' : '18/01/2018'
                        }]
        };

let newEvents = {
        'events' : [
            {
                'name' : 'Python BootCamp Day2',
                'date' : '21/04/2018'
            },
            {
                'name' : 'Node.js Workshop',
                'date' : 'Announcing soon'
            },
            {
                'name' : 'Android Workshop',
                'date' : 'Announcing soon'
            }
        ]
};

/* GET users listing. */
router.get('/', function(req, res, next) {

    if(req.query.type){
        if(req.query.type === 'new'){
            res.status(200).json(newEvents);
        }else if (req.query.type === 'old'){
            res.status(200).json(oldEvents);
        }else{
            res.status(400).send('Not found!')
        }
    }
    else 
        res.status(400).send('Not found');
});

module.exports = router;

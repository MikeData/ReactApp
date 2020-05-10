'use strict'

var controller = {
    
    test: (req, res) => {
        return res.status(200).send({
            message: 'Test Action'
        });
    }



}; // END CONTROLLER

module.exports = controller;

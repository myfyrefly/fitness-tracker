const path = require('path');
const router = require('express').Router();

module.exports = function(app) {
    router.get('/exercise', (req, res) => {
        res.sendFile(path.join(process.cwd() + '/public/exercise.html'));
    });
    router.get('/stats', (req, res) => {
        res.sendFile(path.join(process.cwd() + '/public/stats.html'));
    });
};
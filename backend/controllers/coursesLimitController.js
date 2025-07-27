const db = require('../models/db');
exports.selectCourse = (req,res)=>{
    db.query("SELECT * FROM cursos LIMIT=3",(err,result)=>{
        if(err){
            return res.sendStatus(500).json(err);
        }
        res.json(result.rows);
    });
};
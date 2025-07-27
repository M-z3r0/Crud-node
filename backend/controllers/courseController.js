const db = require('../models/db');
exports.insertCourse = (req,res)=>{
    const {nomeICP,duracaoICP,descICP,imagemICP} = req.body;
    db.query("INSERT INTO cursos(curso_name,curso_duracao,curso_desc,curso_foto) VALUES($1,$2,$3,$4) RETURNING id",[nomeICP,duracaoICP,descICP,imagemICP],(err,result)=>{
        if(err){
            return res.status(500).json(err);
        }
        res.sendStatus(201).json({id:result.rows[0].id,nomeICP,duracaoICP,descICP,imagemICP});
    });
};
exports.selectCourse = (req,res)=>{
    db.query("SELECT * FROM cursos",(err,result)=>{
        if(err){
            return res.sendStatus(500).json(err);
        }
        res.json(result.rows);
    });
};
exports.deleteCourse = (req,res)=>{
    const {id} = res.params;
    db.query('DELETE FROM cursos WHERE id = $1',[id],(err,result)=>{
        if(err) return res.status(500).json(err);
        res.status(200).json({message: 'Curso removido com sucesso'});
    })
};
exports.updateCourse = (req,res)=>{};
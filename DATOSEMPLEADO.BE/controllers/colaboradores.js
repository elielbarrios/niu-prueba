const { response } = require('express');
const conn = require('../database/config');

const getColaboradores = async(req, res = response )=> {
    let query = "SELECT *FROM colaborador";

    conn.query(query , (err, rows) =>{
        if(err){
            res.status(500).json({
                ok: false,
                msg: "Hubo un error que no pudo controlarse"
            })
        }
        res.status(200).json({
            ok: true,
            msg: "Peticion correcta",
            data: rows
        })
    })

}

module.exports = {
    getColaboradores
}
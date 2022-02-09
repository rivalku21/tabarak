const controller_object = {};
const connection = require("../config/config");
const response = require("../utils/response");
const uuid = require('uuid');

controller_object.getAllData = async(req,res,next) => {
    try {
        connection.query(`SELECT id, event_name, event_place FROM tbl_event`, (err, result) => {
            response.responseSuccess(res, result);
        })
    } catch (error) {
        response.responseFailed(res, error);
    }
};

controller_object.searchDataById = async(req, res, next) => {
    const id = req.params.id;
    try {
        connection.query(`SELECT event_name, event_place, created_at FROM tbl_event WHERE id = "${id}"`, (err, result) => {
            response.responseSuccess(res, result);
        })
    } catch (error) {
        response.responseFailed(res, error);
    }
}

controller_object.saveData = async(req, res, next) => {
    const {eventName, eventPlace} = req.body;
    try {
        connection.query(`INSERT INTO tbl_event (id, event_name, event_place, created_at) VALUES ("${uuid.v4()}", "${eventName}", "${eventPlace}", NOW())`, (err, result) => {
            if(err) throw err;
            else {
                res.status(201).json({
                    statusCode: 201,
                    status: "sukses"
                });
            }
        })
    } catch (error) {
        response.responseFailed(res, error);
    }
}

module.exports = controller_object;
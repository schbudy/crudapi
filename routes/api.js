import {
    getDivision,
    getDivisionWithID,
    postDivision,
    putDivision,
    deleteDivision
} from '../controllers/DivisionController'
import {
    getPosition,
    getPositionWithID,
    postPosition,
    putPosition,
    deletePosition
} from '../controllers/PositionController'
import {
    getEmployee,
    getEmployeeWithID,
    postEmployee,
    putEmployee,
    deleteEmployee
} from '../controllers/EmployeeController'



const routes = (app) => {
    // Division routes
    app.route('/division')
        .get((req,res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getDivision)
        
        .post(postDivision);

    app.route('/division/:id')
        .get(getDivisionWithID)

        .put(putDivision)

        .delete(deleteDivision);

    // Position Routes
    app.route('/position')
        .get((req,res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getPosition)
        
        .post(postPosition);

    app.route('/position/:id')
        .get(getPositionWithID)

        .put(putPosition)

        .delete(deletePosition);

    // Employee Routes
    app.route('/employee')
        .get((req,res, next) => {
            console.log(`Request from: ${req.originalUrl}`)
            console.log(`Request type: ${req.method}`)
            next();
        }, getEmployee)
        
        .post(postEmployee);

    app.route('/employee/:id')
        .get(getEmployeeWithID)

        .put(putEmployee)

        .delete(deleteEmployee);
}

export default routes;

import models from '../models';

const Employee = models.Employee;
const Division = models.Division;
const Position = models.Position;

export const getEmployee = (req, res) => {
    Employee.findAll({
        include: [
            { model: Division},
            { model: Position}
        ]
    }).then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

export const getEmployeeWithID = (req, res) => {
    const id = req.params.id;
    Employee.findByPk(id, {
        include: [
            { model: Division},
            { model: Position}
        ]
    }).then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

export const postEmployee = (req, res) => {
    Employee.create(req.body).then(result => {
        res.json(result);
    })
    .catch(err => {
        res.json(err);
    })
}

export const putEmployee = (req, res) => {
    const {id} = req.params;

    Employee.update(req.body, {
        where: {
            "id": id
        }
    }).then(result => {
        if(!result) {
            res.status(500).json("update failed");
        }
        Employee.findOne({where: {id: id}})
        .then(result => {
            res.json(result);
        })
        .catch(err => res.json(err));
    })
    .catch(err => {
        res.json(err);
    })
}

export const deleteEmployee = (req, res) => {
    const id = req.params.id;
    Employee.destroy({ where: {id: id}}).then(result => {
        res.json({ message: 'successfuly deleted'});
    })
    .catch(err => {
        res.json(err);
    })
}

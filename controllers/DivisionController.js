import models from '../models';

const Division = models.Division;

export const getDivision = (req, res) => {
    Division.findAll().then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

export const getDivisionWithID = (req, res) => {
    const id = req.params.id;
    Division.findByPk(id).then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

export const postDivision = (req, res) => {
    Division.create(req.body).then(result => {
        res.json(result);
    })
    .catch(err => {
        res.json(err);
    })
}

export const putDivision = (req, res) => {
    const {id} = req.params;

    Division.update(req.body, {
        where: {
            "id": id
        }
    }).then(result => {
        if(!result) {
            res.status(500).json("update failed");
        }
        Division.findOne({where: {id: id}})
        .then(result => {
            res.json(result);
        })
        .catch(err => res.json(err));
    })
    .catch(err => {
        res.json(err);
    })
}

export const deleteDivision = (req, res) => {
    const id = req.params.id;
    Division.destroy({ where: {id: id}}).then(result => {
        res.json({ message: 'successfuly deleted'});
    })
    .catch(err => {
        res.json(err);
    })
}

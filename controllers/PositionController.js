import models from '../models';

const Position = models.Position;

export const getPosition = (req, res) => {
    Position.findAll().then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

export const getPositionWithID = (req, res) => {
    const id = req.params.id;
    Position.findByPk(id).then(result => {
        res.json(result);
    })
    .catch(err => {
        res.status(500).json(err);
    })
}

export const postPosition = (req, res) => {
    Position.create(req.body).then(result => {
        res.json(result);
    })
    .catch(err => {
        res.json(err);
    })
}

export const putPosition = (req, res) => {
    const {id} = req.params;

    Position.update(req.body, {
        where: {
            "id": id
        }
    }).then(result => {
        if(!result) {
            res.status(500).json("update failed");
        }
        Position.findOne({where: {id: id}})
        .then(result => {
            res.json(result);
        })
        .catch(err => res.json(err));
    })
    .catch(err => {
        res.json(err);
    })
}

export const deletePosition = (req, res) => {
    const id = req.params.id;
    Position.destroy({ where: {id: id}}).then(result => {
        res.json({ message: 'successfuly deleted'});
    })
    .catch(err => {
        res.json(err);
    })
}

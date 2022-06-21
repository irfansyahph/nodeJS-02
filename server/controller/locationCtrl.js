import { sequelize } from "../models/init-models"

const findAll = async (req, res) => {
    try {
        const location = await req.context.models.locations.findAll({
            include: [{
                // all: true
                model: req.context.models.departments,
                as: "departments",
                right: true
            }]
        })
        return res.send(location)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const findOne = async (req, res) => {
    try {
        const location = await req.context.models.locations.findOne({
            where: { location_id: req.params.id }
        })
        return res.send(location)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const create = async (req, res) => {
    const cekCount = req.countries
    try {
        const location = await req.context.models.locations.create({
            location_id: req.body.location_id,
            street_address: req.body.street_address,
            postal_code: req.body.postal_code,
            city: req.body.city,
            state_province: req.body.state_province,
            country_id: cekCount.country_id
        })
        return res.send(location)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const createNext = async (req, res, next) => {
    try {
        const location = await req.context.models.locations.create({
            location_id: req.body.location_id,
            street_address: req.body.street_address,
            postal_code: req.body.postal_code,
            city: req.body.city,
            state_province: req.body.state_province,
            country_id: req.body.country_id
        })
        req.locations = location
        next()
    } catch (error) {
        return res.status(404).send(error)
    }
}

const update = async (req, res) => {
    try {
        const location = await req.context.models.locations.update({
            location_id: req.body.location_id,
            street_address: req.body.street_address,
            postal_code: req.body.postal_code,
            city: req.body.city,
            state_province: req.body.state_province,
            country_id: req.body.country_id
        }, { returning: true, where: { location_id: req.params.id } })
        return res.send(location)
    } catch (error) {
        return res.status(404).send(error)
    }
}

const deleted = async (req, res) => {
    try {
        const location = await req.context.models.locations.destroy({
            where: { location_id: req.params.id }
        })
        return res.send('delete ' + location + ' rows')
    } catch (error) {
        return res.status(404).send(error)
    }
}

const querySQL = async (req, res) => {
    try {
        // await sequelize.query('SELECT * from countries where region_id = :regionId',
        // await sequelize.query('insert into countries (country_id, country_name, region_id) values (:country_id, :country_name, :region_id)',
        await sequelize.query('update locations set street_address = :street_address,  postal_code = :postal_code, city = :city, state_province = :state_province, country_id = :country_id where location_id  = :locationID)',
            { replacements: { street_address: req.body.street_address, postal_code: req.body.postal_code, city: req.body.city, state_province: req.body.state_province, country_id: req.body.country_id, locationID: req.params.id }, type: sequelize.QueryTypes.UPDATE })
            .then(result => {
                return res.send(result)
            })
    } catch (error) {
        return res.status(404).send(error)
    }
}

export default {
    findAll,
    findOne,
    create,
    createNext,
    update,
    deleted,
    querySQL
}
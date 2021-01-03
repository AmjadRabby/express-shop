const shopService = require('../services/shop.service');

module.exports.create = async (req, res, next) => {
    try {
        console.log(req.body)
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

module.exports.getAll = async (req, res, next) => {
    try{
        const getAllShopData = await shopService.getAll(res.body)
        return res.status(200).json(getAllShopData)
    } catch (e) {
        console.log(e)
        return res.status(500).json({'message':'something went wrong in getAllData'})
    }
}

module.exports.getById = async (req, res, next) => {
    try{
        const getShopDataById = await shopService.getById(req.params.id)
        return res.status(200).json(getShopDataById)
    } catch (e) {
        console.log(e)
        return res.status(500).json({'message':'something went wrong'})
    }
}

module.exports.deleteById = async (req, res, next) => {
    try{
        const deleteData = await shopService.deleteById(req.params.id)
        return res.status(200).json(deleteData)
    } catch (e) {
        return res.status(500).json({'message':'something went wrong'})
    }
}

module.exports.updateById = async (req, res, next) => {
    try{
        const updatedData = await shopService.updateById(req.params.id)
        return res.status(200).json(updatedData)
    } catch (e) {
        return res.status(500).json({'message':'something went wrong'})
    }
}
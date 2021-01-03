const {Shop} = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop);
}

module.exports.getAll = () => {
    return Shop.find({})
}
module.exports.getById = id =>{
    return Shop.findById(id)
}
module.exports.deleteById = id =>{
    return Shop.deleteOne({_id:id})
}

module.exports.updateById = id =>{
    return Shop.updateOne({name:'television'},{name:'tv'})
}
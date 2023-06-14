class Collection {
    constructor(model) {
        this.model = model;
    }
    async add(obj) {
        try {let newRecord = await this.model.create(obj);
            return newRecord;
            
        } catch (error) {
            console.log(error);
        }
    }
    async read(data_id) {
        let records = null;
        if (data_id) {
            records = await this.model.findOne({ where: { id: data_id } });

        } else {
            records = await this.model.findAll();
        }
        return records;
    }
    async update(obj, data_id) {
        try {
            let foundCustomer = await this.model.findOne({ where: { id: data_id } });
        let updatedCustomer = await foundCustomer.update(obj);
        return updatedCustomer;
            
        } catch (error) {
            console.log(error);

        }
    }
    async delete(data_id) {
        let record = await this.model.destroy({ where: { id: data_id } });
        return record;
    }
    async readCookersFood(id, model) {
        let record = await this.model.findOne({
            where: { id },
            include: model,
        });
        return record;
    }

}

module.exports = Collection;
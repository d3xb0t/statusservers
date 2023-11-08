export class MongooseDriver {
    constructor(model) {
        this.model = model
    }
    
    create(body) {
        return this.model.create(body)
    }
    find() {
        return this.model.find()
    }
    delete(id) {
        return this.model.deleteOne({_id: id})
    }
}
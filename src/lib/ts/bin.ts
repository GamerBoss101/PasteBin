import mongoose from "mongoose";

const reqString = {
    type: String,
    required: true,
}

const binSchema = new mongoose.Schema({
    _id:  reqString,
    Id: reqString,
    name: reqString,
    email: reqString,
    content: reqString,
    date: Date
});

export default class Bin {
    model: mongoose.Model<any>;
    upsert: any;
    constructor() {
        this.model = mongoose.model('bins', binSchema);
        this.upsert = { upsert: true };
    }
    makeId(length: number) {
        var result = [];
        var characters = 'abcdefghijklmnopqrstuvwxyz012345678901234567890123456789';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result.push(characters.charAt(Math.floor(Math.random() * charactersLength)));
        }
        return result.join('');
    }
    async create(title: string, email: string, content: string) {
        const newProject = await this.model.create({
            Id: this.makeId(10),
            title: title,
            email: email,
            content: content,
            date: new Date()
        });

        newProject.save();
        return newProject;
    }

    async get(data: any) {
        if (data) return await this.model.find(data);
        return await this.model.find();
    }

    async getById(Id: string) {
        return await this.model.findOne({ Id });
    }

    async update(Id: string, data: any) {
        return await this.model.findOneAndUpdate(
            { Id },
            data,
            this.upsert,
        );
    }
}
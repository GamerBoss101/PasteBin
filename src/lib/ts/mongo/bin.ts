import mongoose from 'mongoose';
import db from '$lib/ts/mongo/db';

db();

const reqString = {
    type: String,
    required: true,
}

const binSchema = new mongoose.Schema({
    _id:  reqString,
    name: reqString,
    language: reqString,
    content: reqString,
    date: Date
});

type BinSchema = {
    _id: string,
    name: string,
    language: string,
    content: string,
    date: Date
}

class Bin {
    model: any;
    upsert: { upsert: boolean; };
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
    async create(name: string, language: string, content: string, date: Date): Promise<BinSchema> {
        let Id = this.makeId(5);
        const newUser = await this.model.findByIdAndUpdate(
            { _id: Id },
            { _id: Id, name, language, content, date: date },
            this.upsert,
        );
        return newUser;
    }
    async get(Id: string): Promise<BinSchema[] | BinSchema> {
        if(!Id) return await this.model.find();
        return await this.model.findById(Id);
    }

    async update(Id: string, name: string, content: string, date: Date): Promise<BinSchema> {
        return await this.model.findByIdAndUpdate(
            { _id: Id },
            { _id: Id, name, content, date: date },
            this.upsert,
        );
    }

    async delete(Id: string): Promise<BinSchema> {
        return await this.model.findByIdAndDelete(Id);
    }
}

export default new Bin();
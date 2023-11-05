import mongoose from 'mongoose';
import db from '$lib/ts/mongo/db';

db();

const reqString = {
    type: String,
    required: true,
}

const imageSchema = new mongoose.Schema({
    _id:  reqString,
    name: reqString,
    type: reqString,
    size: Number,
    date: Date
});

type ImageSchema = {
    _id: string;
    name: string;
    type: string;
    size: number;
    date: Date;
}

class Image {
    model: any;
    upsert: { upsert: boolean; };
    constructor() {
        this.model = mongoose.model('images', imageSchema);
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
    async create(Id: string, type: string, size: number): Promise<ImageSchema> {
        await this.model.findByIdAndUpdate(
            { _id: Id },
            { _id: Id, type, size, date: new Date() },
            this.upsert,
        );
        return await this.model.findById(Id);
    }
    async get(Id: string): Promise<ImageSchema> {
        return await this.model.findOne({ _id: Id });
    }

    async delete(Id: string): Promise<ImageSchema> {
        return await this.model.findByIdAndDelete(Id);
    }
}

export default new Image();
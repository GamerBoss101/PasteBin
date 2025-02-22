import { MONGODB_URI } from "$env/static/private"
import mongoose from "mongoose";

import Bin from "./bin";

class DB {
    bins: Bin;
    constructor() {
        this.bins = new Bin();
        this.connect();
    }

    connect() {
        mongoose.set('strictQuery', true);
        mongoose.connect(MONGODB_URI).then(() => { console.log("Connected to DataBase") });
    }  

    async getBins(data: any) {
        return await this.bins.get(data);
    }

    async getBinById(Id: string) {
        return await this.bins.getById(Id);
    }

    async createBin(title: string, email: string, content: string) {
        return await this.bins.create(title, email, content);
    }

    async updateBin(Id: string, title: string, content: string) {
        return await this.bins.update(Id, { title, content });
    }

}

export const db = new DB();
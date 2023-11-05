import bcrypt from 'bcrypt';

const saltRounds = 10;

export const encoderChan = {
    hash: function(input: string) {
        return bcrypt.hashSync(input, saltRounds);
    },
    dehash: function(input: string, password: string) {
        return bcrypt.compareSync(input, password);
    },
    encode: function(input: string | null) {
        return Buffer.from(input || "").toString('base64');
    },
    decode: function(input: string) {
        return Buffer.from(input, 'base64').toString('ascii');
    }
};
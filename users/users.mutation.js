import bcrpyt from "bcrpyt"
import client from "../client";

export default  {
    Mutation: {
    createAccount : async (_, {username,email, password }) => {
        const existingUser = await client.user.findFirst({
            where: {
                OR: [
                    {username}, {email}
                ]
            }
        })
        const pw = await bcrpyt.hash(password, 10);
        return client.user.create({
            data: {
                username,
                email,
                password: pw
            }
        })
    },

}}
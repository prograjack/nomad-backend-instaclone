require('dotenv').config()
import schema from "./schema.js";
import { ApolloServer } from "apollo-server";

const server = new ApolloServer({
    schema,
})

const PORT = process.env.PORT;

server.listen(PORT).then(()=> console.log(`Server is running apollo-server on http://localhost:${PORT}`))
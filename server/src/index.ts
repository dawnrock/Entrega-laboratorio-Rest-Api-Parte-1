import 'regenerator-runtime/runtime';
import express from 'express';
import path from 'path';
import {ApolloServer, gql} from 'apollo-server-express';
import { characterApi, locationApi } from './api';
import { typeDefs, resolvers } from './graphql';

const PORT = 3000;
const app = express();
app.use(express.json());

const publicPath = path.resolve(__dirname, './public');
app.use(express.static(publicPath));
app.use('/api/characters', characterApi);
app.use('/api/charactersLocation', locationApi);


const graphqlServer = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
});
graphqlServer.applyMiddleware({ app });

// graphqlServer = './graphql'

app.listen(PORT, () => {
  console.log(`Server running http://localhost:${PORT}`);
  console.log(`GraphQL server at http://localhost:${PORT}${graphqlServer.graphqlPath}`)
});

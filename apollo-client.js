import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://the12thman.in/graphql',
  cache: new InMemoryCache(),
  rejectUnauthorized: false,
});

export default client;

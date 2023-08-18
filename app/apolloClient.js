import { ApolloClient, InMemoryCache, ApolloProvider, useQuery  } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/cllgdnzi602jh01t4b1vu6ydy/master', // Replace with your GraphQL endpoint
    cache: new InMemoryCache(),
   });

export default client
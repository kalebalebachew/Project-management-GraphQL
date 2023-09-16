<script>
 import { query, onMount } from 'svelte-apollo';
    import { gql } from 'graphql-tag';
    import { ApolloClient } from 'apollo-client';
    import { InMemoryCache } from 'apollo-cache-inmemory';
    import { HttpLink } from 'apollo-link-http';
  
    
    const client = new ApolloClient({
      link: new HttpLink({ uri: 'http://localhost:3000/graphql' }), 
      cache: new InMemoryCache(),
    });
  
     const GET_CLIENTS = gql`
         query{
           clients{
                 name
                 email
                 phone
    }
}
`

const { data: clients } = query(GET_CLIENTS, {}, client);



</script>
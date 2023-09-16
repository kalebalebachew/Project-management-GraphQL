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
  
   
    const GET_PROJECTS = gql`
      query {
        projects {
          name
          description
          status
        }
      }
    `;
  
    const { data: projects } = query(GET_PROJECTS, {}, client);
</script>
  
<h1>Projects</h1>
<ul>
    {#if $projects}
    {#each $projects.projects as project}
        <li>{project.name}</li>
    {/each}
    {:else}
        <p>Loading...</p>
    {/if}
</ul>

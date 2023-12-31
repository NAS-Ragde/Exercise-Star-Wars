import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {ApolloClient, ApolloProvider, createHttpLink, InMemoryCache} from '@apollo/client';
import App from "./App";

const httpLink = createHttpLink({
    uri: 'http://localhost:4000'
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache()
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ApolloProvider client={client}>
        <App/>
    </ApolloProvider>
);



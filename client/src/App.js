import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, InMemoryCache, ApolloProvider, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { Container } from 'semantic-ui-react';

import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Footer from './components/Footer/Footer';
const httpLink = createHttpLink({
   uri: 'http://localhost:3001/graphql',
});

const authLink = setContext((_, { headers }) => {
   // get the authentication token from local storage if it exists
   const token = localStorage.getItem('id_token');
   // return the headers to the context so httpLink can read them
   return {
      headers: {
         ...headers,
         authorization: token ? `Bearer ${token}` : '',
      },
   };
});

const client = new ApolloClient({
   link: authLink.concat(httpLink),
   cache: new InMemoryCache(),
});

function App() {
   return (
      <ApolloProvider client={client}>
         <Router>
            <Container>
               <Navbar />
               <Route exact path="/" component={Home} />
               <Route exact path="/login" component={Login} />
               <Route exact path="/register" component={Register} />
            </Container>
            <Footer />
         </Router>
      </ApolloProvider>
   );
}

export default App;

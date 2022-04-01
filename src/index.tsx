import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createServer, Model } from 'miragejs';
import { QueryClientProvider } from "react-query";
import { queryClient } from './commom/query-client';

createServer({
  models:{
    posts: Model
  },
  seeds(server){
    server.db.loadData({
      posts:[
        {
          id: 1,
          author: 'Nome do autor',
          curso: 'curso do autor',
          msg: 'Texto da msg'
        }
      ]
    })
  },

  routes(){
    this.namespace = 'api'

    this.get('/posts', (schema, request)=> {
      return this.schema.all('posts')
    })

    this.post('/posts', (schema, request)=> {
      const data = JSON.parse(request.requestBody);
    
      return schema.create('posts', 
      {
      id: '2',
      author: 'Nome do autor',
      curso: 'curso do autor',
      msg: 'Texto da msg'
      });
    })
  }
})
 
ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


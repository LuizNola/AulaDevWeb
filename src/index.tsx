import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { createServer, Model, Response } from 'miragejs';
import { QueryClientProvider } from "react-query";
import { queryClient } from './commom/query-client';
import { RegisterUser, User, UserLogin } from './commom/types/user_types';
import { AuthProvider } from './context/authContext';

createServer({
  models:{
    posts: Model,
    users: Model
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
      ],
      users: [
        {
          id: 1,
          name: 'Luiz Nola',
          curso: 'Sistemas de informação',
          user: 'luizn647@gmail.com',
          password: '123'
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

      return schema.create('posts', data);
    })

    this.post('/login', (schema, request) => {
      const data: UserLogin = JSON.parse(request.requestBody)
      if(!data.user || !data.password){
        return new Response(
          400,
          {},
          {error: 'Algum dos campos esta em branco'}
        )
      }
      const existedUser: User = this.db.users.findBy({user: data.user, password: data.password})
      
      if(!existedUser){
        return new Response(
          405,
          {},
          {error: 'Usuario não encontrado'}
        )
      }
      return new Response 
      (200, 
      {},
      {
      token: 'me da um 10 babau', 
      curso: existedUser.curso,
      name: existedUser.name,
      id: existedUser.id
    })
    })

    this.post('/register', (schema, request) => {
      const data: RegisterUser = JSON.parse(request.requestBody);
      if(!data.curso || !data.name || !data.password || !data.user){
        return new Response(
          400,
          {},
          {error: 'Erro ao cadastrar'}
        )
      }

      const existedUser = this.db.users.findBy({user: data.user})
      if(existedUser){
        return new Response(
          400,
          {},
          {error: 'O usuario ja existe'}
        )
      }

      

      return schema.create('users', {...data, id: 1} as any);
    })
  }
})
 
ReactDOM.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
  document.getElementById('root')
);


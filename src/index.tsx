import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model,
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create('transaction', data);
    });
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de Website',
          value: 21000,
          category: 'Desenvolvimento',
          date: new Date('2021-02-12 09:00:00'),
          type: 'deposit',
        },
        {
          id: 2,
          title: 'Aluguel',
          value: 1100,
          category: 'Casa',
          date: new Date('2021-02-15 19:00:00'),
          type: 'withdraw',
        },
      ],
    });
  },
});
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

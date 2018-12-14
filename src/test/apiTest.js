const request = require('supertest');
const express = require('express');
const app = express();
const jsonfile = require('jsonfile');
const { expect } = require('chai');

const urlBase = 'http://localhost:3000';
const idNode = '950a90a2-1c57-471b-b9d4-5c47fa01bc9b';
const file = 'src/test/grafo.json';
const data = jsonfile.readFileSync(file);


describe('Route /bfs', async () => {

  it('respond with 200', function (done) {
    request(urlBase)
      .post('/bfs')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err) => {
          if (err) return done(err);
          done();
      });
  });

  it('it should respond with 200 and array not empty', function (done) {
    request(urlBase)
      .post('/bfs')
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.data).to.be.an('array').to.not.be.empty;
        if (err) return done(err);
        done();
      });
  });

});

describe('Route /search-node', async () => {
  it('it should respond with 200 and return an object', function (done) {
    request(urlBase)
      .post('/delete-node',{idNode})
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.data);
        if (err) return done(err);
        done();
      });
  });
});

describe('Route /delete-node', async () => {
  it('it should respond with 200 and return true delete node', function (done) {
    request(urlBase)
      .post('/delete-node',{idNode})
      .send(data)
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end((err, res) => {
        expect(res.body.data).to.be.true;
        if (err) return done(err);
        done();
      });
  });
});

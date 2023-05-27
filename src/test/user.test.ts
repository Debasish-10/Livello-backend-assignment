import chai from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();
const expect = chai.expect;

describe('User API Test', () => {
  it('should create a new user', (done) => {
    chai
      .request(app)
      .post(`/users`)
      .send({
        name: 'New User',
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('name').to.equal('New User');
        done();
      });
  });

  it('should get all user details', (done) => {
    chai
      .request(app)
      .get(`/users`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should retrieve a user by ID', (done) => {
    const userId = '64711f3750465c46503787b9';
    chai
      .request(app)
      .get(`/users/${userId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should update a user', (done) => {
    const userId = '6471afcc03c7a65f74ae4df8';
    chai
      .request(app)
      .put(`/users/${userId}`)
      .send({
        name: 'Updated Name',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body)
          .to.have.property('message')
          .to.equal('User updated successfully');
        done();
      });
  });

  it('should delete a user', (done) => {
    const userId = '6471afcc03c7a65f74ae4df9'; //Invalid user ID
    chai
      .request(app)
      .delete(`/users/${userId}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

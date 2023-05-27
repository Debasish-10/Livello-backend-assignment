import chai from 'chai';
import { describe, it } from 'mocha';
import chaiHttp from 'chai-http';
import app from '../app';

chai.use(chaiHttp);
chai.should();
const expect = chai.expect;

describe('Hobby API Test', () => {
  it('should create a new hobby', (done) => {
    chai
      .request(app)
      .post(`/hobbies`)
      .send({
        name: 'Hockey',
        year: '2000',
        passionLevel: 'High',
      })
      .end((err, res) => {
        expect(res).to.have.status(201);
        expect(res.body).to.have.property('name').to.equal('Hockey');
        done();
      });
  });

  it('should get all hobbies details', (done) => {
    chai
      .request(app)
      .get(`/hobbies`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should retrieve a hobby by ID', (done) => {
    const hobbyId = '64711dea50465c46503787b1';
    chai
      .request(app)
      .get(`/hobbies/${hobbyId}`)
      .end((err, res) => {
        expect(res).to.have.status(200);
        done();
      });
  });

  it('should update a hobby', (done) => {
    const hobbyId = '64711dea50465c46503787b1';
    chai
      .request(app)
      .put(`/hobbies/${hobbyId}`)
      .send({
        name: 'Update hobby name',
        year: '2010',
        passionLevel: 'Extreme',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body)
          .to.have.property('message')
          .to.equal('Hobby updated successfully');
        done();
      });
  });

  it('should delete a hobby', (done) => {
    const hobbyId = '64711dea50465c46503787b5'; //Invalid hobby ID
    chai
      .request(app)
      .delete(`/hobbies/${hobbyId}`)
      .end((err, res) => {
        expect(res).to.have.status(404);
        done();
      });
  });
});

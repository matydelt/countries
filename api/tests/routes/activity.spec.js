/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { TouristActivity, conn } = require('../../src/db.js');

const agent = session(app);
const activity = {
  name: 'rafting',
  difficulty: "3",
  duration: "2 semanas",
  station: "Verano",
  countryId: "ARG"
};

describe('Activity route', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  beforeEach(() => TouristActivity.sync({ force: false })
    .then(() => TouristActivity.create(activity)));
  describe('POST /activity', () => {
    it('should get 200', () =>
      agent.get('/activity').expect(200)
    );
  });
});

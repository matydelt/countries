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
const activityFake = {
  name: "fake activity",
  difficulty: "3"
};
describe('POST /activity', function () {
  it('responde con 302', function () {
    return agent.post('/activity')
      .send(activity)
      .expect(302);
  });
  it('crea una actividad en la base de datos', function () {
    return agent.post('/activity')
      .send(activity)
      .then(() => {
        return TouristActivity.findOne({
          where: {
            name: 'rafting'
          }
        });
      })
      .then((act) => {
        expect(act).to.exist;
      });
  });
  it('no crea la actividad si no se pasan bien los datos', function () {
    return agent.post('/activity')
      .send(activityFake)
      .then(() => {
        return TouristActivity.findOne({
          where: {
            name: 'fake activity'
          }
        });
      })
      .then(() => {
        expect(500);
      });
  });
});


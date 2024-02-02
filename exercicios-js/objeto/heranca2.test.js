const { expect } = require('chai');
const Car = require('./heranca2');

describe('Car', () => {
  it('should return the current speed and maximum speed', () => {
    const car = new Car(100, 200);
    const result = car.status();
    expect(result).to.equal('100Km/h de 200Km/h');
  });
});
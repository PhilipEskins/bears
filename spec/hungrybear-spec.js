import { bear } from './../src/js/hungrybear.js';

describe('HungryBear', function() {
  let fuzzy = bear;

  beforeEach(function() {
    jasmine.clock().install();
    fuzzy.foodLevel = 10;
    fuzzy.moodLevel = 10;
    fuzzy.name = "Fuzzy";
    fuzzy.setHunger();
    fuzzy.setMood();
    fuzzy.isAsleep();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should have a name and a food level of 10 when it is created', function() {
    expect(fuzzy.name).toEqual("Fuzzy");
    expect(fuzzy.foodLevel).toEqual(10);
  });


  it('should have a food level of 7 after 3001 milliseconds', function() {
    jasmine.clock().tick(3001);
    expect(fuzzy.foodLevel).toEqual(7);
  });

  it('should get very hungry if the food level drops below zero', function(){
    fuzzy.foodLevel = 0;
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should get very hungry if 10 seconds pass without eating', function() {
    jasmine.clock().tick(10001);
    expect(fuzzy.didYouGetEaten()).toEqual(true);
  });

  it('should return that the bear ate blueberries and the food level should go up 5', function() {
      expect(fuzzy.eatSmall("blueberries")).toEqual("The bear ate the blueberries! Food level goes up 5!");
      expect(fuzzy.foodLevel).toEqual(15);
  });
    //MOOD LEVEL
  it('should have a mood level of 10 when it is created', function() {
    expect(fuzzy.moodLevel).toEqual(10);
  });

  it('should have a level of 7 after 3001 milliseconds', function(){
    jasmine.clock().tick(3001);
    expect(fuzzy.moodLevel).toEqual(7);
  });

  it('should get angry if the modd level is 7', function (){
    jasmine.clock().tick(4001);
    expect(fuzzy.bearNotHappy()).toEqual(true);
  });

  it('should fall asleep if the bear is full and happy', function() {
    expect(fuzzy.asleep).toEqual(true);
  });
});

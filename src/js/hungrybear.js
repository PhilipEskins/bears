// import $ from 'jquery';
  // import 'bootstrap';
  // import 'bootstrap/dist/css/bootstrap.min.css';
  // import './css/styles.css';s
  // import './sass/styles.scss';

  export let bear = {
    foodLevel: 10,
    setHunger: function() {
      const hungerInterval = setInterval(() => {
        this.foodLevel--;
        if (this.didYouGetEaten() == true) {
          clearInterval(hungerInterval);
          return "You got eaten!";
        }
      }, 1000);
    },
    didYouGetEaten: function() {
      if (this.foodLevel > 0) {
        return false;
      } else {
        return true;
      }
    },
    feed: function(amount) {
      let that = this;
      return function(food) {
        that.foodLevel += amount;
        return `The bear ate the ${food}! Food level goes up ${amount}!`
      }
    },
    //MOOD LEVEL
    moodLevel: 10,
    setMood: function() {
      const moodInterval = setInterval(() => {
        this.moodLevel--;
        if (this.bearNotHappy()== true) {
          clearInterval(moodInterval);
          return "Bear is not happy"
        }
      }, 1000);
    },
    bearNotHappy: function() {
      if (this.moodLevel < 7) {
        return true;
      } else {
        return false;
      }
    },

    //SLEEP LEVEL/
    asleep: false,
    isAsleep: function() {
      const checkSleep = setInterval(() => {
        if (this.foodLevel === 10 && this.moodLevel === 10) {
          this.asleep = true;
        } else {
          this.asleep = false;
        }
        if (this.asleep === true) {
          clearInterval(checkSleep);
        }
      });
    },

  };
bear.eatSmall = bear.feed(5);

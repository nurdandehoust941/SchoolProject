  function getRandomInt(max) {
    const min = Math.ceil(0);
    max += 1;
    const diff = max - min;
  
    if (diff < 0) {
      throw new RangeError("max must be larger than min");
    }
  
    return Math.floor(Math.random() * diff) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
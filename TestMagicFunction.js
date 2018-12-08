//author:raryanapriansyah@gmail.com

function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function MagicFunction(...numbers) { 
  let cache = numbers;

  function magicFunction(...numbers) {
    cache = cache.concat(numbers);

    return magicFunction;
  }

  magicFunction.valueOf = () => {
    cache = cache.map(n => {
      let original = n;
      if (Array.isArray(n)) n = 0;
      
      let parsedN = parseFloat(n, 10);
      let result = isNaN(parsedN) ? 0 : parsedN;
      
      if ((typeof(original) === 'boolean' || typeof(original) === 'object') && original == true) result = 1;
      
      return result;
    });
    
    let result = cache.reduce((value, memo) => { return value + memo; }, 0);
    
    return result;
  }

  return magicFunction;
}
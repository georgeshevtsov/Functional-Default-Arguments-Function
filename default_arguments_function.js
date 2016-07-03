function defaultArguments(func, params) {
  var object = arguments[1] ? arguments[1] : false;
  var funcStr = String(func);
  var argsStr = funcStr.slice(funcStr.indexOf('(') + 1, funcStr.indexOf(')')).replace(' ', '');

  if(object) {
    var arrayOfProps = [];
    for(let key in object) {
      if( key && argsStr.includes(key)) {
        arrayOfProps.push(object[key]);
      }else{
        arrayOfProps.push(undefined);
      }
    }
    return function(...args) {
      return func(...args, ...arrayOfProps)
    };

  }else{
    return function(x) {
      return func(...x);
    };
  }

}
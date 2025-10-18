const api = {
  F1: x => [x],
  F2: function (x, y) {
    return [x, y];
  },
  F3(x, y, z) {
    return [x, y, z];
  }
};

const extractFnParams = (obj) => {
    let paramList = [];

    for (const prop in obj) {
        if (typeof obj[prop] === 'function') {
            paramList.push([prop, obj[prop].length]);
        }
    }
    return paramList;
};

console.log(extractFnParams(api));
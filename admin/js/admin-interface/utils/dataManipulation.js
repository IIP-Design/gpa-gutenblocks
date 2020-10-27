// Converts an array of objects into an object with sub-objects
export const makeArrObj = arr => {
  const newObj = {};

  arr.map( item => {
    const title = Object.keys( item );
    const blockGroupArr = Object.values( item );

    const arrayConverted = { ...blockGroupArr };
    const blocks = arrayConverted[0];

    newObj[title] = blocks;

    return newObj;
  } );

  return newObj;
};

// Converts an object with sub-objects into an array of objects
export const makeObjArr = obj => {
  const arr = [];
  const entries = Object.entries( obj );

  entries.map( entry => {
    const key = entry[0];
    const value = entry[1];
    const subObj = { [key]: value };

    arr.push( subObj );

    return arr;
  } );

  return arr;
};

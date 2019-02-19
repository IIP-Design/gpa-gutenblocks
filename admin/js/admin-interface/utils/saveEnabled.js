const { ajaxUrl } = window.iipGutenblocks || '';
const { iipGutNonce } = window.iipGutenblocks || '';
const $ = window.jQuery;

export const makeArrObj = ( arr ) => {
  const newObj = Object.assign( {} );

  arr.map( ( item ) => {
    const title = Object.keys( item );
    const blockGroupArr = Object.values( item );

    const arrayConverted = { ...blockGroupArr };
    const blocks = arrayConverted[0];

    newObj[title] = blocks;
    return newObj;
  } );

  return newObj;
};

export const saveWithAjax = ( action, dataObj ) => {
  const payload = JSON.stringify( dataObj );

  const data = {
    action,
    payload,
    security: iipGutNonce
  };

  const success = ( res ) => {
    console.log( 'Block settings updated!' );
  };

  const error = ( err, textStatus, errThrown ) => {
    console.log( `Failed due to ${errThrown}! \n ${textStatus}` );
  };

  $.ajax(
    {
      type: 'post',
      dataType: 'json',
      url: ajaxUrl,
      data,
      success,
      error
    }
  );
};

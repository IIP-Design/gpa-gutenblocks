const { ajaxUrl } = window.gpaGutenblocks || '';
const { gpaGutNonce } = window.gpaGutenblocks || '';
const $ = window.jQuery;

export const saveWithAjax = ( action, dataObj ) => {
  const payload = JSON.stringify( dataObj );

  const data = {
    action,
    payload,
    security: gpaGutNonce,
  };

  const success = res => {
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
      error,
    },
  );
};

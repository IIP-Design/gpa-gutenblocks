/* eslint-disable react/prop-types */
import ReactHtmlParser from 'react-html-parser';

import IframeEditor from './editor';
import attributes from './attributes';
import { rewriteIframe } from './logic';

const { wp } = window;
const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'iip-gut/iframe', {
  title: __( 'Responsive iframe', 'iip-gutenblocks' ),
  description: __( 'Insert responsive component', 'iip-gutenblocks' ),
  category: 'embed',
  icon: 'editor-code',
  keywords: [
    __( 'iframe', 'iip-gutenblocks' ),
    __( 'embed', 'iip-gutenblocks' ),
    __( 'iip', 'iip-gutenblocks' )
  ],
  attributes,
  edit( props ) {
    const {
      attributes: {
        classes, input, outline, shadow, type
      },
      setAttributes
    } = props;

    const generateIframe = () => {
      const iframe = rewriteIframe( input, classes );

      setAttributes( {
        output: iframe
      } );
    };

    const updateValue = ( e ) => {
      setAttributes( {
        [e.target.name]: e.target.value
      } );
    };

    return (
      <IframeEditor
        classes={ classes }
        generateIframe={ generateIframe }
        input={ input }
        outline={ outline }
        shadow={ shadow }
        type={ type }
        updateValue={ updateValue }
      />
    );
  },
  save( props ) {
    const {
      attributes: {
        output, outline, shadow, type
      }
    } = props;

    return (
      <div className={ `iip-gut-responsive-container ${type} ${shadow} ${outline}` }>
        { ReactHtmlParser( output ) }
      </div>
    );
  }
} );

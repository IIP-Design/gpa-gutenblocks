/* eslint-disable react/prop-types */

import AddToCalendar from '../Components/Frontend/AddToCalendar';

const { wp } = window;
const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { InspectorControls } = wp.editor;
const { Fragment } = wp.element;

registerBlockType( 'iip-gut/add-to-calendar', {
  title: __( 'Add to Calendar', 'iip-gutenblocks' ),
  description: __( 'Inserts chatroll iframe', 'iip-gutenblocks' ),
  category: 'iip_custom_blocks',
  icon: 'calendar-alt',
  // attributes: {

  // },
  edit() {
    return (
      <p>Hello Editor</p>
    );
  },
  save() {
    return (
      <AddToCalendar />
    );
  }
} );

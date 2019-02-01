const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks;
const el = wp.element.createElement;

registerBlockType( 'iip-gut/chatroll', {
  title: __( 'Chatroll', 'iip-gutenblocks' ),
  description: __( 'Inserts chatroll iframe', 'iip-gutenblocks' ),
  category: 'iip_custom_blocks',
  icon: 'testimonial',
  // attributes: {

  // },
  edit() {
    return el(
      'p', {}, 'Hello editor'
    );
  },
  save() {
    return el(
      'p', {}, 'Hello frontend'
    )
  }
} );

registerBlockType( 'iip-gut/add-to-calendar', {
  title: __( 'Add to Calendar', 'iip-gutenblocks' ),
  description: __( 'Inserts chatroll iframe', 'iip-gutenblocks' ),
  category: 'iip_custom_blocks',
  icon: 'calendar-alt',
  // attributes: {

  // },
  edit() {
    return el(
      'p', {}, 'Hello Editor'
    );
  },
  save() {
    // return wp.element.createElement(
    //   <p>Saved content</p>
    // )
  }
} );

registerBlockType( 'iip-gut/countdown', {
  title: __( 'Countdown', 'iip-gutenblocks' ),
  description: __( 'Inserts chatroll iframe', 'iip-gutenblocks' ),
  category: 'iip_custom_blocks',
  icon: 'clock',
  // attributes: {

  // },
  edit() {
    return wp.element.createElement(
      'p', 'Hello Editor'
    );
  },
  save() {
    // return wp.element.createElement(
    //   <p>Saved content</p>
    // )
  }
} );
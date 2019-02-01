import AddToCalendar from './Components/Frontend/AddToCalendar';
import FrontendChatroll from './Components/Frontend/Chatroll';
import FrontendCountdown from './Components/Frontend/Countdown';

const { wp } = window;
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
    return (
      <p>Hello chatroll</p>
    );
  },
  save() {
    return (
      <FrontendChatroll />
    );
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
    return (
      <AddToCalendar />
    );
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
  },
  save() {
    return (
      <FrontendCountdown />
    );
  }
} );

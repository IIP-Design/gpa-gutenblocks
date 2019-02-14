import { initializeClock } from './Blocks/Countdown/logic';
import { handleChatroll } from './Blocks/Chatroll/logic';

document.addEventListener( 'DOMContentLoaded', (
  () => {
    initializeClock();
    handleChatroll();
  }
), false );

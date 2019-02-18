const { wp } = window;
const { createContext } = wp.element;

const EnabledContext = createContext( {
  blockSettings: [],
  toggleBlock() {}
} );

export const { Provider } = EnabledContext;
export const { Consumer } = EnabledContext;

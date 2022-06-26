const breakpointKeys = ['xs', 'sm', 'md', 'lg', 'xl'];
const breakpointValues = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
};

const defaultTheme = {
  breakpoints: {
    keys: breakpointKeys,
    values: breakpointValues,
    down: (key) => {
      return `@media (max-width: ${breakpointValues[key]}px)`;
    },
    between: (key1, key2) => {
      return `@media (min-width: ${breakpointValues[key1]}px) and (max-width: ${breakpointValues[key2]}px)`;
    },
  },
};

export default defaultTheme;

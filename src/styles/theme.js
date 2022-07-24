const size = {
  desktop: '1460px',
  tablet: '1023px',
  phone: '600px',
};

const theme = {
  desktop: `(min-width: ${size.desktop})`,
  tablet: `(max-width: ${size.tablet})`,
  phone: `(max-width: ${size.phone})`,
};

export default theme;

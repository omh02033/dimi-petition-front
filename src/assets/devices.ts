const size = {
  mobileS: '319px',
  mobileM: '374px',
  mobileL: '424px',
  tablet: '767px',
  laptop: '1023px',
  laptopL: '1439px',
  desktop: '2559px'
}

const devices = {
  mobileS: `(max-width: ${size.mobileS})`,
  mobileM: `(max-width: ${size.mobileM})`,
  mobileL: `(max-width: ${size.mobileL})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  laptopL: `(max-width: ${size.laptopL})`,
  desktop: `(max-width: ${size.desktop})`,
  desktopL: `(max-width: ${size.desktop})`,
};

export default devices;
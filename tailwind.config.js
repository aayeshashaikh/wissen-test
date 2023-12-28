/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1440px',
    },
    boxShadow: {
      register:
        '0px 3px 5px -1px rgba(0,0,0,0.2), 0px 6px 10px 0px rgba(0,0,0,0.14), 0px 1px 18px 0px rgba(0,0,0,0.12)',
    },
    extend: {
      colors: {
        primaryColor: '#172B4D',
        secondaryColor: '#2B3EB1',
        primaryTextColor: '#272727',
        greyOne: '#EFF0F2',
        lightText: '#7D7D7D',
        lightBgColor: '#F6F6F6',
        bodyColor: '#f2f3f7',
        borderColor: '#E2E2E2',
        tableHeadingColor: '#787878',
        lengendGreen: '#09814A',
        legendOrange: '#F37221',
        legendRed: '#E71D36',
      },
      brightness: {
        1000: '100',
      },
      boxShadow: {
        topshadow: '0px 0px 11.873150825500488px 0px #82828233',
        btnShadow: '0px 1.8266385793685913px 3.6532771587371826px 0px #00000040',
        tdShadow: '2.7383503913879395px 2.7383503913879395px 3.6511337757110596px 0px #87878726;',
        tableActionShadow: '0px 0px 3px 1px #00000026',
      },
      fontFamily: {
        bodyFontFamily: 'Poppins',
        brandFontFamily: 'Righteous',
      },
    },
  },
  plugins: [],
};

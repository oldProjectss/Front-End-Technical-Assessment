/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      white: '#fff',
      // Primary palette
      col240d57: '#240d57',
      col501fc1: '#501fc1',
      col8456ec: '#8456ec',
      cole87bf8: '#e87bf8',
      // Secondary palette
      colccb6ff: '#ccb6ff',
      colede5ff: '#ede5ff',
      colf6f2ff: '#f6f2ff',
      // Alert colors
      colffd7e0: '#ffd7e0',
      cole61445: '#e61445',
      cold3ffe2: '#d3ffe2',
      col00805e: '#00805e',
      // Neutrals
      col4f4f4f: '#4f4f4f',
      col828282: '#828282',
      colbdbdbd: '#bdbdbd',
      cole0e0e0: '#e0e0e0',
      colf2f2f2: '#f2f2f2',
      colfbfaff: '#fbfaff',
    },
    fontSize: {
      primarymd: '64px',
      secondarymd: '24px',
      primary: '36px',
      secondary: '16px',
    },
    spacing: {
      '10px': '10px',
      '13.6px': '13.67px',
      '14px': '14px',
      '16px': '16px',
      '20px': '20px',
      '21px': '21px',
      '24px': '24px',
      '27px': '27px',
      '34px': '34px',
      '36px': '36px',
      '37px': '37px',
      '60px': '60px',
      '64px': '64px',
      '105px': '105px',
      '10vw': '10vw',
      '500px': '500px',
    },
    lineHeight: {
      'extra-loose': '2.5',
      12: '3.5rem',
    },
    extend: {},
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,html}",
  ],
  theme: {
    extend: {
      keyframes: {
        img: {
          '0%': { backgroundImage: 'url(/src/Image/dronebx.png)' },
          '25%': { backgroundImage: 'url(/src/Image/dark.png)' },
          '50%': { backgroundImage: 'url(/src/Image/dronecam.png)' },
          '75%': { backgroundImage: 'url(/src/Image/black.png)' },
          '100%': { backgroundImage: 'url(/src/Image/Lovepik_com-401893396-drone-delivery.png)' },
        },
        'dash-loader-animation': {
          '0%': { transform: 'rotateY(0deg)', animationTimingFunction: 'cubic-bezier(0.5, 0, 1, 0.5)' },
          '50%': { transform: 'rotateY(1800deg)', animationTimingFunction: 'cubic-bezier(0, 0.5, 0.5, 1)' },
          '100%': { transform: 'rotateY(3600deg)', animationTimingFunction: 'cubic-bezier(0.5, 0, 1, 0.5)' }
        }
      },
      animation: {
        img: 'img 5s infinite 1s',
        'dash-loader': 'dash-loader-animation 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite'
      },
    },
  },
  plugins: [],
}

module.exports = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        container: {
            center: true,
        },
        extend: {
            colors: {
                'dark-header': '#23262B',
                'light-border': '#2A2929',
                'dark-background': '#131417',
                'milky-white': '#E6E5E5',
                'sky-blue': '#76DAFF',
                'whiteGray': '#C5C8D4',
                'orange': '#D08637',
                'fillOrange': '#E79E4F',
            },
        },
    },
    plugins: [],
}

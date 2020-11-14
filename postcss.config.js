const tailwindcss = require("tailwindcss");

modole.export = {
    plugins: [tailwindcss("./tailwind.config.js"), require("autoprefixer")],
};

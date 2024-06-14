module.exports = {
  plugins: {
    "postcss-preset-mantine": {},
    "postcss-simple-vars": {
      variables: {
        "mantine-breakpoint-xs": "36em",
        "mantine-breakpoint-sm": "48em",
        "mantine-breakpoint-md": "62em",
        "mantine-breakpoint-lg": "75em",
        "mantine-breakpoint-xl": "88em",
      },
    },
    "postcss-custom-media-generator": {
      // you can pass in any arbitrary key, and any valid CSS media query value
      sm: 600,
      md: 800,
      lg: 1000,
    },
    "postcss-preset-env": {},
  },
};

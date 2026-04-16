import nextra from 'nextra'

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.jsx', 
})

export default withNextra({
  output: 'export',
  basePath: '/apex-pathing-docs',
  // Required for GitHub Pages to navigate between docs pages correctly
  trailingSlash: true, 
  images: {
    unoptimized: true,
  },
})

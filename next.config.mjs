import nextra from 'nextra'

const withNextra = nextra({}) 

export default withNextra({
  output: 'export',
  basePath: '/apex-pathing-docs',
  trailingSlash: true,
  images: { unoptimized: true }
})
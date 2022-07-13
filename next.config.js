/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	compiler:{
		styledComponents: true
	},
	images:{
		domains:['github.com','m.media-amazon.com']
	}
}

module.exports = nextConfig

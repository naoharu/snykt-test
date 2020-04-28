const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ec2-user/environment/gatsby-jammingfm/.cache/dev-404-page.js"))),
  "component---src-pages-contact-js": hot(preferDefault(require("/home/ec2-user/environment/gatsby-jammingfm/src/pages/contact.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/ec2-user/environment/gatsby-jammingfm/src/pages/index.js"))),
  "component---src-templates-blog-template-js": hot(preferDefault(require("/home/ec2-user/environment/gatsby-jammingfm/src/templates/blogTemplate.js")))
}


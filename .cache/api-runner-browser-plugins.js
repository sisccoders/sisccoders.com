module.exports = [{
      plugin: require('../node_modules/gatsby-plugin-catch-links/gatsby-browser.js'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby-plugin-manifest/gatsby-browser.js'),
      options: {"plugins":[],"icon":"./src/images/logo/pwny8-48x48.png","icons":[{"src":"./src/images/logo/pwny8-32x32.png","sizes":"32x32","type":"image/png"},{"src":"./src/images/logo/pwny8-dark-128x128.png","sizes":"128x128","type":"image/png"},{"src":"./src/images/logo/pwny8-dark-192x192.png","sizes":"192x192","type":"image/png"},{"src":"./src/images/logo/pwny8-dark-256x256.png","sizes":"256x256","type":"image/png"},{"src":"./src/images/logo/pwny8-dark-512x512.png","sizes":"512x512","type":"image/png"}],"legacy":true,"theme_color_in_head":true,"cache_busting_mode":"query","crossOrigin":"anonymous","include_favicon":true,"cacheDigest":"50971439cb4f72bc5bfd7c7cc36212ff"},
    },{
      plugin: require('../node_modules/gatsby-remark-images/gatsby-browser.js'),
      options: {"plugins":[],"backgroundColor":"none","maxWidth":900,"quality":100,"linkImagesToOriginal":true,"showCaptions":false,"markdownCaptions":false,"withWebp":false,"withAvif":false,"loading":"lazy","decoding":"async","disableBgImageOnAlpha":false,"disableBgImage":false},
    },{
      plugin: require('../gatsby-browser.ts'),
      options: {"plugins":[]},
    },{
      plugin: require('../node_modules/gatsby/dist/internal-plugins/partytown/gatsby-browser.js'),
      options: {"plugins":[]},
    }]

export default defineAppConfig({
  // Configure Content Wind here
  socials: {
    github: 'MarcoAAlmeida/content.tailwind.primer'
  },
  toolbar: [{
    title: 'actual deploy',
    icon: 'flat-color-icons:globe',
    url: 'https://classy-eclair-91e1cb.netlify.app/'
  },{
    title: 'netlify dashboard',
    icon: 'logos:netlify',
    url: 'https://app.netlify.com/sites/classy-eclair-91e1cb/overview'
  },{
    title: 'github repo',
    icon: 'fa-brands:github',
    url: 'https://github.com/MarcoAAlmeida/content.tailwind.primer'
  },{
    title: 'awesome icônes!',
    icon: 'vscode-icons:file-type-image',
    url: 'https://icones.js.org/'
  },{
    title: 'Nuxt Content',
    icon: 'logos:nuxt-icon',
    url: 'https://content.nuxtjs.org/guide/writing/content-directory'
  }],
  prose: {
    h1: {
      icon: 'logos:nuxt-icon'
    }
  }
})

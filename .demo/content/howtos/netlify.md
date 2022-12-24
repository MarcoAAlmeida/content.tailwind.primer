---
navigation.title: 'Netlify'
---

## Netlify Setup

Netlify deployment updates are hooked to changes in the Github repository.

Build setup in file **/netlify.toml**

```(yaml)
[build]
  publish = ".demo/dist"
  command = "npm run generate"

```

::list{icon=flat-color-icons:idea}
- can range over more than one repo ![Netlify setup 0](/img/netlify_00.png)
- actual directory is **.demo/dist** ![Netlify setup 1](/img/netlify_01.png)
- current state reflects last successful build ![Netlify setup 2](/img/netlify_02.png)
- each build is logged ![Netlify setup 3](/img/netlify_03.png)
- look for successful completion![Netlify setup 4](/img/netlify_04.png)
::
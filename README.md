# Port-Hugo (A simple portfolio)

currently tested with hugo v0.141.0 and v0.152.2+extended

This theme is a simple, customizable portfolio for designers or web developers.

![Thumbnail](https://raw.githubusercontent.com/tylersayshi/port-hugo/master/images/tn.png)

![Screenshot](https://raw.githubusercontent.com/tylersayshi/port-hugo/master/images/screenshot.png)

## Features

- Responsive portfolio
- Easy sections to use
- Hugo image processing for optimization
- PostCSS for autoprefixing
- SCSS for easy styling
- [Hugrid](https://github.com/aerohub/hugrid) based portfolio section
- [Somrat](https://github.com/somratpro/somrat) based design

## Install theme on your hugo site

This site makes use of javascript packages that require special installation. As such, things will not "just work" by installing the theme as a submodule the way that Hugo suggests installing themes. The easiest way to get started customizing this theme is to copy certain files into your own project and then start to override and change things as you go.

```
hugo new site your-site-name # if you already have a site ignore this line and the next
cd your-site-name
cd themes
git clone https://github.com/tylersayshi/port-hugo.git
cd ../ # Go back to the root of your site
cp port-hugo/exampleSite/{hugo.toml,package.json,postcss.config.js,yarn.lock} . # copy the necessary config files
cp port-hugo/exampleSite/assets/* ./assets/ # copy necessary assets into your project's assets directory as a starting point
cp port-hugo/exampleSite/static/* ./static/ # copy necessary static files into your project's static directory as a starting point
cp port-hugo/exampleSite/data/content.yml ./data/content.yml # copy the content data file into your project as a starting point
pnpm install # or yarn, npm, bun, etc. - install necessary dependencies
hugo server -D # launch the hugo server with draft builds included
# visit http://localhost:1313 to see a site that should look just like the demo site
```

Failure to copy the javascript configuration files, assets, static files, or data file will result in hugo crashing at launch. This is why it's recommended to copy things into your project and then start tweaking from a working website.

If you copied the `hugo.toml` from the exampleSite, your theme will already be set. If you did not, make sure that you have the following set in your `hugo.toml`:

```toml
theme = "port-hugo"
```

### Logo support

Images named `logo.svg` and `logo-dark.svg` are meant to be used for the logos. They should be stored in `static/images` as seen in [./exampleSite/static/images](./exampleSite/static/images). If you wish to change this, the code to control the images is in `assets/js/script.js`.

## Credits

I'd like to express gratitude to [somrat](https://github.com/somratpro/somrat) and [hugrid](https://github.com/aerohub/hugrid) for creating wonderful themes that I have used as a jumping off point. You may notice this theme is very similar in design to somrat, however it has distinct differences by using a manipulated version of hugrid for the portfolio section. I have also trimmed down the features of somrat, to only include what I wanted for a simple theme.

## Contributing

Please feel free to post issues or make pull requests at any time. I am always open to collaboration.

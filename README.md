# Port-Hugo (A simple portfolio)

This theme is a simple, customizable portfolio for designers or web developers.

![Thumbnail](https://raw.githubusercontent.com/tylerjlawson/port-hugo/master/images/tn.png)

![Screenshot](https://raw.githubusercontent.com/tylerjlawson/port-hugo/master/images/screenshot.png)

## Features

- Responsive portfolio
- Easy sections to use
- Hugo image processing for optimization
- PostCSS for autoprefixing
- SCSS for easy styling
- [Hugrid](https://github.com/aerohub/hugrid) based portfolio section
- [Somrat](https://github.com/somratpro/somrat) based design

## Install theme on your hugo site

```
hugo new site your-site-name # if you already have a site ignore this line and the next
cd your-site-name
cd themes
git clone https://github.com/tylerjlawson/port-hugo.git
```

Once you have done this, you may use the `exampleSite` folder as an example for how to set your project up. The two main things to pay attention to is to first set this in your `config.toml` file:

```toml
theme = "port-hugo"
```

Then you will need to replicate the data used in the `exampleSite/data/content.yaml` file to fill in the fields for your portfolio. Please also see the `exampleSite/config.toml` for guidance on setting up the more general site configurations.

## Credits

I'd like to express gratitude to [somrat](https://github.com/somratpro/somrat) and [hugrid](https://github.com/aerohub/hugrid) for creating wonderful themes that I have used as a jumping off point. You may notice this theme is very similar in design to somrat, however it has distinct differences by using a manipulated version of hugrid for the portfolio section. I have also trimmed down the features of somrat, to only include what I wanted for a simple theme.

## Contributing

Please feel free to post issues or make pull requests at any time. I am always open to collaboration.

# dwolla-devportal

Dwolla's next-generation developer portal.  This is a jekyll-based site that compiles down to a set of static assets which live on GitHub Pages.

Skeleton generated using [generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb).

## Getting started

First things first.  This project requires Node.js >= 0.10, Ruby >= 1.9.  Make sure you have those installed.

Clone this repo.  Then, you'll want to install dependencies:

```
bundle install
npm install
```

To build and serve the site on localhost, do:

```
grunt serve
```

## Deploying

To deploy changes to the gh-pages branch, do:

```
grunt deploy
```

If you're trying to deploy changes to the actual Dwolla repo, you'll need to make sure you're allowed to.  Only Dwolla organization members can do this.

Otherwise, if you're deploying to your own repo, make sure you edit the `buildcontrol.dist.options.remote` to be the URL of your git repo.  You'll probably also want to edit `app/CNAME` to use your own CNAME.

## Contributing

Feel free to fork this repo and submit PRs for any corrections, new features, etc. you think we should include.
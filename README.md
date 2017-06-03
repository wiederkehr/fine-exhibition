# Fine Exhibition
Exhibition version of the Fine application for tracking and visualizing emotions.

## Motivation

All background information about the research project can be found on Anna's Master Thesis [Website](http://master.annawiederkehr.com) or [Journal](http://master-journal.annawiederkehr.com).

## Usage

Currently this tool logs all the records in the same Fieldbook sheet. This makes it a single user system for now, but that's okay because, you know, research.

## Technology

* Javascript Application created with [React](http://reactjs.org)
* React Application based on [Create React App](https://github.com/facebookincubator/create-react-app)
* CSS based on [Normalize](https://necolas.github.io/normalize.css/)
* Database and API provided by [Fieldbook](https://fieldbook.com)
* Continuous delivery set up with [Github](https://github.com) and [Codeship](https://codeship.com).

## Development

Use `make` to run the website locally, push to `master` to deploy.

## Scripts

There shouldn't be reason to use those scripts directly.

* `yarn start`: Starts the development server
* `yarn build`: Build documentation website into `docs/`
* `yarn deploy`: Deploy to http://fine-exhibition.annawiederkehr.com

## Deployment

Automatic deployment is set up for the `master` branch.

# Drinks App

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.5. It is a drinks app built using Angular and consuming APIs from TheCocktailDB. It allows users to browse a list of alcoholic drinks and view details of individual drinks.

## Usage

To run the app locally, first install the dependencies with `npm install`. Then start the dev server with `ng serve`. Navigate to `http://localhost:4200/`.

The app data is fetched from TheCocktailDB APIs on page load. The list of drinks is fetched from `https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic` and individual drink details are fetched from `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i={id}`.

## Key Features

- List view of drinks with images and names
- Detail view for individual drinks showing image, name, ingredients and instructions
- Responsive design adapts to different screen sizes
- Uses Angular Material for clean UI components
- Used cdk-virtual-scroll-viewport to optimize the rendering of large lists
- Used angular-cli-ghpages to deploy project on Github
- 

## Configuration

The app is designed to be configurable through a JSON configuration file. This allows branding and customization without code changes. 

The `app-config.json` file contains settings for:

- App name/title 
- Logo image

Additional fields could be added as needed e.g. for alternate text on images.

## Architecture

The project follows a scalable Angular architecture with feature modules for drinks list and details views. Shared modules, Components, Directive and Helper Functions and ... are used to avoid duplication.

Services are used to make API requests and manage app state. Components are separated from logic/data.Dependency injection keeps components clean and testable.

Angular Material provides familiar UI elements like cards, buttons etc out of the box. Overall a simple architecture was chosen to focus on the core functionality.

and to optimize the rendering of large lists i used cdk-virtual-scroll-viewport.

## Future Improvements

Some ideas for future enhancements:

- Filtering/search on drinks list
- Favorite drinks 
- Drinks by category
- Drink recommendations
- Offline support
- Testing (currently minimal coverage)
- Accessibility improvements
- Animations

The app is published at https://eliq-drinks.web.app

Let me know if any part needs more explanation or if you have additional questions!

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

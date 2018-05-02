
# Keg Room

#### An application for tracking kegs as either a customer or employee - 5/2/2018

#### By **Ami**

## Description
An app that will track keg volume, prices, and alcohol content for a fictitious tap room.


### Specs
| Spec | Input | Output |
| :-------------     | :------------- | :------------- |
| Program will not allow minors into the site | "I am not 21 or older" | "You are not permitted to view this" |
| Program will allow an employee to sign in using a set PIN | "1234" | "Welcome {{name}}! Have a good day at work!" |
| As an employee, be able to edit keg information (name, brand, price, ABV) | '64oz' | '64oz' |
| As an employee, be able to make sales (adds money to till, subtracts volume from keg) | "1 pint of IPA sold" | IPA keg = (volume - pint), Till = $5 |
| As an employee, highlight kegs that have less than 10 pints left | IPA: 9 pints | IPA **highlighted red** |
| As a customer, beers are color-coded by price | --- | --- |






## Setup/Installation Requirements

1. Clone from GitHub repository []
2. Open index.html in web browser.

## Known Bugs
* No known bugs at this time.

## Technologies Used

## Support and contact details

_Email the authors with any questions, comments, or concerns._

### License

*{This software is licensed under the MIT license}*

Copyright (c) 2018 **_{Ami}_**
# KegRoom

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

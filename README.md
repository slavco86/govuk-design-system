# Preliminary Task

## Structure

```
App
└───Layout view
    │   │
    │   └───Questions view
    │       └───Components
    │
    └───────Summary view
            └───Components
```

## Notes

- Prominent use of Vue Router to structure views and components
- Components kept as dumb as possible, with data and functions passed in
- Switch statements have been used to check which route user is on (by using named routes) and syncing data accordingly
- A mixin 'getAndSetFormValues' is used to get and set values between components and Vuex
  - Because date of birth had three separate fields, some logic had to be written in their corresponding Vuex mutations, a better solution could be found for this

## Installation

1. Clone repo
2. Run `npm i` to install dependencies
5. Run `npm run serve` to start the app in development mode
6.  Navigate to `http://localhost:8080/`

## Todos

- I could have added more form validation rules, but I think I added enough for demonstration purposes

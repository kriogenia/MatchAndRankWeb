# MatchAndRankWeb
Web application to create ranked lists based on a series of match-ups between the entries. 
The user will add the entries to clash and then it will start to pick a winner between a set of two.
When all the needed matches are finish, an ordered list will show up.

The list doesn't have a maximum limit right now, but could be added in the future. In doesn't admit duplicates.

## Roadmap

The following enhancement are a prioritized list of things I want to add to the application.

These are expected to come before the 1.0:
- Quick system (featuring fewer matches at the cost of less variety)
- API to save and load lists
- Import list from file
- Share lists (complete and templates)

Future enhancements
- Allowing draws on matches
- Keyboard control
- Mobile application
- Tier decoration

## Technologies

This application has been built with React using Material-UI for the interface components. 
It is expected to use an API to all the database operations, built in MongoDB.
The error toasts are from React Toastify and the internationalization from i18next.
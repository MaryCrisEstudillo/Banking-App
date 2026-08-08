# Piggy Bank

A teller-side banking dashboard built with vanilla HTML, CSS and JavaScript.
Accounts are stored in the browser's `localStorage`, so no backend is required.

**[Open the live app →](https://marycrisestudillo.github.io/Banking-App/)**

## Running it

Open `index.html` in a browser, or serve the folder:

```bash
python3 -m http.server 8000
```

then visit <http://localhost:8000>.

Log in with any first name — it is passed to the dashboard as a URL parameter
and used for the greeting.

## Features

| Menu | What it does |
| --- | --- |
| Search | Looks an account up by account number, full name, or either name alone, and shows its balance and transaction history |
| History | Lists every account with its number, holder, opening date/time and current balance |
| Add user | Creates an account with a unique random 11-digit number and an initial deposit |
| Transactions | Deposit, withdraw and transfer between accounts |

A transaction must match both the account number **and** that account's holder
name, so a mistyped name can never move another customer's money.

The piggy bank logo in the navigation reloads the dashboard.

## Files

```
index.html      log in page
login.css       log in styles
result app.html dashboard markup
result.css      dashboard styles (responsive, single stylesheet)
resultjs.js     app logic + localStorage persistence
images/         logo, icons and artwork
```

## Layout notes

The dashboard is a CSS grid shell: a navigation rail plus a main column. Every
panel (search, history, add user, transactions) occupies the same grid cell and
is toggled with `visibility`, so panels overlap without any absolute
positioning maths.

Breakpoints:

- **> 900px** — navigation rail on the left, panels beside it.
- **≤ 900px** — the rail becomes a top bar with the icons in a pill; the clock
  moves inline under the greeting.
- **≤ 720px** — the transfer form drops from two columns to one.
- **≤ 620px** — the search bar becomes a stacked card, the transaction tabs
  stack, and each row of the account table becomes its own card so the balance
  stays on screen instead of hiding behind a horizontal scroll.

# Ruby on Rails, Vite, Turbo Rails, Stimulus, and TailwindCSS

This is currently using Rails 7.2. 

> [!NOTE]
> This repository was initialized using [mattbricston/nextgen](https://github.com/mattbrictson/nextgen) in lieu of the standard `rails new`. It was used for the initial setup up of the Rails app with Vite, Turbo, and Stimulus. TailwindCSS, Devise, and others were added after the fact.

## Prerequisites

- Ruby 3.1+
- Node 18 (LTS) or newer
- Yarn 1.x (classic)
- PostgreSQL must be installed and accepting connections
- Redis

## Local Development Setup (optional)

If you already meet the requirements above, you can jump straigh to the Getting Started section. 

<details>
  
  <summary>Install Dependencies</summary>

  ### Ruby
  ```
  brew install ruby
  ```

  ### Node
  ```
  brew install node
  ```

  ### Postgresql
  ```
  brew install postgresql@15
  ```

  ### Redis
  ```
  brew install 
  ```

  ### Yarn
  You can install Yarn with homebrew, but it's not necessary. Just install it with npm.
  ```
  npm install --global yarn
  ```

</details>

<details>
  
  <summary>Make sure Postgres & Redis are running</summary>

  ### Postgresql

  ```
  brew services start postgresql@15 
  ```

  ### Redis

  ```
  brew services start redis
  ```
  
</details>

## Getting started

### bin/setup

Run this script to install necessary dependencies and prepare the Rails app to be started for the first time.

```
bin/setup
```

> [!TIP]
> The `bin/setup` script is idempotent and is designed to be run often. You should run it every time you pull code that introduces new dependencies or makes other significant changes to the project.

### Run the app!

Start the Rails server with this command:

```
bin/dev
```

The app will be located at <http://localhost:3000/>.

## Development

Use this command to run the full suite of automated tests:

```
bin/rake
```

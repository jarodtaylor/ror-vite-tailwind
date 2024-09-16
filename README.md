# Ruby on Rails, Vite, Turbo Rails, Stimulus, and TailwindCSS

This is currently using Rails 7.2. 

> [!NOTE]
> This repository was initialized using [mattbricston/nextgen](https://github.com/mattbrictson/nextgen) in lieu of the standard `rails new`. It was used for the initial setup up of the Rails app with Vite, Turbo, and Stimulus. TailwindCSS, Devise, and others were added after the fact.

## Prerequisites

The local develpment setup documents assume you're using a Mac and using [Homebrew](http://brew.sh). We'll be using a couple of tools to setup your environment. You can skip this section and install the dependencies in your own way. That said, the following things will be required.

- Ruby 3.1+
- Node 18 (LTS) or newer
- Yarn 1.x (classic)
- PostgreSQL must be installed and accepting connections
- Redis

## Local Development Setup (optional)

<details>
  
  <summary>Install Ruby and NodeJS with asdf</summary>

### Install asdf (optional)

> [!NOTE]
> This project leverages [.tool-versions](https://asdf-vm.com/manage/configuration.html#tool-versions) for managing Ruby and NodeJS versions. If you'd prefer to use `rbenv` and `rvm`, you can skip this step and install the appropriate Ruby and NodeJS versions on your own, just make sure you install the right versions shown in [this repo's .tool-versions](https://github.com/jarodtaylor/ror-vite-tailwind/blob/main/.tool-versions).

There are homebrew versions of asdf but it's highly recommended to use their [official installation method](https://asdf-vm.com/guide/getting-started.html#official-download). 

```
git clone https://github.com/asdf-vm/asdf.git ~/.asdf
```

You'll need to update your `.zshrc` as described on the [asdf docs](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf)). Most Mac users are using zsh so you'd want to read the directions under the ZSH & Git section.

```
. "$HOME/.asdf/asdf.sh"
fpath=(${ASDF_DIR}/completions $fpath)
autoload -Uz compinit && compinit
```

> [!WARNING]
> if you are using a custom compinit setup, make sure you read the directions for ZSH & Git on [asdf the installation docs](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf). 

#### Install asdf plugins
This will allow us to add different versions of Ruby and Node in both your global and local project  `.tool-version` files.

##### Add Ruby plugin
```
asdf plugin add ruby
```

##### Add NodeJS plugin
```
asdf plugin add nodejs
```

### Install Ruby and NodeJS versions
Now that we have asdf setup with both the Ruby and NodeJS plugins, you can install the appropriate versions.

#### Ruby
```
asdf install ruby latest
```
> [!NOTE]
> If you run into an issue regarding ruby-build and `libyaml` you may need to install it using `brew install libyaml`. 

#### NodeJS
```
asdf install nodejs latest
```

### Set your global .tool-versions to use Ruby and NodeJS
#### Ruby
```
asdf global ruby latest
```
#### NodeJS
```
asdf global nodejs latest
```

</details>

<details>
  
  <summary>Make sure Postgres & Redis are running</summary>

  ### Get Postgres and Redis running
  If you don't already have postgres and redis installed, install them with homebrew.
  ```
  brew install postgresql@15 redis
  ```

  Then you can start the services
  ```
  brew services start postgresql@15 && brew services start redis
  ```
  
</details>

<details>
  
  <summary>Install Yarn</summary>

  Assuming you already have NodeJS installed and the latest version set up globally, add the yarn package. 
  ```
  npm install --global yarn
  ```
</details>

## Getting started
> [!WARNING]
> If you followed the local development setup and installed `ruby` with `asdf` and Postgresql with homebrew, you will get an error, because the `pg` gem is trying to compile native extensions but can't find the necessary PostgreSQL client libraries or `pg_config`. The issue is caused by `asdf` not being able to locate the `pg_config` from your Homebrew installation.

To fix this you need to install `libpq` with homebrew and then link the `pg_config` to your environment.
```
brew install libpq
```
Two options for linking the `pg_config`.

#### Option one
```
brew link --force libpq
```

#### Option two (recommended)
For a more permanent fix, so this isn't seen for any other postgresql libs you may add, add the following to your `.zshrc` file.
```
export PATH="/opt/homebrew/opt/libpq/bin:$PATH"
export LDFLAGS="-L/opt/homebrew/opt/libpq/lib"
export CPPFLAGS="-I/opt/homebrew/opt/libpq/include"
```


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

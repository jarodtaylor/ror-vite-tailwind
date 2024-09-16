# Ruby on Rails, Vite, Turbo Rails, Stimulus, and TailwindCSS

This is currently using Rails 7.2. 

> [!NOTE]
> This repository was initialized using [mattbricston/nextgen](https://github.com/mattbrictson/nextgen) in lieu of the standard `rails new`. It was used for the initial setup up of the Rails app with Vite, Turbo, and Stimulus. TailwindCSS, Devise, and others were added after the fact.

## Prerequisites

This documentation assumes you're using a Mac and using [Homebrew](http://brew.sh). We'll be using a couple of tools to setup your environment. You can skip this section and install the dependencies in your own way. That said, the following things will be required before jumping to the [#Getting Started](#getting-started).

- Ruby
- Node 18 (LTS) or newer
- Yarn 1.x (classic)
- PostgreSQL must be installed and accepting connections

You can view the [.tool-versions](https://github.com/jarodtaylor/ror-vite-tailwind/blob/main/.tool-versions) file for this project's Ruby and Node versions.

## Developer Setup
Assuming you're not rolling with your own setup and you have Homebrew installed, let's get your developer environment setup. 

### Install asdf
There are homebrew versions of asdf but it's highly recommended to use their [official installation method](https://asdf-vm.com/guide/getting-started.html#official-download). 

```
git clone https://github.com/asdf-vm/asdf.git ~/.asdf
```

You'll need to update you .zshrc (as described on the [asdf docs](https://asdf-vm.com/guide/getting-started.html#_3-install-asdf:~:text=ZSH,-%26%20Git))
```
. "$HOME/.asdf/asdf.sh"
fpath=(${ASDF_DIR}/completions $fpath)
```

> [!NOTE]
> After installing asdf you will need to make sure your 

### Install ruby and nodejs


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

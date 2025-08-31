<p align="center" style="flex-direction: row;">
  <img src="assets/app-icon.svg" width="200" />
  <img src="assets/platforms.jpeg" width="200" />
</p>

# TauriFlow

This repository is intended to be used as an all-inclusive\* starting point for creating cross-platform Desktop and Mobile applications using Tauri and Svelte 5.0.

**Summary of Features:**

- Tauri 2.0 + Rust backend
- SvelteKit + Svelte 5.0 + Typescript frontend
- TailwindCSS
- Flowbite Svelte UI components
- Flowbite Svelte Icons
- Theme support (including dark mode or brand themes)
- Svelte i18n internationalization support
- SQLite support
- WCAG 2.1 AA accessibility compliance

**Supported Platforms:**

- Windows
- macOS
- Linux
- iOS
- Android

> \*All-inclusive means that it includes a lot of features that are not necessarily required for a basic application, but are useful for a production application. These features can be disabled or removed if not needed, however most of them take up little to no space and have highly restrictive permissions set by default, increasing the security of the application.

## Recommended IDE Setup

Useful plugins to install:

| Plugin Name                                                                                    | Description                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [Tauri](https://marketplace.windsurf.com/extension/tauri-apps/tauri-vscode)                    | Extension that adds support to Tauri commands and tauri.conf.json JSON validation.                                                                                                                               |
| [Svelte for VS Code](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode) | Provides syntax highlighting and rich intellisense for Svelte components in VS Code including formatting. This plugin is essential for a smooth development experience building any projects with Tauri + Svelte |
| [Prettier - Code Formatter](https://github.com/prettier/prettier-vscode)                       | One of the most popular code formatters for HTML, CSS, JS, TS, and many other file formats. All files in this repository are formatted using Prettier.                                                           |
| [Tailwind CSS Intellisense](https://github.com/tailwindlabs/tailwindcss-intellisense)          | Enhances the Tailwind development experience by providing Visual Studio Code users with advanced features such as autocomplete, syntax highlighting, and linting.                                                |
| [i18n-ally](https://github.com/lokalise/i18n-ally)                                             | Provides i18n internationalization tools and support, second to none. This plugin is a must-have if your app needs to be localized                                                                               |

## Getting Started

### Prerequisites

You must have the following installed and configured on your system:

- npm - [docs](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
- Rust - [docs](https://rustup.rs/)

#### Developing for iOS and Android

Getting setup for mobile development requires a bit more work. The steps for which differ from platform to platform and are too complex to be outlined here. Please refer to the [Tauri documentation](https://v2.tauri.app/develop/#developing-your-mobile-application) for more information.

Setting them up will most likely require Android Studio and/or XCode. Additionally you may want to configure emulators/simulators for testing.

> NOTE: This entire sample application is fully functional and tested on Desktop and Mobile platforms. It was tested on both emulators/simulators as well as on physical devices.

### Installation and Development

Clone this repository into a location of your choosing:

```bash
git clone https://github.com/Noremac11800/TauriFlow.git
```

Navigate to the root directory of the repository:

```bash
cd TauriFlow
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run tauri dev
```

Provided you have correctly setup your Android and/or iOS development environment, you can also debug your application via installed emulators/simulators or physical devices via:

```bash
npm run tauri android dev

or

npm run tauri ios dev
```

## Building and Distribution

Depending on which platform you are developing on, which platforms you are building your application for, and where you plan on distributing your application, the process of building and distributing your application will vary. Please refer to the [Tauri documentation](https://v2.tauri.app/distribute/) for more information on the best practices and requirements for building and distributing your application.

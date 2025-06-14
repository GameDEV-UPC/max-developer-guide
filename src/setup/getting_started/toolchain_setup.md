# Setting up the tool-chain

In order to ensure a consistent development environment across machines, we
use [Nix](https://nixos.org/). You can opt out of using Nix, in which case you
can skip straight to [setting up the formatter for your editor](#set-up-the-formatter-for-your-editor).
Note that you will not receive support if Max is not building correctly for you.

## Installing and configuring Nix
You can find the Nix installation instructions here: [https://nixos.org/download/](https://nixos.org/download/).

Once Nix is installed, you need to configure it to enable [flakes](https://nixos.wiki/wiki/flakes).
You can do so by running the following command:

```bash
echo "experimental-features = nix-command flakes" > ~/.config/nix/nix.conf
```

## Installing and configuring direnv
In order to automatically load the development environment once you open the
Max directory, you can install [direnv](https://direnv.net/) on your system.

Follow the installation instructions at [https://direnv.net/#getting-started](https://direnv.net/#getting-started).

Direnv doesn't load flakes by default, but you can enable it with an extension.
To install the extension, follow these steps:
 - If it doesn't exist, create a configuration directory for direnv:
   ```bash
   mkdir ~/.config/direnv
   ```

 - Change directory into the direnv configuration directory:
   ```bash
   cd ~/.config/direnv
   ```

 - Clone the extension's repository:
   ```bash
   git clone https://github.com/nix-community/nix-direnv
   ```

 - Add the following line to the `direnvrc` file:
    ```bash
    source $HOME/.config/direnv/nix-direnv/direnvrc
    ```

    If it the direnvrc file doesn't exist, you can create it.

## Trusting Max
Direnv doesn't load development environments unless you've told it you trust
them before. `cd` into the directory where you cloned Max and you'll see a
message on your terminal. You can run `direnv allow` to trust the repository.

## Set up the formatter for your editor
Max strictly adheres to the [style guide](../../contributing/style/format.md),
so using a formatter is mandatory. The development environment provided by the
Nix flake already includes the formatter, but you still have to integrate it
with your text editor.

### Neovim
Assuming you already have the `nvim-lspconfig` and `ccls` or `clangd` plugins
installed and configured as well as your leader key set up, you just need to
define the shortcut:
```lua
vim.keymap.set('n', '<leader>f', function()
    vim.lsp.buf.format { async = true }
end, opts)
```

### Zed
The zed editor integrates the formatter out of the box, the shortcut to activate
it can be found on [it's docs](https://zed.dev/docs/languages/cpp#formatting).

### Visual Studio Code
There exists [a Visual Studio Code extension](https://marketplace.visualstudio.com/items?itemName=xaver.clang-format)
that integrates the formatter provided by the Nix flake into the editor.

### Other editors
If you use any other text editors let us know! We'll include the instructions
here.

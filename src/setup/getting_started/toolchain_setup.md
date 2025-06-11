# Setting up the toolchain

In order to ensure a consistent developement environment accross machines, we
use [Nix](https://nixos.org/). You can opt out of using Nix, in which case you
can skip this section, although you will not recieve support if Max is not
building correctly for you.

## Installing and configuring Nix
You can find the Nix installation instructions here: [https://nixos.org/download/](https://nixos.org/download/).

Once Nix is installed, you need to configure it to enable [flakes](https://nixos.wiki/wiki/flakes).
You can do so by running the following command:

```bash
echo "experimental-features = nix-command flakes" > ~/.config/nix/nix.conf
```

## Installing and configuring direnv
In order to automatically load the developement environment once you open the
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
Direnv doesn't load developement environments unless you've told it you trust
them before. `cd` into the directory where you cloned Max and you'll see a
message on your terminal. You can run `direnv allow` to trust the repository.

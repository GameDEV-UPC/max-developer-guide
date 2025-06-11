# Getting Max

In order to get a copy of Max on your computer, you need to have git configured.

> **Note:** Your GitHub account needs to be added as a developer of Max
in order for you to be able to pull the repository.

## Setting up git
If you don't have git installed, use your package manager to install it.
 - Debian, Ubuntu, Pop!OS: `sudo apt install git openssh-server`
 - Fedora, Nobara: `sudo dnf install git openssh-server`
 - Arch, Manjaro, Endeavour: `sudo pacman -S git openssh`

## Getting SSH keys
In order to pull the Max repository from GitHub, you need to have SSH keys
configured.

If your user does not have any keys set up, you'll need to create them.
To create a new SSH key, run `ssh-keygen`. The program will ask a bunch of
questions, you can leave all of them blank by pressing enter.

This will generate an ssh key pair found at `~/.ssh/`.

## Configuring GitHub to recognize your SSH keys
In order for GitHub to recognize your ssh keys as yours, you need to add them
to your account. To do so, log into github.com and open the following link:
[https://github.com/settings/keys](https://github.com/settings/keys)

> Alternatively, you can find the page through the GUI by navigating to `Profile 
picture` > `Settings` > `SSH and GPG keys`

Now you can copy your public key. On a terminal, run `cd ~/.ssh; ls`. You should
see a file finishing in `.pub` like `id_ed25519.pub` or `id_rsa.pub`. Copy the
contents of this file by running `cat <FILE_NAME>.pub` and copying the output.

With the public ssh key on your clipboard, click on `New SSH key` on the GitHub
website and paste it on the `Key` text box. The title field will be
automatically populated once you press on `Add SSH Key`, so you don't need to
fill it.

## Pulling the Max repository
On a directory of your choosing, you can run `git clone git@github.com:GameDEV-UPC/max.git`
to download the Max repository on your computer.

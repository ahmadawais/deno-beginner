# Deno

A secure runtime for JavaScript and TypeScript.

> Deno is a simple, modern and secure runtime for JavaScript and TypeScript that uses V8 and is built in Rust.

- Secure by default. No file, network, or environment access, unless explicitly enabled.
- Supports TypeScript out of the box.
- Ships only a single executable file.
- Has built-in utilities like a dependency inspector (deno info) and a code formatter (deno fmt).
- Has a set of reviewed (audited) standard modules that are guaranteed to work with Deno: deno.land/std

## Install

With Shell:

```sh
curl -fsSL https://deno.land/x/install/install.sh | sh
```

With Homebrew:

```sh
brew install deno
```

### Deno Completions

You can generate completion script for your shell using the deno completions <shell> command. The command outputs to stdout so you should redirect it to an appropriate file.

The supported shells are:

- zsh
- bash
- fish
- powershell
- elvish

```sh
deno completions bash > /usr/local/etc/bash_completion.d/deno.bash
source /usr/local/etc/bash_completion.d/deno.bash
```


See [deno install documentation](https://github.com/denoland/deno_install) for more installation options.

## Documentation

- Website: [deno.land](https://deno.land/)
- [Runtime Documentation](https://doc.deno.land/https/github.com/denoland/deno/releases/latest/download/lib.deno.d.ts)
- [Standard Library](https://deno.land/std)
- [Third Party Modules](https://deno.land/x)
- [Manual - General documentation](https://deno.land/manual)

## 1: Hello World

```sh
deno run https://deno.land/std/examples/welcome.ts
```

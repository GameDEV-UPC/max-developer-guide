# Max engine developer guide

> [!NOTE]
> You can visit this guide at https://gamedev-upc.github.io/max-developer-guide/

## Development
You can run a local development version of this guide with the following
command:
```bash
mdbook serve --open
```

## Requirements
Some basic requirements have to be met before a change can be merged.

### Orthography and Grammar
In order to ensure quality, any text has to be grammatically and
orthographically correct. You can check for misspellings with the following
command:
```bash
hunspell <CHANGED_FILE_1.md> <CHANGED_FILE_2.md> <... ANY_MORE_FILES>
```
Make sure you have the en\_US dictionary installed.

### Consistency
In order to keep editing consistent, all regular text lines must be maximum
80 columns long, although there are a few exceptions:
- If a hyperlink is the last element of the line
- If a command is the last element of the line
- Code blocks adhere to the Max formatting standard instead

In order to keep reading consistent, all diagrams and graphics must follow
the style guide.
![Diagram style guide](diagram_style.svg)

## License
The contents of this repository are licensed under the [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/)
license. Any contributions will also be under this license unless specified
otherwise.

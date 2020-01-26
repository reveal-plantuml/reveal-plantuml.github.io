# reveal-plantuml

[![NPM](https://img.shields.io/npm/v/reveal-plantuml.svg?style=flat-square)](https://www.npmjs.com/package/reveal-plantuml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=flat-square)](https://github.com/reveal-plantuml/reveal-plantuml.github.io/blob/master/LICENSE)
[![Issues](https://img.shields.io/github/issues/reveal-plantuml/reveal-plantuml.github.io.svg?style=flat-square)](https://github.com/reveal-plantuml/reveal-plantuml.github.io/issues)

A [reveal.js](https://revealjs.com/) plugin that allow using [PlantUML](https://plantuml.com/) diagrams on HTML and Markdown slides. Check [live demo](https://reveal-plantuml.github.io) to see plugin in action.

## Installation

You can use the plugin directly from CDN:

```JavaScript
Reveal.initialize({
  dependencies: [
    { src: '//cdn.jsdelivr.net/npm/reveal-plantuml' },
  ]
});
```

or install using npm:

```bash
npm i reveal-plantuml
```

## Usage

Simply put PlantUML diagrams in code block. In markdown use `plantuml` language type:

<pre><code>```plantuml
@startuml
Alice -> Bob: Authentication Request
Bob --> Alice: Authentication Response
Alice -> Bob: Another authentication Request
Alice <-- Bob: Another authentication Response
@enduml
```</code></pre>

The `@startuml` and `@enduml` lines are optional.

In HTML use `language-plantuml` class in `code` element inside of `pre` element:

```html
<pre>
<code class="language-plantuml">
  @startuml
  Alice -> Bob: Authentication Request
  Bob --> Alice: Authentication Response
  Alice -> Bob: Another authentication Request
  Bob --> Alice: Another authentication Response
  @enduml
</code>
</pre>
```

The `@startuml` and `@enduml` lines are optional.

## Options

You can set PlantUML server path using `serverPath` configuration option:

```JavaScript
Reveal.initialize({
  plantuml: {
      serverPath: 'https://plantuml.example.com/plantuml/svg/'
  }
  dependencies: [
    { src: '//cdn.jsdelivr.net/npm/reveal-plantuml' },
  ]
});
```

The default server path is `//www.plantuml.com/plantuml/svg`

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/szkiba/reveal-plantuml/blob/master/LICENSE) for details.

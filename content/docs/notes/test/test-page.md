+++
title = "Test page"
author = ["Alex Seltmann"]
lastmod = 2023-12-10T02:43:12+01:00
draft = true
creator = "Emacs 29.1 (Org mode 9.7 + ox-hugo)"
+++

## Year numbering system {#year-numbering-system}

{{< hint info >}}
**I use the [Holocene Era or Human Era](https://en.wikipedia.org/wiki/Holocene_calendar) numbering system**. It adds exactly 10,000 years to the currently dominant AD/BC or CE/BCE numbering system. It is denoted **HE/BHE** and allows for all key dates in human history to be listed using a simle increasing date scale - while keeping the transition from the CE calendar easy: you just add the digit "1" before the current year. _Welcome to the year 12,020 HE!_
{{< /hint >}}

Examples:

| Human Era year | Common Era year | Event                                                                  |
|---------------:|----------------:|------------------------------------------------------------------------|
| 1001 HE        | 9000 BCE        | [Jericho](https://en.wikipedia.org/wiki/Jericho)                       |
| 7301 HE        | 2700 BCE        | [First pyramid](https://en.wikipedia.org/wiki/Pyramid_of_Djoser)       |
| 11460 HE       | 1460 CE         | [Machu Picchu built](https://en.wikipedia.org/wiki/Machu_Picchu)       |
| 11945 HE       | 1945 CE         | [United Nations founded](https://en.wikipedia.org/wiki/United_Nations) |

Wonderful illustration of the case for the Human Era (courtesy of
[kurzgesagt.org](<https://kurzgesagt.org>)):

```html
{{< youtube czgOWmtGVGs >}}
```

Structured arguments and thoughts, often presented in lists.

**Bold**, _italic_, `verbatim`, ~~strikethrough~~

This is a test. And Hugo Book Shortcodes in an org source file:


## Buttons {#buttons}

{{< button relref="/" >}}Get Home{{< /button >}}
{{< button href="https://github.com/alex-shpak/hugo-book" >}}Contribute{{< /button >}}


## Columns {#columns}

{{< columns >}}
#### Left Content
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.

<--->

#### Mid Content
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter!

<--->

#### Right Content
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.
{{< /columns >}}


## Expand {#expand}

{{< details "Custom Label" "..." >}}
## Markdown content
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.
{{< /details >}}

<details>
<div class="details">

Here are the _details_.
</div>
</details>

<details open>
<summary>Some <b>Summary</b></summary>
<div class="details">

Here are the _details_.
</div>
</details>


## Hints {#hints}

{{< hint info >}}
**Hint info**
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
{{< /hint >}}

{{< hint warning >}}
**Hint warning**
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
{{< /hint >}}

{{< hint danger >}}
**Hint danger**
Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
{{< /hint >}}


## Display Mode (KaTeX) {#display-mode--katex}


Here is some inline example: {{< katex >}}\pi(x){{< /katex >}}, rendered in the same line. And below is `display` example, having `display: block`
{{< katex display >}}
x = \begin{cases}
   a &\text{if } b \\
   c &\text{if } d
\end{cases}
{{< /katex >}}
Text continues here.

This should also be possible in plain org-mode: &pi;(x) vs \\(\pi(x)\\) vs \\(\pi(x)\\)

This works, but requires MathJax:

\begin{equation}
\label{eq:1}
C = W\log\_{2} (1+\mathrm{SNR})
\end{equation}

x = \begin{cases}
   a &amp;\text{if } b <br />
   c &amp;\text{if } d
\end{cases}


## Generate SVG charts and diagrams for text (Mermaid) {#generate-svg-charts-and-diagrams-for-text--mermaid}

{{< mermaid >}}
sequenceDiagram
    Alice->>Bob: Hello Bob, how are you?
    alt is sick
        Bob->>Alice: Not so good :(
    else is well
        Bob->>Alice: Feeling fresh like a daisy
    end
    opt Extra response
        Bob->>Alice: Thanks for asking
    end
{{< /mermaid >}}


## Tabs {#tabs}

{{< tabs "uniqueid" >}}
{{< tab "MacOS" >}}
# MacOS

This is tab **MacOS** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.
{{< /tab >}}

{{< tab "Linux" >}}

# Linux

This is tab **Linux** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.
{{< /tab >}}

{{< tab "Windows" >}}

# Windows

This is tab **Windows** content.

Lorem markdownum insigne. Olympo signis Delphis! Retexi Nereius nova develat
stringit, frustra Saturnius uteroque inter! Oculis non ritibus Telethusa
protulit, sed sed aere valvis inhaesuro Pallas animam: qui _quid_, ignes.
Miseratus fonte Ditis conubia.
{{< /tab >}}
{{< /tabs >}}

# One Word, First Thought

[![make.fun](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![Rank](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/dunoil/makefun-one-word-thought/rank.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)
[![Reward](https://make.fun/badge/u-0xkianno-one-word-first-thought-106abaf8/dunoil/makefun-one-word-thought/reward.svg)](https://make.fun/bounty/u-0xkianno-one-word-first-thought-106abaf8)

A make.fun bounty entry for "One Word, First Thought" ($5 prize). The program writes exactly one word, the first that comes to mind, to `/output/entry.txt`. A judge compares entries two at a time on which word is more interesting, and the most interesting word takes the reward.

The entry word is:

> serendipity

11 characters.

## How to run

```sh
node main.ts
```

By default it writes to `/output/entry.txt`. Set `OUTPUT_PATH` to write elsewhere, for example:

```sh
OUTPUT_PATH=/tmp/one-word-out/entry.txt node main.ts
```

The program validates the word against the gate (1 to 24 characters, exactly one word, no spaces or control characters), creates the output directory if needed, writes the file, reads it back and verifies it byte-for-byte, then prints the word and its character count.

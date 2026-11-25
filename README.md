# The Excuse That Almost Works

[![make.fun · u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![rank](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/Yetu89/excuse-almost-works-01/rank.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)
[![reward](https://make.fun/badge/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5/Yetu89/excuse-almost-works-01/reward.svg)](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5?utm_source=github&utm_medium=readme&utm_campaign=u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)

Entry for the [make.fun](https://make.fun) bounty **The Excuse That Almost Works**
([bounty page](https://make.fun/bounty/u-clever-harbor-75-the-excuse-that-almost-works-69fde8f5)): the
single line a gamer texts the boss to get out of work during GTA 6 launch week — one line, at most
20 words, plain text that reads like a real hurried text. Free entry.

## The line

> Sorry, the plumber's fixing the leak under my sink sometime between 8 and 4, so I'm stuck in all day.

(101 characters, 20 words, one line, no trailing newline.)

## How to run

Requires Node 22+ (stdlib only, no dependencies):

```sh
node main.ts
```

This writes the line to `/output/entry.txt`. For local testing, override
the output directory:

```sh
OUTPUT_DIR=/tmp/excuse-almost-works-out node main.ts
```

The program validates the text is 1–140 characters (counted in code points),
at most 20 words, a single line, and not only whitespace before writing it.

## License

MIT — see [LICENSE](LICENSE).

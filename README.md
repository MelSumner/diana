# Diana

DIANA stands for Differential Inspection of Accessibility Node Architecture and is a tool for hunting accessibility nodes.

## References
- [Qunit](https://qunitjs.com/) (in progress: switching from JEST to QUNIT)
- [Chrome DevTools Protocol Viewer](https://chromedevtools.github.io/devtools-protocol/tot/Accessibility)
- [Chrome Debugger Client](https://github.com/TracerBench/chrome-debugging-client)
- [Sample app used in this repo](https://diana-app.netlify.com/) - it's specifically semantic HTML, and is anticipated to grow in complexity as this tool progresses.

## Notes

- To see this tool's current state in action, run `npm run test` but there are no guarantees that it will work.

### To Discuss

- Puppeteer?
- `interestingOnly` true/false & what that means for the tool design
- it could be a useful way to enforce using [landmark regions]() by counting the `fullAXSnapshot` (because there should only be a few direct descendants of the `<body>` element)

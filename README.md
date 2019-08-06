# Diana

A tool for hunting accessibility nodes (named after Diana, the goddess of the hunt). 

## References
- [Qunit](https://qunitjs.com/)
- [Chrome DevTools Protocol Viewer](https://chromedevtools.github.io/devtools-protocol/tot/Accessibility)
- [Chrome Debugger Client](https://github.com/TracerBench/chrome-debugging-client)
- [Sample app used in this repo](https://diana-app.netlify.com/) - it's specifically semantic HTML, and is anticipated to grow in complexity as this tool progresses. 

## Notes

- To see this tool's current state in action, run `node diana.js` 

### To Discuss

- Puppeteer?
- `interestingOnly` true/false & what that means for the tool design
- it could be a useful way to enforce using [landmark regions]() by counting the `fullAXSnapshot` (because there should only be a few direct descendants of the `<body>` element)

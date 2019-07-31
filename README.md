# Diana

A tool for hunting accessibility nodes (named after Diana, the goddess of the hunt). 

## References
- [Qunit](https://qunitjs.com/)
- [Chrome DevTools Protocol Viewer](https://chromedevtools.github.io/devtools-protocol/tot/Accessibility)
- [Chrome Debugger Client](https://github.com/TracerBench/chrome-debugging-client)
- [Sample app used in this repo](https://diana-app.netlify.com/) - it's specifically semantic HTML, and is anticipated to grow in complexity as this tool progresses. 

## Notes

- Chrome vs headless Chrome seems to return a different count for `Accessibility.getFullAxTree` 

- if you visit `about:blank` & open the devtools to inspect the page: 
This is returned in the Elements tab:

```
<html>
  <head></head>
  <body></body>
</html>
```

However in the accessibility inspector, only `WebArea` is returned. This means that there are some HTML elements that the Accessibility Tree does not return precisely. This also means that we will likely need to evaluate which HTML elements are returned and which are ignored. 


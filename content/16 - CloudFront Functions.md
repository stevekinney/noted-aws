# CloudFront Functions

CloudFront functions limit what you can do, but they offer much higher throughput. You only have [a limited subset of JavaScript][cfjs] (e.g. it's not a full runtime like Lambda@Edge) and you can only do simple things like modify headers and create redirects.

[cfjs]: https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/functions-javascript-runtime-features.html#writing-functions-javascript-features-builtin-modules

## Example: Add a CORS Header

```js
function handler(event) {
  const request = event.request;
  const headers = request.headers;
  const host = request.headers.host.value;

  if (!headers.origin) headers.origin = { value: `https://${host}` };

  return request;
}
```

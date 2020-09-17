export const createIframeContent = ({ html, css, js }) => `
<html>
  <head>
    <style>
      body {
        font-size: 1.125rem;
      }
      ${css}
    </style>
  </head>
  <body>
      ${html}
  <script>
    ${js}
  </script>
  </body>
</html>
`;

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
  <script type="text/javascript">
    ${
      typeof window !== 'undefined'
        ? js.replaceAll('const', 'var').replaceAll('let', 'var')
        : js
    }
  </script>
  </body>
</html>
`;

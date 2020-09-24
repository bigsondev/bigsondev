export const createIframeContent = ({ html = '', css = '', js = '' }) => `
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
    ${js.replaceAll('const', 'var').replaceAll('let', 'var')}
  </script>
  </body>
</html>
`;

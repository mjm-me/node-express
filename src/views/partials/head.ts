export const headCreator = (title: string) => {
  return html`
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${title}</title>
    <link rel="shortcut icon" href="favicon.svg" type="image/svg+xml" />
    <script src="index.js" defer></script>
  </head> `;
};

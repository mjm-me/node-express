import { createHeader } from './partials/header.js';
import { createHead } from './partials/head.js';
import { createFooter } from './partials/footer.js';

export const renderAboutHtml = () => {
  const title = 'About | Cliente de Express';
  const pageTitle = 'Cliente de Express';

  return `
        <!DOCTYPE html>
        <html lang="en">
            ${createHead(title)}
            <body>
                ${createHeader(pageTitle)}

                <main>
                    <section>
                        <button>Cargar datos</button>
                    </section>
                    <section>
                        <h2>About</h2>
                        <p>
                            This is one of the largest telecommunications companies in the world in terms of market capitalisation and number of customers. Using the best landline, mobile and broadband networks as a basis, as well as an innovative range of digital services, the company is transforming into a ‘Digital Telco’, which places it in a very advantageous position to satisfy the needs of its customers and attract growth in new revenues.
                        </p>
                    </section>
                </main>
                ${createFooter()}
            </body>
        </html>
    `;
};

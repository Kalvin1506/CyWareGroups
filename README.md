# CyWareGroups website

A responsive, deployment-ready website for CyWareGroups, a cybersecurity
consultancy offering red-team, blue-team, cloud and application security, and
security advisory services.

## Local preview

From the repository root, run:

```powershell
python -m http.server 4173 --directory dist
```

Then open [http://localhost:4173](http://localhost:4173).

## Project structure

| File | Purpose |
| --- | --- |
| `.openai/hosting.json` | Static-hosting configuration, including the deployment directory and custom 404 behavior. |
| `.gitignore` | Excludes generated site packages and local staging files from version control. |
| `dist/index.html` | Main landing page with services, process, differentiators, and consultation call to action. |
| `dist/services.html` | Detailed red-team, blue-team, cloud/AppSec, and advisory service descriptions. |
| `dist/about.html` | Company positioning, operating principles, and engagement approach. |
| `dist/contact.html` | Dedicated contact page and consultation enquiry form. |
| `dist/privacy.html` | Privacy notice for website visitors and enquiries. |
| `dist/404.html` | Branded fallback page for unknown routes. |
| `dist/styles.css` | Shared responsive layout, typography, colors, components, and animations. |
| `dist/app.js` | Navigation, scroll effects, form behavior, and other progressive interactions. |
| `dist/favicon.svg` | Scalable CyWareGroups browser icon. |
| `dist/robots.txt` | Search-engine crawler instructions. |
| `dist/sitemap.xml` | Search-engine index of the public website pages. |

## Deployment

The deployable site is entirely contained in `dist/`. Configure any static host
to publish that directory and use `dist/404.html` as its not-found page. No build
step is required.

The enquiry form prepares a structured email to `hello@cywaregroups.com` using
the visitor's email application, so it works without a third-party form service.
Confirm that this mailbox is monitored before launch. For direct server-side
submission, connect the form to a trusted CRM or form endpoint.

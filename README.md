# Purchasing Power Parities and the Real Size of Arab Economies

Static copy of the UN ESCWA ICP publication website (originally at https://icp.unescwa.org/index-2024.html),
prepared for hosting on GitHub Pages.

- `index-2024.html` – English page
- `index-2024-ar.html` – Arabic page
- `index.html` – redirects to the English page so the site root works
- `charts/` – chart scripts, slide images, the full report, data files (Excel/PDF) and country profiles
- `sdgs/` – shared styles, scripts, logos, icons and video

Third-party libraries (jQuery, Highcharts, Owl Carousel, Font Awesome, Google Fonts) and the
Flourish bar-chart-race embeds load from their public CDNs, exactly as on the original site.

## Publish on GitHub Pages

1. Create a repository and push the contents of this folder to the `main` branch.
2. In the repository go to **Settings → Pages**, set **Source** to *Deploy from a branch*,
   choose `main` and `/ (root)`, then **Save**.
3. The site will be live at `https://<account>.github.io/<repository>/` after a minute or two.

All internal links are relative, so the site works from any sub-path or custom domain.

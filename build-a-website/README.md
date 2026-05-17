# Forensic Case Academy

A Netlify-ready educational website for teaching Forensic Medicine and Toxicology through fictional, non-graphic case-based learning.

## Public Site

Open `index.html` in a browser to use the site. It includes:

- Home page with a case-library preview
- Filterable case library
- Case detail pages with teaching sections and quiz feedback
- Topic, learning path, resources, FAQ, and contact views
- Contact form validation and success state

Editable site content lives in `content/site.json`. The public site loads that file when hosted on Netlify and falls back to built-in demo content if opened directly from disk.

## Admin Editing With Netlify + Decap CMS

The admin area is ready at `/admin/`.

To publish and enable login:

1. Create a GitHub repository and upload this folder.
2. In Netlify, add a new site from that GitHub repository.
3. Use the default build settings. `netlify.toml` publishes this folder directly.
4. In Netlify, enable Identity for the site.
5. Enable Git Gateway for Identity.
6. Invite your admin email from Netlify Identity.
7. Open `https://your-site-name.netlify.app/admin/` and log in.
8. Edit cases, detailed modules, topics, learning path, resources, and FAQ.

Do not upload the `qa/` folder if you want a cleaner production repository; it only contains local design and testing screenshots.

All case material is fictional and for education only.

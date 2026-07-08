This folder holds static assets served at the site root.

RÉSUMÉ (optional)
-----------------
The site ships with a live, print-to-PDF résumé at /resume, generated from
data/site.ts — always in sync with the site, no file needed.

If you'd rather link a hand-tuned PDF instead of (or in addition to) the
generated page:

  1. Drop your file here as:  Omkar_Vaidya_Resume.pdf
  2. In data/site.ts, set:    resumePdf: "/Omkar_Vaidya_Resume.pdf"

When resumePdf is set, the "Résumé" button downloads that PDF. When it's empty,
the button opens the generated /resume page.

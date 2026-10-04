# Résumé PDF

Add your résumé here as:

```
tina-williamson-resume.pdf
```

The filename is set in `src/data/site.ts` (`resumePdf`). The download button on
`/resume/` only renders when the file exists, so the site never links to a
missing PDF — add the file, rebuild, and the button appears.

Keep the PDF under ~1 MB and make sure the text is selectable (exported from the
source document, not a scan) so it stays accessible and parseable by applicant
tracking systems.

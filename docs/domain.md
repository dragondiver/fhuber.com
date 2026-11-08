# Domain und DNS

fhuber.com liegt bei IONOS (Registrar und DNS). Die Seite kommt von GitHub Pages.

## Einträge bei IONOS (Domain fhuber.com → DNS)

| Typ   | Hostname | Wert |
|-------|----------|------|
| A     | @        | 185.199.108.153 |
| A     | @        | 185.199.109.153 |
| A     | @        | 185.199.110.153 |
| A     | @        | 185.199.111.153 |
| AAAA  | @        | 2606:50c0:8000::153 |
| AAAA  | @        | 2606:50c0:8001::153 |
| AAAA  | @        | 2606:50c0:8002::153 |
| AAAA  | @        | 2606:50c0:8003::153 |
| CNAME | www      | dragondiver.github.io |

Der alte A-Eintrag `@ → 217.160.0.81` (IONOS-Parkseite) kommt weg, ebenso ein
alter AAAA- oder www-Eintrag von IONOS.

Nicht anfassen: MX und TXT der Hauptdomain (Mail bei Apple iCloud, SPF, DMARC,
`MS=`), `sig1._domainkey`, alles unter `resend`, `mise-en-place` und
`_railway-verify.mise-en-place`.

## GitHub

Repo → Settings → Pages: Source „GitHub Actions“, Custom domain `fhuber.com`,
nach dem Zertifikat „Enforce HTTPS“ anhaken.

## Prüfen

```bash
dig +short fhuber.com A @ns1101.ui-dns.org
dig +short fhuber.com MX @ns1101.ui-dns.org   # muss weiter iCloud zeigen
curl -sI https://fhuber.com | head -1
```

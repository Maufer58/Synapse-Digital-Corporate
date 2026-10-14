# SYNAPSE DIGITAL — sito aziendale

Sito **corporate** (entità legale), distinto dalla landing prodotto **KINEVA FIT**.

| | Azienda | Prodotto |
|---|---|---|
| Dominio | `https://synapse-digital-adv-app.com` | `https://kineva-fit.synapse-digital-adv-app.com` |
| Cartella repo | `corporate/` | `website/` |
| Contenuto | ragione sociale, sede, P.IVA, D-U-N-S, contatti | presentazione app KINEVA FIT |

## Contenuti per verifica Apple Organization

- Nome legale: **SYNAPSE DIGITAL Advanced App Development**
- Sede: Largo Molinetto n. 1, 20900 Monza (MB), Italia
- P.IVA `14895130962` · D-U-N-S `302873219`
- Email sul dominio: `info@…` e `support@…`
- Privacy aziendale: `privacy.html`
- Logo: `assets/logo-mark.svg` / `logo-horizontal.svg` (+ PNG)

**Telefono:** non è ancora in pagina. Apple Organization spesso lo richiede: aggiungere un recapito reale in `#contact` prima dell’invio della verifica.

## Anteprima locale

```bash
cd corporate
python3 -m http.server 8787
# http://127.0.0.1:8787
```

## Deploy Cloudflare Pages

1. Nuovo progetto Pages con root = cartella `corporate/` (o sync verso un repo dedicato).
2. Custom domain: **synapse-digital-adv-app.com** (e `www` → apex se serve).
3. Lasciare **kineva-fit.** sul progetto landing esistente (`website/`).

Sul Mac, dalla root KINEVA FIT:

```bash
./tool/sync_public_sites.sh --corporate-only
```

(richiede clone/repo pubblico configurato; vedi script).

## Logo

- Mark vettoriale: `assets/logo-mark.svg` (favicon / header)
- Wordmark: `assets/logo-horizontal.svg`
- Raster di supporto: `*.png` / `*-photo.jpg`

# ESTRUCTURA DE LA GOOGLE SHEET
# Creá una Sheet con estas 4 hojas (tabs):

## Hoja 1: IOL
| ticker | nombre | cantidad | precio_entrada | grupo | yahoo_symbol | ratio | accion | label |
|--------|--------|----------|---------------|-------|-------------|-------|--------|-------|
| TZXO6 | BONCER Oct 2026 | 73357 | 148.50 | cer | | 1 | hold | mantener |
| TZX26 | BONCER Jun 2026 | 5619 | 352.45 | cer | | 1 | hold | mantener |
| AL30 | Bono Rep. Argentina USD | 228 | 88003.16 | al30 | | 1 | hold | mantener |
| SPY | CEDEAR S&P 500 | 4 | 51693.75 | tech | SPY | 0.1 | sell | vender → Tasty |
| NVDA | CEDEAR Nvidia | 10 | 11383 | tech | NVDA | 0.04166667 | wait | esperar earnings |
| GOOGL | CEDEAR Alphabet | 11 | 8848.64 | tech | GOOGL | 1 | wait | esperar rebote |
| XLE | CEDEAR Energy Select | 2 | 42000 | energy | XLE | 0.5 | hold | mantener |
| GGAL | Grupo Financiero Galicia | 1 | 6085 | ar | GGAL | 1 | hold | mantener |
| PAMP | Pampa Energía | 27 | 0 | energy | PAM | 1 | hold | hold (earnings 13/5) |
| TZXD7 | BONCER Dic 2027 | 0 | 0 | cer | | 1 | hold | mantener |

## Hoja 2: Tastytrade
| ticker | nombre | cantidad | precio_entrada_usd | grupo | accion |
|--------|--------|----------|-------------------|-------|--------|
| SPY | SPDR S&P 500 ETF | 0 | 0 | etf | comprar 1 abril |
| VWO | ETF Mercados Emergentes | 0 | 0 | etf | comprar 1 abril |
| EWZ | ETF Brasil | 0 | 0 | etf | comprar 1 abril |
| GLD | SPDR Gold Shares | 0 | 0 | etf | comprar 1 abril |
| NVDA | Nvidia Corporation | 0 | 0 | tech | migrar desde IOL |
| GOOGL | Alphabet Inc. | 0 | 0 | tech | migrar desde IOL |
| MELI | MercadoLibre | 0 | 0 | latam | fraccionario |

## Hoja 3: Crypto
| ticker | nombre | cantidad | precio_entrada_usd | plataforma |
|--------|--------|----------|-------------------|-----------|
| BTC | Bitcoin | 0.001002 | 80000 | Binance |

## Hoja 4: Config
| clave | valor |
|-------|-------|
| mep | 1422 |
| nombre | Mi Portafolio |
| sheet_api_url | (pegá acá la URL del Apps Script después de deployar) |

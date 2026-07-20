Este repositorio contiene el proyecto NQ Session Tracker. Las plantillas de informe están en plantillas/informe-1445.md y plantillas/actualizacion-1520.md. Los informes completos generados se guardan en informes/{fecha}-{checkpoint}.md. Los datos numéricos se guardan en datos.json en la raíz del repositorio.
Eres el analista de mercados del proyecto NQ Session Tracker. En cada ejecución, sigue siempre estas reglas:

- Usa exclusivamente información confirmada y reciente en el momento de ejecución. No inventes datos, precios, niveles técnicos ni declaraciones.
- Cita las fuentes utilizadas y la hora exacta de actualización (España peninsular).
- Distingue siempre datos en tiempo real, datos retrasados y estimaciones.
- Separa hechos confirmados de rumores o información sin verificar.
- No des órdenes directas de compra o venta.
- Cuando no haya datos suficientes para una sección, indícalo expresamente en vez de rellenar con suposiciones.
- Al final de cada informe, escribe (o actualiza) el archivo datos.json en la carpeta del proyecto añadiendo una nueva entrada con este formato exacto:

{
  "date": "AAAA-MM-DD",
  "cp": "pre" | "update",
  "up": número (0-100),
  "down": número (0-100),
  "flat": número (0-100),
  "bias": "up" | "down" | "flat",
  "conv": número (0-100),
  "ifm": número (0-100),
  "notes": "resumen ejecutivo en una frase",
  "result": null
}

up + down + flat deben sumar 100. No sobrescribas entradas de fechas anteriores, añade la nueva al array del JSON.

[
  {
    "date": "2026-07-18",
    "cp": "update",
    "up": 20,
    "down": 45,
    "flat": 35,
    "bias": "down",
    "conv": 40,
    "ifm": 35,
    "notes": "Sin checkpoint 'pre' de referencia hoy (sábado, mercados cerrados); sesgo bajista de continuación tras el rout de semis del viernes y la escalada EEUU-Irán.",
    "result": null
  },
  {
    "date": "2026-07-18",
    "cp": "pre",
    "up": 20,
    "down": 45,
    "flat": 35,
    "bias": "down",
    "conv": 55,
    "ifm": 38,
    "notes": "Sesgo bajista: rout de semis (SOX -9% semanal) tras Kimi K3 de Moonshot y escalada EEUU-Irán en Ormuz (WTI +14% semanal); sin dato overnight real por cierre de fin de semana.",
    "result": null
  },
  {
    "date": "2026-07-19",
    "cp": "update",
    "up": 18,
    "down": 50,
    "flat": 32,
    "bias": "down",
    "conv": 45,
    "ifm": 30,
    "notes": "Sin checkpoint 'pre' de hoy (mercados cerrados, futuros aún sin reabrir); sesgo bajista reforzado tras 2 militares de EEUU muertos en Jordania y ruptura del memorando Irán-EEUU, sin confirmación de precio aún.",
    "result": null
  },
  {
    "date": "2026-07-19",
    "cp": "pre",
    "up": 12,
    "down": 60,
    "flat": 28,
    "bias": "down",
    "conv": 65,
    "ifm": 20,
    "notes": "Fuertemente bajista: guerra activa EEUU-Irán (8ª noche), 2 militares de EEUU muertos y 1 desaparecido en ataque a base de Jordania, MOU suspendido por Irán, más rout de semis (SOX/SMH -6% semanal); sin dato overnight real de NQ por cierre de fin de semana.",
    "result": null
  },
  {
    "date": "2026-07-19",
    "cp": "update",
    "up": 12,
    "down": 60,
    "flat": 28,
    "bias": "down",
    "conv": 65,
    "ifm": 20,
    "notes": "Sin cambios materiales confirmados desde el informe de 14:45; futuros CME siguen cerrados (reabren ~00:00 CEST) y no hay overnight de NQ. Escalada EEUU-Irán y rout de semis se mantienen como tesis vigente sin nuevos catalizadores verificados.",
    "result": null
  },
  {
    "date": "2026-07-20",
    "cp": "pre",
    "up": 55,
    "down": 20,
    "flat": 25,
    "bias": "up",
    "conv": 60,
    "ifm": 62,
    "notes": "Rebote alcista tras el rout de semis: futuros NQ +0.76% premarket y Nasdaq Composite +1% intradia, VIX cede a 18.2, pese a 9a noche de escalada EEUU-Iran y SOXX en mercado bajista tecnico (-20% desde el pico de junio).",
    "result": null
  },
  {
    "date": "2026-07-20",
    "cp": "update",
    "up": 50,
    "down": 24,
    "flat": 26,
    "bias": "up",
    "conv": 55,
    "ifm": 58,
    "notes": "Moderación leve frente al checkpoint 'pre': ganancias de índices y de AMD algo más contenidas (Nasdaq +0.8% vs +1% intradía previo, AMD +2.56% vs +4.5% premarket) y VIX repunta ligeramente (~18.4-18.9 vs 18.2); sesgo alcista se mantiene pero con algo menos de convicción, sin nuevo catalizador de la guerra EEUU-Irán.",
    "result": null
  }
]

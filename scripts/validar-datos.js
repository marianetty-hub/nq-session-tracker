#!/usr/bin/env node
// scripts/validar-datos.js
// Bloquea cualquier commit que toque entradas de datos.json de fechas != hoy.

const { execSync } = require('child_process');
const fs = require('fs');

function hoyISO() {
  const d = new Date();
  return d.toISOString().slice(0, 10); // YYYY-MM-DD
}

function leerJSONDeGit(ref, ruta) {
  try {
    const contenido = execSync(`git show ${ref}:${ruta}`, { encoding: 'utf8' });
    return JSON.parse(contenido);
  } catch (e) {
    return null;
  }
}

function clave(entrada) {
  return `${entrada.date}__${entrada.cp}`;
}

function main() {
  const hoy = hoyISO();
  const ruta = 'datos.json';

  const anterior = leerJSONDeGit('HEAD', ruta);
  const nuevoRaw = fs.readFileSync(ruta, 'utf8');
  const nuevo = JSON.parse(nuevoRaw);

  if (!anterior) {
    console.log('No hay versión anterior en HEAD (primer commit). OK.');
    process.exit(0);
  }

  const mapaAnterior = new Map(anterior.map(e => [clave(e), e]));
  const mapaNuevo = new Map(nuevo.map(e => [clave(e), e]));

  const errores = [];

  for (const [k, entradaVieja] of mapaAnterior) {
    if (entradaVieja.date === hoy) continue;
    const entradaNueva = mapaNuevo.get(k);
    if (!entradaNueva) {
      errores.push(`Entrada eliminada indebidamente: ${k}`);
      continue;
    }
    if (JSON.stringify(entradaNueva) !== JSON.stringify(entradaVieja)) {
      errores.push(`Entrada de fecha pasada modificada: ${k}`);
    }
  }

  for (const [k, entradaNueva] of mapaNuevo) {
    if (entradaNueva.date === hoy) continue;
    if (!mapaAnterior.has(k)) {
      errores.push(`Entrada nueva con fecha pasada (prohibido): ${k}`);
    }
  }

  if (errores.length > 0) {
    console.error('❌ VALIDACIÓN FALLIDA — commit bloqueado:');
    errores.forEach(e => console.error(' - ' + e));
    process.exit(1);
  }

  console.log('✅ Validación OK: solo se ha tocado la fecha de hoy (' + hoy + ').');
  process.exit(0);
}

main();

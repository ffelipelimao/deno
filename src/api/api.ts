import axiod from 'https://deno.land/x/axiod@0.21/mod.ts';

export const api = axiod.create({
  baseURL: 'https://www.cheapshark.com/api/1.0/',
});
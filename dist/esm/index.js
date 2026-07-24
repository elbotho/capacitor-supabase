import { registerPlugin } from '@capacitor/core';
const CapacitorSupabase = registerPlugin('CapacitorSupabase', {
    web: () => import('./web').then((m) => new m.CapacitorSupabaseWeb()),
});
export * from './definitions';
export { CapacitorSupabase };
//# sourceMappingURL=index.js.map
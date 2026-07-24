import { WebPlugin } from '@capacitor/core';
export class CapacitorSupabaseWeb extends WebPlugin {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async initialize(_options) {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async signInWithPassword(_options) {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async signUp(_options) {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    async signInAnonymously() {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async signInWithOAuth(_options) {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async signInWithOtp(_options) {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async verifyOtp(_options) {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    async signOut() {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    async getSession() {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    async refreshSession() {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    async getUser() {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async setSession(_options) {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async select(_options) {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async insert(_options) {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async update(_options) {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    async delete(_options) {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    async addListener(_eventName, 
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    _listenerFunc) {
        throw new Error('Web implementation not available. Use @supabase/supabase-js directly for web.');
    }
    async getPluginVersion() {
        return { version: 'web' };
    }
}
//# sourceMappingURL=web.js.map
import { WebPlugin } from '@capacitor/core';
import type { AuthResult, AuthStateChange, CapacitorSupabasePlugin, DeleteOptions, InsertOptions, QueryResult, SelectOptions, Session, SetSessionOptions, SignInWithOAuthOptions, SignInWithOtpOptions, SignInWithPasswordOptions, SignUpOptions, SupabaseConfig, UpdateOptions, User, VerifyOtpOptions } from './definitions';
export declare class CapacitorSupabaseWeb extends WebPlugin implements CapacitorSupabasePlugin {
    initialize(_options: SupabaseConfig): Promise<void>;
    signInWithPassword(_options: SignInWithPasswordOptions): Promise<AuthResult>;
    signUp(_options: SignUpOptions): Promise<AuthResult>;
    signInAnonymously(): Promise<AuthResult>;
    signInWithOAuth(_options: SignInWithOAuthOptions): Promise<void>;
    signInWithOtp(_options: SignInWithOtpOptions): Promise<void>;
    verifyOtp(_options: VerifyOtpOptions): Promise<AuthResult>;
    signOut(): Promise<void>;
    getSession(): Promise<{
        session: Session | null;
    }>;
    refreshSession(): Promise<{
        session: Session | null;
    }>;
    getUser(): Promise<{
        user: User | null;
    }>;
    setSession(_options: SetSessionOptions): Promise<{
        session: Session | null;
    }>;
    select<T = unknown>(_options: SelectOptions): Promise<QueryResult<T[]>>;
    insert<T = unknown>(_options: InsertOptions): Promise<QueryResult<T>>;
    update<T = unknown>(_options: UpdateOptions): Promise<QueryResult<T>>;
    delete<T = unknown>(_options: DeleteOptions): Promise<QueryResult<T>>;
    addListener(_eventName: 'authStateChange', _listenerFunc: (data: AuthStateChange) => void): Promise<{
        remove: () => Promise<void>;
    }>;
    getPluginVersion(): Promise<{
        version: string;
    }>;
}

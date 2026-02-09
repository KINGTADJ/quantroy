import { create } from 'zustand';
import { createClient } from '@/lib/supabase/client';
import type { User } from '@supabase/supabase-js';

interface Profile {
  id: string;
  email: string;
  first_name: string | null;
  last_name: string | null;
  phone: string | null;
  kyc_status: 'not_started' | 'pending' | 'approved' | 'rejected';
  role: 'user' | 'admin';
  referral_code: string;
}

interface AuthState {
  user: User | null;
  profile: Profile | null;
  isLoading: boolean;
  isInitialized: boolean;
  signIn: (email: string, password: string) => Promise<{ error: Error | null }>;
  signInWithGoogle: () => Promise<{ error: Error | null }>;
  signUp: (email: string, password: string, referralCode?: string) => Promise<{ error: Error | null }>;
  signOut: () => Promise<void>;
  initialize: () => Promise<void>;
  fetchProfile: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  profile: null,
  isLoading: false,
  isInitialized: false,

  initialize: async () => {
    const supabase = createClient();
    
    // Add timeout to prevent infinite loading
    const timeoutPromise = new Promise<void>((resolve) => {
      setTimeout(() => {
        console.log('Auth initialization timeout - proceeding anyway');
        resolve();
      }, 5000);
    });

    const authPromise = (async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        set({ user });
        
        if (user) {
          await get().fetchProfile();
        }
      } catch (error) {
        console.error('Auth initialization error:', error);
      }
    })();

    await Promise.race([authPromise, timeoutPromise]);
    set({ isInitialized: true });

    // Listen for auth changes
    supabase.auth.onAuthStateChange(async (event, session) => {
      set({ user: session?.user || null });
      
      if (session?.user) {
        await get().fetchProfile();
      } else {
        set({ profile: null });
      }
    });
  },

  fetchProfile: async () => {
    const supabase = createClient();
    const { user } = get();
    
    if (!user) return;

    const { data, error } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', user.id)
      .single();

    if (!error && data) {
      set({ profile: data as Profile });
    }
  },

  signIn: async (email: string, password: string) => {
    set({ isLoading: true });
    const supabase = createClient();

    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      return { error: null };
    } catch (error) {
      return { error: error as Error };
    } finally {
      set({ isLoading: false });
    }
  },

  signInWithGoogle: async () => {
    const supabase = createClient();

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });

      if (error) throw error;
      
      return { error: null };
    } catch (error) {
      return { error: error as Error };
    }
  },

  signUp: async (email: string, password: string, referralCode?: string) => {
    set({ isLoading: true });
    const supabase = createClient();

    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            referred_by: referralCode || null,
          },
        },
      });

      if (error) throw error;

      // Profile will be created by database trigger
      
      return { error: null };
    } catch (error) {
      return { error: error as Error };
    } finally {
      set({ isLoading: false });
    }
  },

  signOut: async () => {
    const supabase = createClient();
    await supabase.auth.signOut();
    set({ user: null, profile: null });
  },
}));

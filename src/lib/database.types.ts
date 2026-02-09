export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          email: string;
          first_name: string | null;
          last_name: string | null;
          phone: string | null;
          kyc_status: 'not_started' | 'pending' | 'approved' | 'rejected';
          role: 'user' | 'admin';
          referral_code: string;
          referred_by: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          email: string;
          first_name?: string | null;
          last_name?: string | null;
          phone?: string | null;
          kyc_status?: 'not_started' | 'pending' | 'approved' | 'rejected';
          role?: 'user' | 'admin';
          referral_code: string;
          referred_by?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          email?: string;
          first_name?: string | null;
          last_name?: string | null;
          phone?: string | null;
          kyc_status?: 'not_started' | 'pending' | 'approved' | 'rejected';
          role?: 'user' | 'admin';
          referral_code?: string;
          referred_by?: string | null;
          updated_at?: string;
        };
      };
      wallets: {
        Row: {
          id: string;
          user_id: string;
          btc_address: string | null;
          eth_address: string | null;
          usdt_address: string | null;
          usdc_address: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          btc_address?: string | null;
          eth_address?: string | null;
          usdt_address?: string | null;
          usdc_address?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          btc_address?: string | null;
          eth_address?: string | null;
          usdt_address?: string | null;
          usdc_address?: string | null;
          updated_at?: string;
        };
      };
      investments: {
        Row: {
          id: string;
          user_id: string;
          strategy: 'starter' | 'pro' | 'elite' | 'vip';
          amount: number;
          currency: 'btc' | 'eth' | 'usdt' | 'usdc';
          status: 'pending' | 'active' | 'completed' | 'cancelled';
          tx_hash: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          strategy: 'starter' | 'pro' | 'elite' | 'vip';
          amount: number;
          currency: 'btc' | 'eth' | 'usdt' | 'usdc';
          status?: 'pending' | 'active' | 'completed' | 'cancelled';
          tx_hash?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          strategy?: 'starter' | 'pro' | 'elite' | 'vip';
          amount?: number;
          currency?: 'btc' | 'eth' | 'usdt' | 'usdc';
          status?: 'pending' | 'active' | 'completed' | 'cancelled';
          tx_hash?: string | null;
          updated_at?: string;
        };
      };
      payouts: {
        Row: {
          id: string;
          user_id: string;
          investment_id: string;
          amount: number;
          currency: 'btc' | 'eth' | 'usdt' | 'usdc';
          status: 'pending' | 'processing' | 'completed' | 'failed';
          tx_hash: string | null;
          wallet_address: string;
          scheduled_at: string;
          processed_at: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          investment_id: string;
          amount: number;
          currency: 'btc' | 'eth' | 'usdt' | 'usdc';
          status?: 'pending' | 'processing' | 'completed' | 'failed';
          tx_hash?: string | null;
          wallet_address: string;
          scheduled_at: string;
          processed_at?: string | null;
          created_at?: string;
        };
        Update: {
          amount?: number;
          status?: 'pending' | 'processing' | 'completed' | 'failed';
          tx_hash?: string | null;
          processed_at?: string | null;
        };
      };
      referrals: {
        Row: {
          id: string;
          referrer_id: string;
          referred_id: string;
          level: number;
          commission_rate: number;
          total_earned: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          referrer_id: string;
          referred_id: string;
          level: number;
          commission_rate: number;
          total_earned?: number;
          created_at?: string;
        };
        Update: {
          total_earned?: number;
        };
      };
      kyc_documents: {
        Row: {
          id: string;
          user_id: string;
          document_type: 'id_front' | 'id_back' | 'proof_of_address' | 'selfie';
          file_url: string;
          status: 'pending' | 'approved' | 'rejected';
          reviewed_by: string | null;
          reviewed_at: string | null;
          rejection_reason: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          document_type: 'id_front' | 'id_back' | 'proof_of_address' | 'selfie';
          file_url: string;
          status?: 'pending' | 'approved' | 'rejected';
          reviewed_by?: string | null;
          reviewed_at?: string | null;
          rejection_reason?: string | null;
          created_at?: string;
        };
        Update: {
          status?: 'pending' | 'approved' | 'rejected';
          reviewed_by?: string | null;
          reviewed_at?: string | null;
          rejection_reason?: string | null;
        };
      };
    };
  };
}

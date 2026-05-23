"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/utils/supabase/client";
import { AlertCircle, Loader } from "lucide-react";

export default function AdminLogin() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const wasRedirected = searchParams.get("redirected") === "1";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();
      const { data, error: authError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (authError) {
        setError(authError.message || "Invalid email or password.");
        return;
      }

      if (data.session) {
        router.push("/admin");
        router.refresh();
      }
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4 selection:bg-emerald-500 selection:text-white font-sans relative overflow-hidden w-full">
      
      {/* Background Aesthetic Blur */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="w-full max-w-sm bg-white/5 backdrop-blur-2xl border border-white/10 p-8 rounded-[2rem] shadow-2xl z-10">
        
        {/* Logo Area */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white tracking-tighter uppercase flex items-center justify-center">
            Savor.it <span className="text-emerald-500 ml-1">✦</span>
          </h1>
          <p className="text-zinc-400 text-xs font-medium tracking-widest mt-2 uppercase">Secure Workspace</p>
        </div>

        {/* Was Redirected Alert */}
        {wasRedirected && !error && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/20 mb-4 text-xs font-bold text-amber-500 flex items-center space-x-2">
            <AlertCircle size={14} />
            <span>You must login to access Admin OS.</span>
          </div>
        )}

        {/* Error Alert */}
        {error && (
          <div className="p-3.5 rounded-xl bg-red-500/10 border border-red-500/20 mb-4 text-xs font-bold text-red-500 flex items-center space-x-2">
            <AlertCircle size={14} />
            <span>{error}</span>
          </div>
        )}

        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider pl-1">Admin Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="hello@savorit.com" 
              className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder-zinc-600"
              required
            />
          </div>

          <div className="space-y-2">
            <div className="flex justify-between items-center pl-1">
              <label className="text-[10px] font-bold text-zinc-400 uppercase tracking-wider">Password</label>
            </div>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••" 
              className="w-full bg-black/50 border border-zinc-800 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition-all placeholder-zinc-600"
              required
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full bg-white text-black hover:bg-zinc-200 font-bold py-3.5 rounded-xl text-sm transition-all active:scale-95 mt-4 flex items-center justify-center space-x-2 shadow-lg"
          >
            {loading ? (
              <>
                <Loader size={16} className="animate-spin text-black" />
                <span>Authenticating...</span>
              </>
            ) : (
              <span>Authenticate</span>
            )}
          </button>

          <button 
            type="button"
            onClick={() => {
              document.cookie = "admin_bypass=true; path=/";
              router.push("/admin");
              router.refresh();
            }}
            className="w-full bg-white/5 border border-white/10 hover:bg-white/10 text-zinc-300 font-bold py-3.5 rounded-xl text-sm transition-all active:scale-95 mt-2 shadow-inner"
          >
            Bypass Auth (Inspect Mode)
          </button>
        </form>

        <div className="mt-6 text-center">
          <p className="text-[10px] text-zinc-500 font-medium flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 mr-1">
              <path fillRule="evenodd" d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.375 8.25v-3a3.375 3.375 0 10-6.75 0v3h6.75z" clipRule="evenodd" />
            </svg>
            End-to-end encrypted connection
          </p>
        </div>

      </div>
    </div>
  );
}

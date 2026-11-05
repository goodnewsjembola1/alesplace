/* Shared Supabase connection for Ales Place.
   This publishable key is intended for browser use.
   Keep all secret/service-role keys out of this file and GitHub. */
(function () {
  const SUPABASE_URL = "https://oktzibpdfketjofvznsl.supabase.co";
  const SUPABASE_PUBLISHABLE_KEY = "sb_publishable_X0yYAx-lcDtqul4K9Bdysg_TPCVaXta";

  if (!window.supabase || typeof window.supabase.createClient !== "function") {
    console.error("Supabase library did not load. Check your internet connection.");
    return;
  }

  window.alesSupabase = window.supabase.createClient(
    SUPABASE_URL,
    SUPABASE_PUBLISHABLE_KEY
  );
  console.info("Ales Place Supabase client initialized.");
})();
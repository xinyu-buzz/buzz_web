import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../lib/supabase";

function getSessionId(): string {
  const key = "buzz_session_id";
  let id = sessionStorage.getItem(key);
  if (!id) {
    id = crypto.randomUUID();
    sessionStorage.setItem(key, id);
  }
  return id;
}

export function usePageTracking() {
  const location = useLocation();
  const prevPath = useRef<string | null>(null);

  useEffect(() => {
    // Skip duplicate fires for the same path
    if (location.pathname === prevPath.current) return;
    prevPath.current = location.pathname;

    const sessionId = getSessionId();

    // Fire-and-forget insert
    supabase
      .from("website_page_views")
      .insert({
        page_path: location.pathname,
        referrer: document.referrer || null,
        user_agent: navigator.userAgent || null,
        screen_width: window.innerWidth,
        screen_height: window.innerHeight,
        language: navigator.language || null,
        session_id: sessionId,
      })
      .then(({ error }) => {
        if (error) console.warn("Page tracking error:", error.message);
      });
  }, [location.pathname]);
}

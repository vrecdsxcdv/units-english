"use client";
import { useEffect, useRef } from "react";

export default function ClientChunkRecovery() {
  const reloaded = useRef(false);

  useEffect(() => {
    const onUnhandledRejection = (event: PromiseRejectionEvent) => {
      const msg = String(event?.reason?.message || event?.reason || "");
      if (!reloaded.current && /Loading chunk|ChunkLoadError/i.test(msg)) {
        reloaded.current = true;
        window.location.reload();
      }
    };
    const onError = (event: ErrorEvent) => {
      const msg = String(event?.message || "");
      if (!reloaded.current && /Loading chunk|ChunkLoadError/i.test(msg)) {
        reloaded.current = true;
        window.location.reload();
      }
    };
    window.addEventListener("unhandledrejection", onUnhandledRejection);
    window.addEventListener("error", onError);
    return () => {
      window.removeEventListener("unhandledrejection", onUnhandledRejection);
      window.removeEventListener("error", onError);
    };
  }, []);

  return null;
}


















































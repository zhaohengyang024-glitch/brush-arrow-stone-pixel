import { useEffect, useRef } from "react";
import { normalizeKey } from "@/lib/archive/content";
import { useArchive } from "@/lib/archive/store";

const CONSOLE_NOTE = `
如果你看到了这里，
说明你真的很喜欢研究这个网站。
那我也告诉你一件事：
我比你想象中更喜欢你。
`;

export function EasterEggs() {
  const keyword = useArchive((s) => s.config.keyword);
  const unlockHidden = useArchive((s) => s.unlockHidden);
  const buffer = useRef("");

  useEffect(() => {
    console.info(CONSOLE_NOTE);
  }, []);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement | null)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA") return;
      if (e.key.length !== 1) return;
      buffer.current = (buffer.current + e.key).slice(-24);
      if (normalizeKey(buffer.current).includes(normalizeKey(keyword))) {
        unlockHidden();
        window.location.assign("/secret");
      }
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [keyword, unlockHidden]);

  return null;
}

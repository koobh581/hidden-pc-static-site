import { useEffect, useMemo, useState } from "react";
import { X } from "lucide-react";

const STORAGE_KEY = "hidden_pc_popup_hide_until_v1";

function getMidnightTimestamp() {
  const tomorrow = new Date();
  tomorrow.setHours(24, 0, 0, 0);
  return tomorrow.getTime();
}

export default function PromoPopup() {
  const [open, setOpen] = useState(false);
  const [hideToday, setHideToday] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (!saved || Date.now() > Number(saved)) {
        setOpen(true);
      }
    } catch {
      setOpen(true);
    }
  }, []);

  const imageSrc = useMemo(() => "/popup-grand-open.png", []);

  const closePopup = () => {
    try {
      if (hideToday) {
        localStorage.setItem(STORAGE_KEY, String(getMidnightTimestamp()));
      }
    } catch {}
    setOpen(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-start justify-center bg-black/75 px-3 py-4 md:px-6 md:py-8">
      <div className="relative w-full max-w-[1180px] overflow-hidden rounded-none border border-white/20 bg-white shadow-2xl">
        <button
          type="button"
          onClick={closePopup}
          aria-label="팝업 닫기"
          className="absolute right-3 top-3 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black shadow-md transition hover:bg-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="max-h-[calc(100vh-120px)] overflow-auto bg-white">
          <img
            src={imageSrc}
            alt="HIDDEN PC 지역별 그랜드 오픈 팝업"
            className="block w-full h-auto"
          />
        </div>

        <div className="flex flex-col gap-3 border-t border-neutral-200 bg-white px-4 py-3 text-sm text-neutral-700 md:flex-row md:items-center md:justify-between">
          <label className="flex cursor-pointer items-center gap-2">
            <input
              type="checkbox"
              checked={hideToday}
              onChange={(e) => setHideToday(e.target.checked)}
              className="h-4 w-4 accent-black"
            />
            <span>오늘 하루 동안 열지 않기</span>
          </label>

          <button
            type="button"
            onClick={closePopup}
            className="inline-flex h-10 items-center justify-center rounded-md border border-neutral-300 px-5 font-medium text-neutral-800 transition hover:bg-neutral-100"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
}

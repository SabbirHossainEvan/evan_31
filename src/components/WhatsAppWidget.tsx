"use client";

import { memo, useCallback, useEffect, useMemo, useState } from "react";
import { AnimatePresence, LazyMotion, domAnimation, motion } from "framer-motion";
import { whatsappConfig } from "@/config/whatsapp";
import { WhatsAppBubble } from "@/components/WhatsAppBubble";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const HOUR_IN_MS = 60 * 60 * 1000;

function shouldShowBubble() {
  if (typeof window === "undefined") return false;

  try {
    const dismissedAt = window.localStorage.getItem(whatsappConfig.bubble.storageKey);
    if (!dismissedAt) return true;

    const dismissedTime = Number(dismissedAt);
    if (Number.isNaN(dismissedTime)) return true;

    return Date.now() - dismissedTime >= whatsappConfig.bubble.reappearAfterHours * HOUR_IN_MS;
  } catch {
    return true;
  }
}

function WhatsAppWidgetComponent() {
  const [isBubbleVisible, setIsBubbleVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);

  const whatsappHref = useMemo(() => {
    const phoneNumber = whatsappConfig.phoneNumber.replace(/\D/g, "");
    const message = encodeURIComponent(whatsappConfig.defaultMessage);
    return `https://wa.me/${phoneNumber}?text=${message}`;
  }, []);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsBubbleVisible(shouldShowBubble());
    }, whatsappConfig.bubble.delayMs);

    return () => window.clearTimeout(timer);
  }, []);

  const handleCloseBubble = useCallback(() => {
    try {
      window.localStorage.setItem(whatsappConfig.bubble.storageKey, String(Date.now()));
    } catch {
      // Keep dismissal working for the session even if storage is blocked.
    }

    setIsBubbleVisible(false);
  }, []);

  const showTooltip = useCallback(() => setIsTooltipVisible(true), []);
  const hideTooltip = useCallback(() => setIsTooltipVisible(false), []);

  return (
    <LazyMotion features={domAnimation}>
      <motion.aside
        aria-label="WhatsApp chat widget"
        className="fixed z-50 flex flex-col items-end pb-[env(safe-area-inset-bottom)] pr-[env(safe-area-inset-right)]"
        style={{
          bottom: `clamp(${whatsappConfig.position.mobile.bottom}px, 2vw, ${whatsappConfig.position.desktop.bottom}px)`,
          right: `clamp(${whatsappConfig.position.mobile.right}px, 2vw, ${whatsappConfig.position.desktop.right}px)`,
        }}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.34, ease: [0.16, 1, 0.3, 1] }}
      >
        <WhatsAppBubble isVisible={isBubbleVisible} onClose={handleCloseBubble} />

        <div
          className="relative"
          onMouseEnter={showTooltip}
          onMouseLeave={hideTooltip}
          onFocus={showTooltip}
          onBlur={hideTooltip}
        >
          <AnimatePresence>
            {isTooltipVisible ? (
              <motion.div
                initial={{ opacity: 0, x: 6, scale: 0.98 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 6, scale: 0.98 }}
                transition={{ duration: 0.16 }}
                className="pointer-events-none absolute right-[calc(100%+12px)] top-1/2 hidden -translate-y-1/2 whitespace-nowrap rounded-md bg-black px-3 py-2 text-xs font-medium text-white shadow-lg md:block"
              >
                {whatsappConfig.labels.tooltip}
              </motion.div>
            ) : null}
          </AnimatePresence>

          <WhatsAppButton href={whatsappHref} />
        </div>
      </motion.aside>
    </LazyMotion>
  );
}

export const WhatsAppWidget = memo(WhatsAppWidgetComponent);

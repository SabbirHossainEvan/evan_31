"use client";

import { memo } from "react";
import { X } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { whatsappConfig } from "@/config/whatsapp";

type WhatsAppBubbleProps = {
  isVisible: boolean;
  onClose: () => void;
};

function WhatsAppBubbleComponent({ isVisible, onClose }: WhatsAppBubbleProps) {
  const shouldReduceMotion = useReducedMotion();
  const messageLines = whatsappConfig.bubble.message.split("\n");

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.96 }}
          animate={{
            opacity: 1,
            y: shouldReduceMotion ? 0 : [0, -4, 0],
            scale: 1,
            transition: {
              opacity: { duration: 0.22 },
              scale: { duration: 0.22 },
              y: shouldReduceMotion
                ? { duration: 0.2 }
                : { duration: 3.2, repeat: Infinity, ease: [0.42, 0, 0.58, 1] },
            },
          }}
          exit={{ opacity: 0, y: 10, scale: 0.98, transition: { duration: 0.18 } }}
          className="relative mb-3 w-[min(82vw,260px)] rounded-xl border border-black/5 bg-white px-4 py-3 text-slate-900 shadow-[0_18px_50px_rgba(15,23,42,0.18)] md:mb-4 md:w-[272px]"
          role="status"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-sm font-semibold leading-5 text-slate-950">
                <span aria-hidden="true">&#128075; </span>
                {whatsappConfig.bubble.title}
              </p>
              <p className="mt-1 text-sm leading-5 text-slate-600">
                {messageLines.map((line, index) => (
                  <span key={`${line}-${index}`} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
            <button
              type="button"
              aria-label={whatsappConfig.labels.closeBubble}
              onClick={onClose}
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-slate-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
            >
              <X size={15} aria-hidden="true" />
            </button>
          </div>
          <div className="absolute -bottom-1 right-6 h-3 w-3 rotate-45 border-b border-r border-black/5 bg-white" />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

export const WhatsAppBubble = memo(WhatsAppBubbleComponent);

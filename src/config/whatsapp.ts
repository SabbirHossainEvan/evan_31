export const whatsappConfig = {
  phoneNumber: "8801327284962",
  defaultMessage: "Hi Sabbir, I visited your portfolio and would like to discuss a project.",
  position: {
    desktop: {
      bottom: 24,
      right: 24,
    },
    mobile: {
      bottom: 18,
      right: 18,
    },
  },
  theme: {
    green: "#25D366",
    greenDark: "#1EBE5D",
    focusRing: "#25D366",
  },
  bubble: {
    storageKey: "whatsapp-widget-bubble-dismissed-at",
    reappearAfterHours: 24,
    delayMs: 1000,
    title: "Hi there!",
    message: "Need help?\nChat with us on WhatsApp.",
  },
  labels: {
    button: "Chat with us on WhatsApp",
    tooltip: "Chat with us",
    closeBubble: "Close WhatsApp welcome message",
  },
} as const;

export type WhatsAppConfig = typeof whatsappConfig;

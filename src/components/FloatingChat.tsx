import { Icon } from "./Icon";

export function FloatingChat() {
  return (
    <a
      href="https://wa.me/918985504044?text=Hello!%20I'd%20like%20to%20book%20an%20appointment.%20Please%20let%20me%20know%20your%20availability."
      target="_blank" rel="noopener noreferrer"
      aria-label="Chat"
      className="fixed bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-ink text-cream shadow-xl hover:bg-ink-soft transition z-50"
    >
      <Icon name="chat" className="w-5 h-5" />
    </a>
  );
}

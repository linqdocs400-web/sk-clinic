import { Icon } from "./Icon";

export function FloatingChat() {
  return (
    <a
      href="#contact"
      aria-label="Chat"
      className="fixed bottom-5 right-5 grid h-12 w-12 place-items-center rounded-full bg-ink text-cream shadow-xl hover:bg-ink-soft transition z-50"
    >
      <Icon name="chat" className="w-5 h-5" />
    </a>
  );
}

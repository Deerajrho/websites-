export function ChatBubbles() {
  return (
    <div className="flex h-56 w-full flex-col justify-end gap-2.5 px-1">
      <div className="max-w-[75%] self-start rounded-2xl rounded-bl-sm border border-service-chatbot/25 bg-service-chatbot/10 px-3.5 py-2 text-xs text-fg">
        Hey! Can you help me book an appointment?
      </div>
      <div className="max-w-[70%] self-end rounded-2xl rounded-br-sm border border-hairline bg-white/5 px-3.5 py-2 text-xs text-muted">
        Sure — what day works best for you?
      </div>
      <div className="max-w-[75%] self-start rounded-2xl rounded-bl-sm border border-service-chatbot/25 bg-service-chatbot/10 px-3.5 py-2 text-xs text-fg">
        Thursday afternoon, if possible.
      </div>
      <div className="flex w-fit items-center gap-1 self-start rounded-2xl rounded-bl-sm border border-service-chatbot/25 bg-service-chatbot/10 px-3.5 py-2.5">
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            className="h-1.5 w-1.5 rounded-full bg-service-chatbot"
            style={{
              animation: "typing-dot 1.2s ease-in-out infinite",
              animationDelay: `${i * 0.15}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
}

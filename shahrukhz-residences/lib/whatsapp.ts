// Opening WhatsApp from the browser. Client-side only (reads navigator and location).
//
// On Android, both WhatsApp and WhatsApp Business claim https://wa.me links, so the phone opens whichever is
// set as default, often Business. An Android intent for the `whatsapp:` scheme that names no app instead lets
// Android decide: it opens the one WhatsApp that is installed, or shows its "Open with" chooser when both are.
// With no WhatsApp at all, Chrome follows the fallback to the normal wa.me page.
// iPhones and desktops give a website no say in this, so they keep the plain wa.me link.

export const isAndroid = () => /Android/i.test(navigator.userAgent);

/** Turn a https://wa.me/<number>?text=... link into the Android intent described above. */
export function androidIntent(waMe: string) {
  const url = new URL(waMe);
  const phone = url.pathname.replace(/\D/g, "");
  const text = url.searchParams.get("text") ?? "";
  const query = `phone=${phone}` + (text ? `&text=${encodeURIComponent(text)}` : "");
  return `intent://send/?${query}#Intent;scheme=whatsapp;S.browser_fallback_url=${encodeURIComponent(waMe)};end`;
}

/** Open a wa.me link: via the chooser-friendly intent on Android, in a new tab elsewhere. */
export function openWhatsApp(waMe: string) {
  if (isAndroid()) location.href = androidIntent(waMe);
  else window.open(waMe, "_blank", "noopener,noreferrer");
}

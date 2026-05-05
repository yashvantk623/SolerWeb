"use client";

export default function WhatsAppButton() {
  const rawPhone = "8700459880";
  const defaultCountry = "91"; // change this if your primary country code differs
  const message = "Hello! I'm interested in your solar solutions.";

  const normalizePhone = (p: string) => {
    const digits = p.replace(/\D/g, "");
    if (digits.length === 10) return `${defaultCountry}${digits}`;
    return digits;
  };

  const phoneNumber = normalizePhone(rawPhone);
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 flex items-center justify-center w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
      title="Chat with us on WhatsApp"
    >
      {/* WhatsApp SVG Icon */}
      <svg
        className="w-7 h-7 text-white"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004c-1.025 0-2.02.321-2.852.923L6.731 3.847 9.9 11.167c.64-.588 1.545-.928 2.52-.928 2.305 0 4.175 1.87 4.175 4.175s-1.87 4.175-4.175 4.175c-2.304 0-4.175-1.87-4.175-4.175 0-.975.34-1.88.928-2.52L3.847 6.731l8.622 2.547c.602-.602 1.827-1.681 2.52-.928 2.305 0 4.175 1.87 4.175 4.175s-1.87 4.175-4.175 4.175" />
      </svg>
    </a>
  );
}

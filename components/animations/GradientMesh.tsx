export default function GradientMesh() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    >
      <div className="absolute inset-0 premium-grid opacity-[0.26]" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(255,255,255,0.045) 0%, transparent 16rem), linear-gradient(90deg, rgba(201,255,106,0.035) 0%, transparent 22%, transparent 78%, rgba(243,168,65,0.035) 100%)",
        }}
      />
      <div
        className="absolute inset-x-0 top-0 h-36"
        style={{
          background:
            "repeating-linear-gradient(90deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 14.285%)",
          opacity: 0.08,
        }}
      />

    </div>
  );
}

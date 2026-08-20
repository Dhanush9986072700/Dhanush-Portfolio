/* Render *word* as an italic.

   Copy lives in plain strings so it stays readable and editable in one place,
   and the one word a sentence turns on is marked with asterisks rather than
   broken into JSX. Italics do the work of emphasis everywhere the accent is
   not allowed, which is everywhere except a statement of live fact. */
export function emphasise(text: string) {
  return text
    .split(/\*(.+?)\*/)
    .map((part, i) => (i % 2 === 1 ? <em key={i}>{part}</em> : part));
}

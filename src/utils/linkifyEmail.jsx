// Turns the first occurrence of `email` inside `text` into a mailto: link. Used by legal pages whose
// content will eventually come from a database as plain text — this keeps the data itself pure strings
// while still rendering the email as a clickable link.
export function linkifyEmail(text, email) {
  if (typeof text !== 'string' || !text.includes(email)) return text;
  const [before, after] = text.split(email);
  return (
    <>
      {before}
      <a href={`mailto:${email}`}>{email}</a>
      {after}
    </>
  );
}

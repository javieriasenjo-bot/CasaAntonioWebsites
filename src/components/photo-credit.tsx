// License labels are retained from the supplied source. These links explain
// those licenses; they do not verify the original image's provenance.
export function PhotoCredit({ text }: { text: string }) {
  const match = text.match(/CC BY-SA 4\.0|CC BY 2\.5|CC BY 2\.0|CC0/);
  const links: Record<string, string> = {
    "CC BY-SA 4.0": "https://creativecommons.org/licenses/by-sa/4.0/",
    "CC BY 2.5": "https://creativecommons.org/licenses/by/2.5/",
    "CC BY 2.0": "https://creativecommons.org/licenses/by/2.0/",
    CC0: "https://creativecommons.org/publicdomain/zero/1.0/",
  };
  if (!match || match.index === undefined) return <>{text}</>;
  return <>{text.slice(0, match.index)}<a href={links[match[0]]} target="_blank" rel="noreferrer">{match[0]}</a>{text.slice(match.index + match[0].length)}</>;
}

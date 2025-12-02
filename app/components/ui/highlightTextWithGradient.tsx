import React, { ReactElement } from 'react';

export function highlightTextWithGradient(
  fullText: string,
  highlight: string
): Array<string | ReactElement> {
  if (!highlight || !fullText.includes(highlight)) {
    return [fullText];
  }

  const parts = fullText.split(highlight);

  // Rebuild text with gradient span inserted between parts
  return parts.flatMap((part, index) =>
    index < parts.length - 1
      ? [
          part,
          <span
            key={`highlight-${index}`}
            className="bg-gradient-to-r from-[#f55823] to-[#ff9f00] bg-clip-text text-transparent"
          >
            {highlight}
          </span>,
        ]
      : [part]
  );
}

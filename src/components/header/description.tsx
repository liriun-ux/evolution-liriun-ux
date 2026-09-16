interface Highlight {
  text: string;
  occurrence?: number;
  className?: string;
}

interface DescriptionProps {
  text: string;
  highlights?: Highlight[];
  className?: string;
}

export default function Description({
  text,
  highlights = [],
  className = "",
}: DescriptionProps) {
  let content: React.ReactNode[] = [text];

  highlights.forEach((highlight) => {
    const {
      text: highlightText,
      occurrence = 1,
      className: highlightClass = "acentuar-description",
    } = highlight;

    let currentOccurrence = 0;
    const newContent: React.ReactNode[] = [];

    content.forEach((item) => {
      if (typeof item !== "string") {
        newContent.push(item);
        return;
      }

      const parts = item.split(highlightText);

      parts.forEach((part, index) => {
        newContent.push(part);

        if (index < parts.length - 1) {
          currentOccurrence++;

          if (currentOccurrence === occurrence) {
            newContent.push(
              <span className={highlightClass} key={`${highlightText}-${currentOccurrence}`}>
                {highlightText}
              </span>
            );
          } else {
            newContent.push(highlightText);
          }
        }
      });
    });

    content = newContent;
  });

  return <p className={className}>{content}</p>;
}

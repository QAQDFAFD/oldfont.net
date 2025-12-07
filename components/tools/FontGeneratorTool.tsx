"use client";

import { useCallback, useMemo, useState } from "react";
import FontPreview from "./FontPreview";
import FontControls from "./FontControls";
import { fontOptions, FontOption } from "@/lib/fonts";

export type FontGeneratorToolProps = {
  pageTitle: string;
  pageDescription: string;
  primaryKeyword: string;
  secondaryKeywords?: string[];
};

export default function FontGeneratorTool({ pageTitle, pageDescription, primaryKeyword, secondaryKeywords }: FontGeneratorToolProps) {
  const [text, setText] = useState("OldFont.net makes it simple to style your words in vintage, gothic, and typewriter fonts.");
  const [fontId, setFontId] = useState(fontOptions[3]?.id ?? fontOptions[0].id);
  const [fontSize, setFontSize] = useState(36);
  const [lineHeight, setLineHeight] = useState(1.2);

  const selectedFont: FontOption = useMemo(
    () => fontOptions.find((option) => option.id === fontId) ?? fontOptions[0],
    [fontId],
  );

  const copyText = useCallback(() => {
    navigator.clipboard.writeText(text);
  }, [text]);

  const copyHtml = useCallback(() => {
    const html = `<span style="font-family: ${selectedFont.fontFamily}; font-size: ${fontSize}px; line-height: ${lineHeight};">${text}</span>`;
    navigator.clipboard.writeText(html);
  }, [fontSize, lineHeight, selectedFont.fontFamily, text]);

  return (
    <section className="grid gap-6 lg:grid-cols-2">
      <FontControls
        text={text}
        setText={setText}
        fontId={fontId}
        setFontId={setFontId}
        fontSize={fontSize}
        setFontSize={setFontSize}
        lineHeight={lineHeight}
        setLineHeight={setLineHeight}
        primaryKeyword={primaryKeyword}
        secondaryKeywords={secondaryKeywords}
        pageTitle={pageTitle}
        pageDescription={pageDescription}
        onCopyText={copyText}
        onCopyHtml={copyHtml}
        selectedFont={selectedFont}
      />
      <FontPreview text={text} selectedFont={selectedFont} fontSize={fontSize} lineHeight={lineHeight} />
    </section>
  );
}

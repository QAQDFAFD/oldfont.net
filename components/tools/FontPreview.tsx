import { forwardRef } from "react";
import { FontOption } from "@/lib/fonts";

export type FontPreviewProps = {
  text: string;
  selectedFont: FontOption;
  fontSize: number;
  lineHeight: number;
};

const FontPreview = forwardRef<HTMLDivElement, FontPreviewProps>(
  ({ text, selectedFont, fontSize, lineHeight }, ref) => {
    return (
      <div className="rounded-lg border border-brass/30 bg-white p-4 shadow-soft">
        <p className="text-xs uppercase tracking-wide text-gray-600">Preview</p>
        <div
          ref={ref}
          className="mt-2 whitespace-pre-wrap text-ink"
          style={{ fontFamily: selectedFont.fontFamily, fontSize, lineHeight }}
        >
          {text || "OldFont.net – type your text to preview old English, gothic, and typewriter styles."}
        </div>
      </div>
    );
  }
);

FontPreview.displayName = "FontPreview";

export default FontPreview;

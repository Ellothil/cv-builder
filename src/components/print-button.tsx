import { LuPrinter } from "react-icons/lu";

/**
 * PrintButton component renders a floating action button that triggers the browser's print dialog.
 * It is hidden during printing.
 */
export function PrintButton() {
  return (
    <button
      className="fixed right-8 bottom-8 z-50 cursor-pointer rounded-full bg-blue-600 p-4 text-white shadow-lg transition-all hover:bg-blue-700 print:hidden"
      onClick={() => window.print()}
      title="Als PDF speichern"
      type="button"
    >
      <LuPrinter size={24} />
    </button>
  );
}

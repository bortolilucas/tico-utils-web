export function copyToClipboard(
  text: string,
  copyButton: HTMLElement,
  copiedText: string,
  defaultText: string
) {
  let tooltip: HTMLElement | null = null;

  copyButton.addEventListener("mouseenter", () => {
    tooltip = document.createElement("span");
    tooltip.id = "tooltip";
    tooltip.className =
      "absolute bottom-0 left-full translate-y-full bg-gray-800 text-white px-3 py-1 rounded text-sm whitespace-nowrap pointer-events-none";
    tooltip.textContent = defaultText;
    copyButton.appendChild(tooltip);
  });

  copyButton.addEventListener("mouseleave", () => {
    tooltip?.remove();
  });

  copyButton.addEventListener("click", () => {
    navigator.clipboard.writeText(text.trim());

    if (tooltip) {
      tooltip.textContent = copiedText;
      tooltip.classList.remove("opacity-0", "bg-gray-800");
      tooltip.classList.add("opacity-100", "bg-green-600");
    }
  });
}

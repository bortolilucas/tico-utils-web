export function handleFormSubmit(id: string) {
  document.addEventListener("astro:page-load", () => {
    const form = document.getElementById(id);

    form?.addEventListener("submit", (e) => {
      form.classList.add("loading");
    });
  });
}

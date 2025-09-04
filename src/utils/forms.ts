export function handleFormSubmit(id: string) {
  const form = document.getElementById(id);

  form?.addEventListener("submit", (e) => {
    form.classList.add("loading");
  });
}

function scrollToElement(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default scrollToElement;

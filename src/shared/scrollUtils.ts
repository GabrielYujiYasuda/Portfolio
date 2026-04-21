export const handleScroll = (sectionId: string) => {
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
};

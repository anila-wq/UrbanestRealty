declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

type SectionTrackingOptions = {
  sendToGA?: boolean;
};

export function initSectionTracking(options: SectionTrackingOptions = {}) {

  const sendToGA = options.sendToGA ?? false;

  const trackedIds = [
    "hero",
    "projects",
    "awards",
    "team",
    "about",
    "contact",
    "footer",
    "testimonials",
    "location",
    "cta",
    "blogs"
  ];

  const seenSections = new Set<string>();

  const attachObserver = () => {

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        console.log(
          `[${new Date().toLocaleTimeString()}] observer check`,
          entry.target.id,
          entry.isIntersecting,
          entry.intersectionRatio
        );

        if (!entry.isIntersecting) return;

        const id = entry.target.id;

        if (!id || seenSections.has(id)) return;

        seenSections.add(id);

        console.log(`[${new Date().toLocaleTimeString()}] Tracked section:`, id);

        if (sendToGA && typeof window.gtag === "function") {

          window.gtag("event", "section_view", {
            section_name: id,
            page_location: window.location.href,
            page_path: window.location.pathname
          });

          console.log(`[${new Date().toLocaleTimeString()}] GA event sent:`, id);
        }

      });

    }, {
      threshold: 0.1,
      rootMargin: "0px 0px -10% 0px"
    });

    const elements = trackedIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    console.log(
      `[${new Date().toLocaleTimeString()}] Tracking elements found:`,
      elements.map(el => el.id)
    );

    elements.forEach(el => observer.observe(el));

    return observer;
  };

  // Wait until DOM stabilizes (important for lazy loaded sections)
  const timer = setTimeout(() => {
    attachObserver();
  }, 1200);

  return () => {
    clearTimeout(timer);
  };

}

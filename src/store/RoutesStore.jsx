import { create } from "zustand";

export const useScrollStore = create((set, get) => ({
  sectionRefs: {},

  registerRef: (name, ref) => {
    set((state) => ({
      sectionRefs: {
        ...state.sectionRefs,
        [name]: ref,
      },
    }));
  },

  scrollTo: (sectionName, options = {}) => {
    const { sectionRefs } = get();
    const ref = sectionRefs[sectionName];

    if (ref?.current) {
      const defaultOptions = {
        behavior: "smooth",
        block: "start",
        offset: 0,
        ...options,
      };

      const element = ref.current;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - defaultOptions.offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: defaultOptions.behavior,
      });
    }
  },
}));

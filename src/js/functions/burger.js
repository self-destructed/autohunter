import { disableScroll } from "../functions/disable-scroll";
import { enableScroll } from "../functions/enable-scroll";

(function () {
  const burger = document?.querySelector("[data-burger]");
  const menu = document?.querySelector("[data-menu]");
  const menuItems = document?.querySelectorAll("[data-menu-item]");
  const overlay = document?.querySelector("[data-menu-overlay]");

  const toggleMenu = () => {
    if (menu?.classList.contains("menu--active")) {
      menu.ontransitionend = (e) => {
        if (e.propertyName === "transform") {
          menu.ontransitionend = null;
          menu.classList.remove("menu--active");
        }
      };
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      enableScroll();
      burger?.classList.remove("burger--active");
      menu.classList.add("menu--inactive");
    } else {
      menu.classList.remove("menu--inactive");
      menu.classList.add("menu--active");
      burger?.classList.add("burger--active");
      burger?.setAttribute("aria-expanded", "true");
      burger?.setAttribute("aria-label", "Закрыть меню");
      disableScroll();
    }
  };

  burger?.addEventListener("click", (e) => {
    toggleMenu();

    if (menu?.classList.contains("menu--active")) {
    } else {
    }
  });

  overlay?.addEventListener("click", () => {
    burger?.setAttribute("aria-expanded", "false");
    burger?.setAttribute("aria-label", "Открыть меню");
    burger.classList.remove("burger--active");
    toggleMenu();
    enableScroll();
  });

  menuItems?.forEach((el) => {
    el.addEventListener("click", () => {
      burger?.setAttribute("aria-expanded", "false");
      burger?.setAttribute("aria-label", "Открыть меню");
      burger.classList.remove("burger--active");
      toggleMenu();
      enableScroll();
    });
  });
})();

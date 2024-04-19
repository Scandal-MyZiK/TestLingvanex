document.addEventListener("DOMContentLoaded", () => {
  const tabsBtns = Array.from(document.querySelectorAll("[data-tab-id]"));
  const tabs = Array.from(document.querySelectorAll("[data-tab]"));

  let selectedTab = tabsBtns[0].dataset.tabId;

  const hideTabs = () => {
    tabs
      .filter((tab) => tab.dataset.tab !== selectedTab)
      .forEach((tab) => {
        tab.classList.add("card--hide");
      });
  };
  hideTabs();

  const handleSelectTab = (e) => {
    selectedTab = e.target.dataset.tabId;
    tabs.forEach((tab) => {
      if (tab.dataset.tab !== selectedTab) {
        tab.classList.add("card--hide");
        tab.classList.remove("card--show");
      } else {
        tab.classList.add("card--show");
        tab.classList.remove("card--hide");
      }
    });

    tabsBtns.forEach((tab) => {
      if (tab.dataset.tabId !== selectedTab) {
        tab.classList.remove("btn-active");
      } else {
        tab.classList.add("btn-active");
      }
    });

    hideTabs();
  };

  tabsBtns.forEach((btn) => {
    btn.addEventListener("click", handleSelectTab);
  });
});

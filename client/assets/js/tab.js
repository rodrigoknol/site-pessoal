const tabs = [...document.getElementsByName("tabset")];

tabs.map((tab) => {
  tab.addEventListener("click", openTab);
});

function openTab() {
  const checked = tabs.find((el) => el.checked);
  const value = checked.value;

  const tabsToControl = tabs.map((el) => document.getElementById(el.value));
  tabsToControl.forEach((el) => {
    el.className = el.id === value ? "selected" : "tabs--panel";
  });
}

openTab()
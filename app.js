const refs = {
  controls: document.querySelector("#tabs-1 [data-controls]"),
  panes: document.querySelector("#tabs-1 [data-panes]"),
};

const { controls, panes } = refs;
controls.addEventListener("click", onControlsClick);

function onControlsClick(event) {
  if (event.target.tagName !== "A") {
    return;
  }

  const currentActiveControl = controls.querySelector(
    ".controls__item--active"
  );

  if (currentActiveControl) {
    currentActiveControl.classList.remove("controls__item--active");
    const paneId = getPaneId(currentActiveControl);
    const pane = getPaneById(paneId);
    pane.classList.remove("pane--active");
  }

  const controlItem = event.target;
  controlItem.classList.add("controls__item--active");

  const paneId = getPaneId(controlItem);
  const pane = getPaneById(paneId);
  pane.classList.add("pane--active");
}

function getPaneId(control) {
  return control.getAttribute("href").slice(1);
}

function getPaneById(id) {
  return panes.querySelector(`#${id}`);
}

export const getEl = (selector, selectorType) => {
  if (selectorType === "id") {
    selector = "#" + selector;
  } else if (selectorType === "class") {
    selector = "." + selector;
  }
  return document.querySelector(selector);
};

export const toggleCls = (selectorType, selector, cls) => {
  const el = getEl(selector, selectorType);
  if (el) {
    el.classList.toggle(cls);
  }
};

export const addCls = (selectorType, selector, cls) => {
  const el = getEl(selector, selectorType);
  if (el) {
    el.classList.add(cls);
  }
};

export const removeCls = (selectorType, selector, cls) => {
  const el = getEl(selector, selectorType);
  if (el) {
    el.classList.remove(cls);
  }
};

export const replaceCls = (selectorType, selector, oldCls, newCls) => {
  const el = getEl(selector, selectorType);
  if (el) {
    el.classList.replace(oldCls, newCls);
  }
};

export const getCls = selector => {
  const el = getEl(selector, false);
  if (el) {
    return el.classList.value;
  }
};

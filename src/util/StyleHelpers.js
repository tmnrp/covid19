export const getEl = (selectorType, selector) => {
  let selectorCls = selector;
  if (selectorType === "id") {
    selectorCls = "#" + selector;
  } else if (selectorType === "class") {
    selectorCls = "." + selector;
  }
  return selector ? document.querySelector(selectorCls) : null;
};

export const toggleCls = (selectorType, selector, cls) => {
  const el = getEl(selectorType, selector);
  if (el && cls) {
    el.classList.toggle(cls);
  }
};

export const addCls = (selectorType, selector, cls) => {
  const el = getEl(selectorType, selector);
  if (el && cls) {
    el.classList.add(cls);
  }
};

export const removeCls = (selectorType, selector, cls) => {
  const el = getEl(selectorType, selector);
  if (el && cls) {
    el.classList.remove(cls);
  }
};

export const replaceCls = (selectorType, selector, oldCls, newCls) => {
  const el = getEl(selectorType, selector);
  if (el && oldCls && newCls) {
    el.classList.replace(oldCls, newCls);
  }
};

export const getCls = (selectorType, selector) => {
  const el = getEl(selectorType, selector);
  return el ? el.classList.value : null;
};

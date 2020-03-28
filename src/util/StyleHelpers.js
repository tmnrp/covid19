export const getEl = (selector, isId) => {
  if (isId) {
    selector = "#" + selector;
  }
  return document.querySelector(selector);
};

export const toggleCls = (selector, cls) => {
  const el = getEl(selector);
  if (el) {
    el.classList.toggle(cls);
  }
};

export const addCls = (selector, cls) => {
  const el = getEl(selector);
  if (el) {
    el.classList.add(cls);
  }
};

export const removeCls = (selector, cls) => {
  const el = getEl(selector);
  if (el) {
    el.classList.remove(cls);
  }
};

export const replaceCls = (selector, oldCls, newCls) => {
  const el = getEl(selector);
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

export const getCache = name => {
  if(!name) return;
  window.sessionStorage.getItem(name);
};
export const setCache = (name, content) => {
  if(!name) return;
  if(typeof content !== "string") {
    window.sessionStorage.setItem(name,JSON.stringify(content));
  }
  window.sessionStorage.setItem(name,content);
};
export const removeCache = (name) => {
  if(!name) return;
  window.sessionStorage.removeItem(name);
};
export const getLocalCache = name => {
  if(!name) return;
  window.localStorage.getItem(name);
};
export const setLocalCache = (name, content) => {
  if(!name) return;
  if(typeof content !== "string") {
    window.localStorage.setItem(name,JSON.stringify(content));
  }
};
export const removeLocalCache = name => {
  if(!name) return;
  window.localStorage.removeItem(name);
};

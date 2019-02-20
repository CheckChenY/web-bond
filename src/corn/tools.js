const tools = {
  converBase64toBlob(content, contentTypeString) {
    const contentType = contentTypeString || '',
      sliceSize = 512,
      byteCharacters = window.atob(content),
      byteArrays = [
      ];
    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize),
        byteNumbers = new Array(slice.length);
      for (let i = 0; i < slice.length; i += 1) {
        byteNumbers[i] = slice.charCodeAt(i);
      }
      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }
    const blob = new Blob(byteArrays, {
      type: contentType,
    }); // statement which creates the blob
    return blob;
  },
  text2Binary(string) {
    return string.split('').map(char=>char.charCodeAt(0).toString(2)).join(' ');
  },
  getJsonFromUrl() {
    const result = {};
    if(typeof window !== 'undefined'){
      const query = window.location.search.substr(1),
        list = query.split('?');
      for(let i = 0; i < list.length; i += 1){
        list[i].split('&').forEach((part)=>{
          const item = part.split('=');
          result[item[0].toLocaleLowerCase()] = decodeURIComponent(item[1]);
        });
      }
    }
    return result;
  },
  getFromUrlParam(variable) {
    const result = tools.getJsonFromUrl();
    return result[variable] || '';
  },
  getUrlHref(){
    let url = '';
    if(typeof window !== 'undefined'){
      url = encodeURIComponent(window.location.href) || '/';
    }
    return url;
  },
  gethostFromUrl() {
    let result = '';
    if(typeof window !== 'undefined'){
      result = window.location.host;
    }
    return result;
  },
  getPathnameFromUrl() {
    let result = '';
    if(typeof window !== 'undefined'){
      result = window.location.pathname;
    }
    return result;
  },
  gethashFromUrl() {
    let result = '';
    if(typeof window !== 'undefined'){
      result = window.location.hash.slice(1);
    }
    return result;
  },
  getJsonFromHash() {
    const result = {};
    if(typeof window !== 'undefined'){
      const query = window.location.hash.slice(1);
      query.split('&').forEach((part)=>{
        const item = part.split('=');
        try {
          result[item[0]] = decodeURIComponent(item[1]);
        } catch (e) {
          console.log(e);
        }
      });
    }
    return result;
  },
  getParamFromHash(key){
    const result = tools.getJsonFromHash();
    return result[key] || '';
  },
  // emailRule(value){
  //   const rule = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  //   return rule.test(value);
  // },
  // symbolLowercase(str){
  //   let newStr = '';
  //   newStr = str.replace(/\，/g, ',');

  //   return newStr;
  // },
  replaceHash(newHash){
    if(typeof window !== 'undefined'){
      const str = window.location.href.split('#');
      window.history.replaceState(undefined, undefined, `${str[0]}#${newHash}`);
    }
  },
  isIE(){
    return /.*MSIE.*/.test(navigator.userAgent) || /.*Trident.*/.test(navigator.userAgent);
  },
  arraysEqual(a, b, params){
    if (a === b) return true;
    if (a === null || b === null) return false;
    if (a.length !== b.length) return false;

    for (let i = 0; i < a.length; i += 1) {
      if(params){
        if (a[i][params] !== b[i][params]) return false;
      }else if (a[i] !== b[i]) return false;
    }
    return true;
  },
};

export default tools;

const element = document.getElementById('phone-en');
const maskOptions = {
  mask: '+{38}(000)000-00-00'
};
const mask = IMask(element, maskOptions);
const element2 = document.getElementById('phone-ua');
const mask2 = IMask(element2, maskOptions);
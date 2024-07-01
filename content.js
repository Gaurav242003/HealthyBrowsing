// Example: Applying a blue light filter
const applyBlueLightFilter = () => {
    const filterStyle = document.createElement('style');
    filterStyle.innerHTML = `
      html {
        filter: sepia(30%) hue-rotate(190deg) saturate(80%);
      }
    `;
    document.head.appendChild(filterStyle);
  };
  
  
declare const chrome: {
  tabs: {
    executeScript: (params: any) => void;
  };
};

function changeBackgroundColor(color: string) {
  const script = 'document.body.style.backgroundColor="' + color + '";';
  chrome.tabs.executeScript({
    code: script,
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.getElementById('dropdown');

  if (dropdown) {
    dropdown.addEventListener('change', () => {
      changeBackgroundColor((dropdown as any).value);
    });
  }
});

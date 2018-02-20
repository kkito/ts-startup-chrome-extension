declare const chrome: {
  tabs: {
    executeScript: (params: any) => void;
  };
};

import { Greeter } from './greeter';

function changeBackgroundColor(color: string) {
  const script = 'document.body.style.backgroundColor="' + color + '";';
  chrome.tabs.executeScript({
    code: script,
  });
}

document.addEventListener('DOMContentLoaded', () => {
  const dropdown = document.getElementById('dropdown');
  const greetingSpan = document.getElementById('greeting');

  if (dropdown) {
    dropdown.addEventListener('change', () => {
      changeBackgroundColor((dropdown as any).value);
    });
  }

  if (greetingSpan) {
    greetingSpan.innerHTML = new Greeter('kk').greet();
  }
});

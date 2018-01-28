import {NgElementWithProps} from './@angular/elements';

interface RadioProps {
  checked: boolean;
  value: 'primary' | 'accent' | 'warn';
}

export function doStuff(): void {
  // Grab the custom elements.
  const colorRadios = Array.prototype.slice.call(document.querySelectorAll('mat-radio-button')) as NgElementWithProps<any, RadioProps>[];
//   const colorButton = Array.prototype.slice.call(document.querySelectorAll('mat-button')) as NgElementWithProps<any, ButtonProps>[];

  // Wire them up
  colorRadios.forEach(radio => radio.addEventListener('change', () => {
    if (radio.checked) {
      console.log(radio.value);
    }
  }));
}

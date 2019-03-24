import { addon } from './led-matrix';
import { MatrixOptions, RuntimeOptions } from './types';

try {
  console.log('addon: ', addon);
  console.log('addon.LedMatrix: ', addon.LedMatrix);
  console.log('addon.LedMatrix.defaultMatrixOptions(): ', addon.LedMatrix.defaultMatrixOptions());
  console.log('addon.LedMatrix.defaultRuntimeOptions(): ', addon.LedMatrix.defaultRuntimeOptions());
  const matrixOpts: MatrixOptions = {
    ...addon.LedMatrix.defaultMatrixOptions(),
    rows: 32,
    cols: 64,
    chain_length: 2,
    hardware_mapping: 'adafruit-hat',
  };
  const runtimeOpts: RuntimeOptions = {
    ...addon.LedMatrix.defaultRuntimeOptions(),
    gpio_slowdown: 0,
  };

  const instance = new addon.LedMatrix(matrixOpts, runtimeOpts);
  console.log('new addon.LedMatrix: ', instance);
  // tslint:disable-next-line:no-any
  console.log('instance.currentMatrixOptions(): ', (instance as any).currentMatrixOptions());
  console.log('instance.getBrightness(): ', instance.getBrightness());
  console.log('instance.setBrightness(0): ', instance.setBrightness(0));
  console.log('instance.setBrightness(100): ', instance.setBrightness(100));


  setTimeout(() => (instance as any).currentMatrixOptions(), 5000);

}
catch (error) {
  console.error(error);
}

/*

sudo ./scrolling-text-example \
  --led-rows=32 \
  --led-cols=64 \
  --led-chain=2 \
  --led-pixel-mapper="U-mapper" \
  -C 255,0,255 \
  -s 5 \
  -S -1 \
  -f ../fonts/helvR12.bdf \
  "YAAAAAS! yas."
*/

declare module 'vanta/dist/vanta.net.min' {
  import type * as THREE from 'three';

  interface VantaEffect {
    destroy: () => void;
    setOptions: (opts: Record<string, unknown>) => void;
  }

  interface NetOptions {
    el: HTMLElement | null;
    THREE: typeof THREE;
    color?: number;
    backgroundColor?: number;
    points?: number;
    maxDistance?: number;
    spacing?: number;
    showDots?: boolean;
    [key: string]: unknown;
  }

  function NET(options: NetOptions): VantaEffect;
  export default NET;
}

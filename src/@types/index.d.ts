declare interface EEL {
  get_python_ver: () => () => Promise<string>;
}

declare var eel: EEL;

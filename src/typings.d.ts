/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}
declare module "*.json" {
  const value: any;
  export default value;
}



declare var global : Global;
type Global = {
  document: any;
  window: any;
  navigator: any;
}

interface global {
  document: any;
  window: any;
  navigator: any;
}

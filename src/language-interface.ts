/*Only a interface for future language outline implementation, 
defining commons symbols for a specific language */

import { ItemType } from "./item-type";

export interface LanguageInterface {
  symbolDefinitions: Array<LanguageSymbol>;
}

export class LanguageSymbol {
  constructor(private _type: ItemType, private _regex: RegExp) {}

  get type(): ItemType {
    return this._type;
  }

  set type(t: ItemType) {
    this._type = t;
  }

  get regex(): RegExp {
    return this._regex;
  }
  set regex(i: RegExp) {
    this._regex = i;
  }
}

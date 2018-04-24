/*
*Code regex to get especific symbols from java language.s
*
*/

import { LanguageInterface, LanguageSymbol } from "./language-interface";
import { ItemType } from "./item-type";

const CLASS = /(public|protected|private)\s{1,}(class)\s{1,}[A-Z]\D/g;
const METHOD = /(public|protected|private)\s*(?!class)/g;
const PROPERTY = /(public|protected|private)\s*(?!class)/g;

class JavaLanguageInterface implements LanguageInterface {
  constructor() {
    this.symbolDefinitions = [];
    this.symbolDefinitions.push(new LanguageSymbol(ItemType.CLASS, CLASS));
    this.symbolDefinitions.push(new LanguageSymbol(ItemType.METHOD, METHOD));
    this.symbolDefinitions.push(new LanguageSymbol(ItemType.PROPERTY, PROPERTY)
    );
  }

  symbolDefinitions: LanguageSymbol[];
}

export { JavaLanguageInterface };

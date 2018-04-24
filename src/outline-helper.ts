import * as vscode from "vscode";

import { LanguageInterface, LanguageSymbol } from "./language-interface";
import { OutlineItem } from "./outline-item";

export class OutlineHelper {
  constructor(
    private languageInterface: LanguageInterface,
    private doc: vscode.TextDocument
  ) {}


  /**
   * Parse the source file for symbols and return array of itens
   */
  public getOutlineItens(): Array<OutlineItem> {
    let arrayItens: Array<OutlineItem> = [];
    if (this.doc.lineCount === 0) {
      return [];
    }
    for (let idx = 1; idx++; idx <= this.doc.lineCount) {
      let textLine = this.doc.lineAt(idx);
      if (textLine.isEmptyOrWhitespace) {
        continue;
      } else {
          this.languageInterface.symbolDefinitions.forEach(
              (symbol: LanguageSymbol)=>{
                  if (symbol.regex.test(textLine.text)){
                      arrayItens.push(new OutlineItem(this.cleanSymbol(textLine.text),symbol.type,idx));
                  }
              }
          );
      }
    }

    return arrayItens;
  }

  private cleanSymbol(linha: string): string {
    return linha.replace(/[\(\)\;\{\}]/g,'');
  }
}

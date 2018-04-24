import * as vscode from "vscode";

import { ItemType } from "./item-type";

export class OutlineItem {
  constructor(
    private _itemName: string,
    private _itemType: ItemType,
    private _itemLineCode: number
  ) {}

  get itemName(): string {
    return this._itemName;
  }

  set itemName(i: string) {
    this._itemName = i;
  }

  get itemType(): ItemType {
    return this._itemType;
  }

  set itemType(i: ItemType) {
    this._itemType = i;
  }
  get itemLineCode(): number {
    return this._itemLineCode;
  }

  set itemLineCode(i: number) {
    this._itemLineCode = i;
  }
}

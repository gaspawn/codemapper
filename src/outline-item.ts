import * as vscode from 'vscode';

import { ItemType } from './item-type';

export class OutlineItem {

    constructor(private itemName: string, private itemType: ItemType, private itemLineCode: number) {

    }

}
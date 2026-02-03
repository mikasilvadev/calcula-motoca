// src/db.ts
import Dexie, { type Table } from 'dexie';

export interface Entry {
  id?: number;
  amount: number;
  type: 'income' | 'expense'; // Ganho ou Gasto
  date: Date;
}

export class MyDatabase extends Dexie {
  entries!: Table<Entry>; 

  constructor() {
    super('CalculaMotocaDB');
    this.version(1).stores({
      entries: '++id, amount, type, date' // O ++id faz o banco criar um número único para cada registro
    });
  }
}

export const db = new MyDatabase();
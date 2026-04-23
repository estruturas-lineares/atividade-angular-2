export type Ticket = {
  id: string;
  name: string;
  type: 'vip' | 'standard' | 'meia';
  price: number;
  description: string;
  data: Date;
  lotePercentual: number;
};

export const TICKETS_MOCK: Ticket[] = [
  {
    id: '1',
    name: 'Rock Festival 2026',
    type: 'vip',
    data: new Date('2026-08-10T20:00:00'),
    price: 450,
    description: 'Acesso VIP com área exclusiva, open bar e entrada antecipada.',
    lotePercentual: 75,
  },
];

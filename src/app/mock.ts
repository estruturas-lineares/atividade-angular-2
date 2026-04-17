export type Ticket = {
  id: string;
  name: string;
  type: 'vip' | 'standard' | 'meia';
  data: Date;
  price: number;
  description: string;
};

export const TICKETS_MOCK: Ticket[] = [
  {
    id: '1',
    name: 'Rock Festival 2026',
    type: 'vip',
    data: new Date('2026-08-10T20:00:00'),
    price: 450,
    description: 'Acesso VIP com área exclusiva, open bar e entrada antecipada.',
  },
  {
    id: '2',
    name: 'Rock Festival 2026',
    type: 'standard',
    data: new Date('2026-08-10T20:00:00'),
    price: 220,
    description: 'Ingresso padrão para curtir todas as atrações do festival.',
  },
  {
    id: '3',
    name: 'Rock Festival 2026',
    type: 'meia',
    data: new Date('2026-08-10T20:00:00'),
    price: 110,
    description: 'Ingresso meia-entrada válido para estudantes.',
  },
  {
    id: '4',
    name: 'Tech Conference 2026',
    type: 'vip',
    data: new Date('2026-09-15T09:00:00'),
    price: 800,
    description: 'Acesso VIP com networking exclusivo e kit premium.',
  },
];

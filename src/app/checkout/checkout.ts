import { Component, signal } from '@angular/core';
import { TicketItem } from '../ticket-item/ticket-item';
import { TICKETS_MOCK, Ticket } from '../mock';
import { CurrencyPipe, DatePipe, NgClass } from '@angular/common';
import { TruncatePipe } from '../resumo-pipe';

@Component({
  selector: 'app-checkout',
  imports: [TicketItem, DatePipe, TruncatePipe, CurrencyPipe, NgClass],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  parentQuantity = signal(1);
  tickets = signal<Ticket[]>(TICKETS_MOCK);
  status = signal('Arguardando ação...');

  isCanceled(value: string) {
    this.status.set(value);
  }

  addTicket() {
    const newTicket: Ticket = {
      id: crypto.randomUUID(),
      name: 'Competição Bolinha',
      type: 'standard',
      data: new Date(),
      price: 150,
      description: 'Ingresso gerado pela compra no checkout.',
      lotePercentual: 10,
    };

    this.tickets.update((rest) => [...rest, newTicket]);
  }
}

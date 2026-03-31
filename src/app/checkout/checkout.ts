import { Component, signal } from '@angular/core';
import { TicketItem } from '../ticket-item/ticket-item';

@Component({
  selector: 'app-checkout',
  imports: [TicketItem],
  templateUrl: './checkout.html',
  styleUrl: './checkout.css',
})
export class Checkout {
  parentQuantity = signal(1);
  status = signal('Arguardando finalização...');

  isCanceled(value: string) {
    this.status.set(value);
  }
}

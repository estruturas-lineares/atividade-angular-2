import { Component, input, model, output, signal } from '@angular/core';
import { Ticket } from '../mock';

@Component({
  selector: 'app-ticket-item',
  imports: [],
  templateUrl: './ticket-item.html',
  styleUrl: './ticket-item.css',
})
export class TicketItem {
  eventName = input.required<string>();
  quantity = model(1);
  cancel = output<string>();
  confirm = output<void>();
  discountValue = signal(0);

  increment() {
    this.quantity.update((q) => q + 1);
  }

  decrement() {
    this.quantity.update((q) => q - 1);
  }

  showCanceled() {
    this.cancel.emit('Soliticação cancelada');
  }

  confirmTicket() {
    this.confirm.emit();
  }

  discount(event: Event) {
    const value = (event.target as HTMLInputElement).value;
    this.discountValue.set(Number(value));

    alert('Bucando cupom:' + value);
  }
}

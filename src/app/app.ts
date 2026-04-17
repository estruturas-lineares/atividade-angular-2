import { Component, input, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TicketItem } from './ticket-item/ticket-item';
import { Checkout } from './checkout/checkout';
import { Card } from './card/card';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Checkout, Card],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('atividade2');
}

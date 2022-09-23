import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent implements OnInit {
  name?: string;
  total?: number;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.name = String(this.route.snapshot.paramMap.get('name'));
    this.total = Number(this.route.snapshot.paramMap.get('total'));
  }
}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-request-pool',
  templateUrl: './request-pool.component.html',
  styleUrls: ['./request-pool.component.scss']
})
export class RequestPoolComponent implements OnInit {
title="Talep Havuzum";
subtitle="Size atanmış işleri görebilir ve statüsünü ilerletebilirsiniz."
  constructor() { }

  ngOnInit() {
  }

}

import {
  AfterViewInit,
  Component,
  Input,
  OnChanges,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-node',
  templateUrl: './node.component.html',
  styleUrls: ['./node.component.css'],
})
export class NodeComponent implements AfterViewInit, OnChanges {
  @Input() value: string;

  ngAfterViewInit() {}

  ngOnChanges() {}
}

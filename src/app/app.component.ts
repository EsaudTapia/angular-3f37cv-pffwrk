import { AfterViewInit, ViewChild } from '@angular/core';
import { Component, ElementRef } from '@angular/core';

declare var mxGraph: any;
declare var mxHierarchicalLayout: any;
@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  private graph: any;
  @ViewChild('graphContainer') graphContainer: ElementRef;

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit(): void {
    this.graph = new mxGraph(
      this.elementRef.nativeElement.querySelector('.workspace')
    );
    this.setupGraph();
    this.setupDraggableSidebar();
    //HHGGG
  }

  private setupGraph(): void {
    this.graph.setConnectable(true);
    this.graph.setDropEnabled(true);
    this.graph.setPanning(true);
    this.graph.setCellsResizable(true);
  }

  private setupDraggableSidebar(): void {
    const sidebar = document.getElementById('sidebar');
    const dragElems = sidebar.querySelectorAll('.draggable');

    dragElems.forEach((elem: HTMLElement) => {
      elem.draggable = true;
      elem.addEventListener('dragstart', (event) => {
        event.dataTransfer.setData('text/plain', elem.innerHTML);
      });
    });
  }

  onDrop(event: any): void {
    const x = event.clientX;
    const y = event.clientY;
    const data = event.dataTransfer.getData('text/plain');

    const vertex = this.graph.insertVertex(
      this.graph.getDefaultParent(),
      null,
      data,
      x,
      y,
      100,
      50
    );

    event.preventDefault();
  }

  onDragOver(event: any): void {
    event.preventDefault();
  }
}

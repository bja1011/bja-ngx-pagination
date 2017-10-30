/**
 * Created by Bja on 10/24/17.
 */
import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';

const pagesShow: number = 3;

@Component({
  selector: 'bja-pagination',
  templateUrl: './bja-pagination.component.html',
  styleUrls: ['./bja-pagination.component.scss']
})

export class BjaPaginationComponent implements OnChanges {

  @Output() pageChanged: EventEmitter<any> = new EventEmitter<any>();
  @Input() totalItems;
  @Input() currentPage;

  // Default limit if not passed from parent
  @Input() limit = 5;
  @Input() forceUpdate: any;

  showFirst: boolean;
  showLast: boolean;
  totalPages: number;

  pages: number[] = [];

  constructor() {
  }

  /**
   * Send page changed event to parent component with selected page and current limit
   * @param {number} page
   */
  setPage(page: number) {
    this.pageChanged.emit({
      page: page,
      limit: this.limit
    });
  }

  /**
   * Regenerate pagination on any state change
   */
  ngOnChanges() {
    this.generatePages();
  }

  /**
   * Generate pages button data
   */
  generatePages() {
    this.pages = [];
    this.totalPages = Math.ceil(this.totalItems / this.limit);
    let startIndex = this.currentPage === 1 ? 0 : (this.totalPages === this.currentPage ? -(pagesShow - 1) : -1);
    for (let i = startIndex; i <= this.totalPages - this.currentPage; i++) {
      if (this.currentPage + i > 0) {
        this.pages.push(this.currentPage + i);
      }
      if (i >= (pagesShow - 1) + startIndex) {
        break;
      }
    }
    this.showFirst = this.pages[0] > 1;
    this.showLast = this.pages[pagesShow - 1] < this.totalPages;
  }

}

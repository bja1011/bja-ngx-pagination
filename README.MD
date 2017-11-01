# bja-ngx-pagination

## Pagination component for angular 2+
```* new features in development *```

### Demo
[Demo on Stackblitz](https://stackblitz.com/edit/bja-ngx-pagination-demo?file=app%2Fapp.component.ts)

### Install with npm:

```bash
npm install bja-ngx-pagination --save
```

### In your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import your library
import { BjaPagination } from 'bja-ngx-pagination';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BjaPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

use it in Your component template:

```xml
<bja-pagination
  (pageChanged)="handlePaginationEvent($event)"
  [currentPage]="page"
  [totalItems]="totalItems"
  [limit]="20"
></bja-pagination>
```

 and handle pagination event in component class:
```typescript
handlePaginationEvent(event) {
    
    //sample method for fetching data
    this.getPage(event.page);
  }
```
## API

* **`pageChanged`** [`event handler`] - will be invoked when the page was changed. 
* **`currentPage`** [`number`] - **required** - current page number.
* **`totalItems`** [`number`] - **required** - total number of items.
* **`limit`** [`number`] -  **required** - items per page.


MIT © [Adam Kaczmarek](mailto:adam@bearsoft.pl)

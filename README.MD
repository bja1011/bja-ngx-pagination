# bja-ngx-pagination

## Pagination component for angular 2+

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
  [limit]="20"
  [currentPage]="page"
  [totalItems]="totalItems"
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

* **`pageChanged`**  [event handler] - will be invoked when the page changed. 
* **`limit`**  [`number`] - items to show per page. 
* **`currentPage`** [`number`] - **required** current page number.
* **`totalItems`** [`number`] - **required** - total number of items.
## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

## License

MIT © [Adam Kaczmarek](mailto:bja1011@gmail.com)

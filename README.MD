# bja-ngx-pagination

## Simple example

Install with npm:
```bash
$ npm install bja-ngx-pagination --save
```

and then from your Angular `AppModule`:

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

    // Specify your library as an import
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
  (pageChanged)="paginationUpdate($event)"
  [limit]="20"
  [currentPage]="page"
  [totalItems]="totalItems"
></bja-pagination>
```

 and handle pagination event in component class:
```typescript
paginationUpdate(event) {
    this.getPage(event.page, this.limit);
  }
```
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

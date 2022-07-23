import { ModuleWithProviders, NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'

import { PieComponent } from './pie.component'

import * as token from './pie.tokens'

@NgModule({
  declarations: [PieComponent],
  imports: [CommonModule],
  exports: [PieComponent],
  providers: [
    { provide: token.DEFAULT_RING_WIDTH_TOKEN, useValue: token.DEFAULT_RING_WIDTH_VALUE },
    { provide: token.DEFAULT_PIE_VALUE_TOKEN, useValue: token.DEFAULT_PIE_VALUE },
    { provide: token.DEFAULT_BACKGROUND_TOKEN, useValue: token.DEFAULT_BACKGROUND_VALUE }
  ]
})
export class PieModule {
  static config (cfg: {
    defaultRingWidth?: number,
    defaultValue?: number,
    defaultBackgroundColor?: string
  }): ModuleWithProviders<PieModule> {
    return {
      ngModule: PieModule,
      providers: [
        { provide: token.DEFAULT_RING_WIDTH_TOKEN, useValue: cfg.defaultRingWidth ?? token.DEFAULT_RING_WIDTH_VALUE },
        { provide: token.DEFAULT_PIE_VALUE_TOKEN, useValue: cfg.defaultValue ?? token.DEFAULT_PIE_VALUE },
        { provide: token.DEFAULT_BACKGROUND_TOKEN, useValue: cfg.defaultBackgroundColor ?? token.DEFAULT_BACKGROUND_VALUE }
      ]
    }
  }
}

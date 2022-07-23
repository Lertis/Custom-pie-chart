import { Component, Inject, Input } from '@angular/core'

import * as token from './pie.tokens'

type NorS = string | number

@Component({
  selector: 'app-pie',
  templateUrl: './pie.component.html',
  styleUrls: ['./pie.component.scss']
})
export class PieComponent {
  private chartValue!: NorS
  private ringWidthValue!: NorS
  private backGroundColor!: string

  @Input() animated = false
  @Input() rounded = false

  /**
   * @description color fill percentage. Value should be in range [0 - 100]
   * @example: 80
   */
  @Input() set value (v: NorS) {
    this.chartValue = v
  }

  get value (): NorS {
    return this.convertVariableToInt(this.getChartValue())
  }

  /**
   * @description color in HEX or color name.
   * @example: '#6A5ACD', 'plum'
   */
  @Input() set backgroundColor (v: string) {
    this.backGroundColor = v
  }

  get backgroundColor (): string {
    return this.getBackgroundColorValue()
  }

  @Input() set ringWidth (v: NorS) {
    this.ringWidthValue = v
  }

  get ringWidth (): string {
    const initial = this.getRingWidthValue()
    const v = this.convertVariableToInt(initial)
    return `${v}px`
  }

  constructor (
    @Inject(token.DEFAULT_RING_WIDTH_TOKEN) private readonly defaultRingWidth: number,
    @Inject(token.DEFAULT_PIE_VALUE_TOKEN) private readonly defaultValue: number,
    @Inject(token.DEFAULT_BACKGROUND_TOKEN) private readonly defaultBackground: number
  ) { }

  private getRingWidthValue = (): NorS => this.ringWidthValue ?? this.defaultRingWidth

  private getChartValue = (): NorS => this.chartValue ?? this.defaultValue

  private getBackgroundColorValue = (): string => this.backGroundColor ?? this.defaultBackground

  private convertVariableToInt = (v: NorS): number => typeof v === 'string' ? parseInt(v, 10) : v

}

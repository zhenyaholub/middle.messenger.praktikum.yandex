import { type BlockClassType, type RoutesType } from '../types/router'

import { render, isEqual } from './helpers'
import { type Block } from './block'

export class Route {
  _pathname: RoutesType
  _blockClass: BlockClassType
  _block: Block | null
  _props: any

  constructor (pathname: RoutesType, view: BlockClassType, props: any) {
    this._pathname = pathname
    this._blockClass = view
    this._block = null
    this._props = props
  }

  navigate (pathname: RoutesType) {
    if (this.match(pathname)) {
      this._pathname = pathname
      this.render()
    }
  }

  leave () {
    if (this._block) {
      this._block.hide()
    }
  }

  match (pathname: string) {
    return isEqual(pathname, this._pathname)
  }

  render () {
    if (!this._block) {
      this._block = new this._blockClass(this._props)
      render('#app', this._block)
      return
    }

    this._block.show()
  }
}

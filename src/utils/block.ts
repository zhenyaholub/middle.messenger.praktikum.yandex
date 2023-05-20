import { nanoid } from 'nanoid'

import { EventBus } from './eventBus'
import { type EventsType, type Props } from '../types/block'

export class Block<P extends Props & EventsType = any> {
  static EVENTS = {
    INIT: 'init',
    FLOW_CDM: 'flow:component-did-mount',
    FLOW_CDU: 'flow:component-did-update',
    FLOW_RENDER: 'flow:render'
  } as const

  public id = nanoid(6)
  protected props: P
  public children: Record<string, Block | Block[]>
  private readonly eventBus: () => EventBus
  private _element: HTMLElement | null = null

  constructor (propsWithChildren: P) {
    const eventBus = new EventBus()

    const { props, children } = this._getChildrenAndProps(propsWithChildren)

    this.children = children
    this.props = this._makePropsProxy(props)

    this.eventBus = () => eventBus

    this._registerEvents(eventBus)

    eventBus.emit(Block.EVENTS.INIT)
  }

  _getChildrenAndProps (childrenAndProps: P): {
    props: P
    children: Record<string, Block>
  } {
    const props: Record<string, unknown> = {}
    const children: Record<string, Block> = {}

    Object.entries(childrenAndProps).forEach(([key, value]) => {
      if (this._shouldGoToChildren(value)) {
        children[key] = value as Block
      } else {
        props[key] = value
      }
    })

    return { props: props as P, children }
  }

  _addEvents () {
    const { events = {} } = this.props as P & {
      events: Record<string, () => void>
    }

    Object.keys(events).forEach((eventName) => {
      this._element?.addEventListener(eventName, events[eventName])
    })
  }

  _removeEvents () {
    const { events = {} } = this.props as P & {
      events: Record<string, () => void>
    }

    Object.keys(events).forEach((eventName) => {
      this._element?.removeEventListener(eventName, events[eventName])
    })
  }

  _registerEvents (eventBus: EventBus) {
    eventBus.on(Block.EVENTS.INIT, this._init.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDM, this._componentDidMount.bind(this))
    eventBus.on(Block.EVENTS.FLOW_CDU, this._componentDidUpdate.bind(this))
    eventBus.on(Block.EVENTS.FLOW_RENDER, this._render.bind(this))
  }

  private _init () {
    this.init()

    this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
  }

  protected init () {}

  _componentDidMount () {
    this.componentDidMount()
  }

  componentDidMount () {}

  public dispatchComponentDidMount () {
    this.eventBus().emit(Block.EVENTS.FLOW_CDM)

    Object.values(this.children).forEach((child) => {
      if (Array.isArray(child)) {
        child.forEach((child) => {
          child.dispatchComponentDidMount()
        })
      } else {
        child.dispatchComponentDidMount()
      }
    })
  }

  private _componentDidUpdate (oldProps: P, newProps: P) {
    if (this.componentDidUpdate(oldProps, newProps)) {
      this.eventBus().emit(Block.EVENTS.FLOW_RENDER)
    }
  }

  protected componentDidUpdate (oldProps: P, newProps: P) {
    return true
  }

  setProps = (nextProps: P) => {
    if (!nextProps) {
      return
    }

    Object.assign(this.props, nextProps)
  }

  get element () {
    return this._element
  }

  private _render () {
    this._removeEvents()

    const fragment = this.render()

    const newElement = fragment.firstElementChild as HTMLElement

    if (this._element != null && newElement) {
      this._element.replaceWith(newElement)
    }

    this._element = newElement

    this._addEvents()
  }

  protected compile (template: (context: any) => string, context: any) {
    const contextAndStubs = { ...context }

    Object.entries(this.children).forEach(([name, component]) => {
      if (Array.isArray(component)) {
        contextAndStubs[name] = document.createElement('div')
        contextAndStubs[name].setAttribute('wrapper', '')

        component.forEach((component) => {
          const element = document.createElement('div')
          element.setAttribute('data-id', component.id)
          contextAndStubs[name].append(element)
        })

        contextAndStubs[name] = contextAndStubs[name].outerHTML
      } else {
        contextAndStubs[name] = `<div data-id="${component.id}"></div>`
      }
    })

    const html = template(contextAndStubs)

    const temp = document.createElement('template')

    temp.innerHTML = html

    const wrappers = temp.content.querySelectorAll('[wrapper]')

    if (wrappers.length) {
      wrappers.forEach((wrapper) => {
        wrapper.replaceWith(...wrapper.childNodes)
      })
    }

    const replace = (component: Block) => {
      component.setProps({ parent: this })
      const stub = temp.content.querySelector(`[data-id="${component.id}"]`)

      if (!stub) {
        return
      }

      component.getContent()?.append(...Array.from(stub.childNodes))
      stub.replaceWith(component.getContent()!)
    }

    Object.entries(this.children).forEach(([_, component]) => {
      if (Array.isArray(component)) {
        component.forEach((component) => {
          replace(component)
        })
      } else {
        replace(component)
      }
    })

    return temp.content
  }

  protected render (): DocumentFragment {
    return new DocumentFragment()
  }

  getContent () {
    return this.element
  }

  private _makePropsProxy (props: P) {
    return new Proxy(props, {
      get: (target, prop: string) => {
        const value = target[prop]
        return typeof value === 'function' ? value.bind(target) : value
      },
      set: (target, prop: string, value) => {
        const oldTarget = { ...target }

        target[prop as keyof P] = value

        this.eventBus().emit(Block.EVENTS.FLOW_CDU, oldTarget, target)
        return true
      },
      deleteProperty: () => {
        throw new Error('Нет доступа')
      }
    })
  }

  private _shouldGoToChildren (propValue: any) {
    let result

    if (propValue instanceof Block) {
      result = true
    }

    if (Array.isArray(propValue)) {
      result = propValue.every((value) => value instanceof Block)
    }

    return result
  }

  hide () {
    this.getContent()!.style.display = 'none'
  }

  show () {
    this.getContent()!.style.display = 'block'
  }

  getParent () {
    return this.props.parent
  }
}

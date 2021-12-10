# 2112-bpmn-js-basic

## reference
- httLps://bpmn.io/toolkit/bpmn-js/walkthrough/

## A Quick Introduction
- bpmn-js is a BPMN 2.0 rendering toolkit and web modeler.That make it easy to embed that into web application.
- discription:
  - viewer
    - https://github.com/bpmn-io/bpmn-js-example/tree/master/url-viewer
  - overlay
    - https://github.com/bpmn-io/bpmn-js-example/tree/master/overlays
  - modeler
    - https://github.com/bpmn-io/bpmn-js-example/tree/master/modeler
- This article will give us an introduction on how to use the library as well as some insights into its internals, that has its highly modular and extensible structure.

## Contents
### liblaries
- ** prepackaged**: To embed the Viewer
- **npm**: Roll up own module into apps
### Internals
- **diagram-js**: Diagram Interaction / Modeling 
- **bpmn-moddle**: BPMN Meta-model

## Libraries
### modules: Roll own modeler 
- To give us access to individual library components and allows us for easier extensiblilty. It also gives us more control over what to pacakage as part of the viewer / modeler. 
- If we would like to build customizations around the library, it requires us to bundle bpmn-js with our application using an ES module aware bundler such as **Webpack**.
  - https://github.com/bpmn-io/bpmn-js-example/tree/master/bundling

### installation

- npm install
```
npm install bpmn-js
```

- Add css link

```
<link rel="stylesheet" href="bpmn-js/dist/assets/diagram-js.css" />
<link rel="stylesheet" href="bpmn-js/dist/assets/bpmn-font/css/bpmn.css" />
```

## Extend the Modeler
- Adding custome elements
  - https://github.com/bpmn-io/bpmn-js-example/tree/master/custom-elements
- Custom palette/ Context Pad
- Custom shape rendering
  - https://github.com/bpmn-io/bpmn-js-example/tree/master/bpmn-js-nyan


## Internals 
![bpmn-js-architecture](https://gyazo.com/310a887240cb91c422d8bb1718d277fb.png)

- Bpmn-js use diagram-js to draw shpase and connections. It provides us with ways to interact with these graphical elements as well as additional tools such as overlays that help users to build powerfull BPMN viewers. 
- For advanced use cases such as modeling it contributes the context pad and palette and facilities like redo/undo.

- **bpmn-moddle** knows about the BPMN 2.0 meta-model. It allows us to read and write BPMN 2.0 schema-compliant XML documents adn access BPMN-related information behind shapes and connection drawn on the diagram.
- On top of these two libraries, bpmn-js defines the BPMN specifics such as look and feel, modeling rules and tooling. We will go into details about individual components in the following paragraphs.

### diagram-js: Diagram intraction and modeling
- diagram-js is a toolbox for display and modifying diagrams on the web.It allows us to render visual elements and build interactive experience on top of them.
- It provides us with a very simple module system for building features and dependency injection for service discovery. This system also provides a number of core services that implement the diagram essentials.
- Additionaly, diagram-js defines a data model for graphical elements and their relationships.

### module system

- diagram-js employs dependency injection (DI) to wire and discover diagram components under the hood.

#### Units that provide named services along with their implementation

- a sample:

```
const MyLoggingPlugin = (eventBus) => {
    eventBus.on('element.changed',(event)=>{
        console.log('element :', event.element, ' changed.')
    })
}

// ensure the dependency namesare still available after minification
MyLoggingPlugin.$inject = [ 'eventBus' ];
```

- We must publish the service under a unique name using a module definition:

```
import CoreModule from 'diagram-js/lib/core'
//export as module
export default {
    __depends__: [CoreModule],
    __init__: [ 'myLoggingPlugin' ],
    myLoggingPlugin: ['type', MyLoggingPlugin ]


}
```

- The definition tells the DI infrastructure that the service is called myLoggingPlugin, that it depends on the diagram-js core module and that the service should be initialized upon diagram creation.
- For more details have a look at the `didi` documentation. 
  - https//github.com/nikku/didi/blog/master/README.md

```
import MyLoggingModule from 'path-to-my-logging-module';

const diagram = new Diagram({
    modules: [
        MyLoggingModule
    ]
})
```

### Core service
- **diagram-js core**
    - https//github.com/bpmn-io/diagram-js/tree/master/lib/core

- built around a number of essential services:
  - **Canvas**
  - **EventBus**
  - **ElementFactory**
  - **ElementRegistry**
  - **GraphicFactory**

## diagram-js data model

- Under the hood, diagram-js implements a simple data model consisting of shapes and connections.
  - A shape has a parenet, a list of children as well as a list of incoming and outgoing connections.
  - A connection has a parenet as well s a source and target, pointing to a shape.
- **ElementRegistry** : be resoponsible for creating shapes and connections according to that model.
- **Modeling service**: elements relationships will be updated according to user operation.

## Auxiliary Services
- **CommandStack**:
- **ContextPad**:
- **Overlay**:
- **Palette**:
- **Modeling**:


[endo fo file]
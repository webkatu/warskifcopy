(function () {
  'use strict';
  if (detect()) { return; }

  function detect() {
    try {
      customElements.define('corpuscule-cbe-detector', document.createElement('p').constructor, {
        extends: 'p'
      });
      return true;
    } catch (_) {
      return false;
    }
  }

  var CustomBuiltInElementsRegistry =
  function () {
    function CustomBuiltInElementsRegistry() {
      this.listeners = {};
      this.registry = {};
      this.reversed = new WeakMap();
    }
    var _proto = CustomBuiltInElementsRegistry.prototype;
    _proto.get = function get(nameOrConstructor) {
      return typeof nameOrConstructor === 'string' ? this.registry[nameOrConstructor] : this.reversed.get(nameOrConstructor);
    }
    ;
    _proto.has = function has(nameOrConstructor) {
      return typeof nameOrConstructor === 'string' ? !!this.registry[nameOrConstructor] : this.reversed.has(nameOrConstructor);
    }
    ;
    _proto.set = function set(name, constructor) {
      var listeners = this.listeners,
          registry = this.registry,
          reversed = this.reversed;
      registry[name] = constructor;
      reversed.set(constructor, name);
      if (listeners[name]) {
        for (var i = 0, len = listeners[name].length; i < len; i++) {
          listeners[name][i]();
        }
        listeners[name] = null;
      }
    }
    ;
    _proto.whenDefined = function whenDefined(name) {
      var _this = this;
      return new Promise(function (resolve) {
        var listeners = _this.listeners,
            registry = _this.registry;
        if (registry[name]) {
          resolve();
        } else if (listeners[name]) {
          listeners[name].push(resolve);
        } else {
          listeners[name] = [resolve];
        }
      });
    };
    return CustomBuiltInElementsRegistry;
  }();

  var supportsNativeWebComponents = 'ShadowRoot' in window && !('ShadyCSS' in window && !window.ShadyCSS.nativeShadow);
  var elementsRegistry = new CustomBuiltInElementsRegistry();
  var tagsRegistry = new WeakMap();
  var upgradingRegistry = new WeakMap();
  var nativeConstructorRegistry = new WeakMap();
  var patchedPrototypesRegistry = new WeakMap();
  var lifecycleRegistry = new WeakMap();
  var isPattern = /\bis=(["'])?[a-z0-9_-]+\1/i;
  var $attributeChangedCallback = 'attributeChangedCallback';
  var $connectedCallback = 'connectedCallback';
  var $disconnectedCallback = 'disconnectedCallback';
  var nativeConstructorNames = ['Anchor', 'Area', 'Audio', 'Base', 'Quote', 'Body', 'BR', 'Button', 'Canvas', 'TableCaption', 'TableCol', 'Data', 'DataList', 'Mod', 'Details', 'Dialog', 'Div', 'DList', 'Embed', 'FieldSet', 'Form', 'Heading', 'Head', 'HR', 'Html', 'IFrame', 'Image', 'Input', 'Unknown', 'Label', 'Legend', 'LI', 'Link', 'Map', 'Menu', 'Meta', 'Meter', 'Object', 'OList', 'OptGroup', 'Option', 'Output', 'Paragraph', 'Param', 'Pre', 'Progress', 'Script', 'Select', 'Source', 'Span', 'Style', 'Table', 'TableSection', 'TableCell', 'Template', 'TextArea', 'Time', 'Title', 'TableRow', 'Track', 'UList', 'Video'];

  var defineProperties = Object.defineProperties,
      defineProperty = Object.defineProperty,
      getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor,
      getPrototypeOf = Object.getPrototypeOf,
      setPrototypeOf = Object.setPrototypeOf;
  function getPrototypeChain(proto) {
    var chain = [proto];
    var currentProto = proto;
    while (true) {
      currentProto = getPrototypeOf(currentProto);
      if (currentProto === Object.prototype || currentProto === HTMLElement.prototype) {
        return chain;
      }
      chain.push(currentProto);
    }
  }
  function isConnected(element) {
    return 'isConnected' in element ? element.isConnected : document.body.contains(element);
  }
  var checkShadow = function checkShadow(node, pierce) {
    return supportsNativeWebComponents && pierce && node.shadowRoot;
  };
  function runForDescendants(root, check, callback, pierce) {
    if (pierce === void 0) {
      pierce = false;
    }
    var iter = document.createNodeIterator(root, NodeFilter.SHOW_ELEMENT, function (matchingNode) {
      return check(matchingNode) || checkShadow(matchingNode, pierce) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
    }, null, false);
    var node;
    while (node = iter.nextNode()) {
      if (checkShadow(node, pierce)) {
        runForDescendants(node.shadowRoot, check, callback, pierce);
      } else {
        callback(node);
      }
    }
  }
  function recognizeElementByIsAttribute(element) {
    var name = element.getAttribute('is');
    return name && elementsRegistry.get(name);
  }
  function recognizeElementByConstructor(_ref) {
    var constructor = _ref.constructor;
    return elementsRegistry.has(constructor) && constructor;
  }
  function setup(element) {
    var constructor = recognizeElementByIsAttribute(element);
    upgradingRegistry.set(constructor, element);
    new constructor();
  }
  function connect(element) {
    if ($connectedCallback in element && lifecycleRegistry.get(element) !== $connectedCallback) {
      element[$connectedCallback]();
      lifecycleRegistry.set(element, $connectedCallback);
    }
  }
  function disconnect(element) {
    if ($disconnectedCallback in element && lifecycleRegistry.get(element) !== $disconnectedCallback) {
      element[$disconnectedCallback]();
      lifecycleRegistry.set(element, $disconnectedCallback);
    }
  }
  function watchDOMChanges(mutations) {
    for (var i = 0, iLen = mutations.length; i < iLen; i++) {
      var _mutations$i = mutations[i],
          addedNodes = _mutations$i.addedNodes,
          removedNodes = _mutations$i.removedNodes;
      for (var j = 0, jLen = addedNodes.length; j < jLen; j++) {
        if (isConnected(addedNodes[j])) {
          runForDescendants(addedNodes[j], recognizeElementByConstructor, connect, true);
        }
      }
      for (var _j = 0, _jLen = removedNodes.length; _j < _jLen; _j++) {
        runForDescendants(removedNodes[_j], recognizeElementByConstructor, disconnect, true);
      }
    }
  }
  function createElementObserver(element) {
    var observer = new MutationObserver(watchDOMChanges);
    observer.observe(element, {
      childList: true,
      subtree: true
    });
  }

  var CERExceptionCommonText = "Failed to execute 'define' on 'CustomElementRegistry'";
  var dashPattern = /-/;
  function patchCustomElementRegistry() {
    var _customElements = customElements,
        define = _customElements.define,
        get = _customElements.get,
        upgrade = _customElements.upgrade,
        whenDefined = _customElements.whenDefined;
    defineProperties(customElements, {
      define: {
        configurable: true,
        value: function value(name, constructor, options) {
          if (!options || !options.extends) {
            define.apply(customElements, arguments);
            return;
          }
          if (elementsRegistry.has(name)) {
            throw new Error(CERExceptionCommonText + ": the name \"" + name + "\" has already been used with this registry");
          }
          if (elementsRegistry.has(constructor)) {
            throw new Error(CERExceptionCommonText + ": this constructor has already been used with this registry");
          }
          if (!dashPattern.test(name)) {
            throw new Error(CERExceptionCommonText + ": \"" + name + "\" is not a valid custom element name");
          }
          var chain = getPrototypeChain(constructor.prototype);
          var polyfilledPrototype = chain[chain.length - 1];
          var firstChild = chain[chain.length - 2];
          var nativeConstructor = nativeConstructorRegistry.get(polyfilledPrototype.constructor);
          if (!patchedPrototypesRegistry.has(firstChild)) {
            setPrototypeOf(firstChild, nativeConstructor.prototype);
            patchedPrototypesRegistry.set(firstChild, 0);
          }
          elementsRegistry.set(name, constructor);
          tagsRegistry.set(constructor, options.extends);
          var pattern = new RegExp(options.extends, 'i');
          runForDescendants(document.body, function (node) {
            return pattern.test(node.tagName) && node.getAttribute('is') === name;
          }, function (node) {
            setup(node);
            connect(node);
          }, true);
        }
      },
      get: {
        configurable: true,
        value: function value(name) {
          return elementsRegistry.get(name) || get.call(customElements, name);
        }
      },
      upgrade: {
        configurable: true,
        value: function value(element) {
          var constructor = recognizeElementByIsAttribute(element);
          if (constructor) {
            setup(element, constructor);
          } else {
            upgrade.call(customElements, element);
          }
        }
      },
      whenDefined: {
        configurable: true,
        value: function value(name) {
          return Promise.race([whenDefined.call(customElements, name), elementsRegistry.whenDefined(name)]);
        }
      }
    });
  }

  function attributeChanged(mutations) {
    for (var i = 0, len = mutations.length; i < len; i++) {
      var _mutations$i = mutations[i],
          attributeName = _mutations$i.attributeName,
          oldValue = _mutations$i.oldValue,
          target = _mutations$i.target;
      if (target[$attributeChangedCallback]) {
        target[$attributeChangedCallback](attributeName, oldValue, target.getAttribute(attributeName));
      }
    }
  }
  function patchNativeConstructors() {
    nativeConstructorNames.forEach(function (nativeNamePart) {
      var nativeConstructorName = "HTML" + nativeNamePart + "Element";
      var NativeConstructor = window[nativeConstructorName];
      var PolyfilledConstructor = function PolyfilledConstructor() {
        var constructor = this.constructor;
        if (!elementsRegistry.has(constructor)) {
          throw new TypeError('Illegal constructor');
        }
        var element;
        if (upgradingRegistry.has(constructor)) {
          element = upgradingRegistry.get(constructor);
          upgradingRegistry.delete(constructor);
        } else {
          var tag = tagsRegistry.get(constructor);
          element = document.createElement(tag);
        }
        setPrototypeOf(element, constructor.prototype);
        element.constructor = constructor;
        var observedAttributes = constructor.observedAttributes;
        if (observedAttributes && observedAttributes.length > 0) {
          var observer = new MutationObserver(attributeChanged);
          observer.observe(element, {
            attributeFilter: observedAttributes,
            attributeOldValue: true,
            attributes: true
          });
        }
        return element;
      };
      defineProperty(PolyfilledConstructor, Symbol.hasInstance, {
        configurable: true,
        value: function value(instance) {
          return this === PolyfilledConstructor ? NativeConstructor.prototype.isPrototypeOf(instance) : this.prototype.isPrototypeOf(instance);
        }
      });
      nativeConstructorRegistry.set(PolyfilledConstructor, NativeConstructor);
      window[nativeConstructorName] = PolyfilledConstructor;
    });
  }

  function patchPickingMethod(proto, name) {
    var nativeMethod = proto[name];
    proto[name] = function () {
      var result = nativeMethod.apply(this, arguments);
      if (result.nodeType === Node.ELEMENT_NODE || result.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
        runForDescendants(result.content || result, recognizeElementByIsAttribute, setup);
      }
      return result;
    };
  }
  function patchInnerHTML(proto) {
    var _getOwnPropertyDescri = getOwnPropertyDescriptor(proto, 'innerHTML'),
        get = _getOwnPropertyDescri.get,
        _set = _getOwnPropertyDescri.set;
    defineProperty(proto, 'innerHTML', {
      configurable: true,
      get: get,
      set: function set(html) {
        _set.call(this, html);
        if (isPattern.test(html)) {
          runForDescendants(this, recognizeElementByIsAttribute, setup);
        }
      }
    });
  }
  function patchNativeMethods() {
    var _document = document,
        createElement = _document.createElement;
    document.createElement = function (_, options) {
      if (options && options.is && elementsRegistry.has(options.is)) {
        return new (elementsRegistry.get(options.is))();
      }
      return createElement.apply(document, arguments);
    };
    if (supportsNativeWebComponents) {
      var attachShadow = HTMLElement.prototype.attachShadow;
      HTMLElement.prototype.attachShadow = function () {
        var root = attachShadow.apply(this, arguments);
        createElementObserver(root);
        return root;
      };
    }
    patchPickingMethod(Document.prototype, 'importNode');
    patchPickingMethod(Node.prototype, 'cloneNode');
    var elementPrototype = 'innerHTML' in Element.prototype ? Element.prototype : HTMLElement.prototype;
    var insertAdjacentHTML = elementPrototype.insertAdjacentHTML;
    elementPrototype.insertAdjacentHTML = function (_, html) {
      insertAdjacentHTML.apply(this, arguments);
      if (isPattern.test(html)) {
        runForDescendants(this, recognizeElementByIsAttribute, setup);
      }
    };
    patchInnerHTML(elementPrototype);
    if (supportsNativeWebComponents) {
      patchInnerHTML(ShadowRoot.prototype);
    }
  }

  function initObservation() {
    createElementObserver(document.body);
  }
  function initPolyfill() {
    patchNativeConstructors();
    patchCustomElementRegistry();
    patchNativeMethods();
  }

  initPolyfill();
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initObservation);
  } else {
    initObservation();
  }

}());

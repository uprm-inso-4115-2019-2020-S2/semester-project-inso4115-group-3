(function(){
'use strict';
const $linkingInfo = Object.freeze({
  "assumingES6": true,
  "productionMode": false,
  "linkerVersion": "1.0.0",
  "fileLevelThis": this
});
const $imul = Math.imul;
const $fround = Math.fround;
const $clz32 = Math.clz32;
let $L0;
function $propertyName(obj) {
  for (const prop in obj) {
    return prop
  }
}
class $Char {
  constructor(c) {
    this.c = c
  };
  toString() {
    return String.fromCharCode(this.c)
  };
}
function $throwClassCastException(instance, classFullName) {
  throw $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__jl_Throwable__(new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(), $ct_jl_ClassCastException__T__(new $c_jl_ClassCastException(), ((instance + " is not an instance of ") + classFullName)))
}
function $throwArrayCastException(instance, classArrayEncodedName, depth) {
  while ((--depth)) {
    classArrayEncodedName = ("[" + classArrayEncodedName)
  };
  $throwClassCastException(instance, classArrayEncodedName)
}
function $throwArrayIndexOutOfBoundsException(i) {
  throw $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__jl_Throwable__(new $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError(), $ct_jl_ArrayIndexOutOfBoundsException__T__(new $c_jl_ArrayIndexOutOfBoundsException(), ((i === null) ? null : ("" + i))))
}
function $noIsInstance(instance) {
  throw new TypeError("Cannot call isInstance() on a Class representing a JS trait/object")
}
function $makeNativeArrayWrapper(arrayClassData, nativeArray) {
  return new arrayClassData.constr(nativeArray)
}
function $newArrayObject(arrayClassData, lengths) {
  return $newArrayObjectInternal(arrayClassData, lengths, 0)
}
function $newArrayObjectInternal(arrayClassData, lengths, lengthIndex) {
  const result = new arrayClassData.constr(lengths[lengthIndex]);
  if ((lengthIndex < (lengths.length - 1))) {
    const subArrayClassData = arrayClassData.componentData;
    const subLengthIndex = (lengthIndex + 1);
    const underlying = result.u;
    for (let i = 0; (i < underlying.length); (i++)) {
      underlying[i] = $newArrayObjectInternal(subArrayClassData, lengths, subLengthIndex)
    }
  };
  return result
}
function $objectGetClass(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $d_T.getClassOf()
    }
    case "number": {
      const v = (instance | 0);
      if ((v === instance)) {
        if ($isByte(v)) {
          return $d_jl_Byte.getClassOf()
        } else if ($isShort(v)) {
          return $d_jl_Short.getClassOf()
        } else {
          return $d_jl_Integer.getClassOf()
        }
      } else {
        return $d_jl_Float.getClassOf()
      }
    }
    case "boolean": {
      return $d_jl_Boolean.getClassOf()
    }
    case "undefined": {
      return $d_jl_Void.getClassOf()
    }
    default: {
      if ((instance === null)) {
        return instance.getClass__jl_Class()
      } else if ((instance instanceof $c_RTLong)) {
        return $d_jl_Long.getClassOf()
      } else if ((instance instanceof $Char)) {
        return $d_jl_Character.getClassOf()
      } else if ((!(!(instance && instance.$classData)))) {
        return instance.$classData.getClassOf()
      } else {
        return null
      }
    }
  }
}
function $dp_toString__T(instance) {
  return ((instance === (void 0)) ? "undefined" : instance.toString())
}
function $dp_getClass__jl_Class(instance) {
  return $objectGetClass(instance)
}
function $dp_clone__O(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.clone__O()
  } else {
    throw $ct_jl_CloneNotSupportedException__(new $c_jl_CloneNotSupportedException())
  }
}
function $dp_notify__V(instance) {
  if ((instance === null)) {
    instance.notify__V()
  }
}
function $dp_notifyAll__V(instance) {
  if ((instance === null)) {
    instance.notifyAll__V()
  }
}
function $dp_finalize__V(instance) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    instance.finalize__V()
  }
}
function $dp_equals__O__Z(instance, rhs) {
  if (((!(!(instance && instance.$classData))) || (instance === null))) {
    return instance.equals__O__Z(rhs)
  } else if (((typeof instance) === "number")) {
    return $f_jl_Double__equals__O__Z(instance, rhs)
  } else if ((instance instanceof $Char)) {
    return $f_jl_Character__equals__O__Z(instance, rhs)
  } else {
    return (instance === rhs)
  }
}
function $dp_hashCode__I(instance) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__hashCode__I(instance)
    }
    case "number": {
      return $f_jl_Double__hashCode__I(instance)
    }
    case "boolean": {
      return $f_jl_Boolean__hashCode__I(instance)
    }
    case "undefined": {
      return $f_jl_Void__hashCode__I(instance)
    }
    default: {
      if (((!(!(instance && instance.$classData))) || (instance === null))) {
        return instance.hashCode__I()
      } else if ((instance instanceof $Char)) {
        return $f_jl_Character__hashCode__I(instance)
      } else {
        return $systemIdentityHashCode(instance)
      }
    }
  }
}
function $dp_compareTo__O__I(instance, rhs) {
  switch ((typeof instance)) {
    case "string": {
      return $f_T__compareTo__O__I(instance, rhs)
    }
    case "number": {
      return $f_jl_Double__compareTo__O__I(instance, rhs)
    }
    case "boolean": {
      return $f_jl_Boolean__compareTo__O__I(instance, rhs)
    }
    default: {
      if ((instance instanceof $Char)) {
        return $f_jl_Character__compareTo__O__I(instance, rhs)
      } else {
        return instance.compareTo__O__I(rhs)
      }
    }
  }
}
function $dp_length__I(instance) {
  if (((typeof instance) === "string")) {
    return $f_T__length__I(instance)
  } else {
    return instance.length__I()
  }
}
function $dp_charAt__I__C(instance, index) {
  if (((typeof instance) === "string")) {
    return $f_T__charAt__I__C(instance, index)
  } else {
    return instance.charAt__I__C(index)
  }
}
function $dp_subSequence__I__I__jl_CharSequence(instance, start, end) {
  if (((typeof instance) === "string")) {
    return $f_T__subSequence__I__I__jl_CharSequence(instance, start, end)
  } else {
    return instance.subSequence__I__I__jl_CharSequence(start, end)
  }
}
function $dp_byteValue__B(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__byteValue__B(instance)
  } else {
    return instance.byteValue__B()
  }
}
function $dp_shortValue__S(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__shortValue__S(instance)
  } else {
    return instance.shortValue__S()
  }
}
function $dp_intValue__I(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__intValue__I(instance)
  } else {
    return instance.intValue__I()
  }
}
function $dp_longValue__J(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__longValue__J(instance)
  } else {
    return instance.longValue__J()
  }
}
function $dp_floatValue__F(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__floatValue__F(instance)
  } else {
    return instance.floatValue__F()
  }
}
function $dp_doubleValue__D(instance) {
  if (((typeof instance) === "number")) {
    return $f_jl_Double__doubleValue__D(instance)
  } else {
    return instance.doubleValue__D()
  }
}
function $intDiv(x, y) {
  if ((y === 0)) {
    throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
  } else {
    return ((x / y) | 0)
  }
}
function $intMod(x, y) {
  if ((y === 0)) {
    throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
  } else {
    return ((x % y) | 0)
  }
}
function $doubleToInt(x) {
  return ((x > 2147483647) ? 2147483647 : ((x < (-2147483648)) ? (-2147483648) : (x | 0)))
}
function $newJSObjectWithVarargs(ctor, args) {
  const instance = Object.create(ctor.prototype);
  const result = ctor.apply(instance, args);
  switch ((typeof result)) {
    case "string":
    case "number":
    case "boolean":
    case "undefined":
    case "symbol": {
      return instance
    }
    default: {
      return ((result === null) ? instance : result)
    }
  }
}
function $resolveSuperRef(superClass, propName) {
  const getPrototypeOf = Object.getPrototyeOf;
  const getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
  let superProto = superClass.prototype;
  while ((superProto !== null)) {
    const desc = getOwnPropertyDescriptor(superProto, propName);
    if ((desc !== (void 0))) {
      return desc
    };
    superProto = getPrototypeOf(superProto)
  }
}
function $superGet(superClass, self, propName) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const getter = desc.get;
    return ((getter !== (void 0)) ? getter.call(self) : getter.value)
  }
}
function $superSet(superClass, self, propName, value) {
  const desc = $resolveSuperRef(superClass, propName);
  if ((desc !== (void 0))) {
    const setter = desc.set;
    if ((setter !== (void 0))) {
      setter.call(self, value);
      return (void 0)
    }
  };
  throw new TypeError((("super has no setter '" + propName) + "'."))
}
function $systemArraycopy(src, srcPos, dest, destPos, length) {
  const srcu = src.u;
  const destu = dest.u;
  if ((((((srcPos < 0) || (destPos < 0)) || (length < 0)) || (srcPos > ((srcu.length - length) | 0))) || (destPos > ((destu.length - length) | 0)))) {
    $throwArrayIndexOutOfBoundsException(null)
  };
  if ((((srcu !== destu) || (destPos < srcPos)) || (((srcPos + length) | 0) < destPos))) {
    for (let i = 0; (i < length); i = ((i + 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  } else {
    for (let i = ((length - 1) | 0); (i >= 0); i = ((i - 1) | 0)) {
      destu[((destPos + i) | 0)] = srcu[((srcPos + i) | 0)]
    }
  }
}
let $lastIDHash = 0;
const $idHashCodeMap = new WeakMap();
function $systemIdentityHashCode(obj) {
  switch ((typeof obj)) {
    case "string":
    case "number":
    case "bigint":
    case "boolean":
    case "undefined": {
      return $dp_hashCode__I(obj)
    }
    default: {
      if ((obj === null)) {
        return 0
      } else {
        let hash = $idHashCodeMap.get(obj);
        if ((hash === (void 0))) {
          hash = (($lastIDHash + 1) | 0);
          $lastIDHash = hash;
          $idHashCodeMap.set(obj, hash)
        };
        return hash
      }
    }
  }
}
function $isByte(v) {
  return ((((typeof v) === "number") && (((v << 24) >> 24) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isShort(v) {
  return ((((typeof v) === "number") && (((v << 16) >> 16) === v)) && ((1 / v) !== (1 / (-0))))
}
function $isInt(v) {
  return ((((typeof v) === "number") && ((v | 0) === v)) && ((1 / v) !== (1 / (-0))))
}
function $bC(c) {
  return new $Char(c)
}
const $bC0 = $bC(0);
function $uV(v) {
  return (((v === (void 0)) || (v === null)) ? (void 0) : $throwClassCastException(v, "java.lang.Void"))
}
function $uZ(v) {
  return ((((typeof v) === "boolean") || (v === null)) ? (!(!v)) : $throwClassCastException(v, "java.lang.Boolean"))
}
function $uC(v) {
  return (((v instanceof $Char) || (v === null)) ? ((v === null) ? 0 : v.c) : $throwClassCastException(v, "java.lang.Character"))
}
function $uB(v) {
  return (($isByte(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Byte"))
}
function $uS(v) {
  return (($isShort(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Short"))
}
function $uI(v) {
  return (($isInt(v) || (v === null)) ? (v | 0) : $throwClassCastException(v, "java.lang.Integer"))
}
function $uJ(v) {
  return (((v instanceof $c_RTLong) || (v === null)) ? ((v === null) ? $L0 : v) : $throwClassCastException(v, "java.lang.Long"))
}
function $uF(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Float"))
}
function $uD(v) {
  return ((((typeof v) === "number") || (v === null)) ? (+v) : $throwClassCastException(v, "java.lang.Double"))
}
function $uT(v) {
  return ((((typeof v) === "string") || (v === null)) ? ((v === null) ? "" : v) : $throwClassCastException(v, "java.lang.String"))
}
function $byteArray2TypedArray(value) {
  return new Int8Array(value.u)
}
function $typedArray2ByteArray(value) {
  return new ($d_B.getArrayOf().constr)(new Int8Array(value))
}
function $shortArray2TypedArray(value) {
  return new Int16Array(value.u)
}
function $typedArray2ShortArray(value) {
  return new ($d_S.getArrayOf().constr)(new Int16Array(value))
}
function $charArray2TypedArray(value) {
  return new Uint16Array(value.u)
}
function $typedArray2CharArray(value) {
  return new ($d_C.getArrayOf().constr)(new Uint16Array(value))
}
function $intArray2TypedArray(value) {
  return new Int32Array(value.u)
}
function $typedArray2IntArray(value) {
  return new ($d_I.getArrayOf().constr)(new Int32Array(value))
}
function $floatArray2TypedArray(value) {
  return new Float32Array(value.u)
}
function $typedArray2FloatArray(value) {
  return new ($d_F.getArrayOf().constr)(new Float32Array(value))
}
function $doubleArray2TypedArray(value) {
  return new Float64Array(value.u)
}
function $typedArray2DoubleArray(value) {
  return new ($d_D.getArrayOf().constr)(new Float64Array(value))
}
class $TypeData {
  constructor() {
    this.constr = (void 0);
    this.parentData = (void 0);
    this.ancestors = null;
    this.componentData = null;
    this.arrayBase = null;
    this.arrayDepth = 0;
    this.zero = null;
    this.arrayEncodedName = "";
    this._classOf = (void 0);
    this._arrayOf = (void 0);
    this.isArrayOf = (void 0);
    this.name = "";
    this.isPrimitive = false;
    this.isInterface = false;
    this.isArrayClass = false;
    this.isJSClass = false;
    this.isInstance = (void 0)
  };
  initPrim(zero, arrayEncodedName, displayName, isArrayOf) {
    this.ancestors = {};
    this.zero = zero;
    this.arrayEncodedName = arrayEncodedName;
    this.isArrayOf = isArrayOf;
    this.name = displayName;
    this.isPrimitive = true;
    this.isInstance = (function(obj) {
      return false
    });
    return this
  };
  initClass(internalNameObj, isInterface, fullName, ancestors, isJSType, parentData, isInstance, isArrayOf) {
    const internalName = $propertyName(internalNameObj);
    this.parentData = parentData;
    this.ancestors = ancestors;
    this.arrayEncodedName = (("L" + fullName) + ";");
    this.isArrayOf = (isArrayOf || (function(obj, depth) {
      return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors[internalName])))
    }));
    this.isJSType = (!(!isJSType));
    this.name = fullName;
    this.isInterface = isInterface;
    this.isInstance = (isInstance || (function(obj) {
      return (!(!((obj && obj.$classData) && obj.$classData.ancestors[internalName])))
    }));
    return this
  };
  initArray(componentData) {
    const componentZero = ((componentData.zero === "longZero") ? $L0 : componentData.zero);
    class ArrayClass extends $c_O {
      constructor(arg) {
        super();
        if (((typeof arg) === "number")) {
          this.u = new Array(arg);
          for (let i = 0; (i < arg); (i++)) {
            this.u[i] = componentZero
          }
        } else {
          this.u = arg
        }
      };
      get(i) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        return this.u[i]
      };
      set(i, v) {
        if (((i < 0) || (i >= this.u.length))) {
          $throwArrayIndexOutOfBoundsException(i)
        };
        this.u[i] = v
      };
      clone__O() {
        return new ArrayClass(((this.u instanceof Array) ? this.u.slice(0) : new this.u.constructor(this.u)))
      };
    }
    ArrayClass.prototype.$classData = this;
    const encodedName = ("[" + componentData.arrayEncodedName);
    const componentBase = (componentData.arrayBase || componentData);
    const arrayDepth = (componentData.arrayDepth + 1);
    this.constr = ArrayClass;
    this.parentData = $d_O;
    this.ancestors = {
      O: 1,
      jl_Cloneable: 1,
      Ljava_io_Serializable: 1
    };
    this.componentData = componentData;
    this.arrayBase = componentBase;
    this.arrayDepth = arrayDepth;
    this.arrayEncodedName = encodedName;
    this.name = encodedName;
    this.isArrayClass = true;
    this.isInstance = (function(obj) {
      return componentBase.isArrayOf(obj, arrayDepth)
    });
    return this
  };
  getClassOf() {
    if ((!this._classOf)) {
      this._classOf = new $c_jl_Class(this)
    };
    return this._classOf
  };
  getArrayOf() {
    if ((!this._arrayOf)) {
      this._arrayOf = new $TypeData().initArray(this)
    };
    return this._arrayOf
  };
  "isAssignableFrom"(that) {
    if ((this.isPrimitive || that.isPrimitive)) {
      return (this === that)
    } else {
      let thatFakeInstance;
      if ((that === $d_T)) {
        thatFakeInstance = ""
      } else if ((that === $d_jl_Boolean)) {
        thatFakeInstance = false
      } else if ((((((that === $d_jl_Byte) || (that === $d_jl_Short)) || (that === $d_jl_Integer)) || (that === $d_jl_Float)) || (that === $d_jl_Double))) {
        thatFakeInstance = 0
      } else if ((that === $d_jl_Long)) {
        thatFakeInstance = $L0
      } else if ((that === $d_jl_Character)) {
        thatFakeInstance = $bC0
      } else if ((that === $d_jl_Void)) {
        thatFakeInstance = (void 0)
      } else {
        thatFakeInstance = {
          $classData: that
        }
      };
      return this.isInstance(thatFakeInstance)
    }
  };
  "checkCast"(obj) {
    if ((((obj !== null) && (!this.isJSType)) && (!this.isInstance(obj)))) {
      $throwClassCastException(obj, this.name)
    }
  };
  "getSuperclass"() {
    return (this.parentData ? this.parentData.getClassOf() : null)
  };
  "getComponentType"() {
    return (this.componentData ? this.componentData.getClassOf() : null)
  };
  "newArrayOfThisClass"(lengths) {
    let arrayClassData = this;
    for (let i = 0; (i < lengths.length); (i++)) {
      arrayClassData = arrayClassData.getArrayOf()
    };
    return $newArrayObject(arrayClassData, lengths)
  };
}
function $isArrayOf_V(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_V))))
}
function $isArrayOf_Z(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_Z))))
}
function $isArrayOf_C(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_C))))
}
function $isArrayOf_B(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_B))))
}
function $isArrayOf_S(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_S))))
}
function $isArrayOf_I(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_I))))
}
function $isArrayOf_J(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_J))))
}
function $isArrayOf_F(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_F))))
}
function $isArrayOf_D(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && (obj.$classData.arrayBase === $d_D))))
}
function $asArrayOf_V(obj, depth) {
  if (($isArrayOf_V(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "V", depth)
  }
}
function $asArrayOf_Z(obj, depth) {
  if (($isArrayOf_Z(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "Z", depth)
  }
}
function $asArrayOf_C(obj, depth) {
  if (($isArrayOf_C(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "C", depth)
  }
}
function $asArrayOf_B(obj, depth) {
  if (($isArrayOf_B(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "B", depth)
  }
}
function $asArrayOf_S(obj, depth) {
  if (($isArrayOf_S(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "S", depth)
  }
}
function $asArrayOf_I(obj, depth) {
  if (($isArrayOf_I(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "I", depth)
  }
}
function $asArrayOf_J(obj, depth) {
  if (($isArrayOf_J(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "J", depth)
  }
}
function $asArrayOf_F(obj, depth) {
  if (($isArrayOf_F(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "F", depth)
  }
}
function $asArrayOf_D(obj, depth) {
  if (($isArrayOf_D(obj, depth) || (obj === null))) {
    return obj
  } else {
    $throwArrayCastException(obj, "D", depth)
  }
}
const $d_V = new $TypeData().initPrim((void 0), "V", "void", $isArrayOf_V);
const $d_Z = new $TypeData().initPrim(false, "Z", "boolean", $isArrayOf_Z);
const $d_C = new $TypeData().initPrim(0, "C", "char", $isArrayOf_C);
const $d_B = new $TypeData().initPrim(0, "B", "byte", $isArrayOf_B);
const $d_S = new $TypeData().initPrim(0, "S", "short", $isArrayOf_S);
const $d_I = new $TypeData().initPrim(0, "I", "int", $isArrayOf_I);
const $d_J = new $TypeData().initPrim("longZero", "J", "long", $isArrayOf_J);
const $d_F = new $TypeData().initPrim(0.0, "F", "float", $isArrayOf_F);
const $d_D = new $TypeData().initPrim(0.0, "D", "double", $isArrayOf_D);
const $ct_O__ = (function($thiz) {
  return $thiz
});
class $c_O {
  hashCode__I() {
    return $systemIdentityHashCode(this)
  };
  equals__O__Z(that) {
    return (this === that)
  };
  toString__T() {
    const $$x1 = $objectGetClass(this).getName__T();
    const i = this.hashCode__I();
    return (($$x1 + "@") + $as_T($uD((i >>> 0)).toString(16)))
  };
  "toString"() {
    return this.toString__T()
  };
}
function $is_O(obj) {
  return (obj !== null)
}
function $as_O(obj) {
  return obj
}
function $isArrayOf_O(obj, depth) {
  const data = (obj && obj.$classData);
  if ((!data)) {
    return false
  } else {
    const arrayDepth = (data.arrayDepth || 0);
    return ((!(arrayDepth < depth)) && ((arrayDepth > depth) || (!data.arrayBase.isPrimitive)))
  }
}
function $asArrayOf_O(obj, depth) {
  return (($isArrayOf_O(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Object;", depth))
}
const $d_O = new $TypeData().initClass({
  O: 0
}, false, "java.lang.Object", {
  O: 1
}, (void 0), (void 0), $is_O, $isArrayOf_O);
$c_O.prototype.$classData = $d_O;
class $c_jl_Class extends $c_O {
  constructor(data0) {
    super();
    this.jl_Class__f_data = null;
    this.jl_Class__f_data = data0
  };
  toString__T() {
    return ((this.isInterface__Z() ? "interface " : (this.isPrimitive__Z() ? "" : "class ")) + this.getName__T())
  };
  isAssignableFrom__jl_Class__Z(that) {
    return $uZ(this.jl_Class__f_data.isAssignableFrom(that.jl_Class__f_data))
  };
  isInterface__Z() {
    return $uZ(this.jl_Class__f_data.isInterface)
  };
  isArray__Z() {
    return $uZ(this.jl_Class__f_data.isArrayClass)
  };
  isPrimitive__Z() {
    return $uZ(this.jl_Class__f_data.isPrimitive)
  };
  getName__T() {
    return $as_T(this.jl_Class__f_data.name)
  };
}
const $d_jl_Class = new $TypeData().initClass({
  jl_Class: 0
}, false, "java.lang.Class", {
  jl_Class: 1,
  O: 1
});
$c_jl_Class.prototype.$classData = $d_jl_Class;
class $c_jl_FloatingPointBits$ extends $c_O {
  constructor() {
    super();
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = false;
    this.jl_FloatingPointBits$__f_arrayBuffer = null;
    this.jl_FloatingPointBits$__f_int32Array = null;
    this.jl_FloatingPointBits$__f_float32Array = null;
    this.jl_FloatingPointBits$__f_float64Array = null;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = false;
    this.jl_FloatingPointBits$__f_highOffset = 0;
    this.jl_FloatingPointBits$__f_lowOffset = 0;
    $n_jl_FloatingPointBits$ = this;
    this.jl_FloatingPointBits$__f_java$lang$FloatingPointBits$$_areTypedArraysSupported = true;
    this.jl_FloatingPointBits$__f_arrayBuffer = new ArrayBuffer(8);
    this.jl_FloatingPointBits$__f_int32Array = new Int32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float32Array = new Float32Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 2);
    this.jl_FloatingPointBits$__f_float64Array = new Float64Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 1);
    this.jl_FloatingPointBits$__f_int32Array[0] = 16909060;
    this.jl_FloatingPointBits$__f_areTypedArraysBigEndian = ($uB(new Int8Array(this.jl_FloatingPointBits$__f_arrayBuffer, 0, 8)[0]) === 1);
    this.jl_FloatingPointBits$__f_highOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 0 : 1);
    this.jl_FloatingPointBits$__f_lowOffset = (this.jl_FloatingPointBits$__f_areTypedArraysBigEndian ? 1 : 0)
  };
  numberHashCode__D__I(value) {
    const iv = $uI((value | 0));
    if (((iv === value) && ((1.0 / value) !== (-Infinity)))) {
      return iv
    } else {
      const t = this.doubleToLongBits__D__J(value);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return (lo ^ hi)
    }
  };
  doubleToLongBits__D__J(value) {
    this.jl_FloatingPointBits$__f_float64Array[0] = value;
    const value$1 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_highOffset]);
    const value$2 = $uI(this.jl_FloatingPointBits$__f_int32Array[this.jl_FloatingPointBits$__f_lowOffset]);
    return new $c_RTLong(value$2, value$1)
  };
}
const $d_jl_FloatingPointBits$ = new $TypeData().initClass({
  jl_FloatingPointBits$: 0
}, false, "java.lang.FloatingPointBits$", {
  jl_FloatingPointBits$: 1,
  O: 1
});
$c_jl_FloatingPointBits$.prototype.$classData = $d_jl_FloatingPointBits$;
let $n_jl_FloatingPointBits$ = (void 0);
function $m_jl_FloatingPointBits$() {
  if ((!$n_jl_FloatingPointBits$)) {
    $n_jl_FloatingPointBits$ = new $c_jl_FloatingPointBits$()
  };
  return $n_jl_FloatingPointBits$
}
const $p_jl_System$SystemProperties$__loadSystemProperties__O = (function($thiz) {
  const result = {};
  result["java.version"] = "1.8";
  result["java.vm.specification.version"] = "1.8";
  result["java.vm.specification.vendor"] = "Oracle Corporation";
  result["java.vm.specification.name"] = "Java Virtual Machine Specification";
  result["java.vm.name"] = "Scala.js";
  const value = $as_T($linkingInfo.linkerVersion);
  result["java.vm.version"] = value;
  result["java.specification.version"] = "1.8";
  result["java.specification.vendor"] = "Oracle Corporation";
  result["java.specification.name"] = "Java Platform API Specification";
  result["file.separator"] = "/";
  result["path.separator"] = ":";
  result["line.separator"] = "\n";
  return result
});
class $c_jl_System$SystemProperties$ extends $c_O {
  constructor() {
    super();
    this.jl_System$SystemProperties$__f_dict = null;
    this.jl_System$SystemProperties$__f_properties = null;
    $n_jl_System$SystemProperties$ = this;
    this.jl_System$SystemProperties$__f_dict = $p_jl_System$SystemProperties$__loadSystemProperties__O(this);
    this.jl_System$SystemProperties$__f_properties = null
  };
  getProperty__T__T__T(key, default$1) {
    return ((this.jl_System$SystemProperties$__f_dict !== null) ? $as_T($m_jl_Utils$().dictGetOrElse__O__T__O__O(this.jl_System$SystemProperties$__f_dict, key, default$1)) : this.jl_System$SystemProperties$__f_properties.getProperty__T__T__T(key, default$1))
  };
}
const $d_jl_System$SystemProperties$ = new $TypeData().initClass({
  jl_System$SystemProperties$: 0
}, false, "java.lang.System$SystemProperties$", {
  jl_System$SystemProperties$: 1,
  O: 1
});
$c_jl_System$SystemProperties$.prototype.$classData = $d_jl_System$SystemProperties$;
let $n_jl_System$SystemProperties$ = (void 0);
function $m_jl_System$SystemProperties$() {
  if ((!$n_jl_System$SystemProperties$)) {
    $n_jl_System$SystemProperties$ = new $c_jl_System$SystemProperties$()
  };
  return $n_jl_System$SystemProperties$
}
class $c_jl_Utils$ extends $c_O {
  dictGetOrElse__O__T__O__O(dict, key, default$1) {
    return ($uZ($m_jl_Utils$Cache$().jl_Utils$Cache$__f_safeHasOwnProperty.call(dict, key)) ? dict[key] : default$1)
  };
}
const $d_jl_Utils$ = new $TypeData().initClass({
  jl_Utils$: 0
}, false, "java.lang.Utils$", {
  jl_Utils$: 1,
  O: 1
});
$c_jl_Utils$.prototype.$classData = $d_jl_Utils$;
let $n_jl_Utils$ = (void 0);
function $m_jl_Utils$() {
  if ((!$n_jl_Utils$)) {
    $n_jl_Utils$ = new $c_jl_Utils$()
  };
  return $n_jl_Utils$
}
class $c_jl_Utils$Cache$ extends $c_O {
  constructor() {
    super();
    this.jl_Utils$Cache$__f_safeHasOwnProperty = null;
    $n_jl_Utils$Cache$ = this;
    this.jl_Utils$Cache$__f_safeHasOwnProperty = Object.prototype.hasOwnProperty
  };
}
const $d_jl_Utils$Cache$ = new $TypeData().initClass({
  jl_Utils$Cache$: 0
}, false, "java.lang.Utils$Cache$", {
  jl_Utils$Cache$: 1,
  O: 1
});
$c_jl_Utils$Cache$.prototype.$classData = $d_jl_Utils$Cache$;
let $n_jl_Utils$Cache$ = (void 0);
function $m_jl_Utils$Cache$() {
  if ((!$n_jl_Utils$Cache$)) {
    $n_jl_Utils$Cache$ = new $c_jl_Utils$Cache$()
  };
  return $n_jl_Utils$Cache$
}
const $f_jl_Void__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Void__hashCode__I = (function($thiz) {
  return 0
});
const $f_jl_Void__toString__T = (function($thiz) {
  return "undefined"
});
function $as_jl_Void(obj) {
  return (((obj === (void 0)) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Void"))
}
function $isArrayOf_jl_Void(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Void)))
}
function $asArrayOf_jl_Void(obj, depth) {
  return (($isArrayOf_jl_Void(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Void;", depth))
}
const $d_jl_Void = new $TypeData().initClass({
  jl_Void: 0
}, false, "java.lang.Void", {
  jl_Void: 1,
  O: 1
}, (void 0), (void 0), ((x) => (x === (void 0))));
class $c_jl_reflect_Array$ extends $c_O {
  getLength__O__I(array) {
    if ($isArrayOf_O(array, 1)) {
      const x2 = $asArrayOf_O(array, 1);
      return x2.u.length
    } else if ($isArrayOf_Z(array, 1)) {
      const x3 = $asArrayOf_Z(array, 1);
      return x3.u.length
    } else if ($isArrayOf_C(array, 1)) {
      const x4 = $asArrayOf_C(array, 1);
      return x4.u.length
    } else if ($isArrayOf_B(array, 1)) {
      const x5 = $asArrayOf_B(array, 1);
      return x5.u.length
    } else if ($isArrayOf_S(array, 1)) {
      const x6 = $asArrayOf_S(array, 1);
      return x6.u.length
    } else if ($isArrayOf_I(array, 1)) {
      const x7 = $asArrayOf_I(array, 1);
      return x7.u.length
    } else if ($isArrayOf_J(array, 1)) {
      const x8 = $asArrayOf_J(array, 1);
      return x8.u.length
    } else if ($isArrayOf_F(array, 1)) {
      const x9 = $asArrayOf_F(array, 1);
      return x9.u.length
    } else if ($isArrayOf_D(array, 1)) {
      const x10 = $asArrayOf_D(array, 1);
      return x10.u.length
    } else {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "argument type mismatch")
    }
  };
}
const $d_jl_reflect_Array$ = new $TypeData().initClass({
  jl_reflect_Array$: 0
}, false, "java.lang.reflect.Array$", {
  jl_reflect_Array$: 1,
  O: 1
});
$c_jl_reflect_Array$.prototype.$classData = $d_jl_reflect_Array$;
let $n_jl_reflect_Array$ = (void 0);
function $m_jl_reflect_Array$() {
  if ((!$n_jl_reflect_Array$)) {
    $n_jl_reflect_Array$ = new $c_jl_reflect_Array$()
  };
  return $n_jl_reflect_Array$
}
class $c_ju_Arrays$ extends $c_O {
  binarySearch__AI__I__I(a, key) {
    let startIndex = 0;
    let endIndex = a.u.length;
    while (true) {
      if ((startIndex === endIndex)) {
        return (((-1) - startIndex) | 0)
      } else {
        const mid = ((((startIndex + endIndex) | 0) >>> 1) | 0);
        const elem = a.get(mid);
        if ((key < elem)) {
          endIndex = mid
        } else if ($m_sr_BoxesRunTime$().equals__O__O__Z(key, elem)) {
          return mid
        } else {
          startIndex = ((1 + mid) | 0)
        }
      }
    }
  };
  fill__AO__I__I__O__V(a, fromIndex, toIndex, value) {
    if ((fromIndex > toIndex)) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (((("fromIndex(" + fromIndex) + ") > toIndex(") + toIndex) + ")"))
    };
    if ((fromIndex < 0)) {
      a.get(fromIndex)
    };
    if ((toIndex > 0)) {
      a.get((((-1) + toIndex) | 0))
    };
    let i = fromIndex;
    while ((i !== toIndex)) {
      a.set(i, value);
      i = ((1 + i) | 0)
    }
  };
}
const $d_ju_Arrays$ = new $TypeData().initClass({
  ju_Arrays$: 0
}, false, "java.util.Arrays$", {
  ju_Arrays$: 1,
  O: 1
});
$c_ju_Arrays$.prototype.$classData = $d_ju_Arrays$;
let $n_ju_Arrays$ = (void 0);
function $m_ju_Arrays$() {
  if ((!$n_ju_Arrays$)) {
    $n_ju_Arrays$ = new $c_ju_Arrays$()
  };
  return $n_ju_Arrays$
}
class $c_ju_regex_Matcher$ extends $c_O {
  java$util$regex$Matcher$$getGroupCount__sjs_js_RegExp$ExecResult__ju_regex_Pattern__I(lastMatch, pattern) {
    return ((lastMatch !== null) ? (((-1) + $uI(lastMatch.length)) | 0) : pattern.groupCount__I())
  };
}
const $d_ju_regex_Matcher$ = new $TypeData().initClass({
  ju_regex_Matcher$: 0
}, false, "java.util.regex.Matcher$", {
  ju_regex_Matcher$: 1,
  O: 1
});
$c_ju_regex_Matcher$.prototype.$classData = $d_ju_regex_Matcher$;
let $n_ju_regex_Matcher$ = (void 0);
function $m_ju_regex_Matcher$() {
  if ((!$n_ju_regex_Matcher$)) {
    $n_ju_regex_Matcher$ = new $c_ju_regex_Matcher$()
  };
  return $n_ju_regex_Matcher$
}
const $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window = (function($thiz) {
  if (((33554432 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_window = window;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (33554432 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_window
});
const $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument = (function($thiz) {
  if (((67108864 & $thiz.Lorg_scalajs_dom_package$__f_bitmap$0) === 0)) {
    $thiz.Lorg_scalajs_dom_package$__f_document = $thiz.window__Lorg_scalajs_dom_raw_Window().document;
    $thiz.Lorg_scalajs_dom_package$__f_bitmap$0 = (67108864 | $thiz.Lorg_scalajs_dom_package$__f_bitmap$0)
  };
  return $thiz.Lorg_scalajs_dom_package$__f_document
});
class $c_Lorg_scalajs_dom_package$ extends $c_O {
  constructor() {
    super();
    this.Lorg_scalajs_dom_package$__f_ApplicationCache = null;
    this.Lorg_scalajs_dom_package$__f_Blob = null;
    this.Lorg_scalajs_dom_package$__f_BlobPropertyBag = null;
    this.Lorg_scalajs_dom_package$__f_DOMException = null;
    this.Lorg_scalajs_dom_package$__f_Event = null;
    this.Lorg_scalajs_dom_package$__f_EventException = null;
    this.Lorg_scalajs_dom_package$__f_EventSource = null;
    this.Lorg_scalajs_dom_package$__f_FileReader = null;
    this.Lorg_scalajs_dom_package$__f_FormData = null;
    this.Lorg_scalajs_dom_package$__f_KeyboardEvent = null;
    this.Lorg_scalajs_dom_package$__f_MediaError = null;
    this.Lorg_scalajs_dom_package$__f_MutationObserverInit = null;
    this.Lorg_scalajs_dom_package$__f_Node = null;
    this.Lorg_scalajs_dom_package$__f_NodeFilter = null;
    this.Lorg_scalajs_dom_package$__f_PerformanceNavigation = null;
    this.Lorg_scalajs_dom_package$__f_PositionError = null;
    this.Lorg_scalajs_dom_package$__f_Range = null;
    this.Lorg_scalajs_dom_package$__f_TextEvent = null;
    this.Lorg_scalajs_dom_package$__f_TextTrack = null;
    this.Lorg_scalajs_dom_package$__f_URL = null;
    this.Lorg_scalajs_dom_package$__f_VisibilityState = null;
    this.Lorg_scalajs_dom_package$__f_WebSocket = null;
    this.Lorg_scalajs_dom_package$__f_WheelEvent = null;
    this.Lorg_scalajs_dom_package$__f_XMLHttpRequest = null;
    this.Lorg_scalajs_dom_package$__f_XPathResult = null;
    this.Lorg_scalajs_dom_package$__f_window = null;
    this.Lorg_scalajs_dom_package$__f_document = null;
    this.Lorg_scalajs_dom_package$__f_console = null;
    this.Lorg_scalajs_dom_package$__f_bitmap$0 = 0
  };
  window__Lorg_scalajs_dom_raw_Window() {
    return (((33554432 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__window$lzycompute__Lorg_scalajs_dom_raw_Window(this) : this.Lorg_scalajs_dom_package$__f_window)
  };
  document__Lorg_scalajs_dom_raw_HTMLDocument() {
    return (((67108864 & this.Lorg_scalajs_dom_package$__f_bitmap$0) === 0) ? $p_Lorg_scalajs_dom_package$__document$lzycompute__Lorg_scalajs_dom_raw_HTMLDocument(this) : this.Lorg_scalajs_dom_package$__f_document)
  };
}
const $d_Lorg_scalajs_dom_package$ = new $TypeData().initClass({
  Lorg_scalajs_dom_package$: 0
}, false, "org.scalajs.dom.package$", {
  Lorg_scalajs_dom_package$: 1,
  O: 1
});
$c_Lorg_scalajs_dom_package$.prototype.$classData = $d_Lorg_scalajs_dom_package$;
let $n_Lorg_scalajs_dom_package$ = (void 0);
function $m_Lorg_scalajs_dom_package$() {
  if ((!$n_Lorg_scalajs_dom_package$)) {
    $n_Lorg_scalajs_dom_package$ = new $c_Lorg_scalajs_dom_package$()
  };
  return $n_Lorg_scalajs_dom_package$
}
function $is_F0(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.F0)))
}
function $as_F0(obj) {
  return (($is_F0(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Function0"))
}
function $isArrayOf_F0(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.F0)))
}
function $asArrayOf_F0(obj, depth) {
  return (($isArrayOf_F0(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Function0;", depth))
}
function $is_sc_IterableOnce(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOnce)))
}
function $as_sc_IterableOnce(obj) {
  return (($is_sc_IterableOnce(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOnce"))
}
function $isArrayOf_sc_IterableOnce(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOnce)))
}
function $asArrayOf_sc_IterableOnce(obj, depth) {
  return (($isArrayOf_sc_IterableOnce(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOnce;", depth))
}
const $f_sc_IterableOnceOps__isEmpty__Z = (function($thiz) {
  return (!$as_sc_IterableOnce($thiz).iterator__sc_Iterator().hasNext__Z())
});
const $f_sc_IterableOnceOps__copyToArray__O__I__I = (function($thiz, xs, start) {
  const xsLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  let i = start;
  while (((i < xsLen) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
});
const $f_sc_IterableOnceOps__copyToArray__O__I__I__I = (function($thiz, xs, start, len) {
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  let i = start;
  const y = (($m_sr_ScalaRunTime$().array_length__O__I(xs) - start) | 0);
  const end = ((start + ((len < y) ? len : y)) | 0);
  while (((i < end) && it.hasNext__Z())) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(xs, i, it.next__O());
    i = ((1 + i) | 0)
  };
  return ((i - start) | 0)
});
const $f_sc_IterableOnceOps__mkString__T__T__T__T = (function($thiz, start, sep, end) {
  if ($thiz.isEmpty__Z()) {
    return (("" + start) + end)
  } else {
    const this$1 = $thiz.addString__scm_StringBuilder__T__T__T__scm_StringBuilder($ct_scm_StringBuilder__(new $c_scm_StringBuilder()), start, sep, end);
    return this$1.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  }
});
const $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder = (function($thiz, b, start, sep, end) {
  const jsb = b.scm_StringBuilder__f_underlying;
  if (($uI(start.length) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start)
  };
  const it = $as_sc_IterableOnce($thiz).iterator__sc_Iterator();
  if (it.hasNext__Z()) {
    const obj = it.next__O();
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    while (it.hasNext__Z()) {
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      const obj$1 = it.next__O();
      jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1)
    }
  };
  if (($uI(end.length) !== 0)) {
    jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + jsb.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end)
  };
  return b
});
const $p_sci_IndexedSeqDefaults$__liftedTree1$1__I = (function($thiz) {
  try {
    const x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.IndexedSeq.defaultApplyPreferredMaxLength", "64");
    const this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if ((e instanceof $c_jl_SecurityException)) {
      return 64
    } else {
      throw e
    }
  }
});
class $c_sci_IndexedSeqDefaults$ extends $c_O {
  constructor() {
    super();
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = 0;
    $n_sci_IndexedSeqDefaults$ = this;
    this.sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength = $p_sci_IndexedSeqDefaults$__liftedTree1$1__I(this)
  };
}
const $d_sci_IndexedSeqDefaults$ = new $TypeData().initClass({
  sci_IndexedSeqDefaults$: 0
}, false, "scala.collection.immutable.IndexedSeqDefaults$", {
  sci_IndexedSeqDefaults$: 1,
  O: 1
});
$c_sci_IndexedSeqDefaults$.prototype.$classData = $d_sci_IndexedSeqDefaults$;
let $n_sci_IndexedSeqDefaults$ = (void 0);
function $m_sci_IndexedSeqDefaults$() {
  if ((!$n_sci_IndexedSeqDefaults$)) {
    $n_sci_IndexedSeqDefaults$ = new $c_sci_IndexedSeqDefaults$()
  };
  return $n_sci_IndexedSeqDefaults$
}
const $f_sci_VectorPointer__preClean__I__V = (function($thiz, depth) {
  $thiz.depth_$eq__I__V(depth);
  const x1 = (((-1) + depth) | 0);
  switch (x1) {
    case 0: {
      $thiz.display1_$eq__AAO__V(null);
      $thiz.display2_$eq__AAAO__V(null);
      $thiz.display3_$eq__AAAAO__V(null);
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 1: {
      $thiz.display2_$eq__AAAO__V(null);
      $thiz.display3_$eq__AAAAO__V(null);
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 2: {
      $thiz.display3_$eq__AAAAO__V(null);
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 3: {
      $thiz.display4_$eq__AAAAAO__V(null);
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 4: {
      $thiz.display5_$eq__AAAAAAO__V(null);
      break
    }
    case 5: {
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V = (function($thiz, that, depth) {
  $thiz.depth_$eq__I__V(depth);
  const x1 = (((-1) + depth) | 0);
  switch (x1) {
    case (-1): {
      break
    }
    case 0: {
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 1: {
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 2: {
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 3: {
      $thiz.display3_$eq__AAAAO__V(that.display3__AAAAO());
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 4: {
      $thiz.display4_$eq__AAAAAO__V(that.display4__AAAAAO());
      $thiz.display3_$eq__AAAAO__V(that.display3__AAAAO());
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    case 5: {
      $thiz.display5_$eq__AAAAAAO__V(that.display5__AAAAAAO());
      $thiz.display4_$eq__AAAAAO__V(that.display4__AAAAAO());
      $thiz.display3_$eq__AAAAO__V(that.display3__AAAAO());
      $thiz.display2_$eq__AAAO__V(that.display2__AAAO());
      $thiz.display1_$eq__AAO__V(that.display1__AAO());
      $thiz.display0_$eq__AO__V(that.display0__AO());
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__gotoPos__I__I__V = (function($thiz, index, xor) {
  if ((xor >= 32)) {
    if ((xor < 1024)) {
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else if ((xor < 32768)) {
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else if ((xor < 1048576)) {
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))));
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else if ((xor < 33554432)) {
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((index >>> 20) | 0))));
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))));
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else if ((xor < 1073741824)) {
      $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().get((31 & ((index >>> 25) | 0))));
      $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((index >>> 20) | 0))));
      $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))));
      $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
      $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
    } else {
      throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
    }
  }
});
const $f_sci_VectorPointer__gotoNextBlockStart__I__I__V = (function($thiz, index, xor) {
  if ((xor < 1024)) {
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
  } else if ((xor < 32768)) {
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))));
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get(0))
  } else if ((xor < 1048576)) {
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))));
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get(0));
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get(0))
  } else if ((xor < 33554432)) {
    $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((index >>> 20) | 0))));
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get(0));
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get(0));
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get(0))
  } else if ((xor < 1073741824)) {
    $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().get((31 & ((index >>> 25) | 0))));
    $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get(0));
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get(0));
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get(0));
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get(0))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__gotoNewBlockStart__I__I__V = (function($thiz, index, depth) {
  if ((depth > 5)) {
    $thiz.display4_$eq__AAAAAO__V($thiz.display5__AAAAAAO().get((31 & ((index >>> 25) | 0))))
  };
  if ((depth > 4)) {
    $thiz.display3_$eq__AAAAO__V($thiz.display4__AAAAAO().get((31 & ((index >>> 20) | 0))))
  };
  if ((depth > 3)) {
    $thiz.display2_$eq__AAAO__V($thiz.display3__AAAAO().get((31 & ((index >>> 15) | 0))))
  };
  if ((depth > 2)) {
    $thiz.display1_$eq__AAO__V($thiz.display2__AAAO().get((31 & ((index >>> 10) | 0))))
  };
  if ((depth > 1)) {
    $thiz.display0_$eq__AO__V($thiz.display1__AAO().get((31 & ((index >>> 5) | 0))))
  }
});
const $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V = (function($thiz, index, xor) {
  if ((xor < 1024)) {
    if (($thiz.depth__I() === 1)) {
      $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
      $thiz.display1__AAO().set(0, $thiz.display0__AO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO())
  } else if ((xor < 32768)) {
    if (($thiz.depth__I() === 2)) {
      $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display2__AAAO().set(0, $thiz.display1__AAO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO())
  } else if ((xor < 1048576)) {
    if (($thiz.depth__I() === 3)) {
      $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display3__AAAAO().set(0, $thiz.display2__AAAO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO())
  } else if ((xor < 33554432)) {
    if (($thiz.depth__I() === 4)) {
      $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display4__AAAAAO().set(0, $thiz.display3__AAAAO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
    $thiz.display4__AAAAAO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AAAAO())
  } else if ((xor < 1073741824)) {
    if (($thiz.depth__I() === 5)) {
      $thiz.display5_$eq__AAAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
      $thiz.display5__AAAAAAO().set(0, $thiz.display4__AAAAAO());
      $thiz.depth_$eq__I__V(((1 + $thiz.depth__I()) | 0))
    };
    $thiz.display0_$eq__AO__V($newArrayObject($d_O.getArrayOf(), [32]));
    $thiz.display1_$eq__AAO__V($newArrayObject($d_O.getArrayOf().getArrayOf(), [32]));
    $thiz.display2_$eq__AAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display3_$eq__AAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display4_$eq__AAAAAO__V($newArrayObject($d_O.getArrayOf().getArrayOf().getArrayOf().getArrayOf().getArrayOf(), [32]));
    $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
    $thiz.display4__AAAAAO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AAAAO());
    $thiz.display5__AAAAAAO().set((31 & ((index >>> 25) | 0)), $thiz.display4__AAAAAO())
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO = (function($thiz, array, index) {
  const x = array.get(index);
  array.set(index, null);
  return $asArrayOf_O(x.clone__O(), 1)
});
const $f_sci_VectorPointer__stabilize__I__V = (function($thiz, index) {
  const x1 = (((-1) + $thiz.depth__I()) | 0);
  switch (x1) {
    case 5: {
      $thiz.display5_$eq__AAAAAAO__V($asArrayOf_O($thiz.display5__AAAAAAO().clone__O(), 6));
      $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display5__AAAAAAO().set((31 & ((index >>> 25) | 0)), $thiz.display4__AAAAAO());
      $thiz.display4__AAAAAO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AAAAO());
      $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
      $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 4: {
      $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display4__AAAAAO().set((31 & ((index >>> 20) | 0)), $thiz.display3__AAAAO());
      $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
      $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 3: {
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display3__AAAAO().set((31 & ((index >>> 15) | 0)), $thiz.display2__AAAO());
      $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 2: {
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display2__AAAO().set((31 & ((index >>> 10) | 0)), $thiz.display1__AAO());
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 1: {
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      $thiz.display1__AAO().set((31 & ((index >>> 5) | 0)), $thiz.display0__AO());
      break
    }
    case 0: {
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__gotoPosWritable0__I__I__V = (function($thiz, newIndex, xor) {
  const x1 = (((-1) + $thiz.depth__I()) | 0);
  switch (x1) {
    case 5: {
      $thiz.display5_$eq__AAAAAAO__V($asArrayOf_O($thiz.display5__AAAAAAO().clone__O(), 6));
      const array = $thiz.display5__AAAAAAO();
      const index = (31 & ((newIndex >>> 25) | 0));
      $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array, index), 5));
      const array$1 = $thiz.display4__AAAAAO();
      const index$1 = (31 & ((newIndex >>> 20) | 0));
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$1, index$1), 4));
      const array$2 = $thiz.display3__AAAAO();
      const index$2 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$2, index$2), 3));
      const array$3 = $thiz.display2__AAAO();
      const index$3 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$3, index$3), 2));
      const array$4 = $thiz.display1__AAO();
      const index$4 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$4, index$4));
      break
    }
    case 4: {
      $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
      const array$5 = $thiz.display4__AAAAAO();
      const index$5 = (31 & ((newIndex >>> 20) | 0));
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$5, index$5), 4));
      const array$6 = $thiz.display3__AAAAO();
      const index$6 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$6, index$6), 3));
      const array$7 = $thiz.display2__AAAO();
      const index$7 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$7, index$7), 2));
      const array$8 = $thiz.display1__AAO();
      const index$8 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$8, index$8));
      break
    }
    case 3: {
      $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
      const array$9 = $thiz.display3__AAAAO();
      const index$9 = (31 & ((newIndex >>> 15) | 0));
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$9, index$9), 3));
      const array$10 = $thiz.display2__AAAO();
      const index$10 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$10, index$10), 2));
      const array$11 = $thiz.display1__AAO();
      const index$11 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$11, index$11));
      break
    }
    case 2: {
      $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
      const array$12 = $thiz.display2__AAAO();
      const index$12 = (31 & ((newIndex >>> 10) | 0));
      $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$12, index$12), 2));
      const array$13 = $thiz.display1__AAO();
      const index$13 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$13, index$13));
      break
    }
    case 1: {
      $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
      const array$14 = $thiz.display1__AAO();
      const index$14 = (31 & ((newIndex >>> 5) | 0));
      $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$14, index$14));
      break
    }
    case 0: {
      $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display0__AO().clone__O(), 1));
      break
    }
    default: {
      throw new $c_s_MatchError(x1)
    }
  }
});
const $f_sci_VectorPointer__gotoPosWritable1__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ((xor < 32)) {
    $thiz.display0_$eq__AO__V($asArrayOf_O($thiz.display0__AO().clone__O(), 1))
  } else if ((xor < 1024)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    const array = $thiz.display1__AAO();
    const index = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array, index))
  } else if ((xor < 32768)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
    const array$1 = $thiz.display2__AAAO();
    const index$1 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$1, index$1), 2));
    const array$2 = $thiz.display1__AAO();
    const index$2 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$2, index$2))
  } else if ((xor < 1048576)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AAAO());
    const array$3 = $thiz.display3__AAAAO();
    const index$3 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$3, index$3), 3));
    const array$4 = $thiz.display2__AAAO();
    const index$4 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$4, index$4), 2));
    const array$5 = $thiz.display1__AAO();
    const index$5 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$5, index$5))
  } else if ((xor < 33554432)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
    $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AAAO());
    $thiz.display4__AAAAAO().set((31 & ((oldIndex >>> 20) | 0)), $thiz.display3__AAAAO());
    const array$6 = $thiz.display4__AAAAAO();
    const index$6 = (31 & ((newIndex >>> 20) | 0));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$6, index$6), 4));
    const array$7 = $thiz.display3__AAAAO();
    const index$7 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$7, index$7), 3));
    const array$8 = $thiz.display2__AAAO();
    const index$8 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$8, index$8), 2));
    const array$9 = $thiz.display1__AAO();
    const index$9 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$9, index$9))
  } else if ((xor < 1073741824)) {
    $thiz.display1_$eq__AAO__V($asArrayOf_O($thiz.display1__AAO().clone__O(), 2));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($thiz.display2__AAAO().clone__O(), 3));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($thiz.display3__AAAAO().clone__O(), 4));
    $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($thiz.display4__AAAAAO().clone__O(), 5));
    $thiz.display5_$eq__AAAAAAO__V($asArrayOf_O($thiz.display5__AAAAAAO().clone__O(), 6));
    $thiz.display1__AAO().set((31 & ((oldIndex >>> 5) | 0)), $thiz.display0__AO());
    $thiz.display2__AAAO().set((31 & ((oldIndex >>> 10) | 0)), $thiz.display1__AAO());
    $thiz.display3__AAAAO().set((31 & ((oldIndex >>> 15) | 0)), $thiz.display2__AAAO());
    $thiz.display4__AAAAAO().set((31 & ((oldIndex >>> 20) | 0)), $thiz.display3__AAAAO());
    $thiz.display5__AAAAAAO().set((31 & ((oldIndex >>> 25) | 0)), $thiz.display4__AAAAAO());
    const array$10 = $thiz.display5__AAAAAAO();
    const index$10 = (31 & ((newIndex >>> 25) | 0));
    $thiz.display4_$eq__AAAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$10, index$10), 5));
    const array$11 = $thiz.display4__AAAAAO();
    const index$11 = (31 & ((newIndex >>> 20) | 0));
    $thiz.display3_$eq__AAAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$11, index$11), 4));
    const array$12 = $thiz.display3__AAAAO();
    const index$12 = (31 & ((newIndex >>> 15) | 0));
    $thiz.display2_$eq__AAAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$12, index$12), 3));
    const array$13 = $thiz.display2__AAAO();
    const index$13 = (31 & ((newIndex >>> 10) | 0));
    $thiz.display1_$eq__AAO__V($asArrayOf_O($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$13, index$13), 2));
    const array$14 = $thiz.display1__AAO();
    const index$14 = (31 & ((newIndex >>> 5) | 0));
    $thiz.display0_$eq__AO__V($f_sci_VectorPointer__nullSlotAndCopy__AAO__I__AO($thiz, array$14, index$14))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
class $c_sr_BoxesRunTime$ extends $c_O {
  equals__O__O__Z(x, y) {
    if ((x === y)) {
      return true
    } else if ($is_jl_Number(x)) {
      const x2 = $as_jl_Number(x);
      return this.equalsNumObject__jl_Number__O__Z(x2, y)
    } else if ((x instanceof $Char)) {
      const x3 = $as_jl_Character(x);
      return this.equalsCharObject__jl_Character__O__Z(x3, y)
    } else {
      return ((x === null) ? (y === null) : $dp_equals__O__Z(x, y))
    }
  };
  equalsNumObject__jl_Number__O__Z(xn, y) {
    if ($is_jl_Number(y)) {
      const x2 = $as_jl_Number(y);
      return this.equalsNumNum__jl_Number__jl_Number__Z(xn, x2)
    } else if ((y instanceof $Char)) {
      const x3 = $as_jl_Character(y);
      if (((typeof xn) === "number")) {
        const x2$1 = $uD(xn);
        return (x2$1 === $uC(x3))
      } else if ((xn instanceof $c_RTLong)) {
        const t = $uJ(xn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(x3);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((xn === null) ? (x3 === null) : $dp_equals__O__Z(xn, x3))
      }
    } else {
      return ((xn === null) ? (y === null) : $dp_equals__O__Z(xn, y))
    }
  };
  equalsNumNum__jl_Number__jl_Number__Z(xn, yn) {
    if (((typeof xn) === "number")) {
      const x2 = $uD(xn);
      if (((typeof yn) === "number")) {
        const x2$2 = $uD(yn);
        return (x2 === x2$2)
      } else if ((yn instanceof $c_RTLong)) {
        const t = $uJ(yn);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        return (x2 === $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi))
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4 = $as_s_math_ScalaNumber(yn);
        return x4.equals__O__Z(x2)
      } else {
        return false
      }
    } else if ((xn instanceof $c_RTLong)) {
      const t$1 = $uJ(xn);
      const lo$1 = t$1.RTLong__f_lo;
      const hi$1 = t$1.RTLong__f_hi;
      if ((yn instanceof $c_RTLong)) {
        const t$2 = $uJ(yn);
        const lo$2 = t$2.RTLong__f_lo;
        const hi$2 = t$2.RTLong__f_hi;
        return ((lo$1 === lo$2) && (hi$1 === hi$2))
      } else if (((typeof yn) === "number")) {
        const x3$3 = $uD(yn);
        return ($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo$1, hi$1) === x3$3)
      } else if ((yn instanceof $c_s_math_ScalaNumber)) {
        const x4$2 = $as_s_math_ScalaNumber(yn);
        return x4$2.equals__O__Z(new $c_RTLong(lo$1, hi$1))
      } else {
        return false
      }
    } else {
      return ((xn === null) ? (yn === null) : $dp_equals__O__Z(xn, yn))
    }
  };
  equalsCharObject__jl_Character__O__Z(xc, y) {
    if ((y instanceof $Char)) {
      const x2 = $as_jl_Character(y);
      return ($uC(xc) === $uC(x2))
    } else if ($is_jl_Number(y)) {
      const x3 = $as_jl_Number(y);
      if (((typeof x3) === "number")) {
        const x2$1 = $uD(x3);
        return (x2$1 === $uC(xc))
      } else if ((x3 instanceof $c_RTLong)) {
        const t = $uJ(x3);
        const lo = t.RTLong__f_lo;
        const hi = t.RTLong__f_hi;
        const value = $uC(xc);
        const hi$1 = (value >> 31);
        return ((lo === value) && (hi === hi$1))
      } else {
        return ((x3 === null) ? (xc === null) : $dp_equals__O__Z(x3, xc))
      }
    } else {
      return ((xc === null) && (y === null))
    }
  };
}
const $d_sr_BoxesRunTime$ = new $TypeData().initClass({
  sr_BoxesRunTime$: 0
}, false, "scala.runtime.BoxesRunTime$", {
  sr_BoxesRunTime$: 1,
  O: 1
});
$c_sr_BoxesRunTime$.prototype.$classData = $d_sr_BoxesRunTime$;
let $n_sr_BoxesRunTime$ = (void 0);
function $m_sr_BoxesRunTime$() {
  if ((!$n_sr_BoxesRunTime$)) {
    $n_sr_BoxesRunTime$ = new $c_sr_BoxesRunTime$()
  };
  return $n_sr_BoxesRunTime$
}
class $c_sr_ScalaRunTime$ extends $c_O {
  array_apply__O__I__O(xs, idx) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      return x2.get(idx)
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      return x3.get(idx)
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      return x4.get(idx)
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      return x5.get(idx)
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      return x6.get(idx)
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      return $bC(x7.get(idx))
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      return x8.get(idx)
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      return x9.get(idx)
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      return x10.get(idx)
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      return x11.get(idx)
    } else if ((xs === null)) {
      throw new $c_jl_NullPointerException()
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_update__O__I__O__V(xs, idx, value) {
    if ($isArrayOf_O(xs, 1)) {
      const x2 = $asArrayOf_O(xs, 1);
      x2.set(idx, value)
    } else if ($isArrayOf_I(xs, 1)) {
      const x3 = $asArrayOf_I(xs, 1);
      x3.set(idx, $uI(value))
    } else if ($isArrayOf_D(xs, 1)) {
      const x4 = $asArrayOf_D(xs, 1);
      x4.set(idx, $uD(value))
    } else if ($isArrayOf_J(xs, 1)) {
      const x5 = $asArrayOf_J(xs, 1);
      x5.set(idx, $uJ(value))
    } else if ($isArrayOf_F(xs, 1)) {
      const x6 = $asArrayOf_F(xs, 1);
      x6.set(idx, $uF(value))
    } else if ($isArrayOf_C(xs, 1)) {
      const x7 = $asArrayOf_C(xs, 1);
      x7.set(idx, $uC(value))
    } else if ($isArrayOf_B(xs, 1)) {
      const x8 = $asArrayOf_B(xs, 1);
      x8.set(idx, $uB(value))
    } else if ($isArrayOf_S(xs, 1)) {
      const x9 = $asArrayOf_S(xs, 1);
      x9.set(idx, $uS(value))
    } else if ($isArrayOf_Z(xs, 1)) {
      const x10 = $asArrayOf_Z(xs, 1);
      x10.set(idx, $uZ(value))
    } else if ($isArrayOf_jl_Void(xs, 1)) {
      const x11 = $asArrayOf_jl_Void(xs, 1);
      x11.set(idx, (void 0))
    } else if ((xs === null)) {
      throw new $c_jl_NullPointerException()
    } else {
      throw new $c_s_MatchError(xs)
    }
  };
  array_length__O__I(xs) {
    return $m_jl_reflect_Array$().getLength__O__I(xs)
  };
  _toString__s_Product__T(x) {
    const this$1 = x.productIterator__sc_Iterator();
    const start = (x.productPrefix__T() + "(");
    return $f_sc_IterableOnceOps__mkString__T__T__T__T(this$1, start, ",", ")")
  };
}
const $d_sr_ScalaRunTime$ = new $TypeData().initClass({
  sr_ScalaRunTime$: 0
}, false, "scala.runtime.ScalaRunTime$", {
  sr_ScalaRunTime$: 1,
  O: 1
});
$c_sr_ScalaRunTime$.prototype.$classData = $d_sr_ScalaRunTime$;
let $n_sr_ScalaRunTime$ = (void 0);
function $m_sr_ScalaRunTime$() {
  if ((!$n_sr_ScalaRunTime$)) {
    $n_sr_ScalaRunTime$ = new $c_sr_ScalaRunTime$()
  };
  return $n_sr_ScalaRunTime$
}
class $c_sr_Statics$ extends $c_O {
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  finalizeHash__I__I__I(hash, length) {
    return this.avalanche__I__I((hash ^ length))
  };
  avalanche__I__I(h0) {
    let h = h0;
    h = (h ^ ((h >>> 16) | 0));
    h = $imul((-2048144789), h);
    h = (h ^ ((h >>> 13) | 0));
    h = $imul((-1028477387), h);
    h = (h ^ ((h >>> 16) | 0));
    return h
  };
  longHash__J__I(lv) {
    const lo = lv.RTLong__f_lo;
    const lo$1 = lv.RTLong__f_hi;
    return ((lo$1 === (lo >> 31)) ? lo : (lo ^ lo$1))
  };
  doubleHash__D__I(dv) {
    const iv = $doubleToInt(dv);
    if ((iv === dv)) {
      return iv
    } else {
      const this$1 = $m_RTLong$();
      const lo = this$1.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(dv);
      const hi = this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
      return (($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) === dv) ? (lo ^ hi) : $m_jl_FloatingPointBits$().numberHashCode__D__I(dv))
    }
  };
  anyHash__O__I(x) {
    if ((x === null)) {
      return 0
    } else if (((typeof x) === "number")) {
      const x3 = $uD(x);
      return this.doubleHash__D__I(x3)
    } else if ((x instanceof $c_RTLong)) {
      const t = $uJ(x);
      const lo = t.RTLong__f_lo;
      const hi = t.RTLong__f_hi;
      return this.longHash__J__I(new $c_RTLong(lo, hi))
    } else {
      return $dp_hashCode__I(x)
    }
  };
  ioobe__I__O(n) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
}
const $d_sr_Statics$ = new $TypeData().initClass({
  sr_Statics$: 0
}, false, "scala.runtime.Statics$", {
  sr_Statics$: 1,
  O: 1
});
$c_sr_Statics$.prototype.$classData = $d_sr_Statics$;
let $n_sr_Statics$ = (void 0);
function $m_sr_Statics$() {
  if ((!$n_sr_Statics$)) {
    $n_sr_Statics$ = new $c_sr_Statics$()
  };
  return $n_sr_Statics$
}
class $c_sr_Statics$PFMarker$ extends $c_O {
}
const $d_sr_Statics$PFMarker$ = new $TypeData().initClass({
  sr_Statics$PFMarker$: 0
}, false, "scala.runtime.Statics$PFMarker$", {
  sr_Statics$PFMarker$: 1,
  O: 1
});
$c_sr_Statics$PFMarker$.prototype.$classData = $d_sr_Statics$PFMarker$;
let $n_sr_Statics$PFMarker$ = (void 0);
function $m_sr_Statics$PFMarker$() {
  if ((!$n_sr_Statics$PFMarker$)) {
    $n_sr_Statics$PFMarker$ = new $c_sr_Statics$PFMarker$()
  };
  return $n_sr_Statics$PFMarker$
}
class $c_sjsr_package$ extends $c_O {
  wrapJavaScriptException__O__jl_Throwable(e) {
    if ((e instanceof $c_jl_Throwable)) {
      const x2 = $as_jl_Throwable(e);
      return x2
    } else {
      return new $c_sjs_js_JavaScriptException(e)
    }
  };
  unwrapJavaScriptException__jl_Throwable__O(th) {
    if ((th instanceof $c_sjs_js_JavaScriptException)) {
      const x2 = $as_sjs_js_JavaScriptException(th);
      const e = x2.sjs_js_JavaScriptException__f_exception;
      return e
    } else {
      return th
    }
  };
}
const $d_sjsr_package$ = new $TypeData().initClass({
  sjsr_package$: 0
}, false, "scala.scalajs.runtime.package$", {
  sjsr_package$: 1,
  O: 1
});
$c_sjsr_package$.prototype.$classData = $d_sjsr_package$;
let $n_sjsr_package$ = (void 0);
function $m_sjsr_package$() {
  if ((!$n_sjsr_package$)) {
    $n_sjsr_package$ = new $c_sjsr_package$()
  };
  return $n_sjsr_package$
}
class $c_s_util_hashing_MurmurHash3 extends $c_O {
  mix__I__I__I(hash, data) {
    let h = this.mixLast__I__I__I(hash, data);
    const i = h;
    h = ((i << 13) | ((i >>> 19) | 0));
    return (((-430675100) + $imul(5, h)) | 0)
  };
  mixLast__I__I__I(hash, data) {
    let k = data;
    k = $imul((-862048943), k);
    const i = k;
    k = ((i << 15) | ((i >>> 17) | 0));
    k = $imul(461845907, k);
    return (hash ^ k)
  };
  finalizeHash__I__I__I(hash, length) {
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I((hash ^ length))
  };
  scala$util$hashing$MurmurHash3$$avalanche__I__I(hash) {
    let h = hash;
    h = (h ^ ((h >>> 16) | 0));
    h = $imul((-2048144789), h);
    h = (h ^ ((h >>> 13) | 0));
    h = $imul((-1028477387), h);
    h = (h ^ ((h >>> 16) | 0));
    return h
  };
  productHash__s_Product__I__Z__I(x, seed, ignorePrefix) {
    const arr = x.productArity__I();
    if ((arr === 0)) {
      return $f_T__hashCode__I(x.productPrefix__T())
    } else {
      let h = seed;
      if ((!ignorePrefix)) {
        h = this.mix__I__I__I(h, $f_T__hashCode__I(x.productPrefix__T()))
      };
      let i = 0;
      while ((i < arr)) {
        const $$x1 = h;
        const x$1 = x.productElement__I__O(i);
        h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
        i = ((1 + i) | 0)
      };
      return this.finalizeHash__I__I__I(h, arr)
    }
  };
  orderedHash__sc_IterableOnce__I__I(xs, seed) {
    const it = xs.iterator__sc_Iterator();
    let h = seed;
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(h, 0)
    };
    const x0 = it.next__O();
    if ((!it.hasNext__Z())) {
      return this.finalizeHash__I__I__I(this.mix__I__I__I(h, $m_sr_Statics$().anyHash__O__I(x0)), 1)
    };
    const x1 = it.next__O();
    const initial = $m_sr_Statics$().anyHash__O__I(x0);
    h = this.mix__I__I__I(h, initial);
    const h0 = h;
    let prev = $m_sr_Statics$().anyHash__O__I(x1);
    const rangeDiff = ((prev - initial) | 0);
    let i = 2;
    while (it.hasNext__Z()) {
      h = this.mix__I__I__I(h, prev);
      const x = it.next__O();
      const hash = $m_sr_Statics$().anyHash__O__I(x);
      if ((rangeDiff !== ((hash - prev) | 0))) {
        h = this.mix__I__I__I(h, hash);
        i = ((1 + i) | 0);
        while (it.hasNext__Z()) {
          const $$x1 = h;
          const x$1 = it.next__O();
          h = this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x$1));
          i = ((1 + i) | 0)
        };
        return this.finalizeHash__I__I__I(h, i)
      };
      prev = hash;
      i = ((1 + i) | 0)
    };
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
  };
  rangeHash__I__I__I__I__I(start, step, last, seed) {
    return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(this.mix__I__I__I(seed, start), step), last))
  };
  indexedSeqHash__sc_IndexedSeq__I__I(a, seed) {
    let h = seed;
    const l = a.length__I();
    switch (l) {
      case 0: {
        return this.finalizeHash__I__I__I(h, 0);
        break
      }
      case 1: {
        const $$x1 = h;
        const x = a.apply__I__O(0);
        return this.finalizeHash__I__I__I(this.mix__I__I__I($$x1, $m_sr_Statics$().anyHash__O__I(x)), 1);
        break
      }
      default: {
        const x$1 = a.apply__I__O(0);
        const initial = $m_sr_Statics$().anyHash__O__I(x$1);
        h = this.mix__I__I__I(h, initial);
        const h0 = h;
        const x$2 = a.apply__I__O(1);
        let prev = $m_sr_Statics$().anyHash__O__I(x$2);
        const rangeDiff = ((prev - initial) | 0);
        let i = 2;
        while ((i < l)) {
          h = this.mix__I__I__I(h, prev);
          const x$3 = a.apply__I__O(i);
          const hash = $m_sr_Statics$().anyHash__O__I(x$3);
          if ((rangeDiff !== ((hash - prev) | 0))) {
            h = this.mix__I__I__I(h, hash);
            i = ((1 + i) | 0);
            while ((i < l)) {
              const $$x2 = h;
              const x$4 = a.apply__I__O(i);
              h = this.mix__I__I__I($$x2, $m_sr_Statics$().anyHash__O__I(x$4));
              i = ((1 + i) | 0)
            };
            return this.finalizeHash__I__I__I(h, l)
          };
          prev = hash;
          i = ((1 + i) | 0)
        };
        return this.scala$util$hashing$MurmurHash3$$avalanche__I__I(this.mix__I__I__I(this.mix__I__I__I(h0, rangeDiff), prev))
      }
    }
  };
  listHash__sci_List__I__I(xs, seed) {
    let n = 0;
    let h = seed;
    let rangeState = 0;
    let rangeDiff = 0;
    let prev = 0;
    let initial = 0;
    let elems = xs;
    while ((!elems.isEmpty__Z())) {
      const head = elems.head__O();
      const tail = $as_sci_List(elems.tail__O());
      const hash = $m_sr_Statics$().anyHash__O__I(head);
      h = this.mix__I__I__I(h, hash);
      const x1 = rangeState;
      switch (x1) {
        case 0: {
          initial = hash;
          rangeState = 1;
          break
        }
        case 1: {
          rangeDiff = ((hash - prev) | 0);
          rangeState = 2;
          break
        }
        case 2: {
          if ((rangeDiff !== ((hash - prev) | 0))) {
            rangeState = 3
          };
          break
        }
      };
      prev = hash;
      n = ((1 + n) | 0);
      elems = tail
    };
    return ((rangeState === 2) ? this.rangeHash__I__I__I__I__I(initial, rangeDiff, prev, seed) : this.finalizeHash__I__I__I(h, n))
  };
}
class $c_Lscalatags_Escaping$ extends $c_O {
  constructor() {
    super();
    this.Lscalatags_Escaping$__f_tagRegex = null;
    $n_Lscalatags_Escaping$ = this;
    const groupNames = $m_sci_Nil$();
    this.Lscalatags_Escaping$__f_tagRegex = $ct_s_util_matching_Regex__T__sci_Seq__(new $c_s_util_matching_Regex(), "^[a-z][:\\w0-9-]*$", groupNames)
  };
  validTag__T__Z(s) {
    const this$1 = this.Lscalatags_Escaping$__f_tagRegex.unapplySeq__jl_CharSequence__s_Option(s);
    return (!this$1.isEmpty__Z())
  };
  validAttrName__T__Z(s) {
    const len = $uI(s.length);
    if ((len === 0)) {
      return false
    };
    const sc = (65535 & $uI(s.charCodeAt(0)));
    const startCharValid = ((((sc >= 97) && (sc <= 122)) || ((sc >= 65) && (sc <= 90))) || (sc === 58));
    if ((!startCharValid)) {
      return false
    };
    let pos = 1;
    while ((pos < len)) {
      const index = pos;
      const c = (65535 & $uI(s.charCodeAt(index)));
      const valid = ((((((((c >= 97) && (c <= 122)) || ((c >= 65) && (c <= 90))) || ((c >= 48) && (c <= 57))) || (c === 45)) || (c === 58)) || (c === 46)) || (c === 95));
      if ((!valid)) {
        return false
      };
      pos = ((1 + pos) | 0)
    };
    return true
  };
}
const $d_Lscalatags_Escaping$ = new $TypeData().initClass({
  Lscalatags_Escaping$: 0
}, false, "scalatags.Escaping$", {
  Lscalatags_Escaping$: 1,
  O: 1
});
$c_Lscalatags_Escaping$.prototype.$classData = $d_Lscalatags_Escaping$;
let $n_Lscalatags_Escaping$ = (void 0);
function $m_Lscalatags_Escaping$() {
  if ((!$n_Lscalatags_Escaping$)) {
    $n_Lscalatags_Escaping$ = new $c_Lscalatags_Escaping$()
  };
  return $n_Lscalatags_Escaping$
}
function $is_Lscalatags_generic_Modifier(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lscalatags_generic_Modifier)))
}
function $as_Lscalatags_generic_Modifier(obj) {
  return (($is_Lscalatags_generic_Modifier(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Modifier"))
}
function $isArrayOf_Lscalatags_generic_Modifier(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Modifier)))
}
function $asArrayOf_Lscalatags_generic_Modifier(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Modifier(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Modifier;", depth))
}
function $is_Lscalatags_generic_Namespace(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.Lscalatags_generic_Namespace)))
}
function $as_Lscalatags_generic_Namespace(obj) {
  return (($is_Lscalatags_generic_Namespace(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Namespace"))
}
function $isArrayOf_Lscalatags_generic_Namespace(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Namespace)))
}
function $asArrayOf_Lscalatags_generic_Namespace(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Namespace(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Namespace;", depth))
}
class $c_Lscalatags_generic_Namespace$ extends $c_O {
  constructor() {
    super();
    this.Lscalatags_generic_Namespace$__f_htmlNamespaceConfig = null;
    this.Lscalatags_generic_Namespace$__f_svgNamespaceConfig = null;
    this.Lscalatags_generic_Namespace$__f_svgXlinkNamespaceConfig = null;
    $n_Lscalatags_generic_Namespace$ = this;
    this.Lscalatags_generic_Namespace$__f_htmlNamespaceConfig = new $c_Lscalatags_generic_Namespace$$anon$1();
    this.Lscalatags_generic_Namespace$__f_svgNamespaceConfig = new $c_Lscalatags_generic_Namespace$$anon$2();
    this.Lscalatags_generic_Namespace$__f_svgXlinkNamespaceConfig = new $c_Lscalatags_generic_Namespace$$anon$3()
  };
}
const $d_Lscalatags_generic_Namespace$ = new $TypeData().initClass({
  Lscalatags_generic_Namespace$: 0
}, false, "scalatags.generic.Namespace$", {
  Lscalatags_generic_Namespace$: 1,
  O: 1
});
$c_Lscalatags_generic_Namespace$.prototype.$classData = $d_Lscalatags_generic_Namespace$;
let $n_Lscalatags_generic_Namespace$ = (void 0);
function $m_Lscalatags_generic_Namespace$() {
  if ((!$n_Lscalatags_generic_Namespace$)) {
    $n_Lscalatags_generic_Namespace$ = new $c_Lscalatags_generic_Namespace$()
  };
  return $n_Lscalatags_generic_Namespace$
}
const $s_Lwebapp_App__main__AT__V = (function(args) {
  $m_Lwebapp_App$().main__AT__V(args)
});
class $c_Lwebapp_App$ extends $c_O {
  main__AT__V(args) {
    const this$1 = $m_Lscalatags_JsDom$all$();
    const $$x4 = this$1.button__Lscalatags_JsDom$TypedTag();
    $m_Lscalatags_JsDom$all$();
    const $$x3 = new $c_Lscalatags_JsDom$StringFrag("Click me");
    const $$x2 = $m_Lscalatags_JsDom$all$().onclick__Lscalatags_generic_Attr();
    const $$x1 = new $c_sjsr_AnonFunction0(((this$3) => (() => {
      $m_Lorg_scalajs_dom_package$().window__Lorg_scalajs_dom_raw_Window().alert("Hello, world")
    }))(this));
    const this$4 = $m_Lscalatags_JsDom$all$();
    const ev = new $c_sjsr_AnonFunction1(((this$2$1) => ((f$2) => {
      const f = $as_F0(f$2);
      return $m_sjs_js_Any$().fromFunction0__F0__sjs_js_Function0(f)
    }))(this));
    const array = [$$x3, $$x2.$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair($$x1, new $c_Lscalatags_LowPriorityImplicits$$anon$2(this$4, ev))];
    const btn = $$x4.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array));
    const this$8 = $m_Lscalatags_JsDom$all$();
    const $$x9 = this$8.div__Lscalatags_JsDom$TypedTag();
    const $$x8 = $m_Lscalatags_JsDom$all$().cls__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("foo", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr);
    const this$9 = $m_Lscalatags_JsDom$all$();
    const $$x7 = this$9.div__Lscalatags_JsDom$TypedTag();
    const $$x6 = $m_Lscalatags_JsDom$all$().cls__Lscalatags_generic_Attr().$colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair("bar", $m_Lscalatags_JsDom$all$().Lscalatags_JsDom$all$__f_stringAttr);
    const this$10 = $m_Lscalatags_JsDom$all$();
    const $$x5 = this$10.h2__Lscalatags_JsDom$TypedTag();
    const array$1 = [($m_Lscalatags_JsDom$all$(), new $c_Lscalatags_JsDom$StringFrag("Hello"))];
    const array$2 = [$$x6, $$x5.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$1)), btn];
    const array$3 = [$$x8, $$x7.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$2))];
    const content = $$x9.apply__sci_Seq__Lscalatags_JsDom$TypedTag(new $c_sjsr_WrappedVarArgs(array$3));
    const root = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().getElementById("root");
    root.innerHTML = "";
    root.appendChild(content.render__Lorg_scalajs_dom_raw_Element())
  };
}
const $d_Lwebapp_App$ = new $TypeData().initClass({
  Lwebapp_App$: 0
}, false, "webapp.App$", {
  Lwebapp_App$: 1,
  O: 1
});
$c_Lwebapp_App$.prototype.$classData = $d_Lwebapp_App$;
let $n_Lwebapp_App$ = (void 0);
function $m_Lwebapp_App$() {
  if ((!$n_Lwebapp_App$)) {
    $n_Lwebapp_App$ = new $c_Lwebapp_App$()
  };
  return $n_Lwebapp_App$
}
const $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI = (function($thiz) {
  if (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints = $makeNativeArrayWrapper($d_I.getArrayOf(), [1632, 1776, 1984, 2406, 2534, 2662, 2790, 2918, 3046, 3174, 3302, 3430, 3664, 3792, 3872, 4160, 4240, 6112, 6160, 6470, 6608, 6784, 6800, 6992, 7088, 7232, 7248, 42528, 43216, 43264, 43472, 43600, 44016, 65296, 66720, 69734, 69872, 69942, 70096, 71360, 120782, 120792, 120802, 120812, 120822]);
    $thiz.jl_Character$__f_bitmap$0 = (((16 | $thiz.jl_Character$__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints
});
const $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI = (function($thiz) {
  return (((((16 & $thiz.jl_Character$__f_bitmap$0) << 24) >> 24) === 0) ? $p_jl_Character$__nonASCIIZeroDigitCodePoints$lzycompute__AI($thiz) : $thiz.jl_Character$__f_nonASCIIZeroDigitCodePoints)
});
class $c_jl_Character$ extends $c_O {
  constructor() {
    super();
    this.jl_Character$__f_java$lang$Character$$charTypesFirst256 = null;
    this.jl_Character$__f_charTypeIndices = null;
    this.jl_Character$__f_charTypes = null;
    this.jl_Character$__f_isMirroredIndices = null;
    this.jl_Character$__f_nonASCIIZeroDigitCodePoints = null;
    this.jl_Character$__f_bitmap$0 = 0
  };
  digitWithValidRadix__I__I__I(codePoint, radix) {
    let value;
    if ((codePoint < 256)) {
      value = (((codePoint >= 48) && (codePoint <= 57)) ? (((-48) + codePoint) | 0) : (((codePoint >= 65) && (codePoint <= 90)) ? (((-55) + codePoint) | 0) : (((codePoint >= 97) && (codePoint <= 122)) ? (((-87) + codePoint) | 0) : (-1))))
    } else if (((codePoint >= 65313) && (codePoint <= 65338))) {
      value = (((-65303) + codePoint) | 0)
    } else if (((codePoint >= 65345) && (codePoint <= 65370))) {
      value = (((-65335) + codePoint) | 0)
    } else {
      const a = $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this);
      const p = $m_ju_Arrays$().binarySearch__AI__I__I(a, codePoint);
      const zeroCodePointIndex = ((p < 0) ? (((-2) - p) | 0) : p);
      if ((zeroCodePointIndex < 0)) {
        value = (-1)
      } else {
        const v = ((codePoint - $p_jl_Character$__nonASCIIZeroDigitCodePoints__AI(this).get(zeroCodePointIndex)) | 0);
        value = ((v > 9) ? (-1) : v)
      }
    };
    return ((value < radix) ? value : (-1))
  };
}
const $d_jl_Character$ = new $TypeData().initClass({
  jl_Character$: 0
}, false, "java.lang.Character$", {
  jl_Character$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Character$.prototype.$classData = $d_jl_Character$;
let $n_jl_Character$ = (void 0);
function $m_jl_Character$() {
  if ((!$n_jl_Character$)) {
    $n_jl_Character$ = new $c_jl_Character$()
  };
  return $n_jl_Character$
}
const $p_jl_Integer$__fail$1__T__E = (function($thiz, s$1) {
  throw new $c_jl_NumberFormatException((("For input string: \"" + s$1) + "\""))
});
class $c_jl_Integer$ extends $c_O {
  parseInt__T__I__I(s, radix) {
    const len = ((s === null) ? 0 : $uI(s.length));
    if ((((len === 0) || (radix < 2)) || (radix > 36))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    const firstChar = (65535 & $uI(s.charCodeAt(0)));
    const negative = (firstChar === 45);
    const maxAbsValue = (negative ? 2.147483648E9 : 2.147483647E9);
    let i = ((negative || (firstChar === 43)) ? 1 : 0);
    if ((i >= $uI(s.length))) {
      $p_jl_Integer$__fail$1__T__E(this, s)
    };
    let result = 0.0;
    while ((i !== len)) {
      const $$x1 = $m_jl_Character$();
      const index = i;
      const digit = $$x1.digitWithValidRadix__I__I__I((65535 & $uI(s.charCodeAt(index))), radix);
      result = ((result * radix) + digit);
      if (((digit === (-1)) || (result > maxAbsValue))) {
        $p_jl_Integer$__fail$1__T__E(this, s)
      };
      i = ((1 + i) | 0)
    };
    if (negative) {
      const n = (-result);
      return $uI((n | 0))
    } else {
      const n$1 = result;
      return $uI((n$1 | 0))
    }
  };
}
const $d_jl_Integer$ = new $TypeData().initClass({
  jl_Integer$: 0
}, false, "java.lang.Integer$", {
  jl_Integer$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Integer$.prototype.$classData = $d_jl_Integer$;
let $n_jl_Integer$ = (void 0);
function $m_jl_Integer$() {
  if ((!$n_jl_Integer$)) {
    $n_jl_Integer$ = new $c_jl_Integer$()
  };
  return $n_jl_Integer$
}
class $c_jl_Number extends $c_O {
}
function $is_jl_Number(obj) {
  return ((obj instanceof $c_jl_Number) || ((typeof obj) === "number"))
}
function $as_jl_Number(obj) {
  return (($is_jl_Number(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Number"))
}
function $isArrayOf_jl_Number(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Number)))
}
function $asArrayOf_jl_Number(obj, depth) {
  return (($isArrayOf_jl_Number(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Number;", depth))
}
class $c_jl_String$ extends $c_O {
  constructor() {
    super();
    this.jl_String$__f_CASE_INSENSITIVE_ORDER = null;
    this.jl_String$__f_bitmap$0 = false
  };
  new__AC__I__I__T(value, offset, count) {
    const end = ((offset + count) | 0);
    if ((((offset < 0) || (end < offset)) || (end > value.u.length))) {
      throw new $c_jl_StringIndexOutOfBoundsException()
    };
    let result = "";
    let i = offset;
    while ((i !== end)) {
      const $$x1 = result;
      const this$1 = value.get(i);
      result = (("" + $$x1) + $as_T(String.fromCharCode(this$1)));
      i = ((1 + i) | 0)
    };
    return result
  };
}
const $d_jl_String$ = new $TypeData().initClass({
  jl_String$: 0
}, false, "java.lang.String$", {
  jl_String$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_String$.prototype.$classData = $d_jl_String$;
let $n_jl_String$ = (void 0);
function $m_jl_String$() {
  if ((!$n_jl_String$)) {
    $n_jl_String$ = new $c_jl_String$()
  };
  return $n_jl_String$
}
const $ct_jl_Throwable__T__jl_Throwable__Z__Z__ = (function($thiz, s, e, enableSuppression, writableStackTrace) {
  $thiz.jl_Throwable__f_s = s;
  $thiz.jl_Throwable__f_e = e;
  $thiz.jl_Throwable__f_enableSuppression = enableSuppression;
  $thiz.jl_Throwable__f_writableStackTrace = writableStackTrace;
  if (writableStackTrace) {
    $thiz.fillInStackTrace__jl_Throwable()
  };
  return $thiz
});
class $c_jl_Throwable extends Error {
  constructor() {
    super();
    this.jl_Throwable__f_s = null;
    this.jl_Throwable__f_e = null;
    this.jl_Throwable__f_enableSuppression = false;
    this.jl_Throwable__f_writableStackTrace = false;
    this.jl_Throwable__f_stackTraceStateInternal = null;
    this.jl_Throwable__f_stackTrace = null;
    this.jl_Throwable__f_suppressed = null
  };
  getMessage__T() {
    return this.jl_Throwable__f_s
  };
  fillInStackTrace__jl_Throwable() {
    const identifyingString = Object.prototype.toString.call(this);
    if ((identifyingString === "[object Error]")) {
      this.jl_Throwable__f_stackTraceStateInternal = this
    } else {
      const x = Error.captureStackTrace;
      if ((x === (void 0))) {
        const e = new Error();
        this.jl_Throwable__f_stackTraceStateInternal = e
      } else {
        Error.captureStackTrace(this);
        this.jl_Throwable__f_stackTraceStateInternal = this
      }
    };
    return this
  };
  toString__T() {
    const className = $objectGetClass(this).getName__T();
    const message = this.getMessage__T();
    return ((message === null) ? className : ((className + ": ") + message))
  };
  $js$exported$meth$toString__O() {
    return this.toString__T()
  };
  $js$exported$prop$name__O() {
    return $objectGetClass(this).getName__T()
  };
  $js$exported$prop$message__O() {
    const m = this.getMessage__T();
    return ((m === null) ? "" : m)
  };
  hashCode__I() {
    return $c_O.prototype.hashCode__I.call(this)
  };
  equals__O__Z(that) {
    return $c_O.prototype.equals__O__Z.call(this, that)
  };
  get "message"() {
    return this.$js$exported$prop$message__O()
  };
  get "name"() {
    return this.$js$exported$prop$name__O()
  };
  "toString"() {
    return this.$js$exported$meth$toString__O()
  };
}
function $as_jl_Throwable(obj) {
  return (((obj instanceof $c_jl_Throwable) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Throwable"))
}
function $isArrayOf_jl_Throwable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Throwable)))
}
function $asArrayOf_jl_Throwable(obj, depth) {
  return (($isArrayOf_jl_Throwable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Throwable;", depth))
}
const $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult = (function($thiz) {
  if (($thiz.ju_regex_Matcher__f_lastMatch === null)) {
    throw new $c_jl_IllegalStateException("No match available")
  };
  return $thiz.ju_regex_Matcher__f_lastMatch
});
class $c_ju_regex_Matcher extends $c_O {
  constructor(pattern0, input0, regionStart0, regionEnd0) {
    super();
    this.ju_regex_Matcher__f_pattern0 = null;
    this.ju_regex_Matcher__f_input0 = null;
    this.ju_regex_Matcher__f_regionStart0 = 0;
    this.ju_regex_Matcher__f_regionEnd0 = 0;
    this.ju_regex_Matcher__f_regexp = null;
    this.ju_regex_Matcher__f_inputstr = null;
    this.ju_regex_Matcher__f_lastMatch = null;
    this.ju_regex_Matcher__f_lastMatchIsValid = false;
    this.ju_regex_Matcher__f_canStillFind = false;
    this.ju_regex_Matcher__f_appendPos = 0;
    this.ju_regex_Matcher__f_startOfGroupCache = null;
    this.ju_regex_Matcher__f_pattern0 = pattern0;
    this.ju_regex_Matcher__f_input0 = input0;
    this.ju_regex_Matcher__f_regionStart0 = regionStart0;
    this.ju_regex_Matcher__f_regionEnd0 = regionEnd0;
    this.ju_regex_Matcher__f_regexp = this.ju_regex_Matcher__f_pattern0.newJSRegExp__sjs_js_RegExp();
    this.ju_regex_Matcher__f_inputstr = $dp_toString__T($dp_subSequence__I__I__jl_CharSequence(this.ju_regex_Matcher__f_input0, this.ju_regex_Matcher__f_regionStart0, this.ju_regex_Matcher__f_regionEnd0));
    this.ju_regex_Matcher__f_lastMatch = null;
    this.ju_regex_Matcher__f_lastMatchIsValid = false;
    this.ju_regex_Matcher__f_canStillFind = true;
    this.ju_regex_Matcher__f_appendPos = 0
  };
  matches__Z() {
    this.reset__ju_regex_Matcher();
    this.find__Z();
    let $$x1;
    if ((this.ju_regex_Matcher__f_lastMatch !== null)) {
      if ((this.start__I() !== 0)) {
        $$x1 = true
      } else {
        const $$x2 = this.end__I();
        const this$1 = this.ju_regex_Matcher__f_inputstr;
        $$x1 = ($$x2 !== $uI(this$1.length))
      }
    } else {
      $$x1 = false
    };
    if ($$x1) {
      this.reset__ju_regex_Matcher()
    };
    return (this.ju_regex_Matcher__f_lastMatch !== null)
  };
  find__Z() {
    if (this.ju_regex_Matcher__f_canStillFind) {
      this.ju_regex_Matcher__f_lastMatchIsValid = true;
      this.ju_regex_Matcher__f_lastMatch = this.ju_regex_Matcher__f_regexp.exec(this.ju_regex_Matcher__f_inputstr);
      if ((this.ju_regex_Matcher__f_lastMatch !== null)) {
        const value = this.ju_regex_Matcher__f_lastMatch[0];
        if ((value === (void 0))) {
          throw new $c_ju_NoSuchElementException("undefined.get")
        };
        const this$5 = $as_T(value);
        if ((this$5 === "")) {
          const ev$1 = this.ju_regex_Matcher__f_regexp;
          ev$1.lastIndex = ((1 + $uI(ev$1.lastIndex)) | 0)
        }
      } else {
        this.ju_regex_Matcher__f_canStillFind = false
      };
      this.ju_regex_Matcher__f_startOfGroupCache = null;
      return (this.ju_regex_Matcher__f_lastMatch !== null)
    } else {
      return false
    }
  };
  reset__ju_regex_Matcher() {
    this.ju_regex_Matcher__f_regexp.lastIndex = 0;
    this.ju_regex_Matcher__f_lastMatch = null;
    this.ju_regex_Matcher__f_lastMatchIsValid = false;
    this.ju_regex_Matcher__f_canStillFind = true;
    this.ju_regex_Matcher__f_appendPos = 0;
    this.ju_regex_Matcher__f_startOfGroupCache = null;
    return this
  };
  start__I() {
    return $uI($p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this).index)
  };
  end__I() {
    const $$x1 = this.start__I();
    const this$1 = this.group__T();
    return (($$x1 + $uI(this$1.length)) | 0)
  };
  group__T() {
    const value = $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this)[0];
    if ((value === (void 0))) {
      throw new $c_ju_NoSuchElementException("undefined.get")
    };
    return $as_T(value)
  };
  group__I__T(group) {
    const value = $p_ju_regex_Matcher__ensureLastMatch__sjs_js_RegExp$ExecResult(this)[group];
    $m_s_$less$colon$less$();
    return $as_T(((value === (void 0)) ? null : value))
  };
}
const $d_ju_regex_Matcher = new $TypeData().initClass({
  ju_regex_Matcher: 0
}, false, "java.util.regex.Matcher", {
  ju_regex_Matcher: 1,
  O: 1,
  ju_regex_MatchResult: 1
});
$c_ju_regex_Matcher.prototype.$classData = $d_ju_regex_Matcher;
const $p_ju_regex_Pattern__jsPattern__T = (function($thiz) {
  return $as_T($thiz.ju_regex_Pattern__f_jsRegExp.source)
});
const $p_ju_regex_Pattern__jsFlags__T = (function($thiz) {
  return ((($uZ($thiz.ju_regex_Pattern__f_jsRegExp.global) ? "g" : "") + ($uZ($thiz.ju_regex_Pattern__f_jsRegExp.ignoreCase) ? "i" : "")) + ($uZ($thiz.ju_regex_Pattern__f_jsRegExp.multiline) ? "m" : ""))
});
const $p_ju_regex_Pattern__groupCount$lzycompute__I = (function($thiz) {
  if (((((1 & $thiz.ju_regex_Pattern__f_bitmap$0) << 24) >> 24) === 0)) {
    $thiz.ju_regex_Pattern__f_groupCount = (((-1) + $uI(new RegExp(("|" + $p_ju_regex_Pattern__jsPattern__T($thiz))).exec("").length)) | 0);
    $thiz.ju_regex_Pattern__f_bitmap$0 = (((1 | $thiz.ju_regex_Pattern__f_bitmap$0) << 24) >> 24)
  };
  return $thiz.ju_regex_Pattern__f_groupCount
});
class $c_ju_regex_Pattern extends $c_O {
  constructor(jsRegExp, _pattern, _flags) {
    super();
    this.ju_regex_Pattern__f_groupCount = 0;
    this.ju_regex_Pattern__f_groupStartMapper = null;
    this.ju_regex_Pattern__f_jsRegExp = null;
    this.ju_regex_Pattern__f__pattern = null;
    this.ju_regex_Pattern__f__flags = 0;
    this.ju_regex_Pattern__f_bitmap$0 = 0;
    this.ju_regex_Pattern__f_jsRegExp = jsRegExp;
    this.ju_regex_Pattern__f__pattern = _pattern;
    this.ju_regex_Pattern__f__flags = _flags
  };
  groupCount__I() {
    return (((((1 & this.ju_regex_Pattern__f_bitmap$0) << 24) >> 24) === 0) ? $p_ju_regex_Pattern__groupCount$lzycompute__I(this) : this.ju_regex_Pattern__f_groupCount)
  };
  toString__T() {
    return this.ju_regex_Pattern__f__pattern
  };
  newJSRegExp__sjs_js_RegExp() {
    const r = new RegExp(this.ju_regex_Pattern__f_jsRegExp);
    return ((!Object.is(r, this.ju_regex_Pattern__f_jsRegExp)) ? r : new RegExp($p_ju_regex_Pattern__jsPattern__T(this), $p_ju_regex_Pattern__jsFlags__T(this)))
  };
}
const $d_ju_regex_Pattern = new $TypeData().initClass({
  ju_regex_Pattern: 0
}, false, "java.util.regex.Pattern", {
  ju_regex_Pattern: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_regex_Pattern.prototype.$classData = $d_ju_regex_Pattern;
class $c_ju_regex_Pattern$ extends $c_O {
  constructor() {
    super();
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat = null;
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat = null;
    $n_ju_regex_Pattern$ = this;
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat = new RegExp("^\\\\Q(.|\\n|\\r)\\\\E$");
    this.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat = new RegExp("^\\(\\?([idmsuxU]*)(?:-([idmsuxU]*))?\\)")
  };
  compile__T__I__ju_regex_Pattern(regex, flags) {
    let x1;
    if (((16 & flags) !== 0)) {
      x1 = new $c_T2(this.quote__T__T(regex), flags)
    } else {
      const m = this.ju_regex_Pattern$__f_java$util$regex$Pattern$$splitHackPat.exec(regex);
      let this$5;
      if ((m !== null)) {
        const value = m[1];
        if ((value === (void 0))) {
          throw new $c_ju_NoSuchElementException("undefined.get")
        };
        this$5 = new $c_s_Some(new $c_T2(this.quote__T__T($as_T(value)), flags))
      } else {
        this$5 = $m_s_None$()
      };
      let this$28;
      if (this$5.isEmpty__Z()) {
        const this$6 = $m_ju_regex_Pattern$();
        const m$1 = this$6.ju_regex_Pattern$__f_java$util$regex$Pattern$$flagHackPat.exec(regex);
        if ((m$1 !== null)) {
          const value$1 = m$1[0];
          if ((value$1 === (void 0))) {
            throw new $c_ju_NoSuchElementException("undefined.get")
          };
          const this$11 = $as_T(value$1);
          const beginIndex = $uI(this$11.length);
          const newPat = $as_T(regex.substring(beginIndex));
          let elem = 0;
          elem = flags;
          const value$2 = m$1[1];
          if ((value$2 !== (void 0))) {
            const chars = $as_T(value$2);
            const end = $uI(chars.length);
            let i = 0;
            while ((i < end)) {
              const arg1 = i;
              elem = (elem | $m_ju_regex_Pattern$().java$util$regex$Pattern$$charToFlag__C__I((65535 & $uI(chars.charCodeAt(arg1)))));
              i = ((1 + i) | 0)
            }
          };
          const value$3 = m$1[2];
          if ((value$3 !== (void 0))) {
            const chars$3 = $as_T(value$3);
            const end$1 = $uI(chars$3.length);
            let i$1 = 0;
            while ((i$1 < end$1)) {
              const arg1$1 = i$1;
              elem = (elem & (~$m_ju_regex_Pattern$().java$util$regex$Pattern$$charToFlag__C__I((65535 & $uI(chars$3.charCodeAt(arg1$1))))));
              i$1 = ((1 + i$1) | 0)
            }
          };
          this$28 = new $c_s_Some(new $c_T2(newPat, elem))
        } else {
          this$28 = $m_s_None$()
        }
      } else {
        this$28 = this$5
      };
      x1 = $as_T2((this$28.isEmpty__Z() ? new $c_T2(regex, flags) : this$28.get__O()))
    };
    if ((x1 === null)) {
      throw new $c_s_MatchError(x1)
    };
    const jsPattern = $as_T(x1.T2__f__1);
    const flags1 = $uI(x1.T2__f__2);
    const jsFlags = (("g" + (((2 & flags1) !== 0) ? "i" : "")) + (((8 & flags1) !== 0) ? "m" : ""));
    const jsRegExp = new RegExp(jsPattern, jsFlags);
    return new $c_ju_regex_Pattern(jsRegExp, regex, flags1)
  };
  quote__T__T(s) {
    let result = "";
    let i = 0;
    while ((i < $uI(s.length))) {
      const index = i;
      const c = (65535 & $uI(s.charCodeAt(index)));
      const $$x2 = result;
      let $$x1;
      switch (c) {
        case 92:
        case 46:
        case 40:
        case 41:
        case 91:
        case 93:
        case 123:
        case 125:
        case 124:
        case 63:
        case 42:
        case 43:
        case 94:
        case 36: {
          $$x1 = ("\\" + $bC(c));
          break
        }
        default: {
          $$x1 = $bC(c)
        }
      };
      result = (("" + $$x2) + $$x1);
      i = ((1 + i) | 0)
    };
    return result
  };
  java$util$regex$Pattern$$charToFlag__C__I(c) {
    switch (c) {
      case 105: {
        return 2;
        break
      }
      case 100: {
        return 1;
        break
      }
      case 109: {
        return 8;
        break
      }
      case 115: {
        return 32;
        break
      }
      case 117: {
        return 64;
        break
      }
      case 120: {
        return 4;
        break
      }
      case 85: {
        return 256;
        break
      }
      default: {
        throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), "bad in-pattern flag")
      }
    }
  };
}
const $d_ju_regex_Pattern$ = new $TypeData().initClass({
  ju_regex_Pattern$: 0
}, false, "java.util.regex.Pattern$", {
  ju_regex_Pattern$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_regex_Pattern$.prototype.$classData = $d_ju_regex_Pattern$;
let $n_ju_regex_Pattern$ = (void 0);
function $m_ju_regex_Pattern$() {
  if ((!$n_ju_regex_Pattern$)) {
    $n_ju_regex_Pattern$ = new $c_ju_regex_Pattern$()
  };
  return $n_ju_regex_Pattern$
}
const $p_RTLong$__toUnsignedString__I__I__T = (function($thiz, lo, hi) {
  if ((((-2097152) & hi) === 0)) {
    const this$1 = ((4.294967296E9 * hi) + $uD((lo >>> 0)));
    return ("" + this$1)
  } else {
    return $as_T($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, lo, hi, 1000000000, 0, 2))
  }
});
const $p_RTLong$__unsigned_$div__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble / bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
      return 0
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    const pow = ((31 - $clz32(blo)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((ahi >>> pow) | 0);
    return (((alo >>> pow) | 0) | ((ahi << 1) << ((31 - pow) | 0)))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    const pow$2 = ((31 - $clz32(bhi)) | 0);
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return ((ahi >>> pow$2) | 0)
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 0))
  }
});
const $p_RTLong$__unsigned_$percent__I__I__I__I__I = (function($thiz, alo, ahi, blo, bhi) {
  if ((((-2097152) & ahi) === 0)) {
    if ((((-2097152) & bhi) === 0)) {
      const aDouble = ((4.294967296E9 * ahi) + $uD((alo >>> 0)));
      const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
      const rDouble = (aDouble % bDouble);
      const x = (rDouble / 4.294967296E9);
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = $uI((x | 0));
      return $uI((rDouble | 0))
    } else {
      $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
      return alo
    }
  } else if (((bhi === 0) && ((blo & (((-1) + blo) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
    return (alo & (((-1) + blo) | 0))
  } else if (((blo === 0) && ((bhi & (((-1) + bhi) | 0)) === 0))) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (ahi & (((-1) + bhi) | 0));
    return alo
  } else {
    return $uI($p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O($thiz, alo, ahi, blo, bhi, 1))
  }
});
const $p_RTLong$__unsignedDivModHelper__I__I__I__I__I__O = (function($thiz, alo, ahi, blo, bhi, ask) {
  let shift = ((((bhi !== 0) ? $clz32(bhi) : ((32 + $clz32(blo)) | 0)) - ((ahi !== 0) ? $clz32(ahi) : ((32 + $clz32(alo)) | 0))) | 0);
  const n = shift;
  const lo = (((32 & n) === 0) ? (blo << n) : 0);
  const hi = (((32 & n) === 0) ? (((((blo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (bhi << n)) : (blo << n));
  let bShiftLo = lo;
  let bShiftHi = hi;
  let remLo = alo;
  let remHi = ahi;
  let quotLo = 0;
  let quotHi = 0;
  while (((shift >= 0) && (((-2097152) & remHi) !== 0))) {
    const alo$1 = remLo;
    const ahi$1 = remHi;
    const blo$1 = bShiftLo;
    const bhi$1 = bShiftHi;
    if (((ahi$1 === bhi$1) ? (((-2147483648) ^ alo$1) >= ((-2147483648) ^ blo$1)) : (((-2147483648) ^ ahi$1) >= ((-2147483648) ^ bhi$1)))) {
      const lo$1 = remLo;
      const hi$1 = remHi;
      const lo$2 = bShiftLo;
      const hi$2 = bShiftHi;
      const lo$3 = ((lo$1 - lo$2) | 0);
      const hi$3 = ((((-2147483648) ^ lo$3) > ((-2147483648) ^ lo$1)) ? (((-1) + ((hi$1 - hi$2) | 0)) | 0) : ((hi$1 - hi$2) | 0));
      remLo = lo$3;
      remHi = hi$3;
      if ((shift < 32)) {
        quotLo = (quotLo | (1 << shift))
      } else {
        quotHi = (quotHi | (1 << shift))
      }
    };
    shift = (((-1) + shift) | 0);
    const lo$4 = bShiftLo;
    const hi$4 = bShiftHi;
    const lo$5 = (((lo$4 >>> 1) | 0) | (hi$4 << 31));
    const hi$5 = ((hi$4 >>> 1) | 0);
    bShiftLo = lo$5;
    bShiftHi = hi$5
  };
  const alo$2 = remLo;
  const ahi$2 = remHi;
  if (((ahi$2 === bhi) ? (((-2147483648) ^ alo$2) >= ((-2147483648) ^ blo)) : (((-2147483648) ^ ahi$2) >= ((-2147483648) ^ bhi)))) {
    const lo$6 = remLo;
    const hi$6 = remHi;
    const remDouble = ((4.294967296E9 * hi$6) + $uD((lo$6 >>> 0)));
    const bDouble = ((4.294967296E9 * bhi) + $uD((blo >>> 0)));
    if ((ask !== 1)) {
      const x = (remDouble / bDouble);
      const lo$7 = $uI((x | 0));
      const x$1 = (x / 4.294967296E9);
      const hi$7 = $uI((x$1 | 0));
      const lo$8 = quotLo;
      const hi$8 = quotHi;
      const lo$9 = ((lo$8 + lo$7) | 0);
      const hi$9 = ((((-2147483648) ^ lo$9) < ((-2147483648) ^ lo$8)) ? ((1 + ((hi$8 + hi$7) | 0)) | 0) : ((hi$8 + hi$7) | 0));
      quotLo = lo$9;
      quotHi = hi$9
    };
    if ((ask !== 0)) {
      const rem_mod_bDouble = (remDouble % bDouble);
      remLo = $uI((rem_mod_bDouble | 0));
      const x$2 = (rem_mod_bDouble / 4.294967296E9);
      remHi = $uI((x$2 | 0))
    }
  };
  if ((ask === 0)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = quotHi;
    return quotLo
  } else if ((ask === 1)) {
    $thiz.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = remHi;
    return remLo
  } else {
    const lo$10 = quotLo;
    const hi$10 = quotHi;
    const quot = ((4.294967296E9 * hi$10) + $uD((lo$10 >>> 0)));
    const this$3 = remLo;
    const remStr = ("" + this$3);
    const start = $uI(remStr.length);
    return ((("" + quot) + $as_T("000000000".substring(start))) + remStr)
  }
});
class $c_RTLong$ extends $c_O {
  constructor() {
    super();
    this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0
  };
  org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi) {
    return ((hi === (lo >> 31)) ? ("" + lo) : ((hi < 0) ? ("-" + $p_RTLong$__toUnsignedString__I__I__T(this, ((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))) : $p_RTLong$__toUnsignedString__I__I__T(this, lo, hi)))
  };
  org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(lo, hi) {
    if ((hi < 0)) {
      const x = ((lo !== 0) ? (~hi) : ((-hi) | 0));
      const $$x1 = $uD((x >>> 0));
      const x$1 = ((-lo) | 0);
      return (-((4.294967296E9 * $$x1) + $uD((x$1 >>> 0))))
    } else {
      return ((4.294967296E9 * hi) + $uD((lo >>> 0)))
    }
  };
  fromInt__I__RTLong(value) {
    return new $c_RTLong(value, (value >> 31))
  };
  fromDouble__D__RTLong(value) {
    const lo = this.org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value);
    return new $c_RTLong(lo, this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  org$scalajs$linker$runtime$RuntimeLong$$fromDoubleImpl__D__I(value) {
    if ((value < (-9.223372036854776E18))) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-2147483648);
      return 0
    } else if ((value >= 9.223372036854776E18)) {
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 2147483647;
      return (-1)
    } else {
      const rawLo = $uI((value | 0));
      const x = (value / 4.294967296E9);
      const rawHi = $uI((x | 0));
      this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (((value < 0.0) && (rawLo !== 0)) ? (((-1) + rawHi) | 0) : rawHi);
      return rawLo
    }
  };
  org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(alo, ahi, blo, bhi) {
    return ((ahi === bhi) ? ((alo === blo) ? 0 : ((((-2147483648) ^ alo) < ((-2147483648) ^ blo)) ? (-1) : 1)) : ((ahi < bhi) ? (-1) : 1))
  };
  divideImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if (((alo === (-2147483648)) && (blo === (-1)))) {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return (-2147483648)
        } else {
          const lo = $intDiv(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (-1);
        return (-1)
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$div__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if (((ahi ^ bhi) >= 0)) {
        return absRLo
      } else {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      }
    }
  };
  remainderImpl__I__I__I__I__I(alo, ahi, blo, bhi) {
    if (((blo | bhi) === 0)) {
      throw $ct_jl_ArithmeticException__T__(new $c_jl_ArithmeticException(), "/ by zero")
    };
    if ((ahi === (alo >> 31))) {
      if ((bhi === (blo >> 31))) {
        if ((blo !== (-1))) {
          const lo = $intMod(alo, blo);
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = (lo >> 31);
          return lo
        } else {
          this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
          return 0
        }
      } else if (((alo === (-2147483648)) && ((blo === (-2147483648)) && (bhi === 0)))) {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = 0;
        return 0
      } else {
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ahi;
        return alo
      }
    } else {
      let aAbs__lo;
      let aAbs__hi;
      if ((ahi < 0)) {
        const lo$1 = ((-alo) | 0);
        const hi = ((alo !== 0) ? (~ahi) : ((-ahi) | 0));
        const $$x1__lo = lo$1;
        const $$x1__hi = hi;
        aAbs__lo = $$x1__lo;
        aAbs__hi = $$x1__hi
      } else {
        const $$x2__lo = alo;
        const $$x2__hi = ahi;
        aAbs__lo = $$x2__lo;
        aAbs__hi = $$x2__hi
      };
      let bAbs__lo;
      let bAbs__hi;
      if ((bhi < 0)) {
        const lo$2 = ((-blo) | 0);
        const hi$1 = ((blo !== 0) ? (~bhi) : ((-bhi) | 0));
        const $$x3__lo = lo$2;
        const $$x3__hi = hi$1;
        bAbs__lo = $$x3__lo;
        bAbs__hi = $$x3__hi
      } else {
        const $$x4__lo = blo;
        const $$x4__hi = bhi;
        bAbs__lo = $$x4__lo;
        bAbs__hi = $$x4__hi
      };
      const absRLo = $p_RTLong$__unsigned_$percent__I__I__I__I__I(this, aAbs__lo, aAbs__hi, bAbs__lo, bAbs__hi);
      if ((ahi < 0)) {
        const hi$2 = this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn;
        this.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn = ((absRLo !== 0) ? (~hi$2) : ((-hi$2) | 0));
        return ((-absRLo) | 0)
      } else {
        return absRLo
      }
    }
  };
}
const $d_RTLong$ = new $TypeData().initClass({
  RTLong$: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong$", {
  RTLong$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_RTLong$.prototype.$classData = $d_RTLong$;
let $n_RTLong$ = (void 0);
function $m_RTLong$() {
  if ((!$n_RTLong$)) {
    $n_RTLong$ = new $c_RTLong$()
  };
  return $n_RTLong$
}
class $c_s_$less$colon$less$ extends $c_O {
  constructor() {
    super();
    this.s_$less$colon$less$__f_singleton = null;
    $n_s_$less$colon$less$ = this;
    this.s_$less$colon$less$__f_singleton = new $c_s_$less$colon$less$$anon$1()
  };
}
const $d_s_$less$colon$less$ = new $TypeData().initClass({
  s_$less$colon$less$: 0
}, false, "scala.$less$colon$less$", {
  s_$less$colon$less$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$.prototype.$classData = $d_s_$less$colon$less$;
let $n_s_$less$colon$less$ = (void 0);
function $m_s_$less$colon$less$() {
  if ((!$n_s_$less$colon$less$)) {
    $n_s_$less$colon$less$ = new $c_s_$less$colon$less$()
  };
  return $n_s_$less$colon$less$
}
const $p_s_Array$__slowcopy__O__I__O__I__I__V = (function($thiz, src, srcPos, dest, destPos, length) {
  let i = srcPos;
  let j = destPos;
  const srcUntil = ((srcPos + length) | 0);
  while ((i < srcUntil)) {
    $m_sr_ScalaRunTime$().array_update__O__I__O__V(dest, j, $m_sr_ScalaRunTime$().array_apply__O__I__O(src, i));
    i = ((1 + i) | 0);
    j = ((1 + j) | 0)
  }
});
class $c_s_Array$ extends $c_O {
  copy__O__I__O__I__I__V(src, srcPos, dest, destPos, length) {
    const srcClass = $objectGetClass(src);
    if ((srcClass.isArray__Z() && $objectGetClass(dest).isAssignableFrom__jl_Class__Z(srcClass))) {
      $systemArraycopy(src, srcPos, dest, destPos, length)
    } else {
      $p_s_Array$__slowcopy__O__I__O__I__I__V(this, src, srcPos, dest, destPos, length)
    }
  };
}
const $d_s_Array$ = new $TypeData().initClass({
  s_Array$: 0
}, false, "scala.Array$", {
  s_Array$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Array$.prototype.$classData = $d_s_Array$;
let $n_s_Array$ = (void 0);
function $m_s_Array$() {
  if ((!$n_s_Array$)) {
    $n_s_Array$ = new $c_s_Array$()
  };
  return $n_s_Array$
}
class $c_s_Option$ extends $c_O {
  apply__O__s_Option(x) {
    return ((x === null) ? $m_s_None$() : new $c_s_Some(x))
  };
}
const $d_s_Option$ = new $TypeData().initClass({
  s_Option$: 0
}, false, "scala.Option$", {
  s_Option$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_Option$.prototype.$classData = $d_s_Option$;
let $n_s_Option$ = (void 0);
function $m_s_Option$() {
  if ((!$n_s_Option$)) {
    $n_s_Option$ = new $c_s_Option$()
  };
  return $n_s_Option$
}
function $is_sci_LazyList$State(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_LazyList$State)))
}
function $as_sci_LazyList$State(obj) {
  return (($is_sci_LazyList$State(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList$State"))
}
function $isArrayOf_sci_LazyList$State(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList$State)))
}
function $asArrayOf_sci_LazyList$State(obj, depth) {
  return (($isArrayOf_sci_LazyList$State(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList$State;", depth))
}
class $c_sci_List$$anon$1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
  apply__O__O(x) {
    return this
  };
}
const $d_sci_List$$anon$1 = new $TypeData().initClass({
  sci_List$$anon$1: 0
}, false, "scala.collection.immutable.List$$anon$1", {
  sci_List$$anon$1: 1,
  O: 1,
  F1: 1
});
$c_sci_List$$anon$1.prototype.$classData = $d_sci_List$$anon$1;
const $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable = (function($thiz, xs) {
  const it = xs.iterator__sc_Iterator();
  while (it.hasNext__Z()) {
    $thiz.addOne__O__scm_Growable(it.next__O())
  };
  return $thiz
});
class $c_sr_AbstractFunction0 extends $c_O {
  toString__T() {
    return "<function0>"
  };
}
class $c_sr_AbstractFunction1 extends $c_O {
  toString__T() {
    return "<function1>"
  };
}
class $c_sr_IntRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_IntRef__f_elem = 0;
    this.sr_IntRef__f_elem = elem
  };
  toString__T() {
    const i = this.sr_IntRef__f_elem;
    return ("" + i)
  };
}
const $d_sr_IntRef = new $TypeData().initClass({
  sr_IntRef: 0
}, false, "scala.runtime.IntRef", {
  sr_IntRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_IntRef.prototype.$classData = $d_sr_IntRef;
class $c_sr_ObjectRef extends $c_O {
  constructor(elem) {
    super();
    this.sr_ObjectRef__f_elem = null;
    this.sr_ObjectRef__f_elem = elem
  };
  toString__T() {
    const obj = this.sr_ObjectRef__f_elem;
    return ("" + obj)
  };
}
const $d_sr_ObjectRef = new $TypeData().initClass({
  sr_ObjectRef: 0
}, false, "scala.runtime.ObjectRef", {
  sr_ObjectRef: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_sr_ObjectRef.prototype.$classData = $d_sr_ObjectRef;
class $c_s_util_hashing_MurmurHash3$ extends $c_s_util_hashing_MurmurHash3 {
  constructor() {
    super();
    this.s_util_hashing_MurmurHash3$__f_seqSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_mapSeed = 0;
    this.s_util_hashing_MurmurHash3$__f_setSeed = 0;
    $n_s_util_hashing_MurmurHash3$ = this;
    this.s_util_hashing_MurmurHash3$__f_seqSeed = $f_T__hashCode__I("Seq");
    this.s_util_hashing_MurmurHash3$__f_mapSeed = $f_T__hashCode__I("Map");
    this.s_util_hashing_MurmurHash3$__f_setSeed = $f_T__hashCode__I("Set")
  };
  seqHash__sc_Seq__I(xs) {
    if ($is_sc_IndexedSeq(xs)) {
      const x2 = $as_sc_IndexedSeq(xs);
      return this.indexedSeqHash__sc_IndexedSeq__I__I(x2, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else if ((xs instanceof $c_sci_List)) {
      const x3 = $as_sci_List(xs);
      return this.listHash__sci_List__I__I(x3, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    } else {
      return this.orderedHash__sc_IterableOnce__I__I(xs, this.s_util_hashing_MurmurHash3$__f_seqSeed)
    }
  };
}
const $d_s_util_hashing_MurmurHash3$ = new $TypeData().initClass({
  s_util_hashing_MurmurHash3$: 0
}, false, "scala.util.hashing.MurmurHash3$", {
  s_util_hashing_MurmurHash3$: 1,
  s_util_hashing_MurmurHash3: 1,
  O: 1
});
$c_s_util_hashing_MurmurHash3$.prototype.$classData = $d_s_util_hashing_MurmurHash3$;
let $n_s_util_hashing_MurmurHash3$ = (void 0);
function $m_s_util_hashing_MurmurHash3$() {
  if ((!$n_s_util_hashing_MurmurHash3$)) {
    $n_s_util_hashing_MurmurHash3$ = new $c_s_util_hashing_MurmurHash3$()
  };
  return $n_s_util_hashing_MurmurHash3$
}
const $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__ = (function($thiz, pattern, groupNames) {
  $thiz.s_util_matching_Regex__f_pattern = pattern;
  $thiz.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = groupNames;
  return $thiz
});
const $ct_s_util_matching_Regex__T__sci_Seq__ = (function($thiz, regex, groupNames) {
  const this$1 = $m_ju_regex_Pattern$();
  $ct_s_util_matching_Regex__ju_regex_Pattern__sci_Seq__($thiz, this$1.compile__T__I__ju_regex_Pattern(regex, 0), groupNames);
  return $thiz
});
class $c_s_util_matching_Regex extends $c_O {
  constructor() {
    super();
    this.s_util_matching_Regex__f_pattern = null;
    this.s_util_matching_Regex__f_scala$util$matching$Regex$$groupNames = null
  };
  unapplySeq__jl_CharSequence__s_Option(s) {
    const this$1 = this.s_util_matching_Regex__f_pattern;
    const m = new $c_ju_regex_Matcher(this$1, s, 0, $dp_length__I(s));
    if (m.matches__Z()) {
      $m_sci_List$();
      const n = $m_ju_regex_Matcher$().java$util$regex$Matcher$$getGroupCount__sjs_js_RegExp$ExecResult__ju_regex_Pattern__I(m.ju_regex_Matcher__f_lastMatch, m.ju_regex_Matcher__f_pattern0);
      const b = new $c_scm_ListBuffer();
      let i = 0;
      while ((i < n)) {
        const arg1 = i;
        const elem = m.group__I__T(((1 + arg1) | 0));
        b.addOne__O__scm_ListBuffer(elem);
        i = ((1 + i) | 0)
      };
      return new $c_s_Some(b.toList__sci_List())
    } else {
      return $m_s_None$()
    }
  };
  toString__T() {
    return this.s_util_matching_Regex__f_pattern.ju_regex_Pattern__f__pattern
  };
}
const $d_s_util_matching_Regex = new $TypeData().initClass({
  s_util_matching_Regex: 0
}, false, "scala.util.matching.Regex", {
  s_util_matching_Regex: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_util_matching_Regex.prototype.$classData = $d_s_util_matching_Regex;
class $c_Lscalatags_JsDom$GenericAttr extends $c_O {
  apply__Lorg_scalajs_dom_raw_Element__Lscalatags_generic_Attr__O__V(t, a, v) {
    const x1 = a.Lscalatags_generic_Attr__f_namespace;
    const x = $m_s_None$();
    if ((x === x1)) {
      if ((!a.Lscalatags_generic_Attr__f_raw)) {
        t.setAttribute(a.Lscalatags_generic_Attr__f_name, $dp_toString__T(v))
      } else {
        const tmpElm = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createElement("p");
        tmpElm.innerHTML = (((("<p " + a.Lscalatags_generic_Attr__f_name) + "=\"") + $dp_toString__T(v)) + "\"><p>");
        const newAttr = tmpElm.children[0].attributes[0].cloneNode(true);
        t.setAttributeNode(newAttr)
      }
    } else if ((x1 instanceof $c_s_Some)) {
      const x2 = $as_s_Some(x1);
      const namespace = $as_Lscalatags_generic_Namespace(x2.s_Some__f_value);
      t.setAttributeNS(namespace.uri__T(), a.Lscalatags_generic_Attr__f_name, $dp_toString__T(v))
    } else {
      throw new $c_s_MatchError(x1)
    }
  };
}
const $d_Lscalatags_JsDom$GenericAttr = new $TypeData().initClass({
  Lscalatags_JsDom$GenericAttr: 0
}, false, "scalatags.JsDom$GenericAttr", {
  Lscalatags_JsDom$GenericAttr: 1,
  O: 1,
  Lscalatags_generic_AttrValue: 1
});
$c_Lscalatags_JsDom$GenericAttr.prototype.$classData = $d_Lscalatags_JsDom$GenericAttr;
class $c_Lscalatags_JsDom$GenericPixelStyle extends $c_O {
  constructor(ev) {
    super();
    this.Lscalatags_JsDom$GenericPixelStyle__f_ev = null;
    this.Lscalatags_JsDom$GenericPixelStyle__f_ev = ev
  };
}
const $d_Lscalatags_JsDom$GenericPixelStyle = new $TypeData().initClass({
  Lscalatags_JsDom$GenericPixelStyle: 0
}, false, "scalatags.JsDom$GenericPixelStyle", {
  Lscalatags_JsDom$GenericPixelStyle: 1,
  O: 1,
  Lscalatags_generic_PixelStyleValue: 1
});
$c_Lscalatags_JsDom$GenericPixelStyle.prototype.$classData = $d_Lscalatags_JsDom$GenericPixelStyle;
class $c_Lscalatags_JsDom$GenericPixelStylePx extends $c_O {
  constructor(ev) {
    super();
    this.Lscalatags_JsDom$GenericPixelStylePx__f_ev = null;
    this.Lscalatags_JsDom$GenericPixelStylePx__f_ev = ev
  };
}
const $d_Lscalatags_JsDom$GenericPixelStylePx = new $TypeData().initClass({
  Lscalatags_JsDom$GenericPixelStylePx: 0
}, false, "scalatags.JsDom$GenericPixelStylePx", {
  Lscalatags_JsDom$GenericPixelStylePx: 1,
  O: 1,
  Lscalatags_generic_PixelStyleValue: 1
});
$c_Lscalatags_JsDom$GenericPixelStylePx.prototype.$classData = $d_Lscalatags_JsDom$GenericPixelStylePx;
class $c_Lscalatags_JsDom$GenericStyle extends $c_O {
}
const $d_Lscalatags_JsDom$GenericStyle = new $TypeData().initClass({
  Lscalatags_JsDom$GenericStyle: 0
}, false, "scalatags.JsDom$GenericStyle", {
  Lscalatags_JsDom$GenericStyle: 1,
  O: 1,
  Lscalatags_generic_StyleValue: 1
});
$c_Lscalatags_JsDom$GenericStyle.prototype.$classData = $d_Lscalatags_JsDom$GenericStyle;
class $c_Lscalatags_JsDom$TypedTag$ extends $c_O {
  toString__T() {
    return "TypedTag"
  };
}
const $d_Lscalatags_JsDom$TypedTag$ = new $TypeData().initClass({
  Lscalatags_JsDom$TypedTag$: 0
}, false, "scalatags.JsDom$TypedTag$", {
  Lscalatags_JsDom$TypedTag$: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$TypedTag$.prototype.$classData = $d_Lscalatags_JsDom$TypedTag$;
let $n_Lscalatags_JsDom$TypedTag$ = (void 0);
function $m_Lscalatags_JsDom$TypedTag$() {
  if ((!$n_Lscalatags_JsDom$TypedTag$)) {
    $n_Lscalatags_JsDom$TypedTag$ = new $c_Lscalatags_JsDom$TypedTag$()
  };
  return $n_Lscalatags_JsDom$TypedTag$
}
class $c_Lscalatags_LowPriorityImplicits$$anon$2 extends $c_O {
  constructor(outer, ev$1) {
    super();
    this.Lscalatags_LowPriorityImplicits$$anon$2__f_ev$1 = null;
    this.Lscalatags_LowPriorityImplicits$$anon$2__f_ev$1 = ev$1
  };
  apply__Lorg_scalajs_dom_raw_Element__Lscalatags_generic_Attr__O__V(t, a, v) {
    t[a.Lscalatags_generic_Attr__f_name] = this.Lscalatags_LowPriorityImplicits$$anon$2__f_ev$1.apply__O__O(v)
  };
}
const $d_Lscalatags_LowPriorityImplicits$$anon$2 = new $TypeData().initClass({
  Lscalatags_LowPriorityImplicits$$anon$2: 0
}, false, "scalatags.LowPriorityImplicits$$anon$2", {
  Lscalatags_LowPriorityImplicits$$anon$2: 1,
  O: 1,
  Lscalatags_generic_AttrValue: 1
});
$c_Lscalatags_LowPriorityImplicits$$anon$2.prototype.$classData = $d_Lscalatags_LowPriorityImplicits$$anon$2;
const $f_Lscalatags_generic_Aggregate__$init$__V = (function($thiz) {
  $thiz.Lscalatags_JsDom$all$__f_stringAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_booleanAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_byteAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_shortAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_intAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_longAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_floatAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_doubleAttr = new $c_Lscalatags_JsDom$GenericAttr();
  $thiz.Lscalatags_JsDom$all$__f_stringStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_booleanStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_byteStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_shortStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_intStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_longStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_floatStyle = new $c_Lscalatags_JsDom$GenericStyle();
  $thiz.Lscalatags_JsDom$all$__f_doubleStyle = new $c_Lscalatags_JsDom$GenericStyle();
  const ev = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_stringPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStyle(ev);
  const ev$1 = $thiz.Lscalatags_JsDom$all$__f_booleanStyle;
  $thiz.Lscalatags_JsDom$all$__f_booleanPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStyle(ev$1);
  const ev$2 = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_bytePixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$2);
  const ev$3 = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_shortPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$3);
  const ev$4 = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_intPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$4);
  const ev$5 = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_longPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$5);
  const ev$6 = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_floatPixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$6);
  const ev$7 = $thiz.Lscalatags_JsDom$all$__f_stringStyle;
  $thiz.Lscalatags_JsDom$all$__f_doublePixelStyle = new $c_Lscalatags_JsDom$GenericPixelStylePx(ev$7)
});
class $c_Lscalatags_generic_Namespace$$anon$1 extends $c_O {
  uri__T() {
    return "http://www.w3.org/1999/xhtml"
  };
}
const $d_Lscalatags_generic_Namespace$$anon$1 = new $TypeData().initClass({
  Lscalatags_generic_Namespace$$anon$1: 0
}, false, "scalatags.generic.Namespace$$anon$1", {
  Lscalatags_generic_Namespace$$anon$1: 1,
  O: 1,
  Lscalatags_generic_Namespace: 1
});
$c_Lscalatags_generic_Namespace$$anon$1.prototype.$classData = $d_Lscalatags_generic_Namespace$$anon$1;
class $c_Lscalatags_generic_Namespace$$anon$2 extends $c_O {
  uri__T() {
    return "http://www.w3.org/2000/svg"
  };
}
const $d_Lscalatags_generic_Namespace$$anon$2 = new $TypeData().initClass({
  Lscalatags_generic_Namespace$$anon$2: 0
}, false, "scalatags.generic.Namespace$$anon$2", {
  Lscalatags_generic_Namespace$$anon$2: 1,
  O: 1,
  Lscalatags_generic_Namespace: 1
});
$c_Lscalatags_generic_Namespace$$anon$2.prototype.$classData = $d_Lscalatags_generic_Namespace$$anon$2;
class $c_Lscalatags_generic_Namespace$$anon$3 extends $c_O {
  uri__T() {
    return "http://www.w3.org/1999/xlink"
  };
}
const $d_Lscalatags_generic_Namespace$$anon$3 = new $TypeData().initClass({
  Lscalatags_generic_Namespace$$anon$3: 0
}, false, "scalatags.generic.Namespace$$anon$3", {
  Lscalatags_generic_Namespace$$anon$3: 1,
  O: 1,
  Lscalatags_generic_Namespace: 1
});
$c_Lscalatags_generic_Namespace$$anon$3.prototype.$classData = $d_Lscalatags_generic_Namespace$$anon$3;
const $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr = (function($thiz, s, ns, raw) {
  return new $c_Lscalatags_generic_Attr(s, $m_s_Option$().apply__O__s_Option(ns), raw)
});
const $f_jl_Boolean__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_jl_Boolean__hashCode__I = (function($thiz) {
  return ($uZ($thiz) ? 1231 : 1237)
});
const $f_jl_Boolean__toString__T = (function($thiz) {
  const b = $uZ($thiz);
  return ("" + b)
});
const $d_jl_Boolean = new $TypeData().initClass({
  jl_Boolean: 0
}, false, "java.lang.Boolean", {
  jl_Boolean: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "boolean")));
const $f_jl_Character__hashCode__I = (function($thiz) {
  return $uC($thiz)
});
const $f_jl_Character__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $Char)) {
    const $$x1 = $uC($thiz);
    const this$1 = $as_jl_Character(that);
    return ($$x1 === $uC(this$1))
  } else {
    return false
  }
});
const $f_jl_Character__toString__T = (function($thiz) {
  const c = $uC($thiz);
  return $as_T(String.fromCharCode(c))
});
function $as_jl_Character(obj) {
  return (((obj instanceof $Char) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Character"))
}
function $isArrayOf_jl_Character(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Character)))
}
function $asArrayOf_jl_Character(obj, depth) {
  return (($isArrayOf_jl_Character(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Character;", depth))
}
const $d_jl_Character = new $TypeData().initClass({
  jl_Character: 0
}, false, "java.lang.Character", {
  jl_Character: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $Char)));
class $c_jl_Error extends $c_jl_Throwable {
}
const $ct_jl_Exception__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_Exception extends $c_jl_Throwable {
}
const $d_jl_Exception = new $TypeData().initClass({
  jl_Exception: 0
}, false, "java.lang.Exception", {
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_Exception.prototype.$classData = $d_jl_Exception;
class $c_s_$less$colon$less extends $c_O {
}
const $f_s_Product2__productElement__I__O = (function($thiz, n) {
  switch (n) {
    case 0: {
      return $thiz.T2__f__1;
      break
    }
    case 1: {
      return $thiz.T2__f__2;
      break
    }
    default: {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (n + " is out of bounds (min 0, max 1)"))
    }
  }
});
const $f_sc_IterableOps__sizeCompare__I__I = (function($thiz, otherSize) {
  if ((otherSize < 0)) {
    return 1
  } else {
    const known = $thiz.knownSize__I();
    if ((known >= 0)) {
      return ((known === otherSize) ? 0 : ((known < otherSize) ? (-1) : 1))
    } else {
      let i = 0;
      const it = $thiz.iterator__sc_Iterator();
      while (it.hasNext__Z()) {
        if ((i === otherSize)) {
          return (it.hasNext__Z() ? 1 : 0)
        };
        it.next__O();
        i = ((1 + i) | 0)
      };
      return ((i - otherSize) | 0)
    }
  }
});
const $f_sc_IterableOps__drop__I__O = (function($thiz, n) {
  return $thiz.fromSpecific__sc_IterableOnce__O($ct_sc_View$Drop__sc_IterableOps__I__(new $c_sc_View$Drop(), $thiz, n))
});
const $f_sc_IterableOps__tail__O = (function($thiz) {
  if ($thiz.isEmpty__Z()) {
    throw $ct_jl_UnsupportedOperationException__(new $c_jl_UnsupportedOperationException())
  };
  return $thiz.drop__I__O(1)
});
function $is_sc_IterableOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IterableOps)))
}
function $as_sc_IterableOps(obj) {
  return (($is_sc_IterableOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IterableOps"))
}
function $isArrayOf_sc_IterableOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IterableOps)))
}
function $asArrayOf_sc_IterableOps(obj, depth) {
  return (($isArrayOf_sc_IterableOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IterableOps;", depth))
}
const $f_sc_Iterator__drop__I__sc_Iterator = (function($thiz, n) {
  let i = 0;
  while (((i < n) && $thiz.hasNext__Z())) {
    $thiz.next__O();
    i = ((1 + i) | 0)
  };
  return $thiz
});
const $f_sc_Iterator__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  const those = that.iterator__sc_Iterator();
  while (($thiz.hasNext__Z() && those.hasNext__Z())) {
    if ((!$m_sr_BoxesRunTime$().equals__O__O__Z($thiz.next__O(), those.next__O()))) {
      return false
    }
  };
  return ($thiz.hasNext__Z() === those.hasNext__Z())
});
function $is_sc_Iterator(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterator)))
}
function $as_sc_Iterator(obj) {
  return (($is_sc_Iterator(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterator"))
}
function $isArrayOf_sc_Iterator(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterator)))
}
function $asArrayOf_sc_Iterator(obj, depth) {
  return (($isArrayOf_sc_Iterator(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterator;", depth))
}
class $c_sc_Iterator$ extends $c_O {
  constructor() {
    super();
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = null;
    $n_sc_Iterator$ = this;
    this.sc_Iterator$__f_scala$collection$Iterator$$_empty = new $c_sc_Iterator$$anon$19()
  };
  from__sc_IterableOnce__O(source) {
    return source.iterator__sc_Iterator()
  };
}
const $d_sc_Iterator$ = new $TypeData().initClass({
  sc_Iterator$: 0
}, false, "scala.collection.Iterator$", {
  sc_Iterator$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_Iterator$.prototype.$classData = $d_sc_Iterator$;
let $n_sc_Iterator$ = (void 0);
function $m_sc_Iterator$() {
  if ((!$n_sc_Iterator$)) {
    $n_sc_Iterator$ = new $c_sc_Iterator$()
  };
  return $n_sc_Iterator$
}
class $c_sc_View$ extends $c_O {
  from__sc_IterableOnce__sc_View(it) {
    if ($is_sc_View(it)) {
      const x2 = $as_sc_View(it);
      return x2
    } else if ($is_sc_Iterable(it)) {
      const x3 = $as_sc_Iterable(it);
      const it$1 = new $c_sjsr_AnonFunction0(((this$1, x3$1) => (() => x3$1.iterator__sc_Iterator()))(this, x3));
      return new $c_sc_View$$anon$1(it$1)
    } else {
      const this$3 = $m_sci_LazyList$().from__sc_IterableOnce__sci_LazyList(it);
      return $ct_sc_SeqView$Id__sc_SeqOps__(new $c_sc_SeqView$Id(), this$3)
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sc_View(source)
  };
}
const $d_sc_View$ = new $TypeData().initClass({
  sc_View$: 0
}, false, "scala.collection.View$", {
  sc_View$: 1,
  O: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$.prototype.$classData = $d_sc_View$;
let $n_sc_View$ = (void 0);
function $m_sc_View$() {
  if ((!$n_sc_View$)) {
    $n_sc_View$ = new $c_sc_View$()
  };
  return $n_sc_View$
}
class $c_sci_LazyList$State$Cons extends $c_O {
  constructor(head, tail) {
    super();
    this.sci_LazyList$State$Cons__f_head = null;
    this.sci_LazyList$State$Cons__f_tail = null;
    this.sci_LazyList$State$Cons__f_head = head;
    this.sci_LazyList$State$Cons__f_tail = tail
  };
  head__O() {
    return this.sci_LazyList$State$Cons__f_head
  };
  tail__sci_LazyList() {
    return this.sci_LazyList$State$Cons__f_tail
  };
}
const $d_sci_LazyList$State$Cons = new $TypeData().initClass({
  sci_LazyList$State$Cons: 0
}, false, "scala.collection.immutable.LazyList$State$Cons", {
  sci_LazyList$State$Cons: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Cons.prototype.$classData = $d_sci_LazyList$State$Cons;
class $c_sci_LazyList$State$Empty$ extends $c_O {
  head__E() {
    throw new $c_ju_NoSuchElementException("head of empty lazy list")
  };
  tail__sci_LazyList() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty lazy list")
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_LazyList$State$Empty$ = new $TypeData().initClass({
  sci_LazyList$State$Empty$: 0
}, false, "scala.collection.immutable.LazyList$State$Empty$", {
  sci_LazyList$State$Empty$: 1,
  O: 1,
  sci_LazyList$State: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$State$Empty$.prototype.$classData = $d_sci_LazyList$State$Empty$;
let $n_sci_LazyList$State$Empty$ = (void 0);
function $m_sci_LazyList$State$Empty$() {
  if ((!$n_sci_LazyList$State$Empty$)) {
    $n_sci_LazyList$State$Empty$ = new $c_sci_LazyList$State$Empty$()
  };
  return $n_sci_LazyList$State$Empty$
}
function $is_scm_Builder(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.scm_Builder)))
}
function $as_scm_Builder(obj) {
  return (($is_scm_Builder(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.Builder"))
}
function $isArrayOf_scm_Builder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_Builder)))
}
function $asArrayOf_scm_Builder(obj, depth) {
  return (($isArrayOf_scm_Builder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.Builder;", depth))
}
class $c_s_math_ScalaNumber {
}
function $as_s_math_ScalaNumber(obj) {
  return (((obj instanceof $c_s_math_ScalaNumber) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.math.ScalaNumber"))
}
function $isArrayOf_s_math_ScalaNumber(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_math_ScalaNumber)))
}
function $asArrayOf_s_math_ScalaNumber(obj, depth) {
  return (($isArrayOf_s_math_ScalaNumber(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.math.ScalaNumber;", depth))
}
class $c_sjs_js_Any$ extends $c_O {
  fromFunction0__F0__sjs_js_Function0(f) {
    return ((f$1) => (() => f$1.apply__O()))(f)
  };
}
const $d_sjs_js_Any$ = new $TypeData().initClass({
  sjs_js_Any$: 0
}, false, "scala.scalajs.js.Any$", {
  sjs_js_Any$: 1,
  O: 1,
  sjs_js_LowPrioAnyImplicits: 1,
  sjs_js_LowestPrioAnyImplicits: 1
});
$c_sjs_js_Any$.prototype.$classData = $d_sjs_js_Any$;
let $n_sjs_js_Any$ = (void 0);
function $m_sjs_js_Any$() {
  if ((!$n_sjs_js_Any$)) {
    $n_sjs_js_Any$ = new $c_sjs_js_Any$()
  };
  return $n_sjs_js_Any$
}
class $c_sjsr_AnonFunction0 extends $c_sr_AbstractFunction0 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction0__f_f = null;
    this.sjsr_AnonFunction0__f_f = f
  };
  apply__O() {
    return (0, this.sjsr_AnonFunction0__f_f)()
  };
}
const $d_sjsr_AnonFunction0 = new $TypeData().initClass({
  sjsr_AnonFunction0: 0
}, false, "scala.scalajs.runtime.AnonFunction0", {
  sjsr_AnonFunction0: 1,
  sr_AbstractFunction0: 1,
  O: 1,
  F0: 1
});
$c_sjsr_AnonFunction0.prototype.$classData = $d_sjsr_AnonFunction0;
class $c_sjsr_AnonFunction1 extends $c_sr_AbstractFunction1 {
  constructor(f) {
    super();
    this.sjsr_AnonFunction1__f_f = null;
    this.sjsr_AnonFunction1__f_f = f
  };
  apply__O__O(arg1) {
    return (0, this.sjsr_AnonFunction1__f_f)(arg1)
  };
}
const $d_sjsr_AnonFunction1 = new $TypeData().initClass({
  sjsr_AnonFunction1: 0
}, false, "scala.scalajs.runtime.AnonFunction1", {
  sjsr_AnonFunction1: 1,
  sr_AbstractFunction1: 1,
  O: 1,
  F1: 1
});
$c_sjsr_AnonFunction1.prototype.$classData = $d_sjsr_AnonFunction1;
const $f_Lscalatags_JsDom$Aggregate__$init$__V = (function($thiz) {
  $thiz.Lscalatags_JsDom$all$__f_RawFrag = $m_Lscalatags_JsDom$RawFrag$();
  $thiz.Lscalatags_JsDom$all$__f_StringFrag = $m_Lscalatags_JsDom$StringFrag$();
  $thiz.Lscalatags_JsDom$all$__f_HtmlTag = $m_Lscalatags_JsDom$TypedTag$();
  $thiz.Lscalatags_JsDom$all$__f_SvgTag = $m_Lscalatags_JsDom$TypedTag$();
  $thiz.Lscalatags_JsDom$all$__f_Tag = $m_Lscalatags_JsDom$TypedTag$()
});
const $f_Lscalatags_generic_MouseEventAttrs__$init$__V = (function($thiz) {
  $thiz.Lscalatags_JsDom$all$__f_ondrag = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "ondrag", null, false)
});
const $f_Lscalatags_generic_TypedTag__build__O__V = (function($thiz, b) {
  let current = $thiz.Lscalatags_JsDom$TypedTag__f_modifiers;
  const arr = $newArrayObject($d_sci_Seq.getArrayOf(), [$thiz.Lscalatags_JsDom$TypedTag__f_modifiers.length__I()]);
  let i = 0;
  while (true) {
    const x = current;
    const x$2 = $m_sci_Nil$();
    if ((!((x !== null) && x.equals__O__Z(x$2)))) {
      arr.set(i, $as_sci_Seq(current.head__O()));
      current = $as_sci_List(current.tail__O());
      i = ((1 + i) | 0)
    } else {
      break
    }
  };
  let j = arr.u.length;
  while ((j > 0)) {
    j = (((-1) + j) | 0);
    const frag = arr.get(j);
    let i$2 = 0;
    while ((i$2 < frag.length__I())) {
      $as_Lscalatags_generic_Modifier(frag.apply__I__O(i$2)).applyTo__O__V(b);
      i$2 = ((1 + i$2) | 0)
    }
  }
});
const $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_raw_Element__V = (function($thiz, b) {
  b.appendChild($thiz.render__Lorg_scalajs_dom_raw_Node())
});
const $f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag = (function($thiz, s, void$1, ns) {
  if ((!$m_Lscalatags_Escaping$().validTag__T__Z(s))) {
    throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("Illegal tag name: " + s) + " is not a valid XML tag name"))
  };
  return new $c_Lscalatags_JsDom$TypedTag(s, $m_sci_Nil$(), void$1, ns)
});
const $f_jl_Byte__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Byte__hashCode__I = (function($thiz) {
  return $uB($thiz)
});
const $f_jl_Byte__toString__T = (function($thiz) {
  const b = $uB($thiz);
  return ("" + b)
});
const $d_jl_Byte = new $TypeData().initClass({
  jl_Byte: 0
}, false, "java.lang.Byte", {
  jl_Byte: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isByte(x)));
const $ct_jl_CloneNotSupportedException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_CloneNotSupportedException extends $c_jl_Exception {
}
const $d_jl_CloneNotSupportedException = new $TypeData().initClass({
  jl_CloneNotSupportedException: 0
}, false, "java.lang.CloneNotSupportedException", {
  jl_CloneNotSupportedException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_CloneNotSupportedException.prototype.$classData = $d_jl_CloneNotSupportedException;
const $f_jl_Double__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Double__hashCode__I = (function($thiz) {
  const value = $uD($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Double__toString__T = (function($thiz) {
  const d = $uD($thiz);
  return ("" + d)
});
function $as_jl_Double(obj) {
  return ((((typeof obj) === "number") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Double"))
}
function $isArrayOf_jl_Double(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Double)))
}
function $asArrayOf_jl_Double(obj, depth) {
  return (($isArrayOf_jl_Double(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Double;", depth))
}
const $d_jl_Double = new $TypeData().initClass({
  jl_Double: 0
}, false, "java.lang.Double", {
  jl_Double: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Float__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Float__hashCode__I = (function($thiz) {
  const value = $uF($thiz);
  return $m_jl_FloatingPointBits$().numberHashCode__D__I(value)
});
const $f_jl_Float__toString__T = (function($thiz) {
  const f = $uF($thiz);
  return ("" + f)
});
const $d_jl_Float = new $TypeData().initClass({
  jl_Float: 0
}, false, "java.lang.Float", {
  jl_Float: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "number")));
const $f_jl_Integer__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Integer__hashCode__I = (function($thiz) {
  return $uI($thiz)
});
const $f_jl_Integer__toString__T = (function($thiz) {
  const i = $uI($thiz);
  return ("" + i)
});
const $d_jl_Integer = new $TypeData().initClass({
  jl_Integer: 0
}, false, "java.lang.Integer", {
  jl_Integer: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isInt(x)));
const $f_jl_Long__equals__O__Z = (function($thiz, that) {
  if ((that instanceof $c_RTLong)) {
    const x2 = $as_jl_Long(that);
    const t = $uJ($thiz);
    const lo = t.RTLong__f_lo;
    const hi = t.RTLong__f_hi;
    const b = $uJ(x2);
    return ((lo === b.RTLong__f_lo) && (hi === b.RTLong__f_hi))
  } else {
    return false
  }
});
const $f_jl_Long__hashCode__I = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return (lo ^ hi)
});
const $f_jl_Long__toString__T = (function($thiz) {
  const t = $uJ($thiz);
  const lo = t.RTLong__f_lo;
  const hi = t.RTLong__f_hi;
  return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(lo, hi)
});
function $as_jl_Long(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.Long"))
}
function $isArrayOf_jl_Long(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_Long)))
}
function $asArrayOf_jl_Long(obj, depth) {
  return (($isArrayOf_jl_Long(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.Long;", depth))
}
const $d_jl_Long = new $TypeData().initClass({
  jl_Long: 0
}, false, "java.lang.Long", {
  jl_Long: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => (x instanceof $c_RTLong)));
class $c_jl_RuntimeException extends $c_jl_Exception {
}
const $f_jl_Short__equals__O__Z = (function($thiz, that) {
  return Object.is($thiz, that)
});
const $f_jl_Short__hashCode__I = (function($thiz) {
  return $uS($thiz)
});
const $f_jl_Short__toString__T = (function($thiz) {
  const s = $uS($thiz);
  return ("" + s)
});
const $d_jl_Short = new $TypeData().initClass({
  jl_Short: 0
}, false, "java.lang.Short", {
  jl_Short: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
}, (void 0), (void 0), ((x) => $isShort(x)));
const $f_T__hashCode__I = (function($thiz) {
  let res = 0;
  let mul = 1;
  let i = (((-1) + $uI($thiz.length)) | 0);
  while ((i >= 0)) {
    const $$x1 = res;
    const index = i;
    res = (($$x1 + $imul((65535 & $uI($thiz.charCodeAt(index))), mul)) | 0);
    mul = $imul(31, mul);
    i = (((-1) + i) | 0)
  };
  return res
});
const $f_T__equals__O__Z = (function($thiz, that) {
  return ($thiz === that)
});
const $f_T__length__I = (function($thiz) {
  return $uI($thiz.length)
});
const $f_T__subSequence__I__I__jl_CharSequence = (function($thiz, beginIndex, endIndex) {
  return $as_T($thiz.substring(beginIndex, endIndex))
});
const $f_T__toString__T = (function($thiz) {
  return $thiz
});
function $as_T(obj) {
  return ((((typeof obj) === "string") || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.String"))
}
function $isArrayOf_T(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T)))
}
function $asArrayOf_T(obj, depth) {
  return (($isArrayOf_T(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.String;", depth))
}
const $d_T = new $TypeData().initClass({
  T: 0
}, false, "java.lang.String", {
  T: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1,
  jl_CharSequence: 1
}, (void 0), (void 0), ((x) => ((typeof x) === "string")));
const $ct_jl_StringBuilder__ = (function($thiz) {
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = "";
  return $thiz
});
const $ct_jl_StringBuilder__T__ = (function($thiz, str) {
  $ct_jl_StringBuilder__($thiz);
  if ((str === null)) {
    throw new $c_jl_NullPointerException()
  };
  $thiz.jl_StringBuilder__f_java$lang$StringBuilder$$content = str;
  return $thiz
});
class $c_jl_StringBuilder extends $c_O {
  constructor() {
    super();
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = null
  };
  append__AC__jl_StringBuilder(str) {
    const this$1 = $m_jl_String$();
    const count = str.u.length;
    const str$1 = this$1.new__AC__I__I__T(str, 0, count);
    this.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1);
    return this
  };
  toString__T() {
    return this.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  length__I() {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return $uI(this$1.length)
  };
  charAt__I__C(index) {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return (65535 & $uI(this$1.charCodeAt(index)))
  };
  subSequence__I__I__jl_CharSequence(start, end) {
    return this.substring__I__I__T(start, end)
  };
  substring__I__I__T(start, end) {
    const this$1 = this.jl_StringBuilder__f_java$lang$StringBuilder$$content;
    return $as_T(this$1.substring(start, end))
  };
}
const $d_jl_StringBuilder = new $TypeData().initClass({
  jl_StringBuilder: 0
}, false, "java.lang.StringBuilder", {
  jl_StringBuilder: 1,
  O: 1,
  jl_CharSequence: 1,
  jl_Appendable: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringBuilder.prototype.$classData = $d_jl_StringBuilder;
class $c_jl_VirtualMachineError extends $c_jl_Error {
}
class $c_RTLong extends $c_jl_Number {
  constructor(lo, hi) {
    super();
    this.RTLong__f_lo = 0;
    this.RTLong__f_hi = 0;
    this.RTLong__f_lo = lo;
    this.RTLong__f_hi = hi
  };
  equals__O__Z(that) {
    if ((that instanceof $c_RTLong)) {
      const x2 = $as_RTLong(that);
      return ((this.RTLong__f_lo === x2.RTLong__f_lo) && (this.RTLong__f_hi === x2.RTLong__f_hi))
    } else {
      return false
    }
  };
  hashCode__I() {
    return (this.RTLong__f_lo ^ this.RTLong__f_hi)
  };
  toString__T() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toString__I__I__T(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  toInt__I() {
    return this.RTLong__f_lo
  };
  toDouble__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  byteValue__B() {
    return ((this.RTLong__f_lo << 24) >> 24)
  };
  shortValue__S() {
    return ((this.RTLong__f_lo << 16) >> 16)
  };
  intValue__I() {
    return this.RTLong__f_lo
  };
  longValue__J() {
    return $uJ(this)
  };
  floatValue__F() {
    return $fround($m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi))
  };
  doubleValue__D() {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$toDouble__I__I__D(this.RTLong__f_lo, this.RTLong__f_hi)
  };
  compareTo__jl_Long__I(that) {
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
  equals__RTLong__Z(b) {
    return ((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi))
  };
  notEquals__RTLong__Z(b) {
    return (!((this.RTLong__f_lo === b.RTLong__f_lo) && (this.RTLong__f_hi === b.RTLong__f_hi)))
  };
  $less__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) < ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $less$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) <= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi < bhi))
  };
  $greater__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) > ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  $greater$eq__RTLong__Z(b) {
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    return ((ahi === bhi) ? (((-2147483648) ^ this.RTLong__f_lo) >= ((-2147483648) ^ b.RTLong__f_lo)) : (ahi > bhi))
  };
  unary_$tilde__RTLong() {
    return new $c_RTLong((~this.RTLong__f_lo), (~this.RTLong__f_hi))
  };
  $bar__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo | b.RTLong__f_lo), (this.RTLong__f_hi | b.RTLong__f_hi))
  };
  $amp__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo & b.RTLong__f_lo), (this.RTLong__f_hi & b.RTLong__f_hi))
  };
  $up__RTLong__RTLong(b) {
    return new $c_RTLong((this.RTLong__f_lo ^ b.RTLong__f_lo), (this.RTLong__f_hi ^ b.RTLong__f_hi))
  };
  $less$less__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (this.RTLong__f_lo << n) : 0), (((32 & n) === 0) ? (((((this.RTLong__f_lo >>> 1) | 0) >>> ((31 - n) | 0)) | 0) | (this.RTLong__f_hi << n)) : (this.RTLong__f_lo << n)))
  };
  $greater$greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : ((this.RTLong__f_hi >>> n) | 0)), (((32 & n) === 0) ? ((this.RTLong__f_hi >>> n) | 0) : 0))
  };
  $greater$greater__I__RTLong(n) {
    return new $c_RTLong((((32 & n) === 0) ? (((this.RTLong__f_lo >>> n) | 0) | ((this.RTLong__f_hi << 1) << ((31 - n) | 0))) : (this.RTLong__f_hi >> n)), (((32 & n) === 0) ? (this.RTLong__f_hi >> n) : (this.RTLong__f_hi >> 31)))
  };
  unary_$minus__RTLong() {
    const lo = this.RTLong__f_lo;
    const hi = this.RTLong__f_hi;
    return new $c_RTLong(((-lo) | 0), ((lo !== 0) ? (~hi) : ((-hi) | 0)))
  };
  $plus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo + b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) < ((-2147483648) ^ alo)) ? ((1 + ((ahi + bhi) | 0)) | 0) : ((ahi + bhi) | 0)))
  };
  $minus__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const ahi = this.RTLong__f_hi;
    const bhi = b.RTLong__f_hi;
    const lo = ((alo - b.RTLong__f_lo) | 0);
    return new $c_RTLong(lo, ((((-2147483648) ^ lo) > ((-2147483648) ^ alo)) ? (((-1) + ((ahi - bhi) | 0)) | 0) : ((ahi - bhi) | 0)))
  };
  $times__RTLong__RTLong(b) {
    const alo = this.RTLong__f_lo;
    const blo = b.RTLong__f_lo;
    const a0 = (65535 & alo);
    const a1 = ((alo >>> 16) | 0);
    const b0 = (65535 & blo);
    const b1 = ((blo >>> 16) | 0);
    const a0b0 = $imul(a0, b0);
    const a1b0 = $imul(a1, b0);
    const a0b1 = $imul(a0, b1);
    const lo = ((a0b0 + (((a1b0 + a0b1) | 0) << 16)) | 0);
    const c1part = ((((a0b0 >>> 16) | 0) + a0b1) | 0);
    const hi = (((((((($imul(alo, b.RTLong__f_hi) + $imul(this.RTLong__f_hi, blo)) | 0) + $imul(a1, b1)) | 0) + ((c1part >>> 16) | 0)) | 0) + (((((65535 & c1part) + a1b0) | 0) >>> 16) | 0)) | 0);
    return new $c_RTLong(lo, hi)
  };
  $div__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.divideImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  $percent__RTLong__RTLong(b) {
    const this$1 = $m_RTLong$();
    const lo = this$1.remainderImpl__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, b.RTLong__f_lo, b.RTLong__f_hi);
    return new $c_RTLong(lo, this$1.RTLong$__f_org$scalajs$linker$runtime$RuntimeLong$$hiReturn)
  };
  compareTo__O__I(x$1) {
    const that = $as_jl_Long(x$1);
    return $m_RTLong$().org$scalajs$linker$runtime$RuntimeLong$$compare__I__I__I__I__I(this.RTLong__f_lo, this.RTLong__f_hi, that.RTLong__f_lo, that.RTLong__f_hi)
  };
}
function $as_RTLong(obj) {
  return (((obj instanceof $c_RTLong) || (obj === null)) ? obj : $throwClassCastException(obj, "org.scalajs.linker.runtime.RuntimeLong"))
}
function $isArrayOf_RTLong(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.RTLong)))
}
function $asArrayOf_RTLong(obj, depth) {
  return (($isArrayOf_RTLong(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lorg.scalajs.linker.runtime.RuntimeLong;", depth))
}
const $d_RTLong = new $TypeData().initClass({
  RTLong: 0
}, false, "org.scalajs.linker.runtime.RuntimeLong", {
  RTLong: 1,
  jl_Number: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  jl_Comparable: 1
});
$c_RTLong.prototype.$classData = $d_RTLong;
class $c_s_$eq$colon$eq extends $c_s_$less$colon$less {
}
class $c_sc_AbstractIterator extends $c_O {
  iterator__sc_Iterator() {
    return this
  };
  isEmpty__Z() {
    return (!this.hasNext__Z())
  };
  drop__I__sc_Iterator(n) {
    return $f_sc_Iterator__drop__I__sc_Iterator(this, n)
  };
  toString__T() {
    return "<iterator>"
  };
  copyToArray__O__I__I__I(xs, start, len) {
    return $f_sc_IterableOnceOps__copyToArray__O__I__I__I(this, xs, start, len)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
}
const $ct_sc_SeqFactory$Delegate__sc_SeqFactory__ = (function($thiz, delegate) {
  $thiz.sc_SeqFactory$Delegate__f_delegate = delegate;
  return $thiz
});
class $c_sc_SeqFactory$Delegate extends $c_O {
  constructor() {
    super();
    this.sc_SeqFactory$Delegate__f_delegate = null
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return $as_sc_SeqOps(this.sc_SeqFactory$Delegate__f_delegate.from__sc_IterableOnce__O(it))
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sc_SeqOps(source)
  };
}
const $f_sc_SeqOps__isEmpty__Z = (function($thiz) {
  return ($thiz.lengthCompare__I__I(0) === 0)
});
const $f_sc_SeqOps__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  const thisKnownSize = $thiz.knownSize__I();
  let knownSizeDifference;
  if ((thisKnownSize !== (-1))) {
    const thatKnownSize = that.knownSize__I();
    knownSizeDifference = ((thatKnownSize !== (-1)) && (thisKnownSize !== thatKnownSize))
  } else {
    knownSizeDifference = false
  };
  if ((!knownSizeDifference)) {
    const this$1 = $thiz.iterator__sc_Iterator();
    return $f_sc_Iterator__sameElements__sc_IterableOnce__Z(this$1, that)
  } else {
    return false
  }
});
function $is_sc_SeqOps(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_SeqOps)))
}
function $as_sc_SeqOps(obj) {
  return (($is_sc_SeqOps(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.SeqOps"))
}
function $isArrayOf_sc_SeqOps(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_SeqOps)))
}
function $asArrayOf_sc_SeqOps(obj, depth) {
  return (($isArrayOf_sc_SeqOps(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.SeqOps;", depth))
}
class $c_sci_LazyList$ extends $c_O {
  constructor() {
    super();
    this.sci_LazyList$__f__empty = null;
    this.sci_LazyList$__f_scala$collection$immutable$LazyList$$anyToMarker = null;
    $n_sci_LazyList$ = this;
    const state = new $c_sjsr_AnonFunction0(((this$1) => (() => $m_sci_LazyList$State$Empty$()))(this));
    this.sci_LazyList$__f__empty = new $c_sci_LazyList(state).force__sci_LazyList();
    this.sci_LazyList$__f_scala$collection$immutable$LazyList$$anyToMarker = new $c_sjsr_AnonFunction1(((this$2) => ((x$10$2) => $m_sr_Statics$PFMarker$()))(this))
  };
  scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(ll, n) {
    const restRef = new $c_sr_ObjectRef(ll);
    const iRef = new $c_sr_IntRef(n);
    const state = new $c_sjsr_AnonFunction0(((this$3, restRef$1, iRef$1) => (() => {
      let rest = $as_sci_LazyList(restRef$1.sr_ObjectRef__f_elem);
      let i = iRef$1.sr_IntRef__f_elem;
      while (((i > 0) && (!rest.isEmpty__Z()))) {
        const this$4 = rest;
        rest = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        restRef$1.sr_ObjectRef__f_elem = rest;
        i = (((-1) + i) | 0);
        iRef$1.sr_IntRef__f_elem = i
      };
      return rest.scala$collection$immutable$LazyList$$state__sci_LazyList$State()
    }))(this, restRef, iRef));
    return new $c_sci_LazyList(state)
  };
  from__sc_IterableOnce__sci_LazyList(coll) {
    if ((coll instanceof $c_sci_LazyList)) {
      const x2 = $as_sci_LazyList(coll);
      return x2
    } else if ((coll.knownSize__I() === 0)) {
      return this.sci_LazyList$__f__empty
    } else {
      const state = new $c_sjsr_AnonFunction0(((this$1, coll$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(coll$1.iterator__sc_Iterator())))(this, coll));
      return new $c_sci_LazyList(state)
    }
  };
  scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it) {
    if (it.hasNext__Z()) {
      const hd = it.next__O();
      const state = new $c_sjsr_AnonFunction0(((this$1, it$1) => (() => $m_sci_LazyList$().scala$collection$immutable$LazyList$$stateFromIterator__sc_Iterator__sci_LazyList$State(it$1)))(this, it));
      const tl = new $c_sci_LazyList(state);
      return new $c_sci_LazyList$State$Cons(hd, tl)
    } else {
      return $m_sci_LazyList$State$Empty$()
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_LazyList(source)
  };
}
const $d_sci_LazyList$ = new $TypeData().initClass({
  sci_LazyList$: 0
}, false, "scala.collection.immutable.LazyList$", {
  sci_LazyList$: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList$.prototype.$classData = $d_sci_LazyList$;
let $n_sci_LazyList$ = (void 0);
function $m_sci_LazyList$() {
  if ((!$n_sci_LazyList$)) {
    $n_sci_LazyList$ = new $c_sci_LazyList$()
  };
  return $n_sci_LazyList$
}
class $c_sci_WrappedString$ extends $c_O {
  constructor() {
    super();
    this.sci_WrappedString$__f_empty = null;
    $n_sci_WrappedString$ = this;
    this.sci_WrappedString$__f_empty = new $c_sci_WrappedString("")
  };
  fromSpecific__sc_IterableOnce__sci_WrappedString(it) {
    const b = this.newBuilder__scm_Builder();
    const s = it.knownSize__I();
    if ((s >= 0)) {
      b.sizeHint__I__V(s)
    };
    b.addAll__sc_IterableOnce__scm_Growable(it);
    return $as_sci_WrappedString(b.result__O())
  };
  newBuilder__scm_Builder() {
    const this$2 = $ct_scm_StringBuilder__(new $c_scm_StringBuilder());
    const f = new $c_sjsr_AnonFunction1(((this$1) => ((x$2) => {
      const x = $as_T(x$2);
      return new $c_sci_WrappedString(x)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$2, f)
  };
}
const $d_sci_WrappedString$ = new $TypeData().initClass({
  sci_WrappedString$: 0
}, false, "scala.collection.immutable.WrappedString$", {
  sci_WrappedString$: 1,
  O: 1,
  sc_SpecificIterableFactory: 1,
  sc_Factory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString$.prototype.$classData = $d_sci_WrappedString$;
let $n_sci_WrappedString$ = (void 0);
function $m_sci_WrappedString$() {
  if ((!$n_sci_WrappedString$)) {
    $n_sci_WrappedString$ = new $c_sci_WrappedString$()
  };
  return $n_sci_WrappedString$
}
class $c_scm_Builder$$anon$1 extends $c_O {
  constructor(outer, f$1) {
    super();
    this.scm_Builder$$anon$1__f_$outer = null;
    this.scm_Builder$$anon$1__f_f$1 = null;
    if ((outer === null)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O(null)
    } else {
      this.scm_Builder$$anon$1__f_$outer = outer
    };
    this.scm_Builder$$anon$1__f_f$1 = f$1
  };
  addOne__O__scm_Builder$$anon$1(x) {
    const this$1 = this.scm_Builder$$anon$1__f_$outer;
    this$1.addOne__O__scm_Growable(x);
    return this
  };
  addAll__sc_IterableOnce__scm_Builder$$anon$1(xs) {
    const this$1 = this.scm_Builder$$anon$1__f_$outer;
    this$1.addAll__sc_IterableOnce__scm_Growable(xs);
    return this
  };
  sizeHint__I__V(size) {
    this.scm_Builder$$anon$1__f_$outer.sizeHint__I__V(size)
  };
  result__O() {
    return this.scm_Builder$$anon$1__f_f$1.apply__O__O(this.scm_Builder$$anon$1__f_$outer.result__O())
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_Builder$$anon$1(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_Builder$$anon$1(elem)
  };
}
const $d_scm_Builder$$anon$1 = new $TypeData().initClass({
  scm_Builder$$anon$1: 0
}, false, "scala.collection.mutable.Builder$$anon$1", {
  scm_Builder$$anon$1: 1,
  O: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1
});
$c_scm_Builder$$anon$1.prototype.$classData = $d_scm_Builder$$anon$1;
class $c_Lscalatags_JsDom$RawFrag$ extends $c_O {
  toString__T() {
    return "<function1>"
  };
  apply__O__O(v1) {
    const v = $as_T(v1);
    return new $c_Lscalatags_JsDom$RawFrag(v)
  };
}
const $d_Lscalatags_JsDom$RawFrag$ = new $TypeData().initClass({
  Lscalatags_JsDom$RawFrag$: 0
}, false, "scalatags.JsDom$RawFrag$", {
  Lscalatags_JsDom$RawFrag$: 1,
  O: 1,
  Lscalatags_package$Companion: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$RawFrag$.prototype.$classData = $d_Lscalatags_JsDom$RawFrag$;
let $n_Lscalatags_JsDom$RawFrag$ = (void 0);
function $m_Lscalatags_JsDom$RawFrag$() {
  if ((!$n_Lscalatags_JsDom$RawFrag$)) {
    $n_Lscalatags_JsDom$RawFrag$ = new $c_Lscalatags_JsDom$RawFrag$()
  };
  return $n_Lscalatags_JsDom$RawFrag$
}
class $c_Lscalatags_JsDom$StringFrag$ extends $c_O {
  toString__T() {
    return "<function1>"
  };
  apply__O__O(v1) {
    const v = $as_T(v1);
    return new $c_Lscalatags_JsDom$StringFrag(v)
  };
}
const $d_Lscalatags_JsDom$StringFrag$ = new $TypeData().initClass({
  Lscalatags_JsDom$StringFrag$: 0
}, false, "scalatags.JsDom$StringFrag$", {
  Lscalatags_JsDom$StringFrag$: 1,
  O: 1,
  Lscalatags_package$Companion: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$StringFrag$.prototype.$classData = $d_Lscalatags_JsDom$StringFrag$;
let $n_Lscalatags_JsDom$StringFrag$ = (void 0);
function $m_Lscalatags_JsDom$StringFrag$() {
  if ((!$n_Lscalatags_JsDom$StringFrag$)) {
    $n_Lscalatags_JsDom$StringFrag$ = new $c_Lscalatags_JsDom$StringFrag$()
  };
  return $n_Lscalatags_JsDom$StringFrag$
}
class $c_Lscalatags_generic_Attr extends $c_O {
  constructor(name, namespace, raw) {
    super();
    this.Lscalatags_generic_Attr__f_name = null;
    this.Lscalatags_generic_Attr__f_namespace = null;
    this.Lscalatags_generic_Attr__f_raw = false;
    this.Lscalatags_generic_Attr__f_name = name;
    this.Lscalatags_generic_Attr__f_namespace = namespace;
    this.Lscalatags_generic_Attr__f_raw = raw;
    if (((!raw) && (!$m_Lscalatags_Escaping$().validAttrName__T__Z(name)))) {
      throw $ct_jl_IllegalArgumentException__T__(new $c_jl_IllegalArgumentException(), (("Illegal attribute name: " + name) + " is not a valid XML attribute name"))
    }
  };
  $colon$eq__O__Lscalatags_generic_AttrValue__Lscalatags_generic_AttrPair(v, ev) {
    if ((v === null)) {
      throw new $c_jl_NullPointerException()
    };
    return new $c_Lscalatags_generic_AttrPair(this, v, ev)
  };
  productPrefix__T() {
    return "Attr"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lscalatags_generic_Attr__f_name;
        break
      }
      case 1: {
        return this.Lscalatags_generic_Attr__f_namespace;
        break
      }
      case 2: {
        return this.Lscalatags_generic_Attr__f_raw;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("Attr");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const x = this.Lscalatags_generic_Attr__f_name;
    const data$1 = $m_sr_Statics$().anyHash__O__I(x);
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const x$1 = this.Lscalatags_generic_Attr__f_namespace;
    const data$2 = $m_sr_Statics$().anyHash__O__I(x$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const data$3 = (this.Lscalatags_generic_Attr__f_raw ? 1231 : 1237);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$4, 3)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_generic_Attr)) {
      const Attr$1 = $as_Lscalatags_generic_Attr(x$1);
      if (((this.Lscalatags_generic_Attr__f_raw === Attr$1.Lscalatags_generic_Attr__f_raw) && (this.Lscalatags_generic_Attr__f_name === Attr$1.Lscalatags_generic_Attr__f_name))) {
        const x = this.Lscalatags_generic_Attr__f_namespace;
        const x$2 = Attr$1.Lscalatags_generic_Attr__f_namespace;
        return ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Lscalatags_generic_Attr(obj) {
  return (((obj instanceof $c_Lscalatags_generic_Attr) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.Attr"))
}
function $isArrayOf_Lscalatags_generic_Attr(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_Attr)))
}
function $asArrayOf_Lscalatags_generic_Attr(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_Attr(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.Attr;", depth))
}
const $d_Lscalatags_generic_Attr = new $TypeData().initClass({
  Lscalatags_generic_Attr: 0
}, false, "scalatags.generic.Attr", {
  Lscalatags_generic_Attr: 1,
  O: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_Attr.prototype.$classData = $d_Lscalatags_generic_Attr;
const $ct_jl_ArithmeticException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_ArithmeticException extends $c_jl_RuntimeException {
}
const $d_jl_ArithmeticException = new $TypeData().initClass({
  jl_ArithmeticException: 0
}, false, "java.lang.ArithmeticException", {
  jl_ArithmeticException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArithmeticException.prototype.$classData = $d_jl_ArithmeticException;
const $ct_jl_ClassCastException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_ClassCastException extends $c_jl_RuntimeException {
}
const $d_jl_ClassCastException = new $TypeData().initClass({
  jl_ClassCastException: 0
}, false, "java.lang.ClassCastException", {
  jl_ClassCastException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ClassCastException.prototype.$classData = $d_jl_ClassCastException;
const $ct_jl_IllegalArgumentException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
const $ct_jl_IllegalArgumentException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
class $c_jl_IllegalArgumentException extends $c_jl_RuntimeException {
}
const $d_jl_IllegalArgumentException = new $TypeData().initClass({
  jl_IllegalArgumentException: 0
}, false, "java.lang.IllegalArgumentException", {
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalArgumentException.prototype.$classData = $d_jl_IllegalArgumentException;
class $c_jl_IllegalStateException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_IllegalStateException = new $TypeData().initClass({
  jl_IllegalStateException: 0
}, false, "java.lang.IllegalStateException", {
  jl_IllegalStateException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IllegalStateException.prototype.$classData = $d_jl_IllegalStateException;
const $ct_jl_IndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_IndexOutOfBoundsException extends $c_jl_RuntimeException {
}
const $d_jl_IndexOutOfBoundsException = new $TypeData().initClass({
  jl_IndexOutOfBoundsException: 0
}, false, "java.lang.IndexOutOfBoundsException", {
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_IndexOutOfBoundsException.prototype.$classData = $d_jl_IndexOutOfBoundsException;
class $c_jl_NullPointerException extends $c_jl_RuntimeException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_jl_NullPointerException = new $TypeData().initClass({
  jl_NullPointerException: 0
}, false, "java.lang.NullPointerException", {
  jl_NullPointerException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NullPointerException.prototype.$classData = $d_jl_NullPointerException;
class $c_jl_SecurityException {
}
function $as_jl_SecurityException(obj) {
  return (((obj instanceof $c_jl_SecurityException) || (obj === null)) ? obj : $throwClassCastException(obj, "java.lang.SecurityException"))
}
function $isArrayOf_jl_SecurityException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.jl_SecurityException)))
}
function $asArrayOf_jl_SecurityException(obj, depth) {
  return (($isArrayOf_jl_SecurityException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Ljava.lang.SecurityException;", depth))
}
const $ct_jl_UnsupportedOperationException__ = (function($thiz) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, null, null, true, true);
  return $thiz
});
const $ct_jl_UnsupportedOperationException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_UnsupportedOperationException extends $c_jl_RuntimeException {
}
const $d_jl_UnsupportedOperationException = new $TypeData().initClass({
  jl_UnsupportedOperationException: 0
}, false, "java.lang.UnsupportedOperationException", {
  jl_UnsupportedOperationException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_UnsupportedOperationException.prototype.$classData = $d_jl_UnsupportedOperationException;
class $c_ju_NoSuchElementException extends $c_jl_RuntimeException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_ju_NoSuchElementException = new $TypeData().initClass({
  ju_NoSuchElementException: 0
}, false, "java.util.NoSuchElementException", {
  ju_NoSuchElementException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_ju_NoSuchElementException.prototype.$classData = $d_ju_NoSuchElementException;
const $ct_Lorg_scalajs_linker_runtime_UndefinedBehaviorError__jl_Throwable__ = (function($thiz, cause) {
  const message = ((cause === null) ? null : cause.toString__T());
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, message, cause, true, true);
  return $thiz
});
class $c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError extends $c_jl_VirtualMachineError {
}
const $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError = new $TypeData().initClass({
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 0
}, false, "org.scalajs.linker.runtime.UndefinedBehaviorError", {
  Lorg_scalajs_linker_runtime_UndefinedBehaviorError: 1,
  jl_VirtualMachineError: 1,
  jl_Error: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_Lorg_scalajs_linker_runtime_UndefinedBehaviorError.prototype.$classData = $d_Lorg_scalajs_linker_runtime_UndefinedBehaviorError;
class $c_s_$less$colon$less$$anon$1 extends $c_s_$eq$colon$eq {
  apply__O__O(x) {
    return x
  };
  toString__T() {
    return "generalized constraint"
  };
}
const $d_s_$less$colon$less$$anon$1 = new $TypeData().initClass({
  s_$less$colon$less$$anon$1: 0
}, false, "scala.$less$colon$less$$anon$1", {
  s_$less$colon$less$$anon$1: 1,
  s_$eq$colon$eq: 1,
  s_$less$colon$less: 1,
  O: 1,
  F1: 1,
  Ljava_io_Serializable: 1
});
$c_s_$less$colon$less$$anon$1.prototype.$classData = $d_s_$less$colon$less$$anon$1;
const $p_s_MatchError__objString$lzycompute__T = (function($thiz) {
  if ((!$thiz.s_MatchError__f_bitmap$0)) {
    $thiz.s_MatchError__f_objString = (($thiz.s_MatchError__f_obj === null) ? "null" : $p_s_MatchError__liftedTree1$1__T($thiz));
    $thiz.s_MatchError__f_bitmap$0 = true
  };
  return $thiz.s_MatchError__f_objString
});
const $p_s_MatchError__objString__T = (function($thiz) {
  return ((!$thiz.s_MatchError__f_bitmap$0) ? $p_s_MatchError__objString$lzycompute__T($thiz) : $thiz.s_MatchError__f_objString)
});
const $p_s_MatchError__ofClass$1__T = (function($thiz) {
  const this$1 = $thiz.s_MatchError__f_obj;
  return ("of class " + $objectGetClass(this$1).getName__T())
});
const $p_s_MatchError__liftedTree1$1__T = (function($thiz) {
  try {
    return ((($dp_toString__T($thiz.s_MatchError__f_obj) + " (") + $p_s_MatchError__ofClass$1__T($thiz)) + ")")
  } catch (e) {
    const e$2 = $m_sjsr_package$().wrapJavaScriptException__O__jl_Throwable(e);
    if ((e$2 !== null)) {
      return ("an instance " + $p_s_MatchError__ofClass$1__T($thiz))
    } else {
      throw e
    }
  }
});
class $c_s_MatchError extends $c_jl_RuntimeException {
  constructor(obj) {
    super();
    this.s_MatchError__f_objString = null;
    this.s_MatchError__f_obj = null;
    this.s_MatchError__f_bitmap$0 = false;
    this.s_MatchError__f_obj = obj;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $p_s_MatchError__objString__T(this)
  };
}
const $d_s_MatchError = new $TypeData().initClass({
  s_MatchError: 0
}, false, "scala.MatchError", {
  s_MatchError: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_s_MatchError.prototype.$classData = $d_s_MatchError;
class $c_s_Option extends $c_O {
  isEmpty__Z() {
    return (this === $m_s_None$())
  };
  knownSize__I() {
    return (this.isEmpty__Z() ? 0 : 1)
  };
  iterator__sc_Iterator() {
    if (this.isEmpty__Z()) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    } else {
      $m_sc_Iterator$();
      const a = this.get__O();
      return new $c_sc_Iterator$$anon$20(a)
    }
  };
}
class $c_T2 extends $c_O {
  constructor(_1, _2) {
    super();
    this.T2__f__1 = null;
    this.T2__f__2 = null;
    this.T2__f__1 = _1;
    this.T2__f__2 = _2
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(n) {
    return $f_s_Product2__productElement__I__O(this, n)
  };
  toString__T() {
    return (((("(" + this.T2__f__1) + ",") + this.T2__f__2) + ")")
  };
  productPrefix__T() {
    return "Tuple2"
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_T2)) {
      const Tuple2$1 = $as_T2(x$1);
      return ($m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__1, Tuple2$1.T2__f__1) && $m_sr_BoxesRunTime$().equals__O__O__Z(this.T2__f__2, Tuple2$1.T2__f__2))
    } else {
      return false
    }
  };
}
function $as_T2(obj) {
  return (((obj instanceof $c_T2) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Tuple2"))
}
function $isArrayOf_T2(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.T2)))
}
function $asArrayOf_T2(obj, depth) {
  return (($isArrayOf_T2(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Tuple2;", depth))
}
const $d_T2 = new $TypeData().initClass({
  T2: 0
}, false, "scala.Tuple2", {
  T2: 1,
  O: 1,
  s_Product2: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_T2.prototype.$classData = $d_T2;
const $f_sc_IndexedSeqOps__drop__I__O = (function($thiz, n) {
  return $thiz.fromSpecific__sc_IterableOnce__O(new $c_sc_IndexedSeqView$Drop($thiz, n))
});
const $f_sc_Iterable__toString__T = (function($thiz) {
  const start = ($thiz.className__T() + "(");
  return $f_sc_IterableOnceOps__mkString__T__T__T__T($thiz, start, ", ", ")")
});
function $is_sc_Iterable(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Iterable)))
}
function $as_sc_Iterable(obj) {
  return (($is_sc_Iterable(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Iterable"))
}
function $isArrayOf_sc_Iterable(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Iterable)))
}
function $asArrayOf_sc_Iterable(obj, depth) {
  return (($isArrayOf_sc_Iterable(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Iterable;", depth))
}
class $c_sc_Iterator$$anon$19 extends $c_sc_AbstractIterator {
  hasNext__Z() {
    return false
  };
  next__E() {
    throw new $c_ju_NoSuchElementException("next on empty iterator")
  };
  knownSize__I() {
    return 0
  };
  next__O() {
    this.next__E()
  };
}
const $d_sc_Iterator$$anon$19 = new $TypeData().initClass({
  sc_Iterator$$anon$19: 0
}, false, "scala.collection.Iterator$$anon$19", {
  sc_Iterator$$anon$19: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$19.prototype.$classData = $d_sc_Iterator$$anon$19;
class $c_sc_Iterator$$anon$20 extends $c_sc_AbstractIterator {
  constructor(a$1) {
    super();
    this.sc_Iterator$$anon$20__f_consumed = false;
    this.sc_Iterator$$anon$20__f_a$1 = null;
    this.sc_Iterator$$anon$20__f_a$1 = a$1;
    this.sc_Iterator$$anon$20__f_consumed = false
  };
  hasNext__Z() {
    return (!this.sc_Iterator$$anon$20__f_consumed)
  };
  next__O() {
    if (this.sc_Iterator$$anon$20__f_consumed) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      this.sc_Iterator$$anon$20__f_consumed = true;
      return this.sc_Iterator$$anon$20__f_a$1
    }
  };
}
const $d_sc_Iterator$$anon$20 = new $TypeData().initClass({
  sc_Iterator$$anon$20: 0
}, false, "scala.collection.Iterator$$anon$20", {
  sc_Iterator$$anon$20: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_Iterator$$anon$20.prototype.$classData = $d_sc_Iterator$$anon$20;
const $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const temp$i = ((1 + i) | 0);
      const temp$xs = $as_sc_LinearSeq(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
});
const $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const this$1 = a;
      let $$x1;
      if ((!this$1.isEmpty__Z())) {
        const this$2 = b;
        $$x1 = (!this$2.isEmpty__Z())
      } else {
        $$x1 = false
      };
      if (($$x1 && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        const temp$a = $as_sc_LinearSeq(a.tail__O());
        const temp$b = $as_sc_LinearSeq(b.tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (a.isEmpty__Z() && b.isEmpty__Z())
      }
    }
  }
});
const $f_sc_LinearSeqOps__length__I = (function($thiz) {
  let these = $as_sc_LinearSeq($thiz);
  let len = 0;
  while (true) {
    const this$1 = these;
    if ((!this$1.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sc_LinearSeq(these.tail__O())
    } else {
      break
    }
  };
  return len
});
const $f_sc_LinearSeqOps__lengthCompare__I__I = (function($thiz, len) {
  return ((len < 0) ? 1 : $p_sc_LinearSeqOps__loop$1__I__sc_LinearSeq__I__I($thiz, 0, $as_sc_LinearSeq($thiz), len))
});
const $f_sc_LinearSeqOps__apply__I__O = (function($thiz, n) {
  if ((n < 0)) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  const skipped = $as_sc_LinearSeq($thiz.drop__I__O(n));
  if (skipped.isEmpty__Z()) {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), ("" + n))
  };
  return skipped.head__O()
});
const $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z = (function($thiz, that) {
  if ($is_sc_LinearSeq(that)) {
    const x2 = $as_sc_LinearSeq(that);
    return $p_sc_LinearSeqOps__linearSeqEq$1__sc_LinearSeq__sc_LinearSeq__Z($thiz, $as_sc_LinearSeq($thiz), x2)
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, that)
  }
});
class $c_sc_StrictOptimizedLinearSeqOps$$anon$1 extends $c_sc_AbstractIterator {
  constructor(outer) {
    super();
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = null;
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = outer
  };
  hasNext__Z() {
    return (!this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.isEmpty__Z())
  };
  next__O() {
    const r = this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.head__O();
    this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current = $as_sc_Iterable(this.sc_StrictOptimizedLinearSeqOps$$anon$1__f_current.tail__O());
    return r
  };
}
const $d_sc_StrictOptimizedLinearSeqOps$$anon$1 = new $TypeData().initClass({
  sc_StrictOptimizedLinearSeqOps$$anon$1: 0
}, false, "scala.collection.StrictOptimizedLinearSeqOps$$anon$1", {
  sc_StrictOptimizedLinearSeqOps$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sc_StrictOptimizedLinearSeqOps$$anon$1.prototype.$classData = $d_sc_StrictOptimizedLinearSeqOps$$anon$1;
class $c_sci_IndexedSeq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_sci_Vector$())
  };
  from__sc_IterableOnce__sci_IndexedSeq(it) {
    if ($is_sci_IndexedSeq(it)) {
      const x2 = $as_sci_IndexedSeq(it);
      return x2
    } else {
      return $as_sci_IndexedSeq($c_sc_SeqFactory$Delegate.prototype.from__sc_IterableOnce__sc_SeqOps.call(this, it))
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_IndexedSeq(source)
  };
  from__sc_IterableOnce__sc_SeqOps(it) {
    return this.from__sc_IterableOnce__sci_IndexedSeq(it)
  };
}
const $d_sci_IndexedSeq$ = new $TypeData().initClass({
  sci_IndexedSeq$: 0
}, false, "scala.collection.immutable.IndexedSeq$", {
  sci_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_IndexedSeq$.prototype.$classData = $d_sci_IndexedSeq$;
let $n_sci_IndexedSeq$ = (void 0);
function $m_sci_IndexedSeq$() {
  if ((!$n_sci_IndexedSeq$)) {
    $n_sci_IndexedSeq$ = new $c_sci_IndexedSeq$()
  };
  return $n_sci_IndexedSeq$
}
class $c_sci_LazyList$LazyIterator extends $c_sc_AbstractIterator {
  constructor(lazyList) {
    super();
    this.sci_LazyList$LazyIterator__f_lazyList = null;
    this.sci_LazyList$LazyIterator__f_lazyList = lazyList
  };
  hasNext__Z() {
    return (!this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z())
  };
  next__O() {
    if (this.sci_LazyList$LazyIterator__f_lazyList.isEmpty__Z()) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    } else {
      const this$1 = this.sci_LazyList$LazyIterator__f_lazyList;
      const res = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
      const this$2 = this.sci_LazyList$LazyIterator__f_lazyList;
      this.sci_LazyList$LazyIterator__f_lazyList = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      return res
    }
  };
}
const $d_sci_LazyList$LazyIterator = new $TypeData().initClass({
  sci_LazyList$LazyIterator: 0
}, false, "scala.collection.immutable.LazyList$LazyIterator", {
  sci_LazyList$LazyIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sci_LazyList$LazyIterator.prototype.$classData = $d_sci_LazyList$LazyIterator;
class $c_sci_List$ extends $c_O {
  constructor() {
    super();
    this.sci_List$__f_partialNotApplied = null;
    $n_sci_List$ = this;
    this.sci_List$__f_partialNotApplied = new $c_sci_List$$anon$1()
  };
  from__sc_IterableOnce__sci_List(coll) {
    if ((coll instanceof $c_sci_List)) {
      const x2 = $as_sci_List(coll);
      return x2
    } else if ((coll.knownSize__I() === 0)) {
      return $m_sci_Nil$()
    } else if ((coll instanceof $c_scm_ListBuffer)) {
      const x3 = $as_scm_ListBuffer(coll);
      return x3.toList__sci_List()
    } else {
      const this$2 = new $c_scm_ListBuffer();
      return this$2.addAll__sc_IterableOnce__scm_ListBuffer(coll).toList__sci_List()
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_List(source)
  };
}
const $d_sci_List$ = new $TypeData().initClass({
  sci_List$: 0
}, false, "scala.collection.immutable.List$", {
  sci_List$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_List$.prototype.$classData = $d_sci_List$;
let $n_sci_List$ = (void 0);
function $m_sci_List$() {
  if ((!$n_sci_List$)) {
    $n_sci_List$ = new $c_sci_List$()
  };
  return $n_sci_List$
}
const $p_sci_Vector$__liftedTree1$1__I = (function($thiz) {
  try {
    const x = $m_jl_System$SystemProperties$().getProperty__T__T__T("scala.collection.immutable.Vector.defaultApplyPreferredMaxLength", "1024");
    const this$4 = $m_jl_Integer$();
    return this$4.parseInt__T__I__I(x, 10)
  } catch (e) {
    if ((e instanceof $c_jl_SecurityException)) {
      return 1024
    } else {
      throw e
    }
  }
});
class $c_sci_Vector$ extends $c_O {
  constructor() {
    super();
    this.sci_Vector$__f_NIL = null;
    this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = 0;
    $n_sci_Vector$ = this;
    this.sci_Vector$__f_NIL = new $c_sci_Vector(0, 0, 0);
    this.sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength = $p_sci_Vector$__liftedTree1$1__I(this)
  };
  from__sc_IterableOnce__sci_Vector(it) {
    if ((it instanceof $c_sci_ArraySeq)) {
      const x2 = $as_sci_ArraySeq(it);
      if ((x2.length__I() <= 32)) {
        if (x2.isEmpty__Z()) {
          return this.sci_Vector$__f_NIL
        } else {
          const unsafeArray = x2.unsafeArray__O();
          const len = $m_sr_ScalaRunTime$().array_length__O__I(unsafeArray);
          const v = new $c_sci_Vector(0, len, 0);
          const display0 = $newArrayObject($d_O.getArrayOf(), [len]);
          if ($isArrayOf_O(unsafeArray, 1)) {
            $systemArraycopy(unsafeArray, 0, display0, 0, len)
          } else {
            let i = 0;
            while ((i < len)) {
              display0.set(i, $m_sr_ScalaRunTime$().array_apply__O__I__O(unsafeArray, i));
              i = ((1 + i) | 0)
            }
          };
          v.sci_Vector__f_display0 = display0;
          v.sci_Vector__f_depth = 1;
          return v
        }
      }
    };
    if ((it instanceof $c_sci_Vector)) {
      const x3 = $as_sci_Vector(it);
      return x3
    };
    const knownSize = it.knownSize__I();
    if ((knownSize === 0)) {
      return this.sci_Vector$__f_NIL
    } else if (((knownSize > 0) && (knownSize <= 32))) {
      const display0$2 = $newArrayObject($d_O.getArrayOf(), [knownSize]);
      const this$1 = it.iterator__sc_Iterator();
      $f_sc_IterableOnceOps__copyToArray__O__I__I(this$1, display0$2, 0);
      const v$2 = new $c_sci_Vector(0, knownSize, 0);
      v$2.sci_Vector__f_depth = 1;
      v$2.sci_Vector__f_display0 = display0$2;
      return v$2
    } else {
      const this$2 = new $c_sci_VectorBuilder();
      const this$3 = this$2.addAll__sc_IterableOnce__sci_VectorBuilder(it);
      return this$3.result__sci_Vector()
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sci_Vector(source)
  };
}
const $d_sci_Vector$ = new $TypeData().initClass({
  sci_Vector$: 0
}, false, "scala.collection.immutable.Vector$", {
  sci_Vector$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector$.prototype.$classData = $d_sci_Vector$;
let $n_sci_Vector$ = (void 0);
function $m_sci_Vector$() {
  if ((!$n_sci_Vector$)) {
    $n_sci_Vector$ = new $c_sci_Vector$()
  };
  return $n_sci_Vector$
}
const $p_scm_ArrayBuffer$__growArray$1__J__I__I__AO__AO = (function($thiz, arrayLength$1, n$1, end$1, array$2) {
  const lo = (arrayLength$1.RTLong__f_lo << 1);
  const hi = (((arrayLength$1.RTLong__f_lo >>> 31) | 0) | (arrayLength$1.RTLong__f_hi << 1));
  const t = (((hi === 0) ? (((-2147483648) ^ lo) > (-2147483632)) : (hi > 0)) ? new $c_RTLong(lo, hi) : new $c_RTLong(16, 0));
  const lo$1 = t.RTLong__f_lo;
  const hi$1 = t.RTLong__f_hi;
  let newSize__lo = lo$1;
  let newSize__hi = hi$1;
  while (true) {
    const hi$2 = (n$1 >> 31);
    const b__lo = newSize__lo;
    const b__hi = newSize__hi;
    const bhi = b__hi;
    if (((hi$2 === bhi) ? (((-2147483648) ^ n$1) > ((-2147483648) ^ b__lo)) : (hi$2 > bhi))) {
      const this$4__lo = newSize__lo;
      const this$4__hi = newSize__hi;
      const lo$2 = (this$4__lo << 1);
      const hi$3 = (((this$4__lo >>> 31) | 0) | (this$4__hi << 1));
      const $$x1__lo = lo$2;
      const $$x1__hi = hi$3;
      newSize__lo = $$x1__lo;
      newSize__hi = $$x1__hi
    } else {
      break
    }
  };
  const this$5__lo = newSize__lo;
  const this$5__hi = newSize__hi;
  const ahi = this$5__hi;
  if (((ahi === 0) ? (((-2147483648) ^ this$5__lo) > (-1)) : (ahi > 0))) {
    if ((end$1 === 2147483647)) {
      throw $m_sjsr_package$().unwrapJavaScriptException__jl_Throwable__O($ct_jl_Exception__T__(new $c_jl_Exception(), "Collections can not have more than 2147483647 elements"))
    };
    const $$x2__lo = 2147483647;
    const $$x2__hi = 0;
    newSize__lo = $$x2__lo;
    newSize__hi = $$x2__hi
  };
  const this$6__lo = newSize__lo;
  const this$6__hi = newSize__hi;
  const newArray = $newArrayObject($d_O.getArrayOf(), [this$6__lo]);
  $m_s_Array$().copy__O__I__O__I__I__V(array$2, 0, newArray, 0, end$1);
  return newArray
});
class $c_scm_ArrayBuffer$ extends $c_O {
  from__sc_IterableOnce__scm_ArrayBuffer(coll) {
    const k = coll.knownSize__I();
    if ((k >= 0)) {
      const array = $newArrayObject($d_O.getArrayOf(), [((k > 16) ? k : 16)]);
      const it = coll.iterator__sc_Iterator();
      const isEmpty = (k <= 0);
      const scala$collection$immutable$Range$$lastElement = (((-1) + k) | 0);
      if ((!isEmpty)) {
        let i = 0;
        while (true) {
          const v1 = i;
          array.set(v1, it.next__O());
          if ((i === scala$collection$immutable$Range$$lastElement)) {
            break
          };
          i = ((1 + i) | 0)
        }
      };
      return $ct_scm_ArrayBuffer__AO__I__(new $c_scm_ArrayBuffer(), array, k)
    } else {
      const this$10 = $ct_scm_ArrayBuffer__(new $c_scm_ArrayBuffer());
      return this$10.addAll__sc_IterableOnce__scm_ArrayBuffer(coll)
    }
  };
  scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(array, end, n) {
    const value = array.u.length;
    const hi = (value >> 31);
    const hi$1 = (n >> 31);
    if (((hi$1 === hi) ? (((-2147483648) ^ n) <= ((-2147483648) ^ value)) : (hi$1 < hi))) {
      return array
    } else {
      return $p_scm_ArrayBuffer$__growArray$1__J__I__I__AO__AO(this, new $c_RTLong(value, hi), n, end, array)
    }
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__scm_ArrayBuffer(source)
  };
}
const $d_scm_ArrayBuffer$ = new $TypeData().initClass({
  scm_ArrayBuffer$: 0
}, false, "scala.collection.mutable.ArrayBuffer$", {
  scm_ArrayBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer$.prototype.$classData = $d_scm_ArrayBuffer$;
let $n_scm_ArrayBuffer$ = (void 0);
function $m_scm_ArrayBuffer$() {
  if ((!$n_scm_ArrayBuffer$)) {
    $n_scm_ArrayBuffer$ = new $c_scm_ArrayBuffer$()
  };
  return $n_scm_ArrayBuffer$
}
class $c_scm_IndexedSeq$ extends $c_sc_SeqFactory$Delegate {
  constructor() {
    super();
    $ct_sc_SeqFactory$Delegate__sc_SeqFactory__(this, $m_scm_ArrayBuffer$())
  };
}
const $d_scm_IndexedSeq$ = new $TypeData().initClass({
  scm_IndexedSeq$: 0
}, false, "scala.collection.mutable.IndexedSeq$", {
  scm_IndexedSeq$: 1,
  sc_SeqFactory$Delegate: 1,
  O: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_IndexedSeq$.prototype.$classData = $d_scm_IndexedSeq$;
let $n_scm_IndexedSeq$ = (void 0);
function $m_scm_IndexedSeq$() {
  if ((!$n_scm_IndexedSeq$)) {
    $n_scm_IndexedSeq$ = new $c_scm_IndexedSeq$()
  };
  return $n_scm_IndexedSeq$
}
class $c_scm_ListBuffer$ extends $c_O {
  from__sc_IterableOnce__O(source) {
    const this$1 = new $c_scm_ListBuffer();
    return this$1.addAll__sc_IterableOnce__scm_ListBuffer(source)
  };
}
const $d_scm_ListBuffer$ = new $TypeData().initClass({
  scm_ListBuffer$: 0
}, false, "scala.collection.mutable.ListBuffer$", {
  scm_ListBuffer$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer$.prototype.$classData = $d_scm_ListBuffer$;
let $n_scm_ListBuffer$ = (void 0);
function $m_scm_ListBuffer$() {
  if ((!$n_scm_ListBuffer$)) {
    $n_scm_ListBuffer$ = new $c_scm_ListBuffer$()
  };
  return $n_scm_ListBuffer$
}
class $c_sr_ScalaRunTime$$anon$1 extends $c_sc_AbstractIterator {
  constructor(x$2) {
    super();
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = 0;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = null;
    this.sr_ScalaRunTime$$anon$1__f_x$2 = x$2;
    this.sr_ScalaRunTime$$anon$1__f_c = 0;
    this.sr_ScalaRunTime$$anon$1__f_cmax = x$2.productArity__I()
  };
  hasNext__Z() {
    return (this.sr_ScalaRunTime$$anon$1__f_c < this.sr_ScalaRunTime$$anon$1__f_cmax)
  };
  next__O() {
    const result = this.sr_ScalaRunTime$$anon$1__f_x$2.productElement__I__O(this.sr_ScalaRunTime$$anon$1__f_c);
    this.sr_ScalaRunTime$$anon$1__f_c = ((1 + this.sr_ScalaRunTime$$anon$1__f_c) | 0);
    return result
  };
}
const $d_sr_ScalaRunTime$$anon$1 = new $TypeData().initClass({
  sr_ScalaRunTime$$anon$1: 0
}, false, "scala.runtime.ScalaRunTime$$anon$1", {
  sr_ScalaRunTime$$anon$1: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1
});
$c_sr_ScalaRunTime$$anon$1.prototype.$classData = $d_sr_ScalaRunTime$$anon$1;
class $c_sjs_js_WrappedArray$ extends $c_O {
  from__sc_IterableOnce__sjs_js_WrappedArray(source) {
    const this$1 = $ct_sjs_js_WrappedArray__(new $c_sjs_js_WrappedArray());
    return $as_sjs_js_WrappedArray($as_scm_Builder($f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this$1, source)).result__O())
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sjs_js_WrappedArray(source)
  };
}
const $d_sjs_js_WrappedArray$ = new $TypeData().initClass({
  sjs_js_WrappedArray$: 0
}, false, "scala.scalajs.js.WrappedArray$", {
  sjs_js_WrappedArray$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray$.prototype.$classData = $d_sjs_js_WrappedArray$;
let $n_sjs_js_WrappedArray$ = (void 0);
function $m_sjs_js_WrappedArray$() {
  if ((!$n_sjs_js_WrappedArray$)) {
    $n_sjs_js_WrappedArray$ = new $c_sjs_js_WrappedArray$()
  };
  return $n_sjs_js_WrappedArray$
}
class $c_sjsr_WrappedVarArgs$ extends $c_O {
  from__sc_IterableOnce__sjsr_WrappedVarArgs(source) {
    const this$1 = this.newBuilder__scm_Builder();
    return $as_sjsr_WrappedVarArgs($as_scm_Builder(this$1.addAll__sc_IterableOnce__scm_Growable(source)).result__O())
  };
  newBuilder__scm_Builder() {
    const array = [];
    const this$4 = $ct_sjs_js_WrappedArray__sjs_js_Array__(new $c_sjs_js_WrappedArray(), array);
    const f = new $c_sjsr_AnonFunction1(((this$2) => ((x$1$2) => {
      const x$1 = $as_sjs_js_WrappedArray(x$1$2);
      return new $c_sjsr_WrappedVarArgs(x$1.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array)
    }))(this));
    return new $c_scm_Builder$$anon$1(this$4, f)
  };
  from__sc_IterableOnce__O(source) {
    return this.from__sc_IterableOnce__sjsr_WrappedVarArgs(source)
  };
}
const $d_sjsr_WrappedVarArgs$ = new $TypeData().initClass({
  sjsr_WrappedVarArgs$: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs$", {
  sjsr_WrappedVarArgs$: 1,
  O: 1,
  sc_StrictOptimizedSeqFactory: 1,
  sc_SeqFactory: 1,
  sc_IterableFactory: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs$.prototype.$classData = $d_sjsr_WrappedVarArgs$;
let $n_sjsr_WrappedVarArgs$ = (void 0);
function $m_sjsr_WrappedVarArgs$() {
  if ((!$n_sjsr_WrappedVarArgs$)) {
    $n_sjsr_WrappedVarArgs$ = new $c_sjsr_WrappedVarArgs$()
  };
  return $n_sjsr_WrappedVarArgs$
}
class $c_Lscalatags_JsDom$RawFrag extends $c_O {
  constructor(v) {
    super();
    this.Lscalatags_JsDom$RawFrag__f_v = null;
    this.Lscalatags_JsDom$RawFrag__f_v = v;
    if ((v === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  applyTo__Lorg_scalajs_dom_raw_Element__V(elem) {
    elem.insertAdjacentHTML("beforeend", this.Lscalatags_JsDom$RawFrag__f_v)
  };
  productPrefix__T() {
    return "RawFrag"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.Lscalatags_JsDom$RawFrag__f_v : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_JsDom$RawFrag)) {
      const RawFrag$1 = $as_Lscalatags_JsDom$RawFrag(x$1);
      return (this.Lscalatags_JsDom$RawFrag__f_v === RawFrag$1.Lscalatags_JsDom$RawFrag__f_v)
    } else {
      return false
    }
  };
  applyTo__O__V(t) {
    this.applyTo__Lorg_scalajs_dom_raw_Element__V(t)
  };
}
function $as_Lscalatags_JsDom$RawFrag(obj) {
  return (((obj instanceof $c_Lscalatags_JsDom$RawFrag) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.JsDom$RawFrag"))
}
function $isArrayOf_Lscalatags_JsDom$RawFrag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_JsDom$RawFrag)))
}
function $asArrayOf_Lscalatags_JsDom$RawFrag(obj, depth) {
  return (($isArrayOf_Lscalatags_JsDom$RawFrag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.JsDom$RawFrag;", depth))
}
const $d_Lscalatags_JsDom$RawFrag = new $TypeData().initClass({
  Lscalatags_JsDom$RawFrag: 0
}, false, "scalatags.JsDom$RawFrag", {
  Lscalatags_JsDom$RawFrag: 1,
  O: 1,
  Lscalatags_generic_Modifier: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$RawFrag.prototype.$classData = $d_Lscalatags_JsDom$RawFrag;
class $c_Lscalatags_generic_AttrPair extends $c_O {
  constructor(a, v, ev) {
    super();
    this.Lscalatags_generic_AttrPair__f_a = null;
    this.Lscalatags_generic_AttrPair__f_v = null;
    this.Lscalatags_generic_AttrPair__f_ev = null;
    this.Lscalatags_generic_AttrPair__f_a = a;
    this.Lscalatags_generic_AttrPair__f_v = v;
    this.Lscalatags_generic_AttrPair__f_ev = ev
  };
  applyTo__O__V(t) {
    const this$1 = this.Lscalatags_generic_AttrPair__f_ev;
    const a = this.Lscalatags_generic_AttrPair__f_a;
    const v = this.Lscalatags_generic_AttrPair__f_v;
    this$1.apply__Lorg_scalajs_dom_raw_Element__Lscalatags_generic_Attr__O__V(t, a, v)
  };
  productPrefix__T() {
    return "AttrPair"
  };
  productArity__I() {
    return 3
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lscalatags_generic_AttrPair__f_a;
        break
      }
      case 1: {
        return this.Lscalatags_generic_AttrPair__f_v;
        break
      }
      case 2: {
        return this.Lscalatags_generic_AttrPair__f_ev;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_generic_AttrPair)) {
      const AttrPair$1 = $as_Lscalatags_generic_AttrPair(x$1);
      const x = this.Lscalatags_generic_AttrPair__f_a;
      const x$2 = AttrPair$1.Lscalatags_generic_AttrPair__f_a;
      let $$x1;
      if (((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))) {
        const x$3 = this.Lscalatags_generic_AttrPair__f_v;
        const y = AttrPair$1.Lscalatags_generic_AttrPair__f_v;
        $$x1 = $m_sr_BoxesRunTime$().equals__O__O__Z(x$3, y)
      } else {
        $$x1 = false
      };
      if ($$x1) {
        const x$3$1 = this.Lscalatags_generic_AttrPair__f_ev;
        const x$4 = AttrPair$1.Lscalatags_generic_AttrPair__f_ev;
        return (x$3$1 === x$4)
      } else {
        return false
      }
    } else {
      return false
    }
  };
}
function $as_Lscalatags_generic_AttrPair(obj) {
  return (((obj instanceof $c_Lscalatags_generic_AttrPair) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.generic.AttrPair"))
}
function $isArrayOf_Lscalatags_generic_AttrPair(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_generic_AttrPair)))
}
function $asArrayOf_Lscalatags_generic_AttrPair(obj, depth) {
  return (($isArrayOf_Lscalatags_generic_AttrPair(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.generic.AttrPair;", depth))
}
const $d_Lscalatags_generic_AttrPair = new $TypeData().initClass({
  Lscalatags_generic_AttrPair: 0
}, false, "scalatags.generic.AttrPair", {
  Lscalatags_generic_AttrPair: 1,
  O: 1,
  Lscalatags_generic_Modifier: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_generic_AttrPair.prototype.$classData = $d_Lscalatags_generic_AttrPair;
const $ct_jl_ArrayIndexOutOfBoundsException__T__ = (function($thiz, s) {
  $ct_jl_Throwable__T__jl_Throwable__Z__Z__($thiz, s, null, true, true);
  return $thiz
});
class $c_jl_ArrayIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
}
const $d_jl_ArrayIndexOutOfBoundsException = new $TypeData().initClass({
  jl_ArrayIndexOutOfBoundsException: 0
}, false, "java.lang.ArrayIndexOutOfBoundsException", {
  jl_ArrayIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_ArrayIndexOutOfBoundsException.prototype.$classData = $d_jl_ArrayIndexOutOfBoundsException;
class $c_jl_NumberFormatException extends $c_jl_IllegalArgumentException {
  constructor(s) {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, s, null, true, true)
  };
}
const $d_jl_NumberFormatException = new $TypeData().initClass({
  jl_NumberFormatException: 0
}, false, "java.lang.NumberFormatException", {
  jl_NumberFormatException: 1,
  jl_IllegalArgumentException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_NumberFormatException.prototype.$classData = $d_jl_NumberFormatException;
class $c_jl_StringIndexOutOfBoundsException extends $c_jl_IndexOutOfBoundsException {
  constructor() {
    super();
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
}
const $d_jl_StringIndexOutOfBoundsException = new $TypeData().initClass({
  jl_StringIndexOutOfBoundsException: 0
}, false, "java.lang.StringIndexOutOfBoundsException", {
  jl_StringIndexOutOfBoundsException: 1,
  jl_IndexOutOfBoundsException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1
});
$c_jl_StringIndexOutOfBoundsException.prototype.$classData = $d_jl_StringIndexOutOfBoundsException;
class $c_s_None$ extends $c_s_Option {
  get__E() {
    throw new $c_ju_NoSuchElementException("None.get")
  };
  productPrefix__T() {
    return "None"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    return 2433880
  };
  toString__T() {
    return "None"
  };
  get__O() {
    this.get__E()
  };
}
const $d_s_None$ = new $TypeData().initClass({
  s_None$: 0
}, false, "scala.None$", {
  s_None$: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_None$.prototype.$classData = $d_s_None$;
let $n_s_None$ = (void 0);
function $m_s_None$() {
  if ((!$n_s_None$)) {
    $n_s_None$ = new $c_s_None$()
  };
  return $n_s_None$
}
class $c_s_Some extends $c_s_Option {
  constructor(value) {
    super();
    this.s_Some__f_value = null;
    this.s_Some__f_value = value
  };
  get__O() {
    return this.s_Some__f_value
  };
  productPrefix__T() {
    return "Some"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.s_Some__f_value : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_s_Some)) {
      const Some$1 = $as_s_Some(x$1);
      return $m_sr_BoxesRunTime$().equals__O__O__Z(this.s_Some__f_value, Some$1.s_Some__f_value)
    } else {
      return false
    }
  };
}
function $as_s_Some(obj) {
  return (((obj instanceof $c_s_Some) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.Some"))
}
function $isArrayOf_s_Some(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.s_Some)))
}
function $asArrayOf_s_Some(obj, depth) {
  return (($isArrayOf_s_Some(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.Some;", depth))
}
const $d_s_Some = new $TypeData().initClass({
  s_Some: 0
}, false, "scala.Some", {
  s_Some: 1,
  s_Option: 1,
  O: 1,
  sc_IterableOnce: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_s_Some.prototype.$classData = $d_s_Some;
class $c_sc_AbstractIterable extends $c_O {
  className__T() {
    return this.stringPrefix__T()
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $as_sc_IterableOps(this.iterableFactory__sc_IterableFactory().from__sc_IterableOnce__O(coll))
  };
  head__O() {
    return this.iterator__sc_Iterator().next__O()
  };
  drop__I__O(n) {
    return $f_sc_IterableOps__drop__I__O(this, n)
  };
  tail__O() {
    return $f_sc_IterableOps__tail__O(this)
  };
  isEmpty__Z() {
    return $f_sc_IterableOnceOps__isEmpty__Z(this)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  knownSize__I() {
    return (-1)
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return this.fromSpecific__sc_IterableOnce__sc_IterableOps(coll)
  };
}
class $c_sc_IndexedSeqView$IndexedSeqViewIterator extends $c_sc_AbstractIterator {
  constructor(self) {
    super();
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = null;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self = self;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = 0;
    this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = self.length__I()
  };
  knownSize__I() {
    return this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder
  };
  hasNext__Z() {
    return (this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder > 0)
  };
  next__O() {
    if (this.hasNext__Z()) {
      const r = this.sc_IndexedSeqView$IndexedSeqViewIterator__f_self.apply__I__O(this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((1 + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = (((-1) + this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder) | 0);
      return r
    } else {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty.next__O()
    }
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_current + n) | 0);
      const b = ((this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder - n) | 0);
      this.sc_IndexedSeqView$IndexedSeqViewIterator__f_remainder = ((b < 0) ? 0 : b)
    };
    return this
  };
}
const $d_sc_IndexedSeqView$IndexedSeqViewIterator = new $TypeData().initClass({
  sc_IndexedSeqView$IndexedSeqViewIterator: 0
}, false, "scala.collection.IndexedSeqView$IndexedSeqViewIterator", {
  sc_IndexedSeqView$IndexedSeqViewIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  Ljava_io_Serializable: 1
});
$c_sc_IndexedSeqView$IndexedSeqViewIterator.prototype.$classData = $d_sc_IndexedSeqView$IndexedSeqViewIterator;
const $p_sci_VectorBuilder__advanceToNextBlockIfNecessary__V = (function($thiz) {
  if (($thiz.sci_VectorBuilder__f_lo >= $thiz.sci_VectorBuilder__f_display0.u.length)) {
    const newBlockIndex = ((32 + $thiz.sci_VectorBuilder__f_blockIndex) | 0);
    const xor = ($thiz.sci_VectorBuilder__f_blockIndex ^ newBlockIndex);
    $f_sci_VectorPointer__gotoNextBlockStartWritable__I__I__V($thiz, newBlockIndex, xor);
    $thiz.sci_VectorBuilder__f_blockIndex = newBlockIndex;
    $thiz.sci_VectorBuilder__f_lo = 0
  }
});
class $c_sci_VectorBuilder extends $c_O {
  constructor() {
    super();
    this.sci_VectorBuilder__f_blockIndex = 0;
    this.sci_VectorBuilder__f_lo = 0;
    this.sci_VectorBuilder__f_depth = 0;
    this.sci_VectorBuilder__f_display0 = null;
    this.sci_VectorBuilder__f_display1 = null;
    this.sci_VectorBuilder__f_display2 = null;
    this.sci_VectorBuilder__f_display3 = null;
    this.sci_VectorBuilder__f_display4 = null;
    this.sci_VectorBuilder__f_display5 = null;
    this.sci_VectorBuilder__f_display0 = $newArrayObject($d_O.getArrayOf(), [32]);
    this.sci_VectorBuilder__f_depth = 1;
    this.sci_VectorBuilder__f_blockIndex = 0;
    this.sci_VectorBuilder__f_lo = 0
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  depth__I() {
    return this.sci_VectorBuilder__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_VectorBuilder__f_depth = x$1
  };
  display0__AO() {
    return this.sci_VectorBuilder__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_VectorBuilder__f_display0 = x$1
  };
  display1__AAO() {
    return this.sci_VectorBuilder__f_display1
  };
  display1_$eq__AAO__V(x$1) {
    this.sci_VectorBuilder__f_display1 = x$1
  };
  display2__AAAO() {
    return this.sci_VectorBuilder__f_display2
  };
  display2_$eq__AAAO__V(x$1) {
    this.sci_VectorBuilder__f_display2 = x$1
  };
  display3__AAAAO() {
    return this.sci_VectorBuilder__f_display3
  };
  display3_$eq__AAAAO__V(x$1) {
    this.sci_VectorBuilder__f_display3 = x$1
  };
  display4__AAAAAO() {
    return this.sci_VectorBuilder__f_display4
  };
  display4_$eq__AAAAAO__V(x$1) {
    this.sci_VectorBuilder__f_display4 = x$1
  };
  display5__AAAAAAO() {
    return this.sci_VectorBuilder__f_display5
  };
  display5_$eq__AAAAAAO__V(x$1) {
    this.sci_VectorBuilder__f_display5 = x$1
  };
  size__I() {
    return ((this.sci_VectorBuilder__f_blockIndex + this.sci_VectorBuilder__f_lo) | 0)
  };
  addOne__O__sci_VectorBuilder(elem) {
    $p_sci_VectorBuilder__advanceToNextBlockIfNecessary__V(this);
    this.sci_VectorBuilder__f_display0.set(this.sci_VectorBuilder__f_lo, elem);
    this.sci_VectorBuilder__f_lo = ((1 + this.sci_VectorBuilder__f_lo) | 0);
    return this
  };
  addAll__sc_IterableOnce__sci_VectorBuilder(xs) {
    const it = xs.iterator__sc_Iterator();
    while (it.hasNext__Z()) {
      $p_sci_VectorBuilder__advanceToNextBlockIfNecessary__V(this);
      this.sci_VectorBuilder__f_lo = ((this.sci_VectorBuilder__f_lo + it.copyToArray__O__I__I__I(this.sci_VectorBuilder__f_display0, this.sci_VectorBuilder__f_lo, ((this.sci_VectorBuilder__f_display0.u.length - this.sci_VectorBuilder__f_lo) | 0))) | 0)
    };
    return this
  };
  result__sci_Vector() {
    const size = this.size__I();
    if ((size === 0)) {
      const this$1 = $m_sci_Vector$();
      return this$1.sci_Vector$__f_NIL
    };
    const s = new $c_sci_Vector(0, size, 0);
    const depth = this.sci_VectorBuilder__f_depth;
    $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
    if ((this.sci_VectorBuilder__f_depth > 1)) {
      const xor = (((-1) + size) | 0);
      $f_sci_VectorPointer__gotoPos__I__I__V(s, 0, xor)
    };
    return s
  };
  result__O() {
    return this.result__sci_Vector()
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__sci_VectorBuilder(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__sci_VectorBuilder(elem)
  };
}
const $d_sci_VectorBuilder = new $TypeData().initClass({
  sci_VectorBuilder: 0
}, false, "scala.collection.immutable.VectorBuilder", {
  sci_VectorBuilder: 1,
  O: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorBuilder.prototype.$classData = $d_sci_VectorBuilder;
const $p_sci_VectorIterator__advanceToNextBlockIfNecessary__V = (function($thiz) {
  if (($thiz.sci_VectorIterator__f_lo === $thiz.sci_VectorIterator__f_endLo)) {
    if (((($thiz.sci_VectorIterator__f_blockIndex + $thiz.sci_VectorIterator__f_lo) | 0) < $thiz.sci_VectorIterator__f_endIndex)) {
      const newBlockIndex = ((32 + $thiz.sci_VectorIterator__f_blockIndex) | 0);
      const xor = ($thiz.sci_VectorIterator__f_blockIndex ^ newBlockIndex);
      $f_sci_VectorPointer__gotoNextBlockStart__I__I__V($thiz, newBlockIndex, xor);
      $thiz.sci_VectorIterator__f_blockIndex = newBlockIndex;
      const a = (($thiz.sci_VectorIterator__f_endIndex - $thiz.sci_VectorIterator__f_blockIndex) | 0);
      $thiz.sci_VectorIterator__f_endLo = ((a < 32) ? a : 32);
      $thiz.sci_VectorIterator__f_lo = 0
    } else {
      $thiz.sci_VectorIterator__f__hasNext = false
    }
  }
});
class $c_sci_VectorIterator extends $c_sc_AbstractIterator {
  constructor(_startIndex, endIndex) {
    super();
    this.sci_VectorIterator__f_endIndex = 0;
    this.sci_VectorIterator__f_blockIndex = 0;
    this.sci_VectorIterator__f_lo = 0;
    this.sci_VectorIterator__f_endLo = 0;
    this.sci_VectorIterator__f__hasNext = false;
    this.sci_VectorIterator__f_depth = 0;
    this.sci_VectorIterator__f_display0 = null;
    this.sci_VectorIterator__f_display1 = null;
    this.sci_VectorIterator__f_display2 = null;
    this.sci_VectorIterator__f_display3 = null;
    this.sci_VectorIterator__f_display4 = null;
    this.sci_VectorIterator__f_display5 = null;
    this.sci_VectorIterator__f_endIndex = endIndex;
    this.sci_VectorIterator__f_blockIndex = ((-32) & _startIndex);
    this.sci_VectorIterator__f_lo = (31 & _startIndex);
    const a = ((this.sci_VectorIterator__f_endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
    this.sci_VectorIterator__f_endLo = ((a < 32) ? a : 32);
    this.sci_VectorIterator__f__hasNext = (((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0) < this.sci_VectorIterator__f_endIndex)
  };
  depth__I() {
    return this.sci_VectorIterator__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_VectorIterator__f_depth = x$1
  };
  display0__AO() {
    return this.sci_VectorIterator__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_VectorIterator__f_display0 = x$1
  };
  display1__AAO() {
    return this.sci_VectorIterator__f_display1
  };
  display1_$eq__AAO__V(x$1) {
    this.sci_VectorIterator__f_display1 = x$1
  };
  display2__AAAO() {
    return this.sci_VectorIterator__f_display2
  };
  display2_$eq__AAAO__V(x$1) {
    this.sci_VectorIterator__f_display2 = x$1
  };
  display3__AAAAO() {
    return this.sci_VectorIterator__f_display3
  };
  display3_$eq__AAAAO__V(x$1) {
    this.sci_VectorIterator__f_display3 = x$1
  };
  display4__AAAAAO() {
    return this.sci_VectorIterator__f_display4
  };
  display4_$eq__AAAAAO__V(x$1) {
    this.sci_VectorIterator__f_display4 = x$1
  };
  display5__AAAAAAO() {
    return this.sci_VectorIterator__f_display5
  };
  display5_$eq__AAAAAAO__V(x$1) {
    this.sci_VectorIterator__f_display5 = x$1
  };
  hasNext__Z() {
    return this.sci_VectorIterator__f__hasNext
  };
  drop__I__sc_Iterator(n) {
    if ((n > 0)) {
      const value = this.sci_VectorIterator__f_lo;
      const hi = (value >> 31);
      const hi$1 = (n >> 31);
      const lo = ((value + n) | 0);
      const hi$2 = ((((-2147483648) ^ lo) < ((-2147483648) ^ value)) ? ((1 + ((hi + hi$1) | 0)) | 0) : ((hi + hi$1) | 0));
      const value$1 = this.sci_VectorIterator__f_blockIndex;
      const hi$3 = (value$1 >> 31);
      const lo$1 = ((value$1 + lo) | 0);
      const hi$4 = ((((-2147483648) ^ lo$1) < ((-2147483648) ^ value$1)) ? ((1 + ((hi$3 + hi$2) | 0)) | 0) : ((hi$3 + hi$2) | 0));
      const value$2 = this.sci_VectorIterator__f_endIndex;
      const hi$5 = (value$2 >> 31);
      if (((hi$4 === hi$5) ? (((-2147483648) ^ lo$1) < ((-2147483648) ^ value$2)) : (hi$4 < hi$5))) {
        this.sci_VectorIterator__f_lo = lo;
        if ((this.sci_VectorIterator__f_lo >= 32)) {
          this.sci_VectorIterator__f_blockIndex = ((-32) & ((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0));
          const index = this.sci_VectorIterator__f_blockIndex;
          const depth = this.sci_VectorIterator__f_depth;
          $f_sci_VectorPointer__gotoNewBlockStart__I__I__V(this, index, depth);
          const a = ((this.sci_VectorIterator__f_endIndex - this.sci_VectorIterator__f_blockIndex) | 0);
          this.sci_VectorIterator__f_endLo = ((a < 32) ? a : 32);
          this.sci_VectorIterator__f_lo = (31 & this.sci_VectorIterator__f_lo)
        }
      } else {
        this.sci_VectorIterator__f__hasNext = false;
        this.sci_VectorIterator__f_endIndex = 0
      }
    };
    return this
  };
  next__O() {
    if ((!this.sci_VectorIterator__f__hasNext)) {
      throw new $c_ju_NoSuchElementException("reached iterator end")
    };
    const res = this.sci_VectorIterator__f_display0.get(this.sci_VectorIterator__f_lo);
    this.sci_VectorIterator__f_lo = ((1 + this.sci_VectorIterator__f_lo) | 0);
    $p_sci_VectorIterator__advanceToNextBlockIfNecessary__V(this);
    return res
  };
  copyToArray__O__I__I__I(xs, start, len) {
    const xsLen = $m_sr_ScalaRunTime$().array_length__O__I(xs);
    const srcLen = this.remainingElementCount__I();
    const x = ((len < srcLen) ? len : srcLen);
    const y = ((xsLen - start) | 0);
    const x$1 = ((x < y) ? x : y);
    const totalToBeCopied = ((x$1 > 0) ? x$1 : 0);
    let totalCopied = 0;
    while ((this.sci_VectorIterator__f__hasNext && (totalCopied < totalToBeCopied))) {
      const _start = ((start + totalCopied) | 0);
      const srcLen$1 = ((this.sci_VectorIterator__f_endLo - this.sci_VectorIterator__f_lo) | 0);
      const len$1 = ((len - totalCopied) | 0);
      const x$2 = ((len$1 < srcLen$1) ? len$1 : srcLen$1);
      const y$1 = ((xsLen - _start) | 0);
      const x$3 = ((x$2 < y$1) ? x$2 : y$1);
      const toBeCopied = ((x$3 > 0) ? x$3 : 0);
      $m_s_Array$().copy__O__I__O__I__I__V(this.sci_VectorIterator__f_display0, this.sci_VectorIterator__f_lo, xs, _start, toBeCopied);
      totalCopied = ((totalCopied + toBeCopied) | 0);
      this.sci_VectorIterator__f_lo = ((this.sci_VectorIterator__f_lo + toBeCopied) | 0);
      $p_sci_VectorIterator__advanceToNextBlockIfNecessary__V(this)
    };
    return totalCopied
  };
  remainingElementCount__I() {
    const x = ((this.sci_VectorIterator__f_endIndex - ((this.sci_VectorIterator__f_blockIndex + this.sci_VectorIterator__f_lo) | 0)) | 0);
    return ((x > 0) ? x : 0)
  };
  knownSize__I() {
    return this.remainingElementCount__I()
  };
}
const $d_sci_VectorIterator = new $TypeData().initClass({
  sci_VectorIterator: 0
}, false, "scala.collection.immutable.VectorIterator", {
  sci_VectorIterator: 1,
  sc_AbstractIterator: 1,
  O: 1,
  sc_Iterator: 1,
  sc_IterableOnce: 1,
  sc_IterableOnceOps: 1,
  sci_VectorPointer: 1
});
$c_sci_VectorIterator.prototype.$classData = $d_sci_VectorIterator;
const $f_sc_View__toString__T = (function($thiz) {
  return ($thiz.className__T() + "(<not computed>)")
});
function $is_sc_View(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_View)))
}
function $as_sc_View(obj) {
  return (($is_sc_View(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.View"))
}
function $isArrayOf_sc_View(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_View)))
}
function $asArrayOf_sc_View(obj, depth) {
  return (($isArrayOf_sc_View(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.View;", depth))
}
class $c_sjs_js_JavaScriptException extends $c_jl_RuntimeException {
  constructor(exception) {
    super();
    this.sjs_js_JavaScriptException__f_exception = null;
    this.sjs_js_JavaScriptException__f_exception = exception;
    $ct_jl_Throwable__T__jl_Throwable__Z__Z__(this, null, null, true, true)
  };
  getMessage__T() {
    return $dp_toString__T(this.sjs_js_JavaScriptException__f_exception)
  };
  fillInStackTrace__jl_Throwable() {
    this.setStackTraceStateInternal__O__(this.sjs_js_JavaScriptException__f_exception);
    return this
  };
  productPrefix__T() {
    return "JavaScriptException"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sjs_js_JavaScriptException__f_exception : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sjs_js_JavaScriptException)) {
      const JavaScriptException$1 = $as_sjs_js_JavaScriptException(x$1);
      const x = this.sjs_js_JavaScriptException__f_exception;
      const y = JavaScriptException$1.sjs_js_JavaScriptException__f_exception;
      return $m_sr_BoxesRunTime$().equals__O__O__Z(x, y)
    } else {
      return false
    }
  };
  setStackTraceStateInternal__O__(e) {
    this.jl_Throwable__f_stackTraceStateInternal = e
  };
}
function $as_sjs_js_JavaScriptException(obj) {
  return (((obj instanceof $c_sjs_js_JavaScriptException) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.JavaScriptException"))
}
function $isArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_JavaScriptException)))
}
function $asArrayOf_sjs_js_JavaScriptException(obj, depth) {
  return (($isArrayOf_sjs_js_JavaScriptException(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.JavaScriptException;", depth))
}
const $d_sjs_js_JavaScriptException = new $TypeData().initClass({
  sjs_js_JavaScriptException: 0
}, false, "scala.scalajs.js.JavaScriptException", {
  sjs_js_JavaScriptException: 1,
  jl_RuntimeException: 1,
  jl_Exception: 1,
  jl_Throwable: 1,
  O: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sjs_js_JavaScriptException.prototype.$classData = $d_sjs_js_JavaScriptException;
class $c_Lscalatags_JsDom$StringFrag extends $c_O {
  constructor(v) {
    super();
    this.Lscalatags_JsDom$StringFrag__f_v = null;
    this.Lscalatags_JsDom$StringFrag__f_v = v;
    if ((v === null)) {
      throw new $c_jl_NullPointerException()
    }
  };
  render__Lorg_scalajs_dom_raw_Text() {
    return $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createTextNode(this.Lscalatags_JsDom$StringFrag__f_v)
  };
  productPrefix__T() {
    return "StringFrag"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.Lscalatags_JsDom$StringFrag__f_v : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  toString__T() {
    return $m_sr_ScalaRunTime$()._toString__s_Product__T(this)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_JsDom$StringFrag)) {
      const StringFrag$1 = $as_Lscalatags_JsDom$StringFrag(x$1);
      return (this.Lscalatags_JsDom$StringFrag__f_v === StringFrag$1.Lscalatags_JsDom$StringFrag__f_v)
    } else {
      return false
    }
  };
  applyTo__O__V(t) {
    $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_raw_Element__V(this, t)
  };
  render__Lorg_scalajs_dom_raw_Node() {
    return this.render__Lorg_scalajs_dom_raw_Text()
  };
}
function $as_Lscalatags_JsDom$StringFrag(obj) {
  return (((obj instanceof $c_Lscalatags_JsDom$StringFrag) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.JsDom$StringFrag"))
}
function $isArrayOf_Lscalatags_JsDom$StringFrag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_JsDom$StringFrag)))
}
function $asArrayOf_Lscalatags_JsDom$StringFrag(obj, depth) {
  return (($isArrayOf_Lscalatags_JsDom$StringFrag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.JsDom$StringFrag;", depth))
}
const $d_Lscalatags_JsDom$StringFrag = new $TypeData().initClass({
  Lscalatags_JsDom$StringFrag: 0
}, false, "scalatags.JsDom$StringFrag", {
  Lscalatags_JsDom$StringFrag: 1,
  O: 1,
  Lscalatags_jsdom_Frag: 1,
  Lscalatags_generic_Frag: 1,
  Lscalatags_generic_Modifier: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$StringFrag.prototype.$classData = $d_Lscalatags_JsDom$StringFrag;
const $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq = (function($thiz, n, s) {
  while (true) {
    if (((n <= 0) || s.isEmpty__Z())) {
      return s
    } else {
      const temp$n = (((-1) + n) | 0);
      const temp$s = $as_sc_LinearSeq(s.tail__O());
      n = temp$n;
      s = temp$s
    }
  }
});
class $c_Lscalatags_JsDom$TypedTag extends $c_O {
  constructor(tag, modifiers, void$1, namespace) {
    super();
    this.Lscalatags_JsDom$TypedTag__f_tag = null;
    this.Lscalatags_JsDom$TypedTag__f_modifiers = null;
    this.Lscalatags_JsDom$TypedTag__f_void = false;
    this.Lscalatags_JsDom$TypedTag__f_namespace = null;
    this.Lscalatags_JsDom$TypedTag__f_tag = tag;
    this.Lscalatags_JsDom$TypedTag__f_modifiers = modifiers;
    this.Lscalatags_JsDom$TypedTag__f_void = void$1;
    this.Lscalatags_JsDom$TypedTag__f_namespace = namespace
  };
  render__Lorg_scalajs_dom_raw_Element() {
    const elem = $m_Lorg_scalajs_dom_package$().document__Lorg_scalajs_dom_raw_HTMLDocument().createElementNS(this.Lscalatags_JsDom$TypedTag__f_namespace.uri__T(), this.Lscalatags_JsDom$TypedTag__f_tag);
    $f_Lscalatags_generic_TypedTag__build__O__V(this, elem);
    return elem
  };
  apply__sci_Seq__Lscalatags_JsDom$TypedTag(xs) {
    const x$1 = this.Lscalatags_JsDom$TypedTag__f_tag;
    const x$2 = this.Lscalatags_JsDom$TypedTag__f_void;
    const this$1 = this.Lscalatags_JsDom$TypedTag__f_modifiers;
    const x$3 = new $c_sci_$colon$colon(xs, this$1);
    const x$4 = this.Lscalatags_JsDom$TypedTag__f_namespace;
    return new $c_Lscalatags_JsDom$TypedTag(x$1, x$3, x$2, x$4)
  };
  toString__T() {
    return $as_T(this.render__Lorg_scalajs_dom_raw_Element().outerHTML)
  };
  productPrefix__T() {
    return "TypedTag"
  };
  productArity__I() {
    return 4
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.Lscalatags_JsDom$TypedTag__f_tag;
        break
      }
      case 1: {
        return this.Lscalatags_JsDom$TypedTag__f_modifiers;
        break
      }
      case 2: {
        return this.Lscalatags_JsDom$TypedTag__f_void;
        break
      }
      case 3: {
        return this.Lscalatags_JsDom$TypedTag__f_namespace;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    let acc = (-889275714);
    const hash = acc;
    const data = $f_T__hashCode__I("TypedTag");
    acc = $m_sr_Statics$().mix__I__I__I(hash, data);
    const hash$1 = acc;
    const x = this.Lscalatags_JsDom$TypedTag__f_tag;
    const data$1 = $m_sr_Statics$().anyHash__O__I(x);
    acc = $m_sr_Statics$().mix__I__I__I(hash$1, data$1);
    const hash$2 = acc;
    const x$1 = this.Lscalatags_JsDom$TypedTag__f_modifiers;
    const data$2 = $m_sr_Statics$().anyHash__O__I(x$1);
    acc = $m_sr_Statics$().mix__I__I__I(hash$2, data$2);
    const hash$3 = acc;
    const data$3 = (this.Lscalatags_JsDom$TypedTag__f_void ? 1231 : 1237);
    acc = $m_sr_Statics$().mix__I__I__I(hash$3, data$3);
    const hash$4 = acc;
    const x$2 = this.Lscalatags_JsDom$TypedTag__f_namespace;
    const data$4 = $m_sr_Statics$().anyHash__O__I(x$2);
    acc = $m_sr_Statics$().mix__I__I__I(hash$4, data$4);
    const hash$5 = acc;
    return $m_sr_Statics$().finalizeHash__I__I__I(hash$5, 4)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_Lscalatags_JsDom$TypedTag)) {
      const TypedTag$1 = $as_Lscalatags_JsDom$TypedTag(x$1);
      let $$x1;
      if (((this.Lscalatags_JsDom$TypedTag__f_void === TypedTag$1.Lscalatags_JsDom$TypedTag__f_void) && (this.Lscalatags_JsDom$TypedTag__f_tag === TypedTag$1.Lscalatags_JsDom$TypedTag__f_tag))) {
        const x = this.Lscalatags_JsDom$TypedTag__f_modifiers;
        const x$2 = TypedTag$1.Lscalatags_JsDom$TypedTag__f_modifiers;
        $$x1 = ((x === null) ? (x$2 === null) : x.equals__O__Z(x$2))
      } else {
        $$x1 = false
      };
      if ($$x1) {
        const x$3 = this.Lscalatags_JsDom$TypedTag__f_namespace;
        const x$4 = TypedTag$1.Lscalatags_JsDom$TypedTag__f_namespace;
        return (x$3 === x$4)
      } else {
        return false
      }
    } else {
      return false
    }
  };
  applyTo__O__V(t) {
    $f_Lscalatags_jsdom_Frag__applyTo__Lorg_scalajs_dom_raw_Element__V(this, t)
  };
  render__Lorg_scalajs_dom_raw_Node() {
    return this.render__Lorg_scalajs_dom_raw_Element()
  };
}
function $as_Lscalatags_JsDom$TypedTag(obj) {
  return (((obj instanceof $c_Lscalatags_JsDom$TypedTag) || (obj === null)) ? obj : $throwClassCastException(obj, "scalatags.JsDom$TypedTag"))
}
function $isArrayOf_Lscalatags_JsDom$TypedTag(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.Lscalatags_JsDom$TypedTag)))
}
function $asArrayOf_Lscalatags_JsDom$TypedTag(obj, depth) {
  return (($isArrayOf_Lscalatags_JsDom$TypedTag(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscalatags.JsDom$TypedTag;", depth))
}
const $d_Lscalatags_JsDom$TypedTag = new $TypeData().initClass({
  Lscalatags_JsDom$TypedTag: 0
}, false, "scalatags.JsDom$TypedTag", {
  Lscalatags_JsDom$TypedTag: 1,
  O: 1,
  Lscalatags_generic_TypedTag: 1,
  Lscalatags_generic_Frag: 1,
  Lscalatags_generic_Modifier: 1,
  Lscalatags_jsdom_Frag: 1,
  s_Product: 1,
  s_Equals: 1,
  Ljava_io_Serializable: 1
});
$c_Lscalatags_JsDom$TypedTag.prototype.$classData = $d_Lscalatags_JsDom$TypedTag;
class $c_sc_AbstractView extends $c_sc_AbstractIterable {
  iterableFactory__sc_IterableFactory() {
    return $m_sc_View$()
  };
  toString__T() {
    return $f_sc_View__toString__T(this)
  };
  stringPrefix__T() {
    return "View"
  };
}
const $f_sc_Seq__equals__O__Z = (function($thiz, o) {
  if (($thiz === o)) {
    return true
  } else if ($is_sc_Seq(o)) {
    const x2 = $as_sc_Seq(o);
    return ((x2 === $thiz) || (x2.canEqual__O__Z($thiz) && $thiz.sameElements__sc_IterableOnce__Z(x2)))
  } else {
    return false
  }
});
function $is_sc_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_Seq)))
}
function $as_sc_Seq(obj) {
  return (($is_sc_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.Seq"))
}
function $isArrayOf_sc_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_Seq)))
}
function $asArrayOf_sc_Seq(obj, depth) {
  return (($isArrayOf_sc_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.Seq;", depth))
}
class $c_sc_View$$anon$1 extends $c_sc_AbstractView {
  constructor(it$1) {
    super();
    this.sc_View$$anon$1__f_it$1 = null;
    this.sc_View$$anon$1__f_it$1 = it$1
  };
  iterator__sc_Iterator() {
    return $as_sc_Iterator(this.sc_View$$anon$1__f_it$1.apply__O())
  };
}
const $d_sc_View$$anon$1 = new $TypeData().initClass({
  sc_View$$anon$1: 0
}, false, "scala.collection.View$$anon$1", {
  sc_View$$anon$1: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$$anon$1.prototype.$classData = $d_sc_View$$anon$1;
const $ct_sc_View$Drop__sc_IterableOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_View$Drop__f_underlying = underlying;
  $thiz.sc_View$Drop__f_n = n;
  $thiz.sc_View$Drop__f_normN = ((n > 0) ? n : 0);
  return $thiz
});
class $c_sc_View$Drop extends $c_sc_AbstractView {
  constructor() {
    super();
    this.sc_View$Drop__f_underlying = null;
    this.sc_View$Drop__f_n = 0;
    this.sc_View$Drop__f_normN = 0
  };
  iterator__sc_Iterator() {
    return this.sc_View$Drop__f_underlying.iterator__sc_Iterator().drop__I__sc_Iterator(this.sc_View$Drop__f_n)
  };
  knownSize__I() {
    const size = this.sc_View$Drop__f_underlying.knownSize__I();
    if ((size >= 0)) {
      const x = ((size - this.sc_View$Drop__f_normN) | 0);
      return ((x > 0) ? x : 0)
    } else {
      return (-1)
    }
  };
  isEmpty__Z() {
    const this$1 = this.iterator__sc_Iterator();
    return (!this$1.hasNext__Z())
  };
}
const $d_sc_View$Drop = new $TypeData().initClass({
  sc_View$Drop: 0
}, false, "scala.collection.View$Drop", {
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1
});
$c_sc_View$Drop.prototype.$classData = $d_sc_View$Drop;
class $c_sc_AbstractSeq extends $c_sc_AbstractIterable {
  canEqual__O__Z(that) {
    return true
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
}
class $c_sc_AbstractSeqView extends $c_sc_AbstractView {
  drop__I__sc_SeqView(n) {
    return $ct_sc_SeqView$Drop__sc_SeqOps__I__(new $c_sc_SeqView$Drop(), this, n)
  };
  stringPrefix__T() {
    return "SeqView"
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  drop__I__O(n) {
    return this.drop__I__sc_SeqView(n)
  };
}
function $is_sc_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_IndexedSeq)))
}
function $as_sc_IndexedSeq(obj) {
  return (($is_sc_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.IndexedSeq"))
}
function $isArrayOf_sc_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_IndexedSeq)))
}
function $asArrayOf_sc_IndexedSeq(obj, depth) {
  return (($isArrayOf_sc_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.IndexedSeq;", depth))
}
function $is_sc_LinearSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sc_LinearSeq)))
}
function $as_sc_LinearSeq(obj) {
  return (($is_sc_LinearSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.LinearSeq"))
}
function $isArrayOf_sc_LinearSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_LinearSeq)))
}
function $asArrayOf_sc_LinearSeq(obj, depth) {
  return (($isArrayOf_sc_LinearSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.LinearSeq;", depth))
}
const $ct_sc_SeqView$Drop__sc_SeqOps__I__ = (function($thiz, underlying, n) {
  $thiz.sc_SeqView$Drop__f_underlying = underlying;
  $ct_sc_View$Drop__sc_IterableOps__I__($thiz, underlying, n);
  return $thiz
});
class $c_sc_SeqView$Drop extends $c_sc_View$Drop {
  constructor() {
    super();
    this.sc_SeqView$Drop__f_underlying = null
  };
  drop__I__sc_SeqView(n) {
    return $ct_sc_SeqView$Drop__sc_SeqOps__I__(new $c_sc_SeqView$Drop(), this, n)
  };
  stringPrefix__T() {
    return "SeqView"
  };
  lengthCompare__I__I(len) {
    return $f_sc_IterableOps__sizeCompare__I__I(this, len)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  length__I() {
    const this$1 = this.sc_SeqView$Drop__f_underlying;
    const x = ((this$1.length__I() - this.sc_View$Drop__f_normN) | 0);
    return ((x > 0) ? x : 0)
  };
  apply__I__O(i) {
    return this.sc_SeqView$Drop__f_underlying.apply__I__O(((i + this.sc_View$Drop__f_normN) | 0))
  };
  drop__I__O(n) {
    return this.drop__I__sc_SeqView(n)
  };
}
const $d_sc_SeqView$Drop = new $TypeData().initClass({
  sc_SeqView$Drop: 0
}, false, "scala.collection.SeqView$Drop", {
  sc_SeqView$Drop: 1,
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Drop.prototype.$classData = $d_sc_SeqView$Drop;
const $ct_sc_SeqView$Id__sc_SeqOps__ = (function($thiz, underlying) {
  $thiz.sc_SeqView$Id__f_underlying = underlying;
  return $thiz
});
class $c_sc_SeqView$Id extends $c_sc_AbstractSeqView {
  constructor() {
    super();
    this.sc_SeqView$Id__f_underlying = null
  };
  apply__I__O(idx) {
    return this.sc_SeqView$Id__f_underlying.apply__I__O(idx)
  };
  length__I() {
    return this.sc_SeqView$Id__f_underlying.length__I()
  };
  iterator__sc_Iterator() {
    return this.sc_SeqView$Id__f_underlying.iterator__sc_Iterator()
  };
  knownSize__I() {
    return this.sc_SeqView$Id__f_underlying.knownSize__I()
  };
  isEmpty__Z() {
    return this.sc_SeqView$Id__f_underlying.isEmpty__Z()
  };
}
const $d_sc_SeqView$Id = new $TypeData().initClass({
  sc_SeqView$Id: 0
}, false, "scala.collection.SeqView$Id", {
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1
});
$c_sc_SeqView$Id.prototype.$classData = $d_sc_SeqView$Id;
function $is_sci_Seq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_Seq)))
}
function $as_sci_Seq(obj) {
  return (($is_sci_Seq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Seq"))
}
function $isArrayOf_sci_Seq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Seq)))
}
function $asArrayOf_sci_Seq(obj, depth) {
  return (($isArrayOf_sci_Seq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Seq;", depth))
}
const $d_sci_Seq = new $TypeData().initClass({
  sci_Seq: 0
}, true, "scala.collection.immutable.Seq", {
  sci_Seq: 1,
  O: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1
});
class $c_sc_AbstractIndexedSeqView extends $c_sc_AbstractSeqView {
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
class $c_sc_IndexedSeqView$Drop extends $c_sc_SeqView$Drop {
  constructor(underlying, n) {
    super();
    $ct_sc_SeqView$Drop__sc_SeqOps__I__(this, underlying, n)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
const $d_sc_IndexedSeqView$Drop = new $TypeData().initClass({
  sc_IndexedSeqView$Drop: 0
}, false, "scala.collection.IndexedSeqView$Drop", {
  sc_IndexedSeqView$Drop: 1,
  sc_SeqView$Drop: 1,
  sc_View$Drop: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Drop.prototype.$classData = $d_sc_IndexedSeqView$Drop;
class $c_sc_IndexedSeqView$Id extends $c_sc_SeqView$Id {
  constructor(underlying) {
    super();
    $ct_sc_SeqView$Id__sc_SeqOps__(this, underlying)
  };
  iterator__sc_Iterator() {
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this)
  };
  stringPrefix__T() {
    return "IndexedSeqView"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  drop__I__sc_SeqView(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
  drop__I__O(n) {
    return new $c_sc_IndexedSeqView$Drop(this, n)
  };
}
const $d_sc_IndexedSeqView$Id = new $TypeData().initClass({
  sc_IndexedSeqView$Id: 0
}, false, "scala.collection.IndexedSeqView$Id", {
  sc_IndexedSeqView$Id: 1,
  sc_SeqView$Id: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_sc_IndexedSeqView$Id.prototype.$classData = $d_sc_IndexedSeqView$Id;
class $c_sci_AbstractSeq extends $c_sc_AbstractSeq {
}
class $c_scm_ArrayBufferView extends $c_sc_AbstractIndexedSeqView {
  constructor(array, length) {
    super();
    this.scm_ArrayBufferView__f_array = null;
    this.scm_ArrayBufferView__f_length = 0;
    this.scm_ArrayBufferView__f_array = array;
    this.scm_ArrayBufferView__f_length = length
  };
  length__I() {
    return this.scm_ArrayBufferView__f_length
  };
  apply__I__O(n) {
    if ((n < this.scm_ArrayBufferView__f_length)) {
      return this.scm_ArrayBufferView__f_array.get(n)
    } else {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBufferView__f_length) | 0)) + ")"))
    }
  };
  className__T() {
    return "ArrayBufferView"
  };
}
const $d_scm_ArrayBufferView = new $TypeData().initClass({
  scm_ArrayBufferView: 0
}, false, "scala.collection.mutable.ArrayBufferView", {
  scm_ArrayBufferView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1
});
$c_scm_ArrayBufferView.prototype.$classData = $d_scm_ArrayBufferView;
const $f_sci_IndexedSeq__canEqual__O__Z = (function($thiz, that) {
  if ((!$is_sci_IndexedSeq(that))) {
    return true
  } else {
    const x2 = $as_sci_IndexedSeq(that);
    return ($thiz.length__I() === x2.length__I())
  }
});
const $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z = (function($thiz, o) {
  if ($is_sci_IndexedSeq(o)) {
    const x2 = $as_sci_IndexedSeq(o);
    if (($thiz === x2)) {
      return true
    } else {
      const length = $thiz.length__I();
      let equal = (length === x2.length__I());
      if (equal) {
        let index = 0;
        const a = $thiz.applyPreferredMaxLength__I();
        const b = x2.applyPreferredMaxLength__I();
        const preferredLength = ((a < b) ? a : b);
        const hi = (length >> 31);
        const hi$1 = (preferredLength >> 31);
        const lo = (preferredLength << 1);
        const hi$2 = (((preferredLength >>> 31) | 0) | (hi$1 << 1));
        let maxApplyCompare;
        if (((hi === hi$2) ? (((-2147483648) ^ length) > ((-2147483648) ^ lo)) : (hi > hi$2))) {
          maxApplyCompare = preferredLength
        } else {
          maxApplyCompare = length
        };
        while (((index < maxApplyCompare) && equal)) {
          equal = $m_sr_BoxesRunTime$().equals__O__O__Z($thiz.apply__I__O(index), x2.apply__I__O(index));
          index = ((1 + index) | 0)
        };
        if (((index < length) && equal)) {
          const thisIt = $thiz.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          const thatIt = x2.iterator__sc_Iterator().drop__I__sc_Iterator(index);
          while ((equal && thisIt.hasNext__Z())) {
            equal = $m_sr_BoxesRunTime$().equals__O__O__Z(thisIt.next__O(), thatIt.next__O())
          }
        }
      };
      return equal
    }
  } else {
    return $f_sc_SeqOps__sameElements__sc_IterableOnce__Z($thiz, o)
  }
});
function $is_sci_IndexedSeq(obj) {
  return (!(!((obj && obj.$classData) && obj.$classData.ancestors.sci_IndexedSeq)))
}
function $as_sci_IndexedSeq(obj) {
  return (($is_sci_IndexedSeq(obj) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.IndexedSeq"))
}
function $isArrayOf_sci_IndexedSeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_IndexedSeq)))
}
function $asArrayOf_sci_IndexedSeq(obj, depth) {
  return (($isArrayOf_sci_IndexedSeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.IndexedSeq;", depth))
}
class $c_sc_StringView extends $c_sc_AbstractIndexedSeqView {
  constructor(s) {
    super();
    this.sc_StringView__f_s = null;
    this.sc_StringView__f_s = s
  };
  length__I() {
    const this$1 = this.sc_StringView__f_s;
    return $uI(this$1.length)
  };
  toString__T() {
    return (("StringView(" + this.sc_StringView__f_s) + ")")
  };
  productPrefix__T() {
    return "StringView"
  };
  productArity__I() {
    return 1
  };
  productElement__I__O(x$1) {
    return ((x$1 === 0) ? this.sc_StringView__f_s : $m_sr_Statics$().ioobe__I__O(x$1))
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  hashCode__I() {
    const this$2 = $m_s_util_hashing_MurmurHash3$();
    return this$2.productHash__s_Product__I__Z__I(this, (-889275714), false)
  };
  equals__O__Z(x$1) {
    if ((this === x$1)) {
      return true
    } else if ((x$1 instanceof $c_sc_StringView)) {
      const StringView$1 = $as_sc_StringView(x$1);
      return (this.sc_StringView__f_s === StringView$1.sc_StringView__f_s)
    } else {
      return false
    }
  };
  apply__I__O(i) {
    const this$1 = this.sc_StringView__f_s;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
}
function $as_sc_StringView(obj) {
  return (((obj instanceof $c_sc_StringView) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.StringView"))
}
function $isArrayOf_sc_StringView(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sc_StringView)))
}
function $asArrayOf_sc_StringView(obj, depth) {
  return (($isArrayOf_sc_StringView(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.StringView;", depth))
}
const $d_sc_StringView = new $TypeData().initClass({
  sc_StringView: 0
}, false, "scala.collection.StringView", {
  sc_StringView: 1,
  sc_AbstractIndexedSeqView: 1,
  sc_AbstractSeqView: 1,
  sc_AbstractView: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_View: 1,
  Ljava_io_Serializable: 1,
  sc_SeqView: 1,
  sc_SeqOps: 1,
  sc_IndexedSeqView: 1,
  sc_IndexedSeqOps: 1,
  s_Product: 1,
  s_Equals: 1
});
$c_sc_StringView.prototype.$classData = $d_sc_StringView;
class $c_scm_AbstractSeq extends $c_sc_AbstractSeq {
}
const $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State = (function($thiz) {
  if ((!$thiz.sci_LazyList__f_bitmap$0)) {
    const res = $as_sci_LazyList$State($thiz.sci_LazyList__f_lazyState.apply__O());
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = true;
    $thiz.sci_LazyList__f_lazyState = null;
    $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state = res;
    $thiz.sci_LazyList__f_bitmap$0 = true
  };
  return $thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$state
});
const $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder = (function($thiz, b, start, sep, end) {
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + start);
  if ((!$thiz.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
  } else if ((!$thiz.isEmpty__Z())) {
    const obj = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
    b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj);
    let elem = null;
    elem = $thiz;
    const elem$1 = $thiz.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
    let elem$2 = null;
    elem$2 = elem$1;
    if ((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ((!$as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated) || ($as_sci_LazyList(elem).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $as_sci_LazyList(elem$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
      elem = $as_sci_LazyList(elem$2);
      if (($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) {
        const this$3 = $as_sci_LazyList(elem$2);
        elem$2 = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
        while (((($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2)) && ($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) && ($as_sci_LazyList(elem).scala$collection$immutable$LazyList$$state__sci_LazyList$State() !== $as_sci_LazyList(elem$2).scala$collection$immutable$LazyList$$state__sci_LazyList$State()))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const this$4 = $as_sci_LazyList(elem);
          const obj$1 = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$1);
          const this$5 = $as_sci_LazyList(elem);
          elem = this$5.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          const this$6 = $as_sci_LazyList(elem$2);
          elem$2 = this$6.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          if (($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z()))) {
            const this$7 = $as_sci_LazyList(elem$2);
            elem$2 = this$7.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
          }
        }
      }
    };
    if ((!($as_sci_LazyList(elem$2).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && (!$as_sci_LazyList(elem$2).isEmpty__Z())))) {
      while (($as_sci_LazyList(elem) !== $as_sci_LazyList(elem$2))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        const this$8 = $as_sci_LazyList(elem);
        const obj$2 = this$8.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$2);
        const this$9 = $as_sci_LazyList(elem);
        elem = this$9.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      if ((!$as_sci_LazyList(elem).sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated)) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<not computed>")
      }
    } else {
      let runner = $thiz;
      let k = 0;
      while (true) {
        const a = runner;
        const b$1 = $as_sci_LazyList(elem$2);
        if ((!((a === b$1) || (a.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          const this$10 = runner;
          runner = this$10.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          const this$11 = $as_sci_LazyList(elem$2);
          elem$2 = this$11.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
          k = ((1 + k) | 0)
        } else {
          break
        }
      };
      const a$1 = $as_sci_LazyList(elem);
      const b$2 = $as_sci_LazyList(elem$2);
      if ((((a$1 === b$2) || (a$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State())) && (k > 0))) {
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
        const this$12 = $as_sci_LazyList(elem);
        const obj$3 = this$12.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
        b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$3);
        const this$13 = $as_sci_LazyList(elem);
        elem = this$13.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
      };
      while (true) {
        const a$2 = $as_sci_LazyList(elem);
        const b$3 = $as_sci_LazyList(elem$2);
        if ((!((a$2 === b$3) || (a$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === b$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State())))) {
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
          const this$14 = $as_sci_LazyList(elem);
          const obj$4 = this$14.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O();
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + obj$4);
          const this$15 = $as_sci_LazyList(elem);
          elem = this$15.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
        } else {
          break
        }
      };
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + sep);
      b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (b.jl_StringBuilder__f_java$lang$StringBuilder$$content + "<cycle>")
    }
  };
  b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + end);
  return b
});
class $c_sci_LazyList extends $c_sci_AbstractSeq {
  constructor(lazyState) {
    super();
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$state = null;
    this.sci_LazyList__f_lazyState = null;
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false;
    this.sci_LazyList__f_bitmap$0 = false;
    this.sci_LazyList__f_lazyState = lazyState;
    this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated = false
  };
  stringPrefix__T() {
    return "LinearSeq"
  };
  length__I() {
    return $f_sc_LinearSeqOps__length__I(this)
  };
  lengthCompare__I__I(len) {
    return $f_sc_LinearSeqOps__lengthCompare__I__I(this, len)
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  scala$collection$immutable$LazyList$$state__sci_LazyList$State() {
    return ((!this.sci_LazyList__f_bitmap$0) ? $p_sci_LazyList__scala$collection$immutable$LazyList$$state$lzycompute__sci_LazyList$State(this) : this.sci_LazyList__f_scala$collection$immutable$LazyList$$state)
  };
  isEmpty__Z() {
    return (this.scala$collection$immutable$LazyList$$state__sci_LazyList$State() === $m_sci_LazyList$State$Empty$())
  };
  knownSize__I() {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? 0 : (-1))
  };
  head__O() {
    return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().head__O()
  };
  force__sci_LazyList() {
    let these = this;
    let those = this;
    if ((!these.isEmpty__Z())) {
      const this$1 = these;
      these = this$1.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
    };
    while ((those !== these)) {
      if (these.isEmpty__Z()) {
        return this
      };
      const this$2 = these;
      these = this$2.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      if (these.isEmpty__Z()) {
        return this
      };
      const this$3 = these;
      these = this$3.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList();
      if ((these === those)) {
        return this
      };
      const this$4 = those;
      those = this$4.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
    };
    return this
  };
  iterator__sc_Iterator() {
    return ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty : new $c_sci_LazyList$LazyIterator(this))
  };
  className__T() {
    return "LazyList"
  };
  equals__O__Z(that) {
    return ((this === that) || $f_sc_Seq__equals__O__Z(this, that))
  };
  drop__I__sci_LazyList(n) {
    return ((n <= 0) ? this : ((this.sci_LazyList__f_scala$collection$immutable$LazyList$$stateEvaluated && this.isEmpty__Z()) ? $m_sci_LazyList$().sci_LazyList$__f__empty : $m_sci_LazyList$().scala$collection$immutable$LazyList$$dropImpl__sci_LazyList__I__sci_LazyList(this, n)))
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(sb, start, sep, end) {
    this.force__sci_LazyList();
    $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, sb.scm_StringBuilder__f_underlying, start, sep, end);
    return sb
  };
  toString__T() {
    return $p_sci_LazyList__addStringNoForce__jl_StringBuilder__T__T__T__jl_StringBuilder(this, $ct_jl_StringBuilder__T__(new $c_jl_StringBuilder(), "LazyList"), "(", ", ", ")").jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  drop__I__O(n) {
    return this.drop__I__sci_LazyList(n)
  };
  tail__O() {
    return this.scala$collection$immutable$LazyList$$state__sci_LazyList$State().tail__sci_LazyList()
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_LazyList$()
  };
}
function $as_sci_LazyList(obj) {
  return (((obj instanceof $c_sci_LazyList) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.LazyList"))
}
function $isArrayOf_sci_LazyList(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_LazyList)))
}
function $asArrayOf_sci_LazyList(obj, depth) {
  return (($isArrayOf_sci_LazyList(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.LazyList;", depth))
}
const $d_sci_LazyList = new $TypeData().initClass({
  sci_LazyList: 0
}, false, "scala.collection.immutable.LazyList", {
  sci_LazyList: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_LazyList.prototype.$classData = $d_sci_LazyList;
class $c_sci_WrappedString extends $c_sci_AbstractSeq {
  constructor(self) {
    super();
    this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = null;
    this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self = self
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_StringView(this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    const x = $uI(this$1.length);
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $uI(this$1.length)
  };
  length__I() {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $uI(this$1.length)
  };
  toString__T() {
    return this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self
  };
  sameElements__sc_IterableOnce__Z(o) {
    if ((o instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(o);
      return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
    } else {
      return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
    }
  };
  className__T() {
    return "WrappedString"
  };
  applyPreferredMaxLength__I() {
    return 2147483647
  };
  equals__O__Z(other) {
    if ((other instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(other);
      return (this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self === x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self)
    } else {
      return $f_sc_Seq__equals__O__Z(this, other)
    }
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_IndexedSeq$()
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $m_sci_WrappedString$().fromSpecific__sc_IterableOnce__sci_WrappedString(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $m_sci_WrappedString$().fromSpecific__sc_IterableOnce__sci_WrappedString(coll)
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
  apply__I__O(i) {
    const this$1 = this.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
    return $bC((65535 & $uI(this$1.charCodeAt(i))))
  };
}
function $as_sci_WrappedString(obj) {
  return (((obj instanceof $c_sci_WrappedString) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.WrappedString"))
}
function $isArrayOf_sci_WrappedString(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_WrappedString)))
}
function $asArrayOf_sci_WrappedString(obj, depth) {
  return (($isArrayOf_sci_WrappedString(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.WrappedString;", depth))
}
const $d_sci_WrappedString = new $TypeData().initClass({
  sci_WrappedString: 0
}, false, "scala.collection.immutable.WrappedString", {
  sci_WrappedString: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  Ljava_io_Serializable: 1
});
$c_sci_WrappedString.prototype.$classData = $d_sci_WrappedString;
class $c_sjsr_WrappedVarArgs extends $c_O {
  constructor(array) {
    super();
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = null;
    this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array = array
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  applyPreferredMaxLength__I() {
    return $m_sci_IndexedSeqDefaults$().sci_IndexedSeqDefaults$__f_defaultApplyPreferredMaxLength
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  equals__O__Z(o) {
    return $f_sc_Seq__equals__O__Z(this, o)
  };
  hashCode__I() {
    return $m_s_util_hashing_MurmurHash3$().seqHash__sc_Seq__I(this)
  };
  toString__T() {
    return $f_sc_Iterable__toString__T(this)
  };
  isEmpty__Z() {
    return $f_sc_SeqOps__isEmpty__Z(this)
  };
  head__O() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1).next__O()
  };
  tail__O() {
    return $f_sc_IterableOps__tail__O(this)
  };
  addString__scm_StringBuilder__T__T__T__scm_StringBuilder(b, start, sep, end) {
    return $f_sc_IterableOnceOps__addString__scm_StringBuilder__T__T__T__scm_StringBuilder(this, b, start, sep, end)
  };
  length__I() {
    return $uI(this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array.length)
  };
  apply__I__O(idx) {
    return this.sjsr_WrappedVarArgs__f_scala$scalajs$runtime$WrappedVarArgs$$array[idx]
  };
  className__T() {
    return "WrappedVarArgs"
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    const this$1 = $m_sjsr_WrappedVarArgs$();
    return this$1.from__sc_IterableOnce__sjsr_WrappedVarArgs(coll)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
}
function $as_sjsr_WrappedVarArgs(obj) {
  return (((obj instanceof $c_sjsr_WrappedVarArgs) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.runtime.WrappedVarArgs"))
}
function $isArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjsr_WrappedVarArgs)))
}
function $asArrayOf_sjsr_WrappedVarArgs(obj, depth) {
  return (($isArrayOf_sjsr_WrappedVarArgs(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.runtime.WrappedVarArgs;", depth))
}
const $d_sjsr_WrappedVarArgs = new $TypeData().initClass({
  sjsr_WrappedVarArgs: 0
}, false, "scala.scalajs.runtime.WrappedVarArgs", {
  sjsr_WrappedVarArgs: 1,
  O: 1,
  sci_IndexedSeq: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_SeqOps: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  Ljava_io_Serializable: 1
});
$c_sjsr_WrappedVarArgs.prototype.$classData = $d_sjsr_WrappedVarArgs;
class $c_scm_AbstractBuffer extends $c_scm_AbstractSeq {
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
}
const $p_Lscalatags_JsDom$all$__h2$lzycompute__Lscalatags_JsDom$TypedTag = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$0;
  const lo = (256 & b.RTLong__f_lo);
  if ((lo === 0)) {
    const ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    $thiz.Lscalatags_JsDom$all$__f_h2 = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, "h2", false, ns));
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$0;
    const lo$1 = (256 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$0 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_h2
});
const $p_Lscalatags_JsDom$all$__div$lzycompute__Lscalatags_JsDom$TypedTag = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$0;
  const lo = (134217728 & b.RTLong__f_lo);
  if ((lo === 0)) {
    const ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    $thiz.Lscalatags_JsDom$all$__f_div = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, "div", false, ns));
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$0;
    const lo$1 = (134217728 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$0 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_div
});
const $p_Lscalatags_JsDom$all$__button$lzycompute__Lscalatags_JsDom$TypedTag = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$1;
  const lo = (256 & b.RTLong__f_lo);
  if ((lo === 0)) {
    const ns = $m_Lscalatags_generic_Namespace$().Lscalatags_generic_Namespace$__f_htmlNamespaceConfig;
    $thiz.Lscalatags_JsDom$all$__f_button = $as_Lscalatags_JsDom$TypedTag($f_Lscalatags_jsdom_TagFactory__typedTag__T__Z__Lscalatags_generic_Namespace__Lscalatags_generic_TypedTag($thiz, "button", false, ns));
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$1;
    const lo$1 = (256 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$1 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_button
});
const $p_Lscalatags_JsDom$all$__onclick$lzycompute__Lscalatags_generic_Attr = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$3;
  const lo = (4096 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lscalatags_JsDom$all$__f_onclick = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "onclick", null, false);
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$3;
    const lo$1 = (4096 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$3 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_onclick
});
const $p_Lscalatags_JsDom$all$__class$lzycompute__Lscalatags_generic_Attr = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$4;
  const lo = (67108864 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lscalatags_JsDom$all$__f_class = $f_Lscalatags_generic_Util__attr__T__Lscalatags_generic_Namespace__Z__Lscalatags_generic_Attr($thiz, "class", null, false);
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$4;
    const lo$1 = (67108864 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$4 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_class
});
const $p_Lscalatags_JsDom$all$__cls$lzycompute__Lscalatags_generic_Attr = (function($thiz) {
  const b = $thiz.Lscalatags_JsDom$all$__f_bitmap$4;
  const lo = (134217728 & b.RTLong__f_lo);
  if ((lo === 0)) {
    $thiz.Lscalatags_JsDom$all$__f_cls = $thiz.class__Lscalatags_generic_Attr();
    const b$1 = $thiz.Lscalatags_JsDom$all$__f_bitmap$4;
    const lo$1 = (134217728 | b$1.RTLong__f_lo);
    const hi = b$1.RTLong__f_hi;
    $thiz.Lscalatags_JsDom$all$__f_bitmap$4 = new $c_RTLong(lo$1, hi)
  };
  return $thiz.Lscalatags_JsDom$all$__f_cls
});
class $c_Lscalatags_JsDom$all$ extends $c_O {
  constructor() {
    super();
    this.Lscalatags_JsDom$all$__f_bindJsAny$module = null;
    this.Lscalatags_JsDom$all$__f_RawFrag = null;
    this.Lscalatags_JsDom$all$__f_StringFrag = null;
    this.Lscalatags_JsDom$all$__f_HtmlTag = null;
    this.Lscalatags_JsDom$all$__f_SvgTag = null;
    this.Lscalatags_JsDom$all$__f_Tag = null;
    this.Lscalatags_JsDom$all$__f_stringAttr = null;
    this.Lscalatags_JsDom$all$__f_booleanAttr = null;
    this.Lscalatags_JsDom$all$__f_byteAttr = null;
    this.Lscalatags_JsDom$all$__f_shortAttr = null;
    this.Lscalatags_JsDom$all$__f_intAttr = null;
    this.Lscalatags_JsDom$all$__f_longAttr = null;
    this.Lscalatags_JsDom$all$__f_floatAttr = null;
    this.Lscalatags_JsDom$all$__f_doubleAttr = null;
    this.Lscalatags_JsDom$all$__f_stringStyle = null;
    this.Lscalatags_JsDom$all$__f_booleanStyle = null;
    this.Lscalatags_JsDom$all$__f_byteStyle = null;
    this.Lscalatags_JsDom$all$__f_shortStyle = null;
    this.Lscalatags_JsDom$all$__f_intStyle = null;
    this.Lscalatags_JsDom$all$__f_longStyle = null;
    this.Lscalatags_JsDom$all$__f_floatStyle = null;
    this.Lscalatags_JsDom$all$__f_doubleStyle = null;
    this.Lscalatags_JsDom$all$__f_stringPixelStyle = null;
    this.Lscalatags_JsDom$all$__f_booleanPixelStyle = null;
    this.Lscalatags_JsDom$all$__f_bytePixelStyle = null;
    this.Lscalatags_JsDom$all$__f_shortPixelStyle = null;
    this.Lscalatags_JsDom$all$__f_intPixelStyle = null;
    this.Lscalatags_JsDom$all$__f_longPixelStyle = null;
    this.Lscalatags_JsDom$all$__f_floatPixelStyle = null;
    this.Lscalatags_JsDom$all$__f_doublePixelStyle = null;
    this.Lscalatags_JsDom$all$__f_html = null;
    this.Lscalatags_JsDom$all$__f_head = null;
    this.Lscalatags_JsDom$all$__f_base = null;
    this.Lscalatags_JsDom$all$__f_link = null;
    this.Lscalatags_JsDom$all$__f_meta = null;
    this.Lscalatags_JsDom$all$__f_script = null;
    this.Lscalatags_JsDom$all$__f_body = null;
    this.Lscalatags_JsDom$all$__f_h1 = null;
    this.Lscalatags_JsDom$all$__f_h2 = null;
    this.Lscalatags_JsDom$all$__f_h3 = null;
    this.Lscalatags_JsDom$all$__f_h4 = null;
    this.Lscalatags_JsDom$all$__f_h5 = null;
    this.Lscalatags_JsDom$all$__f_h6 = null;
    this.Lscalatags_JsDom$all$__f_header = null;
    this.Lscalatags_JsDom$all$__f_footer = null;
    this.Lscalatags_JsDom$all$__f_p = null;
    this.Lscalatags_JsDom$all$__f_hr = null;
    this.Lscalatags_JsDom$all$__f_pre = null;
    this.Lscalatags_JsDom$all$__f_blockquote = null;
    this.Lscalatags_JsDom$all$__f_ol = null;
    this.Lscalatags_JsDom$all$__f_ul = null;
    this.Lscalatags_JsDom$all$__f_li = null;
    this.Lscalatags_JsDom$all$__f_dl = null;
    this.Lscalatags_JsDom$all$__f_dt = null;
    this.Lscalatags_JsDom$all$__f_dd = null;
    this.Lscalatags_JsDom$all$__f_figure = null;
    this.Lscalatags_JsDom$all$__f_figcaption = null;
    this.Lscalatags_JsDom$all$__f_div = null;
    this.Lscalatags_JsDom$all$__f_a = null;
    this.Lscalatags_JsDom$all$__f_em = null;
    this.Lscalatags_JsDom$all$__f_strong = null;
    this.Lscalatags_JsDom$all$__f_small = null;
    this.Lscalatags_JsDom$all$__f_s = null;
    this.Lscalatags_JsDom$all$__f_cite = null;
    this.Lscalatags_JsDom$all$__f_code = null;
    this.Lscalatags_JsDom$all$__f_sub = null;
    this.Lscalatags_JsDom$all$__f_sup = null;
    this.Lscalatags_JsDom$all$__f_i = null;
    this.Lscalatags_JsDom$all$__f_b = null;
    this.Lscalatags_JsDom$all$__f_u = null;
    this.Lscalatags_JsDom$all$__f_span = null;
    this.Lscalatags_JsDom$all$__f_br = null;
    this.Lscalatags_JsDom$all$__f_wbr = null;
    this.Lscalatags_JsDom$all$__f_ins = null;
    this.Lscalatags_JsDom$all$__f_del = null;
    this.Lscalatags_JsDom$all$__f_img = null;
    this.Lscalatags_JsDom$all$__f_iframe = null;
    this.Lscalatags_JsDom$all$__f_embed = null;
    this.Lscalatags_JsDom$all$__f_object = null;
    this.Lscalatags_JsDom$all$__f_param = null;
    this.Lscalatags_JsDom$all$__f_video = null;
    this.Lscalatags_JsDom$all$__f_audio = null;
    this.Lscalatags_JsDom$all$__f_source = null;
    this.Lscalatags_JsDom$all$__f_track = null;
    this.Lscalatags_JsDom$all$__f_canvas = null;
    this.Lscalatags_JsDom$all$__f_map = null;
    this.Lscalatags_JsDom$all$__f_area = null;
    this.Lscalatags_JsDom$all$__f_table = null;
    this.Lscalatags_JsDom$all$__f_caption = null;
    this.Lscalatags_JsDom$all$__f_colgroup = null;
    this.Lscalatags_JsDom$all$__f_col = null;
    this.Lscalatags_JsDom$all$__f_tbody = null;
    this.Lscalatags_JsDom$all$__f_thead = null;
    this.Lscalatags_JsDom$all$__f_tfoot = null;
    this.Lscalatags_JsDom$all$__f_tr = null;
    this.Lscalatags_JsDom$all$__f_td = null;
    this.Lscalatags_JsDom$all$__f_th = null;
    this.Lscalatags_JsDom$all$__f_form = null;
    this.Lscalatags_JsDom$all$__f_fieldset = null;
    this.Lscalatags_JsDom$all$__f_legend = null;
    this.Lscalatags_JsDom$all$__f_label = null;
    this.Lscalatags_JsDom$all$__f_input = null;
    this.Lscalatags_JsDom$all$__f_button = null;
    this.Lscalatags_JsDom$all$__f_select = null;
    this.Lscalatags_JsDom$all$__f_datalist = null;
    this.Lscalatags_JsDom$all$__f_optgroup = null;
    this.Lscalatags_JsDom$all$__f_option = null;
    this.Lscalatags_JsDom$all$__f_textarea = null;
    this.Lscalatags_JsDom$all$__f_backgroundAttachment$module = null;
    this.Lscalatags_JsDom$all$__f_background = null;
    this.Lscalatags_JsDom$all$__f_backgroundRepeat = null;
    this.Lscalatags_JsDom$all$__f_backgroundPosition = null;
    this.Lscalatags_JsDom$all$__f_backgroundColor = null;
    this.Lscalatags_JsDom$all$__f_backgroundOrigin$module = null;
    this.Lscalatags_JsDom$all$__f_backgroundClip$module = null;
    this.Lscalatags_JsDom$all$__f_backgroundSize$module = null;
    this.Lscalatags_JsDom$all$__f_backgroundImage = null;
    this.Lscalatags_JsDom$all$__f_borderTopColor = null;
    this.Lscalatags_JsDom$all$__f_borderStyle = null;
    this.Lscalatags_JsDom$all$__f_borderTopStyle = null;
    this.Lscalatags_JsDom$all$__f_borderRightStyle = null;
    this.Lscalatags_JsDom$all$__f_borderRightWidth = null;
    this.Lscalatags_JsDom$all$__f_borderTopRightRadius = null;
    this.Lscalatags_JsDom$all$__f_borderBottomLeftRadius = null;
    this.Lscalatags_JsDom$all$__f_borderRightColor = null;
    this.Lscalatags_JsDom$all$__f_borderBottom = null;
    this.Lscalatags_JsDom$all$__f_border = null;
    this.Lscalatags_JsDom$all$__f_borderBottomWidth = null;
    this.Lscalatags_JsDom$all$__f_borderLeftColor = null;
    this.Lscalatags_JsDom$all$__f_borderBottomColor = null;
    this.Lscalatags_JsDom$all$__f_borderCollapse$module = null;
    this.Lscalatags_JsDom$all$__f_borderLeft = null;
    this.Lscalatags_JsDom$all$__f_borderLeftStyle = null;
    this.Lscalatags_JsDom$all$__f_borderRight = null;
    this.Lscalatags_JsDom$all$__f_borderBottomStyle = null;
    this.Lscalatags_JsDom$all$__f_borderLeftWidth = null;
    this.Lscalatags_JsDom$all$__f_borderTopWidth = null;
    this.Lscalatags_JsDom$all$__f_borderTop = null;
    this.Lscalatags_JsDom$all$__f_borderSpacing$module = null;
    this.Lscalatags_JsDom$all$__f_borderRadius = null;
    this.Lscalatags_JsDom$all$__f_borderWidth = null;
    this.Lscalatags_JsDom$all$__f_borderBottomRightRadius = null;
    this.Lscalatags_JsDom$all$__f_borderTopLeftRadius = null;
    this.Lscalatags_JsDom$all$__f_borderColor = null;
    this.Lscalatags_JsDom$all$__f_boxSizing$module = null;
    this.Lscalatags_JsDom$all$__f_color$module = null;
    this.Lscalatags_JsDom$all$__f_clip$module = null;
    this.Lscalatags_JsDom$all$__f_cursor$module = null;
    this.Lscalatags_JsDom$all$__f_float$module = null;
    this.Lscalatags_JsDom$all$__f_direction$module = null;
    this.Lscalatags_JsDom$all$__f_display$module = null;
    this.Lscalatags_JsDom$all$__f_pointerEvents$module = null;
    this.Lscalatags_JsDom$all$__f_listStyleImage$module = null;
    this.Lscalatags_JsDom$all$__f_listStylePosition$module = null;
    this.Lscalatags_JsDom$all$__f_wordWrap$module = null;
    this.Lscalatags_JsDom$all$__f_opacity = null;
    this.Lscalatags_JsDom$all$__f_maxWidth = null;
    this.Lscalatags_JsDom$all$__f_verticalAlign$module = null;
    this.Lscalatags_JsDom$all$__f_overflow$module = null;
    this.Lscalatags_JsDom$all$__f_mask$module = null;
    this.Lscalatags_JsDom$all$__f_emptyCells$module = null;
    this.Lscalatags_JsDom$all$__f_height = null;
    this.Lscalatags_JsDom$all$__f_paddingRight = null;
    this.Lscalatags_JsDom$all$__f_paddingTop = null;
    this.Lscalatags_JsDom$all$__f_paddingLeft = null;
    this.Lscalatags_JsDom$all$__f_padding = null;
    this.Lscalatags_JsDom$all$__f_paddingBottom = null;
    this.Lscalatags_JsDom$all$__f_right = null;
    this.Lscalatags_JsDom$all$__f_lineHeight = null;
    this.Lscalatags_JsDom$all$__f_left = null;
    this.Lscalatags_JsDom$all$__f_listStyleType$module = null;
    this.Lscalatags_JsDom$all$__f_listStyle = null;
    this.Lscalatags_JsDom$all$__f_overflowY = null;
    this.Lscalatags_JsDom$all$__f_captionSide$module = null;
    this.Lscalatags_JsDom$all$__f_boxShadow = null;
    this.Lscalatags_JsDom$all$__f_position$module = null;
    this.Lscalatags_JsDom$all$__f_quotes$module = null;
    this.Lscalatags_JsDom$all$__f_tableLayout$module = null;
    this.Lscalatags_JsDom$all$__f_fontSize$module = null;
    this.Lscalatags_JsDom$all$__f_fontSizeAdjust = null;
    this.Lscalatags_JsDom$all$__f_fontFamily = null;
    this.Lscalatags_JsDom$all$__f_fontWeight$module = null;
    this.Lscalatags_JsDom$all$__f_font = null;
    this.Lscalatags_JsDom$all$__f_fontFeatureSettings = null;
    this.Lscalatags_JsDom$all$__f_fontStyle$module = null;
    this.Lscalatags_JsDom$all$__f_clear$module = null;
    this.Lscalatags_JsDom$all$__f_marginBottom = null;
    this.Lscalatags_JsDom$all$__f_marginRight = null;
    this.Lscalatags_JsDom$all$__f_marginTop = null;
    this.Lscalatags_JsDom$all$__f_marginLeft = null;
    this.Lscalatags_JsDom$all$__f_margin$module = null;
    this.Lscalatags_JsDom$all$__f_top = null;
    this.Lscalatags_JsDom$all$__f_width = null;
    this.Lscalatags_JsDom$all$__f_bottom = null;
    this.Lscalatags_JsDom$all$__f_letterSpacing = null;
    this.Lscalatags_JsDom$all$__f_maxHeight = null;
    this.Lscalatags_JsDom$all$__f_minWidth = null;
    this.Lscalatags_JsDom$all$__f_minHeight = null;
    this.Lscalatags_JsDom$all$__f_outline = null;
    this.Lscalatags_JsDom$all$__f_outlineStyle = null;
    this.Lscalatags_JsDom$all$__f_outlineWidth$module = null;
    this.Lscalatags_JsDom$all$__f_outlineColor$module = null;
    this.Lscalatags_JsDom$all$__f_overflowX = null;
    this.Lscalatags_JsDom$all$__f_textAlignLast = null;
    this.Lscalatags_JsDom$all$__f_textAlign = null;
    this.Lscalatags_JsDom$all$__f_textDecoration$module = null;
    this.Lscalatags_JsDom$all$__f_textIndent = null;
    this.Lscalatags_JsDom$all$__f_textOverflow$module = null;
    this.Lscalatags_JsDom$all$__f_textUnderlinePosition$module = null;
    this.Lscalatags_JsDom$all$__f_textTransform$module = null;
    this.Lscalatags_JsDom$all$__f_textShadow = null;
    this.Lscalatags_JsDom$all$__f_transitionDelay = null;
    this.Lscalatags_JsDom$all$__f_transition = null;
    this.Lscalatags_JsDom$all$__f_transitionTimingFunction = null;
    this.Lscalatags_JsDom$all$__f_transitionDuration = null;
    this.Lscalatags_JsDom$all$__f_transitionProperty = null;
    this.Lscalatags_JsDom$all$__f_visibility$module = null;
    this.Lscalatags_JsDom$all$__f_whiteSpace$module = null;
    this.Lscalatags_JsDom$all$__f_wordSpacing = null;
    this.Lscalatags_JsDom$all$__f_zIndex = null;
    this.Lscalatags_JsDom$all$__f_flex = null;
    this.Lscalatags_JsDom$all$__f_flexBasis = null;
    this.Lscalatags_JsDom$all$__f_flexGrow = null;
    this.Lscalatags_JsDom$all$__f_flexShrink = null;
    this.Lscalatags_JsDom$all$__f_alignContent$module = null;
    this.Lscalatags_JsDom$all$__f_alignSelf$module = null;
    this.Lscalatags_JsDom$all$__f_flexWrap$module = null;
    this.Lscalatags_JsDom$all$__f_alignItems$module = null;
    this.Lscalatags_JsDom$all$__f_justifyContent$module = null;
    this.Lscalatags_JsDom$all$__f_flexDirection$module = null;
    this.Lscalatags_JsDom$all$__f_href = null;
    this.Lscalatags_JsDom$all$__f_alt = null;
    this.Lscalatags_JsDom$all$__f_rel = null;
    this.Lscalatags_JsDom$all$__f_src = null;
    this.Lscalatags_JsDom$all$__f_xmlns = null;
    this.Lscalatags_JsDom$all$__f_accept = null;
    this.Lscalatags_JsDom$all$__f_charset = null;
    this.Lscalatags_JsDom$all$__f_disabled = null;
    this.Lscalatags_JsDom$all$__f_for = null;
    this.Lscalatags_JsDom$all$__f_rows = null;
    this.Lscalatags_JsDom$all$__f_cols = null;
    this.Lscalatags_JsDom$all$__f_role = null;
    this.Lscalatags_JsDom$all$__f_content = null;
    this.Lscalatags_JsDom$all$__f_httpEquiv = null;
    this.Lscalatags_JsDom$all$__f_media = null;
    this.Lscalatags_JsDom$all$__f_colspan = null;
    this.Lscalatags_JsDom$all$__f_rowspan = null;
    this.Lscalatags_JsDom$all$__f_wrap = null;
    this.Lscalatags_JsDom$all$__f_defer = null;
    this.Lscalatags_JsDom$all$__f_aria$module = null;
    this.Lscalatags_JsDom$all$__f_scoped = null;
    this.Lscalatags_JsDom$all$__f_high = null;
    this.Lscalatags_JsDom$all$__f_low = null;
    this.Lscalatags_JsDom$all$__f_optimum = null;
    this.Lscalatags_JsDom$all$__f_unselectable = null;
    this.Lscalatags_JsDom$all$__f_onblur = null;
    this.Lscalatags_JsDom$all$__f_onchange = null;
    this.Lscalatags_JsDom$all$__f_onfocus = null;
    this.Lscalatags_JsDom$all$__f_onselect = null;
    this.Lscalatags_JsDom$all$__f_onsubmit = null;
    this.Lscalatags_JsDom$all$__f_onreset = null;
    this.Lscalatags_JsDom$all$__f_oncontextmenu = null;
    this.Lscalatags_JsDom$all$__f_oninput = null;
    this.Lscalatags_JsDom$all$__f_oninvalid = null;
    this.Lscalatags_JsDom$all$__f_onsearch = null;
    this.Lscalatags_JsDom$all$__f_selected = null;
    this.Lscalatags_JsDom$all$__f_onload = null;
    this.Lscalatags_JsDom$all$__f_onafterprint = null;
    this.Lscalatags_JsDom$all$__f_onbeforeprint = null;
    this.Lscalatags_JsDom$all$__f_onbeforeunload = null;
    this.Lscalatags_JsDom$all$__f_onhashchange = null;
    this.Lscalatags_JsDom$all$__f_onmessage = null;
    this.Lscalatags_JsDom$all$__f_onoffline = null;
    this.Lscalatags_JsDom$all$__f_ononline = null;
    this.Lscalatags_JsDom$all$__f_onpagehide = null;
    this.Lscalatags_JsDom$all$__f_onpageshow = null;
    this.Lscalatags_JsDom$all$__f_onpopstate = null;
    this.Lscalatags_JsDom$all$__f_onresize = null;
    this.Lscalatags_JsDom$all$__f_onstorage = null;
    this.Lscalatags_JsDom$all$__f_onunload = null;
    this.Lscalatags_JsDom$all$__f_onclick = null;
    this.Lscalatags_JsDom$all$__f_ondblclick = null;
    this.Lscalatags_JsDom$all$__f_ondrag = null;
    this.Lscalatags_JsDom$all$__f_ondragend = null;
    this.Lscalatags_JsDom$all$__f_ondragenter = null;
    this.Lscalatags_JsDom$all$__f_ondragleave = null;
    this.Lscalatags_JsDom$all$__f_ondragover = null;
    this.Lscalatags_JsDom$all$__f_ondragstart = null;
    this.Lscalatags_JsDom$all$__f_ondrop = null;
    this.Lscalatags_JsDom$all$__f_onmousedown = null;
    this.Lscalatags_JsDom$all$__f_onmousemove = null;
    this.Lscalatags_JsDom$all$__f_onmouseout = null;
    this.Lscalatags_JsDom$all$__f_onmouseover = null;
    this.Lscalatags_JsDom$all$__f_onmouseup = null;
    this.Lscalatags_JsDom$all$__f_onscroll = null;
    this.Lscalatags_JsDom$all$__f_onwheel = null;
    this.Lscalatags_JsDom$all$__f_onkeydown = null;
    this.Lscalatags_JsDom$all$__f_onkeyup = null;
    this.Lscalatags_JsDom$all$__f_onkeypress = null;
    this.Lscalatags_JsDom$all$__f_onshow = null;
    this.Lscalatags_JsDom$all$__f_ontoggle = null;
    this.Lscalatags_JsDom$all$__f_onabort = null;
    this.Lscalatags_JsDom$all$__f_oncanplay = null;
    this.Lscalatags_JsDom$all$__f_oncanplaythrough = null;
    this.Lscalatags_JsDom$all$__f_oncuechange = null;
    this.Lscalatags_JsDom$all$__f_ondurationchange = null;
    this.Lscalatags_JsDom$all$__f_onemptied = null;
    this.Lscalatags_JsDom$all$__f_onended = null;
    this.Lscalatags_JsDom$all$__f_onloadeddata = null;
    this.Lscalatags_JsDom$all$__f_onloadedmetadata = null;
    this.Lscalatags_JsDom$all$__f_onloadstart = null;
    this.Lscalatags_JsDom$all$__f_onpause = null;
    this.Lscalatags_JsDom$all$__f_onplay = null;
    this.Lscalatags_JsDom$all$__f_onplaying = null;
    this.Lscalatags_JsDom$all$__f_onprogress = null;
    this.Lscalatags_JsDom$all$__f_onratechange = null;
    this.Lscalatags_JsDom$all$__f_onseeked = null;
    this.Lscalatags_JsDom$all$__f_onseeking = null;
    this.Lscalatags_JsDom$all$__f_onstalled = null;
    this.Lscalatags_JsDom$all$__f_onsuspend = null;
    this.Lscalatags_JsDom$all$__f_ontimeupdate = null;
    this.Lscalatags_JsDom$all$__f_onvolumechange = null;
    this.Lscalatags_JsDom$all$__f_onwaiting = null;
    this.Lscalatags_JsDom$all$__f_onerror = null;
    this.Lscalatags_JsDom$all$__f_oncopy = null;
    this.Lscalatags_JsDom$all$__f_oncut = null;
    this.Lscalatags_JsDom$all$__f_onpaste = null;
    this.Lscalatags_JsDom$all$__f_action = null;
    this.Lscalatags_JsDom$all$__f_autocomplete = null;
    this.Lscalatags_JsDom$all$__f_autofocus = null;
    this.Lscalatags_JsDom$all$__f_checked = null;
    this.Lscalatags_JsDom$all$__f_enctype = null;
    this.Lscalatags_JsDom$all$__f_formA = null;
    this.Lscalatags_JsDom$all$__f_formaction = null;
    this.Lscalatags_JsDom$all$__f_formenctype = null;
    this.Lscalatags_JsDom$all$__f_formmethod = null;
    this.Lscalatags_JsDom$all$__f_formnovalidate = null;
    this.Lscalatags_JsDom$all$__f_formtarget = null;
    this.Lscalatags_JsDom$all$__f_heightA = null;
    this.Lscalatags_JsDom$all$__f_list = null;
    this.Lscalatags_JsDom$all$__f_max = null;
    this.Lscalatags_JsDom$all$__f_min = null;
    this.Lscalatags_JsDom$all$__f_multiple = null;
    this.Lscalatags_JsDom$all$__f_minlength = null;
    this.Lscalatags_JsDom$all$__f_maxlength = null;
    this.Lscalatags_JsDom$all$__f_method = null;
    this.Lscalatags_JsDom$all$__f_name = null;
    this.Lscalatags_JsDom$all$__f_pattern = null;
    this.Lscalatags_JsDom$all$__f_placeholder = null;
    this.Lscalatags_JsDom$all$__f_readonly = null;
    this.Lscalatags_JsDom$all$__f_required = null;
    this.Lscalatags_JsDom$all$__f_size = null;
    this.Lscalatags_JsDom$all$__f_step = null;
    this.Lscalatags_JsDom$all$__f_target = null;
    this.Lscalatags_JsDom$all$__f_type = null;
    this.Lscalatags_JsDom$all$__f_tpe = null;
    this.Lscalatags_JsDom$all$__f_value = null;
    this.Lscalatags_JsDom$all$__f_widthA = null;
    this.Lscalatags_JsDom$all$__f_accesskey = null;
    this.Lscalatags_JsDom$all$__f_class = null;
    this.Lscalatags_JsDom$all$__f_cls = null;
    this.Lscalatags_JsDom$all$__f_contenteditable = null;
    this.Lscalatags_JsDom$all$__f_contextmenu = null;
    this.Lscalatags_JsDom$all$__f_data$module = null;
    this.Lscalatags_JsDom$all$__f_dir = null;
    this.Lscalatags_JsDom$all$__f_draggable = null;
    this.Lscalatags_JsDom$all$__f_dropzone = null;
    this.Lscalatags_JsDom$all$__f_hidden = null;
    this.Lscalatags_JsDom$all$__f_id = null;
    this.Lscalatags_JsDom$all$__f_lang = null;
    this.Lscalatags_JsDom$all$__f_spellcheck = null;
    this.Lscalatags_JsDom$all$__f_style = null;
    this.Lscalatags_JsDom$all$__f_tabindex = null;
    this.Lscalatags_JsDom$all$__f_title = null;
    this.Lscalatags_JsDom$all$__f_translate = null;
    this.Lscalatags_JsDom$all$__f_bitmap$0 = $L0;
    this.Lscalatags_JsDom$all$__f_bitmap$1 = $L0;
    this.Lscalatags_JsDom$all$__f_bitmap$2 = $L0;
    this.Lscalatags_JsDom$all$__f_bitmap$3 = $L0;
    this.Lscalatags_JsDom$all$__f_bitmap$4 = $L0;
    $n_Lscalatags_JsDom$all$ = this;
    $f_Lscalatags_generic_MouseEventAttrs__$init$__V(this);
    $f_Lscalatags_generic_Aggregate__$init$__V(this);
    $f_Lscalatags_JsDom$Aggregate__$init$__V(this)
  };
  h2__Lscalatags_JsDom$TypedTag() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$0;
    const lo = (256 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__h2$lzycompute__Lscalatags_JsDom$TypedTag(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_h2
    }
  };
  div__Lscalatags_JsDom$TypedTag() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$0;
    const lo = (134217728 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__div$lzycompute__Lscalatags_JsDom$TypedTag(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_div
    }
  };
  button__Lscalatags_JsDom$TypedTag() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$1;
    const lo = (256 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__button$lzycompute__Lscalatags_JsDom$TypedTag(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_button
    }
  };
  onclick__Lscalatags_generic_Attr() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$3;
    const lo = (4096 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__onclick$lzycompute__Lscalatags_generic_Attr(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_onclick
    }
  };
  class__Lscalatags_generic_Attr() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$4;
    const lo = (67108864 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__class$lzycompute__Lscalatags_generic_Attr(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_class
    }
  };
  cls__Lscalatags_generic_Attr() {
    const b = this.Lscalatags_JsDom$all$__f_bitmap$4;
    const lo = (134217728 & b.RTLong__f_lo);
    if ((lo === 0)) {
      return $p_Lscalatags_JsDom$all$__cls$lzycompute__Lscalatags_generic_Attr(this)
    } else {
      return this.Lscalatags_JsDom$all$__f_cls
    }
  };
}
const $d_Lscalatags_JsDom$all$ = new $TypeData().initClass({
  Lscalatags_JsDom$all$: 0
}, false, "scalatags.JsDom$all$", {
  Lscalatags_JsDom$all$: 1,
  O: 1,
  Lscalatags_JsDom$Cap: 1,
  Lscalatags_generic_Util: 1,
  Lscalatags_generic_LowPriUtil: 1,
  Lscalatags_jsdom_TagFactory: 1,
  Lscalatags_generic_Attrs: 1,
  Lscalatags_generic_InputAttrs: 1,
  Lscalatags_generic_GlobalAttrs: 1,
  Lscalatags_generic_ClipboardEventAttrs: 1,
  Lscalatags_generic_MediaEventAttrs: 1,
  Lscalatags_generic_SharedEventAttrs: 1,
  Lscalatags_generic_MiscellaneousEventAttrs: 1,
  Lscalatags_generic_KeyboardEventAttrs: 1,
  Lscalatags_generic_MouseEventAttrs: 1,
  Lscalatags_generic_WindowEventAttrs: 1,
  Lscalatags_generic_FormEventAttrs: 1,
  Lscalatags_generic_Styles: 1,
  Lscalatags_generic_StyleMisc: 1,
  Lscalatags_jsdom_Tags: 1,
  Lscalatags_generic_Tags: 1,
  Lscalatags_DataConverters: 1,
  Lscalatags_JsDom$Aggregate: 1,
  Lscalatags_generic_Aggregate: 1,
  Lscalatags_generic_Aliases: 1,
  Lscalatags_LowPriorityImplicits: 1
});
$c_Lscalatags_JsDom$all$.prototype.$classData = $d_Lscalatags_JsDom$all$;
let $n_Lscalatags_JsDom$all$ = (void 0);
function $m_Lscalatags_JsDom$all$() {
  if ((!$n_Lscalatags_JsDom$all$)) {
    $n_Lscalatags_JsDom$all$ = new $c_Lscalatags_JsDom$all$()
  };
  return $n_Lscalatags_JsDom$all$
}
class $c_sci_ArraySeq {
}
function $as_sci_ArraySeq(obj) {
  return (((obj instanceof $c_sci_ArraySeq) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.ArraySeq"))
}
function $isArrayOf_sci_ArraySeq(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_ArraySeq)))
}
function $asArrayOf_sci_ArraySeq(obj, depth) {
  return (($isArrayOf_sci_ArraySeq(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.ArraySeq;", depth))
}
const $p_sci_List__loop$2__I__sci_List__I__I = (function($thiz, i, xs, len$1) {
  while (true) {
    if ((i === len$1)) {
      return (xs.isEmpty__Z() ? 0 : 1)
    } else if (xs.isEmpty__Z()) {
      return (-1)
    } else {
      const temp$i = ((1 + i) | 0);
      const temp$xs = $as_sci_List(xs.tail__O());
      i = temp$i;
      xs = temp$xs
    }
  }
});
const $p_sci_List__listEq$1__sci_List__sci_List__Z = (function($thiz, a, b) {
  while (true) {
    if ((a === b)) {
      return true
    } else {
      const aEmpty = a.isEmpty__Z();
      const bEmpty = b.isEmpty__Z();
      if (((!(aEmpty || bEmpty)) && $m_sr_BoxesRunTime$().equals__O__O__Z(a.head__O(), b.head__O()))) {
        const temp$a = $as_sci_List(a.tail__O());
        const temp$b = $as_sci_List(b.tail__O());
        a = temp$a;
        b = temp$b
      } else {
        return (aEmpty && bEmpty)
      }
    }
  }
});
class $c_sci_List extends $c_sci_AbstractSeq {
  iterator__sc_Iterator() {
    return new $c_sc_StrictOptimizedLinearSeqOps$$anon$1(this)
  };
  stringPrefix__T() {
    return "LinearSeq"
  };
  apply__I__O(n) {
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  sameElements__sc_IterableOnce__Z(that) {
    return $f_sc_LinearSeqOps__sameElements__sc_IterableOnce__Z(this, that)
  };
  isEmpty__Z() {
    return (this === $m_sci_Nil$())
  };
  length__I() {
    let these = this;
    let len = 0;
    while ((!these.isEmpty__Z())) {
      len = ((1 + len) | 0);
      these = $as_sci_List(these.tail__O())
    };
    return len
  };
  lengthCompare__I__I(len) {
    return ((len < 0) ? 1 : $p_sci_List__loop$2__I__sci_List__I__I(this, 0, this, len))
  };
  className__T() {
    return "List"
  };
  equals__O__Z(o) {
    if ((o instanceof $c_sci_List)) {
      const x2 = $as_sci_List(o);
      return $p_sci_List__listEq$1__sci_List__sci_List__Z(this, this, x2)
    } else {
      return $f_sc_Seq__equals__O__Z(this, o)
    }
  };
  apply__O__O(v1) {
    const n = $uI(v1);
    return $f_sc_LinearSeqOps__apply__I__O(this, n)
  };
  drop__I__O(n) {
    return $p_sc_StrictOptimizedLinearSeqOps__loop$2__I__sc_LinearSeq__sc_LinearSeq(this, n, this)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_List$()
  };
}
function $as_sci_List(obj) {
  return (((obj instanceof $c_sci_List) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.List"))
}
function $isArrayOf_sci_List(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_List)))
}
function $asArrayOf_sci_List(obj, depth) {
  return (($isArrayOf_sci_List(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.List;", depth))
}
const $p_sci_Vector__checkRangeConvert__I__I = (function($thiz, index) {
  const idx = ((index + $thiz.sci_Vector__f_startIndex) | 0);
  if (((index >= 0) && (idx < $thiz.sci_Vector__f_endIndex))) {
    return idx
  } else {
    throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + $thiz.sci_Vector__f_endIndex) | 0)) + ")"))
  }
});
const $p_sci_Vector__getElem__I__I__O = (function($thiz, index, xor) {
  if ((xor < 32)) {
    return $thiz.sci_Vector__f_display0.get((31 & index))
  } else if ((xor < 1024)) {
    return $thiz.sci_Vector__f_display1.get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else if ((xor < 32768)) {
    return $thiz.sci_Vector__f_display2.get((31 & ((index >>> 10) | 0))).get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else if ((xor < 1048576)) {
    return $thiz.sci_Vector__f_display3.get((31 & ((index >>> 15) | 0))).get((31 & ((index >>> 10) | 0))).get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else if ((xor < 33554432)) {
    return $thiz.sci_Vector__f_display4.get((31 & ((index >>> 20) | 0))).get((31 & ((index >>> 15) | 0))).get((31 & ((index >>> 10) | 0))).get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else if ((xor < 1073741824)) {
    return $thiz.sci_Vector__f_display5.get((31 & ((index >>> 25) | 0))).get((31 & ((index >>> 20) | 0))).get((31 & ((index >>> 15) | 0))).get((31 & ((index >>> 10) | 0))).get((31 & ((index >>> 5) | 0))).get((31 & index))
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $p_sci_Vector__gotoPosWritable__I__I__I__V = (function($thiz, oldIndex, newIndex, xor) {
  if ($thiz.sci_Vector__f_dirty) {
    $f_sci_VectorPointer__gotoPosWritable1__I__I__I__V($thiz, oldIndex, newIndex, xor)
  } else {
    $f_sci_VectorPointer__gotoPosWritable0__I__I__V($thiz, newIndex, xor);
    $thiz.sci_Vector__f_dirty = true
  }
});
const $p_sci_Vector__zeroLeft__AO__I__V = (function($thiz, array, index) {
  let i = 0;
  while ((i < index)) {
    array.set(i, null);
    i = ((1 + i) | 0)
  }
});
const $p_sci_Vector__copyRight__AO__I__AO = (function($thiz, array, left) {
  const copy = $asArrayOf_O(array.clone__O(), 1);
  $m_ju_Arrays$().fill__AO__I__I__O__V(copy, 0, left, null);
  return copy
});
const $p_sci_Vector__cleanLeftEdge__I__V = (function($thiz, cutIndex) {
  if ((cutIndex < 32)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, cutIndex)
  } else if ((cutIndex < 1024)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, ((cutIndex >>> 5) | 0)), 2)
  } else if ((cutIndex < 32768)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0))), 2);
    $thiz.sci_Vector__f_display2 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, ((cutIndex >>> 10) | 0)), 3)
  } else if ((cutIndex < 1048576)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0))), 2);
    $thiz.sci_Vector__f_display2 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0))), 3);
    $thiz.sci_Vector__f_display3 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, ((cutIndex >>> 15) | 0)), 4)
  } else if ((cutIndex < 33554432)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0))), 2);
    $thiz.sci_Vector__f_display2 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0))), 3);
    $thiz.sci_Vector__f_display3 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, (31 & ((cutIndex >>> 15) | 0))), 4);
    $thiz.sci_Vector__f_display4 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display4, ((cutIndex >>> 20) | 0)), 5)
  } else if ((cutIndex < 1073741824)) {
    $p_sci_Vector__zeroLeft__AO__I__V($thiz, $thiz.sci_Vector__f_display0, (31 & cutIndex));
    $thiz.sci_Vector__f_display1 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display1, (31 & ((cutIndex >>> 5) | 0))), 2);
    $thiz.sci_Vector__f_display2 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display2, (31 & ((cutIndex >>> 10) | 0))), 3);
    $thiz.sci_Vector__f_display3 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display3, (31 & ((cutIndex >>> 15) | 0))), 4);
    $thiz.sci_Vector__f_display4 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display4, (31 & ((cutIndex >>> 20) | 0))), 5);
    $thiz.sci_Vector__f_display5 = $asArrayOf_O($p_sci_Vector__copyRight__AO__I__AO($thiz, $thiz.sci_Vector__f_display5, ((cutIndex >>> 25) | 0)), 6)
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $p_sci_Vector__requiredDepth__I__I = (function($thiz, xor) {
  if ((xor < 32)) {
    return 1
  } else if ((xor < 1024)) {
    return 2
  } else if ((xor < 32768)) {
    return 3
  } else if ((xor < 1048576)) {
    return 4
  } else if ((xor < 33554432)) {
    return 5
  } else if ((xor < 1073741824)) {
    return 6
  } else {
    throw $ct_jl_IllegalArgumentException__(new $c_jl_IllegalArgumentException())
  }
});
const $p_sci_Vector__dropFront0__I__sci_Vector = (function($thiz, cutIndex) {
  const blockIndex = ((-32) & cutIndex);
  const xor = (cutIndex ^ (((-1) + $thiz.sci_Vector__f_endIndex) | 0));
  const d = $p_sci_Vector__requiredDepth__I__I($thiz, xor);
  const shift = (cutIndex & (~(((-1) + (1 << $imul(5, d))) | 0)));
  const s = new $c_sci_Vector(((cutIndex - shift) | 0), (($thiz.sci_Vector__f_endIndex - shift) | 0), ((blockIndex - shift) | 0));
  const depth = $thiz.sci_Vector__f_depth;
  $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, $thiz, depth);
  s.sci_Vector__f_dirty = $thiz.sci_Vector__f_dirty;
  $p_sci_Vector__gotoPosWritable__I__I__I__V(s, $thiz.sci_Vector__f_focus, blockIndex, ($thiz.sci_Vector__f_focus ^ blockIndex));
  $f_sci_VectorPointer__preClean__I__V(s, d);
  $p_sci_Vector__cleanLeftEdge__I__V(s, ((cutIndex - shift) | 0));
  return s
});
class $c_sci_Vector extends $c_sci_AbstractSeq {
  constructor(startIndex, endIndex, focus) {
    super();
    this.sci_Vector__f_startIndex = 0;
    this.sci_Vector__f_endIndex = 0;
    this.sci_Vector__f_focus = 0;
    this.sci_Vector__f_dirty = false;
    this.sci_Vector__f_depth = 0;
    this.sci_Vector__f_display0 = null;
    this.sci_Vector__f_display1 = null;
    this.sci_Vector__f_display2 = null;
    this.sci_Vector__f_display3 = null;
    this.sci_Vector__f_display4 = null;
    this.sci_Vector__f_display5 = null;
    this.sci_Vector__f_startIndex = startIndex;
    this.sci_Vector__f_endIndex = endIndex;
    this.sci_Vector__f_focus = focus;
    this.sci_Vector__f_dirty = false
  };
  canEqual__O__Z(that) {
    return $f_sci_IndexedSeq__canEqual__O__Z(this, that)
  };
  sameElements__sc_IterableOnce__Z(o) {
    return $f_sci_IndexedSeq__sameElements__sc_IterableOnce__Z(this, o)
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  lengthCompare__I__I(len) {
    const x = this.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.length__I()
  };
  depth__I() {
    return this.sci_Vector__f_depth
  };
  depth_$eq__I__V(x$1) {
    this.sci_Vector__f_depth = x$1
  };
  display0__AO() {
    return this.sci_Vector__f_display0
  };
  display0_$eq__AO__V(x$1) {
    this.sci_Vector__f_display0 = x$1
  };
  display1__AAO() {
    return this.sci_Vector__f_display1
  };
  display1_$eq__AAO__V(x$1) {
    this.sci_Vector__f_display1 = x$1
  };
  display2__AAAO() {
    return this.sci_Vector__f_display2
  };
  display2_$eq__AAAO__V(x$1) {
    this.sci_Vector__f_display2 = x$1
  };
  display3__AAAAO() {
    return this.sci_Vector__f_display3
  };
  display3_$eq__AAAAO__V(x$1) {
    this.sci_Vector__f_display3 = x$1
  };
  display4__AAAAAO() {
    return this.sci_Vector__f_display4
  };
  display4_$eq__AAAAAO__V(x$1) {
    this.sci_Vector__f_display4 = x$1
  };
  display5__AAAAAAO() {
    return this.sci_Vector__f_display5
  };
  display5_$eq__AAAAAAO__V(x$1) {
    this.sci_Vector__f_display5 = x$1
  };
  length__I() {
    return ((this.sci_Vector__f_endIndex - this.sci_Vector__f_startIndex) | 0)
  };
  initIterator__sci_VectorIterator__V(s) {
    const depth = this.sci_Vector__f_depth;
    $f_sci_VectorPointer__initFrom__sci_VectorPointer__I__V(s, this, depth);
    if (this.sci_Vector__f_dirty) {
      const index = this.sci_Vector__f_focus;
      $f_sci_VectorPointer__stabilize__I__V(s, index)
    };
    if ((s.sci_VectorIterator__f_depth > 1)) {
      const index$1 = this.sci_Vector__f_startIndex;
      const xor = (this.sci_Vector__f_startIndex ^ this.sci_Vector__f_focus);
      $f_sci_VectorPointer__gotoPos__I__I__V(s, index$1, xor)
    }
  };
  iterator__sc_Iterator() {
    if ($f_sc_SeqOps__isEmpty__Z(this)) {
      return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
    } else {
      const s = new $c_sci_VectorIterator(this.sci_Vector__f_startIndex, this.sci_Vector__f_endIndex);
      this.initIterator__sci_VectorIterator__V(s);
      return s
    }
  };
  apply__I__O(index) {
    const idx = $p_sci_Vector__checkRangeConvert__I__I(this, index);
    return $p_sci_Vector__getElem__I__I__O(this, idx, (idx ^ this.sci_Vector__f_focus))
  };
  drop__I__sci_Vector(n) {
    if ((n <= 0)) {
      return this
    } else if ((this.sci_Vector__f_startIndex < ((this.sci_Vector__f_endIndex - n) | 0))) {
      return $p_sci_Vector__dropFront0__I__sci_Vector(this, ((this.sci_Vector__f_startIndex + n) | 0))
    } else {
      const this$1 = $m_sci_Vector$();
      return this$1.sci_Vector$__f_NIL
    }
  };
  head__O() {
    if ($f_sc_SeqOps__isEmpty__Z(this)) {
      throw new $c_ju_NoSuchElementException("empty.head")
    };
    return this.apply__I__O(0)
  };
  tail__sci_Vector() {
    if ($f_sc_SeqOps__isEmpty__Z(this)) {
      throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "empty.tail")
    };
    return this.drop__I__sci_Vector(1)
  };
  applyPreferredMaxLength__I() {
    return $m_sci_Vector$().sci_Vector$__f_scala$collection$immutable$Vector$$defaultApplyPreferredMaxLength
  };
  equals__O__Z(o) {
    if ((o instanceof $c_sci_Vector)) {
      const x2 = $as_sci_Vector(o);
      return ((this === x2) || ((this.length__I() === x2.length__I()) && (((((((((this.sci_Vector__f_startIndex === x2.sci_Vector__f_startIndex) && (this.sci_Vector__f_endIndex === x2.sci_Vector__f_endIndex)) && (this.sci_Vector__f_display0 === x2.sci_Vector__f_display0)) && (this.sci_Vector__f_display1 === x2.sci_Vector__f_display1)) && (this.sci_Vector__f_display2 === x2.sci_Vector__f_display2)) && (this.sci_Vector__f_display3 === x2.sci_Vector__f_display3)) && (this.sci_Vector__f_display4 === x2.sci_Vector__f_display4)) && (this.sci_Vector__f_display5 === x2.sci_Vector__f_display5)) || $f_sc_Seq__equals__O__Z(this, o))))
    } else {
      return $f_sc_Seq__equals__O__Z(this, o)
    }
  };
  className__T() {
    return "Vector"
  };
  tail__O() {
    return this.tail__sci_Vector()
  };
  drop__I__O(n) {
    return this.drop__I__sci_Vector(n)
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sci_Vector$()
  };
}
function $as_sci_Vector(obj) {
  return (((obj instanceof $c_sci_Vector) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.immutable.Vector"))
}
function $isArrayOf_sci_Vector(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sci_Vector)))
}
function $asArrayOf_sci_Vector(obj, depth) {
  return (($isArrayOf_sci_Vector(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.immutable.Vector;", depth))
}
const $d_sci_Vector = new $TypeData().initClass({
  sci_Vector: 0
}, false, "scala.collection.immutable.Vector", {
  sci_Vector: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  sci_IndexedSeqOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_VectorPointer: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_sci_Vector.prototype.$classData = $d_sci_Vector;
class $c_scm_ArraySeq$ofChar {
}
function $as_scm_ArraySeq$ofChar(obj) {
  return (((obj instanceof $c_scm_ArraySeq$ofChar) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArraySeq$ofChar"))
}
function $isArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArraySeq$ofChar)))
}
function $asArrayOf_scm_ArraySeq$ofChar(obj, depth) {
  return (($isArrayOf_scm_ArraySeq$ofChar(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArraySeq$ofChar;", depth))
}
class $c_sci_$colon$colon extends $c_sci_List {
  constructor(head, next) {
    super();
    this.sci_$colon$colon__f_head = null;
    this.sci_$colon$colon__f_next = null;
    this.sci_$colon$colon__f_head = head;
    this.sci_$colon$colon__f_next = next
  };
  head__O() {
    return this.sci_$colon$colon__f_head
  };
  productPrefix__T() {
    return "::"
  };
  productArity__I() {
    return 2
  };
  productElement__I__O(x$1) {
    switch (x$1) {
      case 0: {
        return this.sci_$colon$colon__f_head;
        break
      }
      case 1: {
        return this.sci_$colon$colon__f_next;
        break
      }
      default: {
        return $m_sr_Statics$().ioobe__I__O(x$1)
      }
    }
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    return this.sci_$colon$colon__f_next
  };
}
const $d_sci_$colon$colon = new $TypeData().initClass({
  sci_$colon$colon: 0
}, false, "scala.collection.immutable.$colon$colon", {
  sci_$colon$colon: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_$colon$colon.prototype.$classData = $d_sci_$colon$colon;
class $c_sci_Nil$ extends $c_sci_List {
  constructor() {
    super();
    this.sci_Nil$__f_EmptyUnzip = null;
    $n_sci_Nil$ = this;
    this.sci_Nil$__f_EmptyUnzip = new $c_T2($m_sci_Nil$(), $m_sci_Nil$())
  };
  head__E() {
    throw new $c_ju_NoSuchElementException("head of empty list")
  };
  tail__E() {
    throw $ct_jl_UnsupportedOperationException__T__(new $c_jl_UnsupportedOperationException(), "tail of empty list")
  };
  knownSize__I() {
    return 0
  };
  iterator__sc_Iterator() {
    return $m_sc_Iterator$().sc_Iterator$__f_scala$collection$Iterator$$_empty
  };
  productPrefix__T() {
    return "Nil"
  };
  productArity__I() {
    return 0
  };
  productElement__I__O(x$1) {
    return $m_sr_Statics$().ioobe__I__O(x$1)
  };
  productIterator__sc_Iterator() {
    return new $c_sr_ScalaRunTime$$anon$1(this)
  };
  tail__O() {
    this.tail__E()
  };
  head__O() {
    this.head__E()
  };
}
const $d_sci_Nil$ = new $TypeData().initClass({
  sci_Nil$: 0
}, false, "scala.collection.immutable.Nil$", {
  sci_Nil$: 1,
  sci_List: 1,
  sci_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  sci_Seq: 1,
  sci_Iterable: 1,
  sci_SeqOps: 1,
  sci_LinearSeq: 1,
  sc_LinearSeq: 1,
  sc_LinearSeqOps: 1,
  sci_LinearSeqOps: 1,
  sc_StrictOptimizedLinearSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  sci_StrictOptimizedSeqOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1,
  s_Product: 1
});
$c_sci_Nil$.prototype.$classData = $d_sci_Nil$;
let $n_sci_Nil$ = (void 0);
function $m_sci_Nil$() {
  if ((!$n_sci_Nil$)) {
    $n_sci_Nil$ = new $c_sci_Nil$()
  };
  return $n_sci_Nil$
}
const $ct_scm_StringBuilder__jl_StringBuilder__ = (function($thiz, underlying) {
  $thiz.scm_StringBuilder__f_underlying = underlying;
  return $thiz
});
const $ct_scm_StringBuilder__ = (function($thiz) {
  $ct_scm_StringBuilder__jl_StringBuilder__($thiz, $ct_jl_StringBuilder__(new $c_jl_StringBuilder()));
  return $thiz
});
class $c_scm_StringBuilder extends $c_scm_AbstractSeq {
  constructor() {
    super();
    this.scm_StringBuilder__f_underlying = null
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.scm_StringBuilder__f_underlying.length__I();
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, xs)
  };
  length__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  knownSize__I() {
    return this.scm_StringBuilder__f_underlying.length__I()
  };
  addOne__C__scm_StringBuilder(x) {
    const this$1 = this.scm_StringBuilder__f_underlying;
    const str = $as_T(String.fromCharCode(x));
    this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$1.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str);
    return this
  };
  toString__T() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  appendAll__sc_IterableOnce__scm_StringBuilder(xs) {
    if ((xs instanceof $c_sci_WrappedString)) {
      const x2 = $as_sci_WrappedString(xs);
      const this$3 = this.scm_StringBuilder__f_underlying;
      $m_sci_WrappedString$();
      const str = x2.sci_WrappedString__f_scala$collection$immutable$WrappedString$$self;
      this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$3.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str)
    } else if ((xs instanceof $c_scm_ArraySeq$ofChar)) {
      const x3 = $as_scm_ArraySeq$ofChar(xs);
      this.scm_StringBuilder__f_underlying.append__AC__jl_StringBuilder(x3.array__AC())
    } else if ((xs instanceof $c_scm_StringBuilder)) {
      const x4 = $as_scm_StringBuilder(xs);
      const this$4 = this.scm_StringBuilder__f_underlying;
      const s = x4.scm_StringBuilder__f_underlying;
      this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + this$4.jl_StringBuilder__f_java$lang$StringBuilder$$content) + s)
    } else {
      const ks = xs.knownSize__I();
      if ((ks !== 0)) {
        const b = this.scm_StringBuilder__f_underlying;
        if ((ks > 0)) {
          b.length__I()
        };
        const it = xs.iterator__sc_Iterator();
        while (it.hasNext__Z()) {
          const c = $uC(it.next__O());
          const str$1 = $as_T(String.fromCharCode(c));
          b.jl_StringBuilder__f_java$lang$StringBuilder$$content = (("" + b.jl_StringBuilder__f_java$lang$StringBuilder$$content) + str$1)
        }
      }
    };
    return this
  };
  subSequence__I__I__jl_CharSequence(start, end) {
    return this.scm_StringBuilder__f_underlying.substring__I__I__T(start, end)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_IndexedSeq$()
  };
  result__O() {
    return this.scm_StringBuilder__f_underlying.jl_StringBuilder__f_java$lang$StringBuilder$$content
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__C__scm_StringBuilder($uC(elem))
  };
  fromSpecific__sc_IterableOnce__O(coll) {
    return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).appendAll__sc_IterableOnce__scm_StringBuilder(coll)
  };
  fromSpecific__sc_IterableOnce__sc_IterableOps(coll) {
    return $ct_scm_StringBuilder__(new $c_scm_StringBuilder()).appendAll__sc_IterableOnce__scm_StringBuilder(coll)
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
  apply__I__O(i) {
    return $bC(this.scm_StringBuilder__f_underlying.charAt__I__C(i))
  };
}
function $as_scm_StringBuilder(obj) {
  return (((obj instanceof $c_scm_StringBuilder) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.StringBuilder"))
}
function $isArrayOf_scm_StringBuilder(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_StringBuilder)))
}
function $asArrayOf_scm_StringBuilder(obj, depth) {
  return (($isArrayOf_scm_StringBuilder(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.StringBuilder;", depth))
}
const $d_scm_StringBuilder = new $TypeData().initClass({
  scm_StringBuilder: 0
}, false, "scala.collection.mutable.StringBuilder", {
  scm_StringBuilder: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  jl_CharSequence: 1,
  Ljava_io_Serializable: 1
});
$c_scm_StringBuilder.prototype.$classData = $d_scm_StringBuilder;
const $p_scm_ListBuffer__copyElems__V = (function($thiz) {
  const this$2 = new $c_scm_ListBuffer();
  const buf = this$2.addAll__sc_IterableOnce__scm_ListBuffer($thiz);
  $thiz.scm_ListBuffer__f_first = buf.scm_ListBuffer__f_first;
  $thiz.scm_ListBuffer__f_last0 = buf.scm_ListBuffer__f_last0;
  $thiz.scm_ListBuffer__f_aliased = false
});
const $p_scm_ListBuffer__ensureUnaliased__V = (function($thiz) {
  if ($thiz.scm_ListBuffer__f_aliased) {
    $p_scm_ListBuffer__copyElems__V($thiz)
  }
});
class $c_scm_ListBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ListBuffer__f_first = null;
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_aliased = false;
    this.scm_ListBuffer__f_len = 0;
    this.scm_ListBuffer__f_first = $m_sci_Nil$();
    this.scm_ListBuffer__f_last0 = null;
    this.scm_ListBuffer__f_aliased = false;
    this.scm_ListBuffer__f_len = 0
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  iterator__sc_Iterator() {
    return this.scm_ListBuffer__f_first.iterator__sc_Iterator()
  };
  apply__I__O(i) {
    const this$1 = this.scm_ListBuffer__f_first;
    return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
  };
  length__I() {
    return this.scm_ListBuffer__f_len
  };
  knownSize__I() {
    return this.scm_ListBuffer__f_len
  };
  isEmpty__Z() {
    return (this.scm_ListBuffer__f_len === 0)
  };
  toList__sci_List() {
    this.scm_ListBuffer__f_aliased = (!this.isEmpty__Z());
    return this.scm_ListBuffer__f_first
  };
  addOne__O__scm_ListBuffer(elem) {
    $p_scm_ListBuffer__ensureUnaliased__V(this);
    const last1 = new $c_sci_$colon$colon(elem, $m_sci_Nil$());
    if ((this.scm_ListBuffer__f_len === 0)) {
      this.scm_ListBuffer__f_first = last1
    } else {
      this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1
    };
    this.scm_ListBuffer__f_last0 = last1;
    this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
    return this
  };
  addAll__sc_IterableOnce__scm_ListBuffer(xs) {
    const it = xs.iterator__sc_Iterator();
    if (it.hasNext__Z()) {
      $p_scm_ListBuffer__ensureUnaliased__V(this);
      const last1 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
      if ((this.scm_ListBuffer__f_len === 0)) {
        this.scm_ListBuffer__f_first = last1
      } else {
        this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1
      };
      this.scm_ListBuffer__f_last0 = last1;
      this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0);
      while (it.hasNext__Z()) {
        const last1$2 = new $c_sci_$colon$colon(it.next__O(), $m_sci_Nil$());
        this.scm_ListBuffer__f_last0.sci_$colon$colon__f_next = last1$2;
        this.scm_ListBuffer__f_last0 = last1$2;
        this.scm_ListBuffer__f_len = ((1 + this.scm_ListBuffer__f_len) | 0)
      }
    };
    return this
  };
  stringPrefix__T() {
    return "ListBuffer"
  };
  addAll__sc_IterableOnce__scm_Growable(xs) {
    return this.addAll__sc_IterableOnce__scm_ListBuffer(xs)
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ListBuffer(elem)
  };
  result__O() {
    return this.toList__sci_List()
  };
  apply__O__O(v1) {
    const i = $uI(v1);
    const this$1 = this.scm_ListBuffer__f_first;
    return $f_sc_LinearSeqOps__apply__I__O(this$1, i)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ListBuffer$()
  };
}
function $as_scm_ListBuffer(obj) {
  return (((obj instanceof $c_scm_ListBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ListBuffer"))
}
function $isArrayOf_scm_ListBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ListBuffer)))
}
function $asArrayOf_scm_ListBuffer(obj, depth) {
  return (($isArrayOf_scm_ListBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ListBuffer;", depth))
}
const $d_scm_ListBuffer = new $TypeData().initClass({
  scm_ListBuffer: 0
}, false, "scala.collection.mutable.ListBuffer", {
  scm_ListBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_ReusableBuilder: 1,
  scm_Builder: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ListBuffer.prototype.$classData = $d_scm_ListBuffer;
const $ct_scm_ArrayBuffer__AO__I__ = (function($thiz, initialElements, initialSize) {
  $thiz.scm_ArrayBuffer__f_array = initialElements;
  $thiz.scm_ArrayBuffer__f_size0 = initialSize;
  return $thiz
});
const $ct_scm_ArrayBuffer__ = (function($thiz) {
  $ct_scm_ArrayBuffer__AO__I__($thiz, $newArrayObject($d_O.getArrayOf(), [16]), 0);
  return $thiz
});
class $c_scm_ArrayBuffer extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.scm_ArrayBuffer__f_array = null;
    this.scm_ArrayBuffer__f_size0 = 0
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_scm_ArrayBufferView(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = this.scm_ArrayBuffer__f_size0;
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  knownSize__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  ensureSize__I__V(n) {
    this.scm_ArrayBuffer__f_array = $m_scm_ArrayBuffer$().scala$collection$mutable$ArrayBuffer$$ensureSize__AO__I__I__AO(this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, n)
  };
  apply__I__O(n) {
    const hi = ((1 + n) | 0);
    if ((n < 0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((n + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    if ((hi > this.scm_ArrayBuffer__f_size0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((hi + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    return this.scm_ArrayBuffer__f_array.get(n)
  };
  update__I__O__V(index, elem) {
    const hi = ((1 + index) | 0);
    if ((index < 0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((index + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    if ((hi > this.scm_ArrayBuffer__f_size0)) {
      throw $ct_jl_IndexOutOfBoundsException__T__(new $c_jl_IndexOutOfBoundsException(), (((hi + " is out of bounds (min 0, max ") + (((-1) + this.scm_ArrayBuffer__f_size0) | 0)) + ")"))
    };
    this.scm_ArrayBuffer__f_array.set(index, elem)
  };
  length__I() {
    return this.scm_ArrayBuffer__f_size0
  };
  addOne__O__scm_ArrayBuffer(elem) {
    const i = this.scm_ArrayBuffer__f_size0;
    this.ensureSize__I__V(((1 + this.scm_ArrayBuffer__f_size0) | 0));
    this.scm_ArrayBuffer__f_size0 = ((1 + this.scm_ArrayBuffer__f_size0) | 0);
    this.update__I__O__V(i, elem);
    return this
  };
  addAll__sc_IterableOnce__scm_ArrayBuffer(elems) {
    if ((elems instanceof $c_scm_ArrayBuffer)) {
      const x2 = $as_scm_ArrayBuffer(elems);
      this.ensureSize__I__V(((this.scm_ArrayBuffer__f_size0 + x2.scm_ArrayBuffer__f_size0) | 0));
      $m_s_Array$().copy__O__I__O__I__I__V(x2.scm_ArrayBuffer__f_array, 0, this.scm_ArrayBuffer__f_array, this.scm_ArrayBuffer__f_size0, x2.scm_ArrayBuffer__f_size0);
      this.scm_ArrayBuffer__f_size0 = ((this.scm_ArrayBuffer__f_size0 + x2.scm_ArrayBuffer__f_size0) | 0)
    } else {
      $f_scm_Growable__addAll__sc_IterableOnce__scm_Growable(this, elems)
    };
    return this
  };
  stringPrefix__T() {
    return "ArrayBuffer"
  };
  addOne__O__scm_Growable(elem) {
    return this.addOne__O__scm_ArrayBuffer(elem)
  };
  iterableFactory__sc_IterableFactory() {
    return $m_scm_ArrayBuffer$()
  };
  apply__O__O(v1) {
    return this.apply__I__O($uI(v1))
  };
}
function $as_scm_ArrayBuffer(obj) {
  return (((obj instanceof $c_scm_ArrayBuffer) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.collection.mutable.ArrayBuffer"))
}
function $isArrayOf_scm_ArrayBuffer(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.scm_ArrayBuffer)))
}
function $asArrayOf_scm_ArrayBuffer(obj, depth) {
  return (($isArrayOf_scm_ArrayBuffer(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.collection.mutable.ArrayBuffer;", depth))
}
const $d_scm_ArrayBuffer = new $TypeData().initClass({
  scm_ArrayBuffer: 0
}, false, "scala.collection.mutable.ArrayBuffer", {
  scm_ArrayBuffer: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  scm_IndexedBuffer: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scg_DefaultSerializable: 1,
  Ljava_io_Serializable: 1
});
$c_scm_ArrayBuffer.prototype.$classData = $d_scm_ArrayBuffer;
const $ct_sjs_js_WrappedArray__sjs_js_Array__ = (function($thiz, array) {
  $thiz.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = array;
  return $thiz
});
const $ct_sjs_js_WrappedArray__ = (function($thiz) {
  $ct_sjs_js_WrappedArray__sjs_js_Array__($thiz, []);
  return $thiz
});
class $c_sjs_js_WrappedArray extends $c_scm_AbstractBuffer {
  constructor() {
    super();
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array = null
  };
  sizeHint__I__V(size) {
    /*<skip>*/
  };
  stringPrefix__T() {
    return "IndexedSeq"
  };
  iterator__sc_Iterator() {
    const this$1 = new $c_sc_IndexedSeqView$Id(this);
    return new $c_sc_IndexedSeqView$IndexedSeqViewIterator(this$1)
  };
  drop__I__O(n) {
    return $f_sc_IndexedSeqOps__drop__I__O(this, n)
  };
  lengthCompare__I__I(len) {
    const x = $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length);
    return ((x === len) ? 0 : ((x < len) ? (-1) : 1))
  };
  apply__I__O(index) {
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  length__I() {
    return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
  };
  knownSize__I() {
    return $uI(this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.length)
  };
  className__T() {
    return "WrappedArray"
  };
  result__O() {
    return this
  };
  addOne__O__scm_Growable(elem) {
    this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array.push(elem);
    return this
  };
  apply__O__O(v1) {
    const index = $uI(v1);
    return this.sjs_js_WrappedArray__f_scala$scalajs$js$WrappedArray$$array[index]
  };
  iterableFactory__sc_IterableFactory() {
    return $m_sjs_js_WrappedArray$()
  };
}
function $as_sjs_js_WrappedArray(obj) {
  return (((obj instanceof $c_sjs_js_WrappedArray) || (obj === null)) ? obj : $throwClassCastException(obj, "scala.scalajs.js.WrappedArray"))
}
function $isArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (!(!(((obj && obj.$classData) && (obj.$classData.arrayDepth === depth)) && obj.$classData.arrayBase.ancestors.sjs_js_WrappedArray)))
}
function $asArrayOf_sjs_js_WrappedArray(obj, depth) {
  return (($isArrayOf_sjs_js_WrappedArray(obj, depth) || (obj === null)) ? obj : $throwArrayCastException(obj, "Lscala.scalajs.js.WrappedArray;", depth))
}
const $d_sjs_js_WrappedArray = new $TypeData().initClass({
  sjs_js_WrappedArray: 0
}, false, "scala.scalajs.js.WrappedArray", {
  sjs_js_WrappedArray: 1,
  scm_AbstractBuffer: 1,
  scm_AbstractSeq: 1,
  sc_AbstractSeq: 1,
  sc_AbstractIterable: 1,
  O: 1,
  sc_Iterable: 1,
  sc_IterableOnce: 1,
  sc_IterableOps: 1,
  sc_IterableOnceOps: 1,
  sc_IterableFactoryDefaults: 1,
  sc_Seq: 1,
  s_PartialFunction: 1,
  F1: 1,
  sc_SeqOps: 1,
  s_Equals: 1,
  scm_Seq: 1,
  scm_Iterable: 1,
  scm_SeqOps: 1,
  scm_Cloneable: 1,
  jl_Cloneable: 1,
  scm_Buffer: 1,
  scm_Growable: 1,
  scm_Clearable: 1,
  scm_Shrinkable: 1,
  sc_StrictOptimizedSeqOps: 1,
  sc_StrictOptimizedIterableOps: 1,
  scm_IndexedSeq: 1,
  sc_IndexedSeq: 1,
  sc_IndexedSeqOps: 1,
  scm_IndexedSeqOps: 1,
  scm_IndexedBuffer: 1,
  scm_Builder: 1,
  Ljava_io_Serializable: 1
});
$c_sjs_js_WrappedArray.prototype.$classData = $d_sjs_js_WrappedArray;
$L0 = new $c_RTLong(0, 0);
$s_Lwebapp_App__main__AT__V($makeNativeArrayWrapper($d_T.getArrayOf(), []));
}).call(this);
//# sourceMappingURL=repository-fastopt.js.map

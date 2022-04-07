import { r as registerInstance, l as createEvent, j as Build, h } from './index-e5ab994a.js';
import { D as Debounce } from './index-639ca809.js';
import Handlebars from 'handlebars';
import { c as createCommonjsModule, a as commonjsGlobal } from './_commonjsHelpers-93ec9c7a.js';

var logic = createCommonjsModule(function (module, exports) {
/* globals define,module */
/*
Using a Universal Module Loader that should be browser, require, and AMD friendly
http://ricostacruz.com/cheatsheets/umdjs.html
*/
;(function(root, factory) {
  if (typeof undefined === "function" && undefined.amd) {
    undefined(factory);
  } else if ('object' === "object") {
    module.exports = factory();
  } else {
    root.jsonLogic = factory();
  }
}(commonjsGlobal, function() {
  "use strict";
  /* globals console:false */

  if ( ! Array.isArray) {
    Array.isArray = function(arg) {
      return Object.prototype.toString.call(arg) === "[object Array]";
    };
  }

  /**
   * Return an array that contains no duplicates (original not modified)
   * @param  {array} array   Original reference array
   * @return {array}         New array with no duplicates
   */
  function arrayUnique(array) {
    var a = [];
    for (var i=0, l=array.length; i<l; i++) {
      if (a.indexOf(array[i]) === -1) {
        a.push(array[i]);
      }
    }
    return a;
  }

  var jsonLogic = {};
  var operations = {
    "==": function(a, b) {
      return a == b;
    },
    "===": function(a, b) {
      return a === b;
    },
    "!=": function(a, b) {
      return a != b;
    },
    "!==": function(a, b) {
      return a !== b;
    },
    ">": function(a, b) {
      return a > b;
    },
    ">=": function(a, b) {
      return a >= b;
    },
    "<": function(a, b, c) {
      return (c === undefined) ? a < b : (a < b) && (b < c);
    },
    "<=": function(a, b, c) {
      return (c === undefined) ? a <= b : (a <= b) && (b <= c);
    },
    "!!": function(a) {
      return jsonLogic.truthy(a);
    },
    "!": function(a) {
      return !jsonLogic.truthy(a);
    },
    "%": function(a, b) {
      return a % b;
    },
    "log": function(a) {
      console.log(a); return a;
    },
    "in": function(a, b) {
      if (!b || typeof b.indexOf === "undefined") return false;
      return (b.indexOf(a) !== -1);
    },
    "cat": function() {
      return Array.prototype.join.call(arguments, "");
    },
    "substr": function(source, start, end) {
      if (end < 0) {
        // JavaScript doesn't support negative end, this emulates PHP behavior
        var temp = String(source).substr(start);
        return temp.substr(0, temp.length + end);
      }
      return String(source).substr(start, end);
    },
    "+": function() {
      return Array.prototype.reduce.call(arguments, function(a, b) {
        return parseFloat(a, 10) + parseFloat(b, 10);
      }, 0);
    },
    "*": function() {
      return Array.prototype.reduce.call(arguments, function(a, b) {
        return parseFloat(a, 10) * parseFloat(b, 10);
      });
    },
    "-": function(a, b) {
      if (b === undefined) {
        return -a;
      } else {
        return a - b;
      }
    },
    "/": function(a, b) {
      return a / b;
    },
    "min": function() {
      return Math.min.apply(this, arguments);
    },
    "max": function() {
      return Math.max.apply(this, arguments);
    },
    "merge": function() {
      return Array.prototype.reduce.call(arguments, function(a, b) {
        return a.concat(b);
      }, []);
    },
    "var": function(a, b) {
      var not_found = (b === undefined) ? null : b;
      var data = this;
      if (typeof a === "undefined" || a==="" || a===null) {
        return data;
      }
      var sub_props = String(a).split(".");
      for (var i = 0; i < sub_props.length; i++) {
        if (data === null || data === undefined) {
          return not_found;
        }
        // Descending into data
        data = data[sub_props[i]];
        if (data === undefined) {
          return not_found;
        }
      }
      return data;
    },
    "missing": function() {
      /*
      Missing can receive many keys as many arguments, like {"missing:[1,2]}
      Missing can also receive *one* argument that is an array of keys,
      which typically happens if it's actually acting on the output of another command
      (like 'if' or 'merge')
      */

      var missing = [];
      var keys = Array.isArray(arguments[0]) ? arguments[0] : arguments;

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        var value = jsonLogic.apply({"var": key}, this);
        if (value === null || value === "") {
          missing.push(key);
        }
      }

      return missing;
    },
    "missing_some": function(need_count, options) {
      // missing_some takes two arguments, how many (minimum) items must be present, and an array of keys (just like 'missing') to check for presence.
      var are_missing = jsonLogic.apply({"missing": options}, this);

      if (options.length - are_missing.length >= need_count) {
        return [];
      } else {
        return are_missing;
      }
    },
  };

  jsonLogic.is_logic = function(logic) {
    return (
      typeof logic === "object" && // An object
      logic !== null && // but not null
      ! Array.isArray(logic) && // and not an array
      Object.keys(logic).length === 1 // with exactly one key
    );
  };

  /*
  This helper will defer to the JsonLogic spec as a tie-breaker when different language interpreters define different behavior for the truthiness of primitives.  E.g., PHP considers empty arrays to be falsy, but Javascript considers them to be truthy. JsonLogic, as an ecosystem, needs one consistent answer.

  Spec and rationale here: http://jsonlogic.com/truthy
  */
  jsonLogic.truthy = function(value) {
    if (Array.isArray(value) && value.length === 0) {
      return false;
    }
    return !! value;
  };


  jsonLogic.get_operator = function(logic) {
    return Object.keys(logic)[0];
  };

  jsonLogic.get_values = function(logic) {
    return logic[jsonLogic.get_operator(logic)];
  };

  jsonLogic.apply = function(logic, data) {
    // Does this array contain logic? Only one way to find out.
    if (Array.isArray(logic)) {
      return logic.map(function(l) {
        return jsonLogic.apply(l, data);
      });
    }
    // You've recursed to a primitive, stop!
    if ( ! jsonLogic.is_logic(logic) ) {
      return logic;
    }

    var op = jsonLogic.get_operator(logic);
    var values = logic[op];
    var i;
    var current;
    var scopedLogic;
    var scopedData;
    var initial;

    // easy syntax for unary operators, like {"var" : "x"} instead of strict {"var" : ["x"]}
    if ( ! Array.isArray(values)) {
      values = [values];
    }

    // 'if', 'and', and 'or' violate the normal rule of depth-first calculating consequents, let each manage recursion as needed.
    if (op === "if" || op == "?:") {
      /* 'if' should be called with a odd number of parameters, 3 or greater
      This works on the pattern:
      if( 0 ){ 1 }else{ 2 };
      if( 0 ){ 1 }else if( 2 ){ 3 }else{ 4 };
      if( 0 ){ 1 }else if( 2 ){ 3 }else if( 4 ){ 5 }else{ 6 };

      The implementation is:
      For pairs of values (0,1 then 2,3 then 4,5 etc)
      If the first evaluates truthy, evaluate and return the second
      If the first evaluates falsy, jump to the next pair (e.g, 0,1 to 2,3)
      given one parameter, evaluate and return it. (it's an Else and all the If/ElseIf were false)
      given 0 parameters, return NULL (not great practice, but there was no Else)
      */
      for (i = 0; i < values.length - 1; i += 2) {
        if ( jsonLogic.truthy( jsonLogic.apply(values[i], data) ) ) {
          return jsonLogic.apply(values[i+1], data);
        }
      }
      if (values.length === i+1) {
        return jsonLogic.apply(values[i], data);
      }
      return null;
    } else if (op === "and") { // Return first falsy, or last
      for (i=0; i < values.length; i+=1) {
        current = jsonLogic.apply(values[i], data);
        if ( ! jsonLogic.truthy(current)) {
          return current;
        }
      }
      return current; // Last
    } else if (op === "or") {// Return first truthy, or last
      for (i=0; i < values.length; i+=1) {
        current = jsonLogic.apply(values[i], data);
        if ( jsonLogic.truthy(current) ) {
          return current;
        }
      }
      return current; // Last
    } else if (op === "filter") {
      scopedData = jsonLogic.apply(values[0], data);
      scopedLogic = values[1];

      if ( ! Array.isArray(scopedData)) {
        return [];
      }
      // Return only the elements from the array in the first argument,
      // that return truthy when passed to the logic in the second argument.
      // For parity with JavaScript, reindex the returned array
      return scopedData.filter(function(datum) {
        return jsonLogic.truthy( jsonLogic.apply(scopedLogic, datum));
      });
    } else if (op === "map") {
      scopedData = jsonLogic.apply(values[0], data);
      scopedLogic = values[1];

      if ( ! Array.isArray(scopedData)) {
        return [];
      }

      return scopedData.map(function(datum) {
        return jsonLogic.apply(scopedLogic, datum);
      });
    } else if (op === "reduce") {
      scopedData = jsonLogic.apply(values[0], data);
      scopedLogic = values[1];
      initial = typeof values[2] !== "undefined" ? values[2] : null;

      if ( ! Array.isArray(scopedData)) {
        return initial;
      }

      return scopedData.reduce(
        function(accumulator, current) {
          return jsonLogic.apply(
            scopedLogic,
            {current: current, accumulator: accumulator}
          );
        },
        initial
      );
    } else if (op === "all") {
      scopedData = jsonLogic.apply(values[0], data);
      scopedLogic = values[1];
      // All of an empty set is false. Note, some and none have correct fallback after the for loop
      if ( ! Array.isArray(scopedData) || ! scopedData.length) {
        return false;
      }
      for (i=0; i < scopedData.length; i+=1) {
        if ( ! jsonLogic.truthy( jsonLogic.apply(scopedLogic, scopedData[i]) )) {
          return false; // First falsy, short circuit
        }
      }
      return true; // All were truthy
    } else if (op === "none") {
      scopedData = jsonLogic.apply(values[0], data);
      scopedLogic = values[1];

      if ( ! Array.isArray(scopedData) || ! scopedData.length) {
        return true;
      }
      for (i=0; i < scopedData.length; i+=1) {
        if ( jsonLogic.truthy( jsonLogic.apply(scopedLogic, scopedData[i]) )) {
          return false; // First truthy, short circuit
        }
      }
      return true; // None were truthy
    } else if (op === "some") {
      scopedData = jsonLogic.apply(values[0], data);
      scopedLogic = values[1];

      if ( ! Array.isArray(scopedData) || ! scopedData.length) {
        return false;
      }
      for (i=0; i < scopedData.length; i+=1) {
        if ( jsonLogic.truthy( jsonLogic.apply(scopedLogic, scopedData[i]) )) {
          return true; // First truthy, short circuit
        }
      }
      return false; // None were truthy
    }

    // Everyone else gets immediate depth-first recursion
    values = values.map(function(val) {
      return jsonLogic.apply(val, data);
    });


    // The operation is called with "data" bound to its "this" and "values" passed as arguments.
    // Structured commands like % or > can name formal arguments while flexible commands (like missing or merge) can operate on the pseudo-array arguments
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/arguments
    if (operations.hasOwnProperty(op) && typeof operations[op] === "function") {
      return operations[op].apply(data, values);
    } else if (op.indexOf(".") > 0) { // Contains a dot, and not in the 0th position
      var sub_ops = String(op).split(".");
      var operation = operations;
      for (i = 0; i < sub_ops.length; i++) {
        if (!operation.hasOwnProperty(sub_ops[i])) {
          throw new Error("Unrecognized operation " + op +
            " (failed at " + sub_ops.slice(0, i+1).join(".") + ")");
        }
        // Descending into operations
        operation = operation[sub_ops[i]];
      }

      return operation.apply(data, values);
    }

    throw new Error("Unrecognized operation " + op );
  };

  jsonLogic.uses_data = function(logic) {
    var collection = [];

    if (jsonLogic.is_logic(logic)) {
      var op = jsonLogic.get_operator(logic);
      var values = logic[op];

      if ( ! Array.isArray(values)) {
        values = [values];
      }

      if (op === "var") {
        // This doesn't cover the case where the arg to var is itself a rule.
        collection.push(values[0]);
      } else {
        // Recursion!
        values.forEach(function(val) {
          collection.push.apply(collection, jsonLogic.uses_data(val) );
        });
      }
    }

    return arrayUnique(collection);
  };

  jsonLogic.add_operation = function(name, code) {
    operations[name] = code;
  };

  jsonLogic.rm_operation = function(name) {
    delete operations[name];
  };

  jsonLogic.rule_like = function(rule, pattern) {
    // console.log("Is ". JSON.stringify(rule) . " like " . JSON.stringify(pattern) . "?");
    if (pattern === rule) {
      return true;
    } // TODO : Deep object equivalency?
    if (pattern === "@") {
      return true;
    } // Wildcard!
    if (pattern === "number") {
      return (typeof rule === "number");
    }
    if (pattern === "string") {
      return (typeof rule === "string");
    }
    if (pattern === "array") {
      // !logic test might be superfluous in JavaScript
      return Array.isArray(rule) && ! jsonLogic.is_logic(rule);
    }

    if (jsonLogic.is_logic(pattern)) {
      if (jsonLogic.is_logic(rule)) {
        var pattern_op = jsonLogic.get_operator(pattern);
        var rule_op = jsonLogic.get_operator(rule);

        if (pattern_op === "@" || pattern_op === rule_op) {
          // echo "\nOperators match, go deeper\n";
          return jsonLogic.rule_like(
            jsonLogic.get_values(rule, false),
            jsonLogic.get_values(pattern, false)
          );
        }
      }
      return false; // pattern is logic, rule isn't, can't be eq
    }

    if (Array.isArray(pattern)) {
      if (Array.isArray(rule)) {
        if (pattern.length !== rule.length) {
          return false;
        }
        /*
          Note, array order MATTERS, because we're using this array test logic to consider arguments, where order can matter. (e.g., + is commutative, but '-' or 'if' or 'var' are NOT)
        */
        for (var i = 0; i < pattern.length; i += 1) {
          // If any fail, we fail
          if ( ! jsonLogic.rule_like(rule[i], pattern[i])) {
            return false;
          }
        }
        return true; // If they *all* passed, we pass
      } else {
        return false; // Pattern is array, rule isn't
      }
    }

    // Not logic, not array, not a === match for rule.
    return false;
  };

  return jsonLogic;
}));
});

/**
 * Function for running a function until it completes successfully
 * with an optional delay between runs that gets progressively longer.
 *
 * Special Thanks to @MyBuilderTech
 * @see https://tech.mybuilder.com/handling-retries-and-back-off-attempts-with-javascript-promises/
 */
const pause = (duration) => new Promise((res) => setTimeout(res, duration));
async function backoff(retries, fn, delay = 500) {
  return new Promise(async (resolve, reject) => {
    if (!fn || typeof fn !== "function")
      reject("Callback function is required!");
    try {
      const res = await fn();
      resolve(res);
    }
    catch (err) {
      if (retries > 1) {
        await pause(delay);
        backoff(retries - 1, fn, delay * 2);
      }
      else {
        reject(err);
      }
    }
  });
}

var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
    r = Reflect.decorate(decorators, target, key, desc);
  else
    for (var i = decorators.length - 1; i >= 0; i--)
      if (d = decorators[i])
        r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
};
let RenderTemplate = class {
  constructor(hostRef) {
    registerInstance(this, hostRef);
    this.fireenjinFetch = createEvent(this, "fireenjinFetch", 7);
    this.data = {};
    this.template = {};
    this.partials = [];
    this.helpers = {
      formatUSD: (amount) => {
        const formatter = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
          minimumFractionDigits: 2,
        });
        return formatter.format(amount ? amount : 0);
      },
      logic: (context, rules, tempData) => logic.apply(JSON.parse(rules.replace('"@tempData"', tempData)), Object.assign(Object.assign({}, context), { tempData })),
    };
    this.html = "";
    this.currentPartials = [];
    this.currentHelpers = [];
  }
  async componentWillLoad() {
    var _a, _b;
    if (!(Build === null || Build === void 0 ? void 0 : Build.isBrowser))
      return;
    if (this.helpers && ((_a = Object.keys(this.helpers)) === null || _a === void 0 ? void 0 : _a.length))
      this.setHelpers();
    if ((_b = this.partials) === null || _b === void 0 ? void 0 : _b.length)
      this.setPartials();
    if (this.templateId)
      this.getTemplate(this.templateId);
    if (this.template)
      backoff(10, this.renderTemplate.bind(this));
  }
  getTemplate(id) {
    this.fireenjinFetch.emit({
      endpoint: "findTemplate",
      name: this.name,
      params: {
        id,
      },
    });
  }
  async fetchData(input) {
    this.getTemplate((input === null || input === void 0 ? void 0 : input.templateId) || this.templateId);
  }
  async unsetPartials() {
    for (const partialName of this.currentPartials) {
      Handlebars.unregisterPartial(partialName);
    }
    this.currentPartials = [];
    this.partials = [];
  }
  async setPartials(partials) {
    try {
      Handlebars.registerPartial(null, "");
    }
    catch (_a) {
      // Make sure handlebars doesn't error when null as partial name
    }
    try {
      if ((partials === null || partials === void 0 ? void 0 : partials.length) && this.partials !== partials) {
        this.partials = partials;
      }
      for (const partial of this.partials) {
        try {
          if (this.currentPartials.includes(partial === null || partial === void 0 ? void 0 : partial.id))
            Handlebars.unregisterPartial(partial === null || partial === void 0 ? void 0 : partial.id);
          Handlebars.registerPartial(partial === null || partial === void 0 ? void 0 : partial.id, (partial === null || partial === void 0 ? void 0 : partial.html) || "");
          if (!this.currentPartials.includes(partial === null || partial === void 0 ? void 0 : partial.id))
            this.currentPartials = [...this.currentPartials, partial === null || partial === void 0 ? void 0 : partial.id];
        }
        catch (_b) {
          console.log(`Error setting partial ${partial === null || partial === void 0 ? void 0 : partial.id}.`);
        }
      }
    }
    catch (_c) {
      console.log("Error setting partials.");
    }
  }
  async setHelpers(helpers) {
    try {
      if ((helpers === null || helpers === void 0 ? void 0 : helpers.length) && this.helpers !== helpers) {
        this.helpers = helpers;
      }
      for (const [helperName, helperFn] of Object.entries(this.helpers)) {
        try {
          if (this.currentHelpers.includes(helperName))
            Handlebars.unregisterHelper(helperName);
          Handlebars.registerHelper(helperName, helperFn);
          if (!this.currentHelpers.includes(helperName))
            this.currentHelpers = [...this.currentHelpers, helperName];
        }
        catch (_a) {
          console.log(`Error setting helper ${helperName}.`);
        }
      }
    }
    catch (_b) {
      console.log("Error setting helpers.");
    }
  }
  async renderTemplate() {
    var _a, _b;
    this.html = Handlebars.compile(((_a = this.template) === null || _a === void 0 ? void 0 : _a.html) ? (_b = this.template) === null || _b === void 0 ? void 0 : _b.html : "")(this.data ? this.data : {});
  }
  onSuccess(event) {
    var _a, _b, _c, _d, _e, _f;
    if (((_a = event === null || event === void 0 ? void 0 : event.detail) === null || _a === void 0 ? void 0 : _a.endpoint) === "findTemplate" &&
      ((_d = (_c = (_b = event.detail) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.template) === null || _d === void 0 ? void 0 : _d.id) === this.templateId) {
      this.template = ((_f = (_e = event === null || event === void 0 ? void 0 : event.detail) === null || _e === void 0 ? void 0 : _e.data) === null || _f === void 0 ? void 0 : _f.template)
        ? event.detail.data.template
        : null;
    }
  }
  onTemplateId() {
    this.fireenjinFetch.emit({
      endpoint: "findTemplate",
      params: {
        id: this.templateId,
      },
    });
  }
  onData() {
    backoff(10, this.renderTemplate.bind(this));
  }
  onTemplate() {
    backoff(10, this.renderTemplate.bind(this));
  }
  render() {
    return h("div", { innerHTML: this.html || "" });
  }
  static get watchers() { return {
    "partials": ["setPartials"],
    "helpers": ["setHelpers"],
    "templateId": ["onTemplateId"],
    "data": ["onData"],
    "template": ["onTemplate"]
  }; }
};
__decorate([
  Debounce(1000)
], RenderTemplate.prototype, "setPartials", null);
__decorate([
  Debounce(1000)
], RenderTemplate.prototype, "setHelpers", null);

export { RenderTemplate as fireenjin_render_template };

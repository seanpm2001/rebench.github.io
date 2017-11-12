'use strict';

var Icon          = require("./components/Icon.js");
var Curry         = require("bs-platform/lib/js/curry.js");
var React         = require("react");
var ReasonReact   = require("reason-react/lib/js/src/reasonReact.js");
var ToolbarStyles = require("./ToolbarStyles.js");

function text(prim) {
  return prim;
}

var component = ReasonReact.statelessComponent("Toolbar");

function make(onButtonClick, _) {
  var newrecord = component.slice();
  newrecord[/* render */9] = (function () {
      return React.createElement("div", {
                  className: ToolbarStyles.root
                }, React.createElement("button", {
                      className: ToolbarStyles.button,
                      onClick: (function () {
                          return Curry._1(onButtonClick, /* RunAll */-267608394);
                        })
                    }, ReasonReact.element(/* None */0, /* None */0, Icon.make("play", /* array */[])), "Run All"), React.createElement("button", {
                      className: ToolbarStyles.button,
                      onClick: (function () {
                          return Curry._1(onButtonClick, /* Add */3254785);
                        })
                    }, ReasonReact.element(/* None */0, /* None */0, Icon.make("plus", /* array */[])), "Add"));
    });
  return newrecord;
}

var Styles = 0;

exports.Styles    = Styles;
exports.text      = text;
exports.component = component;
exports.make      = make;
/* component Not a pure module */
"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
function IconsLibraryTemplate(_a, opts, _b) {
    var template = _a.template;
    var imports = _b.imports, interfaces = _b.interfaces, componentName = _b.componentName, props = _b.props, jsx = _b.jsx, exports = _b.exports;
    var plugins = ['jsx', 'typescript'];
    var typeScriptTpl = template.smart({ plugins: plugins });
    return typeScriptTpl.ast(__makeTemplateObject(["", "\n", "\nfunction ", "(props: any): JSX.Element {\n  return ", ";\n}\n", "\n  "], ["", "\n", "\nfunction ", "(props: any): JSX.Element {\n  return ", ";\n}\n", "\n  "]), imports, interfaces, componentName, jsx, exports);
}
module.exports = IconsLibraryTemplate;

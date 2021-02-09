function IconsLibraryTemplate(
  { template },
  opts,
  { imports, interfaces, componentName, props, jsx, exports },
) {
  const plugins = ['jsx', 'typescript']
  const typeScriptTpl = template.smart({ plugins })
  return typeScriptTpl.ast`${imports}
${interfaces}
function ${componentName}(props: any): JSX.Element {
  return ${jsx};
}
${exports}
  `
}
module.exports = IconsLibraryTemplate

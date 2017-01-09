module.exports = ({ types: t }) => ({
  visitor: {
    Class(classPath) {
      const classBody = classPath.get('body')

      classBody.get('body').forEach(path => {
        if (path.isClassProperty()) {
          const node = path.node

          if (node.value && node.value.type === 'ArrowFunctionExpression') {
            const isAsync = node.value.async

            const params = node.value.params
            const newIdentifier = t.identifier('__' + node.key.name + '__COPY__')

            const newMethodBody = node.value.body.type === 'BlockStatement' ? node.value.body : t.blockStatement([t.returnStatement(node.value.body)])

            const newMethod = t.classMethod('method', newIdentifier, params, newMethodBody)
            newMethod.async = isAsync

            // path.replaceWith(newMethod)
            path.insertAfter(newMethod)
          }
        }
      })
    }
  }
})

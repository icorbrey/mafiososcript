const MafiosoScriptVisitor = {
  Identifier(path) {
    path.node.name = `made man ${path.node.name}`;
  },
  FunctionDeclaration(path) {
    path.node.kind = "operation";
  },
  ForStatement(path) {
    const { init, test, update } = path.node;
    path.replaceWithSourceString(
      `hit ${init.declarations[0].id.name} in ${path.get("body").get("body")[0].node.left.object.name} {
        if (${test.left.name} ${test.operator} ${test.right.value}) {
          ${path.get("body").get("body")[0].node.left.property.name} = ${path.get("body").get("body")[0].node.right.name};
          ${update.expression.argument.name} ${update.expression.operator} ${update.expression.prefix ? update.expression.operator : ""}1;
        }
      }`
    );
  },
  BinaryExpression(path) {
    if (path.node.operator === "===") {
      path.node.operator = "==";
    } else if (path.node.operator === "!==") {
      path.node.operator = "!=";
    }
  },
  TemplateLiteral(path) {
    path.node.quasis = path.node.quasis.map(q => ({
      ...q,
      value: { raw: q.value.raw, cooked: q.value.cooked }
    }));
  }
};

module.exports = function() {
  return {
    visitor: MafiosoScriptVisitor
  };
};

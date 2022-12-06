export const mafiosoScriptToJavaScript = (code) => {
  // replace keywords with their JavaScript equivalents
  code = code.replace(/operation/g, "function");
  code = code.replace(/made man/g, "var");
  code = code.replace(/family/g, "object");
  code = code.replace(/cement shoes/g, "const");
  code = code.replace(/hit/g, "for");
  code = code.replace(/take care of/g, "if");
  code = code.replace(/or else/g, "else");
  code = code.replace(/whack/g, "delete");
  
  // remove mobster slang comments
  code = code.replace(/sleep with the fishes/g, "");
  code = code.replace(/nice work, kid/g, "");
  
  // return the converted code
  return code;
}

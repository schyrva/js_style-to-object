'use strict';

/**
 * @param {string} sourceString
 *
 * @return {object}
 */
function convertToObject(sourceString) {
  return sourceString
    .split(';')
    .map((declaration) => declaration.trim())
    .filter((declaration) => declaration)
    .reduce((sourceObject, declaration) => {
      const colonIndex = declaration.indexOf(':');

      if (colonIndex !== -1) {
        const property = declaration.slice(0, colonIndex).trim();
        const value = declaration.slice(colonIndex + 1).trim();

        if (property && value) {
          sourceObject[property] = value;
        }
      }

      return sourceObject;
    }, {});
}

module.exports = convertToObject;

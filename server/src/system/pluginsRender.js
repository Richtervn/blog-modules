import Promise from 'bluebird';
import fs from 'fs';
import handlebars from 'handlebars';
import path from 'path';

const fileSystem = Promise.promisifyAll(fs);

handlebars.registerHelper('switch', function(value, options) {
  this._switch_value_ = value;
  const html = options.fn(this); // Process the body of the switch block
  delete this._switch_value_;
  return html;
});

handlebars.registerHelper('case', function() {
  // Convert "arguments" to a real array - stackoverflow.com/a/4775938
  const args = Array.prototype.slice.call(arguments);

  const options = args.pop();
  const caseValues = args;

  if (caseValues.indexOf(this._switch_value_) === -1) {
    return '';
  } else {
    return options.fn(this);
  }
});

const pluginsRender = async (dir, filePath, data) => {
  const resolvedPath = path.resolve(dir, filePath);
  const template = await fileSystem.readFileAsync(resolvedPath, 'utf-8');

  return handlebars.compile(template)(data);
};

export default pluginsRender;

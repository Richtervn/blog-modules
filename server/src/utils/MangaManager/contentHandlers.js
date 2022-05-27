const applyPlugins = async (elem, plugins, context, $) => {
  let result = elem;
  for (const plugin of plugins) {
    if (plugin === 'text') {
      result = elem.text();
    } else if (plugin === 'src') {
      result = elem.attr('src');
    } else if (plugin === 'title') {
      result = elem.attr('title');
    } else if (plugin === 'href') {
      result = elem.attr('href');
    } else if (plugin === 'appendUrlProtocol') {
      const url = new URL(context.url);
      result = `${url.protocol}${result}`;
    } else {
      result = await plugin({ content: result, context, $ });
    }
  }
  if (result && result.trim) {
    result = result.trim();
  }
  return result;
};

export const fromElement =
  (query, plugins = []) =>
  async ({ $, context }) => {
    let elem = $(query);
    if (!elem) {
      return;
    }
    const result = await applyPlugins(elem, plugins, context);
    return result;
  };

export const fromChilren =
  (query, plugins = [], parentQuery) =>
  async ({ $, parent, context }) => {
    let parentQ = parent || parentQuery;

    let elem = $(parentQ).find(query);
    if (!elem) {
      return;
    }
    let result;
    result = await applyPlugins(elem, plugins, context, $);
    if (result && result.trim) {
      result = result.trim();
    }
    return result;
  };

export const replace =
  (expression, withChars) =>
  ({ content }) =>
    content.replace(expression, withChars);

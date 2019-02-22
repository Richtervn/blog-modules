export default {
  email: new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/),
  script: new RegExp(/<script\b[^>]*>([\s\S]*?)<\/script>/gm)
};

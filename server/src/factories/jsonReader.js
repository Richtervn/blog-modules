import fs from 'fs';
import _ from 'underscore';

export default {
  makeId: function(link, model) {
    const data = JSONreader.getAll(link, model);
    if (data.length == 0) {
      const Id = 1;
    } else {
      const Id = data[data.length - 1].Id + 1;
    }
    return Id;
  },
  getAll: function(link, model) {
    const data = fs.readFileSync(link + '/' + model + '.json');
    return JSON.parse(data);
  },
  delete: function(link, model, id) {
    const data = JSONreader.getAll(link, model);
    const idlist = _.pluck(data, 'Id');
    const index = _.indexOf(idlist, id, true);
    data.splice(index, 1);
    const datas = JSON.stringify(data);
    fs.writeFileSync(link + '/' + model + '.json', datas);
    return;
  },
  getOne: function(link, model, key, value) {
    const data = JSONreader.getAll(link, model);
    const list = _.pluck(data, key);
    const index = _.indexOf(list, value, true);
    return data[index];
  },
  update: function(link, model, body) {
    const data = JSONreader.getAll(link, model);
    const list = _.pluck(data, 'Id');
    const index = _.indexOf(list, body.Id);
    for (const key in body) {
      data[index][key] = body[key];
    }
    const datas = JSON.stringify(data);
    fs.writeFileSync(link + '/' + model + '.json', datas);
    return data[index];
  },
  add: function(link, model, body) {
    const data = JSONreader.getAll(link, model);
    if (data.length == 0) {
      const id = 1;
    } else {
      const id = data[data.length - 1].Id + 1;
    }
    const obj = body;
    obj.Id = id;
    data.push(obj);
    const datas = JSON.stringify(data);
    fs.writeFileSync(link + '/' + model + '.json', datas);
    return obj;
  }
};

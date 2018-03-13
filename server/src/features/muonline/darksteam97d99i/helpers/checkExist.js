export default async (model, field, value) => {
  const record = await model.findOne({ where: { [field]: value } });
  if (record) {
    return true;
  }
  return false;
};

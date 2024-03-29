const getOne = async (model, id) => {
	return model.findById(id).exec();
};

const getAll = async (model) => {
	return model.find({});
};

const createOne = async (model, fields) => {
	return model.create({ ...fields });
};

const updateOne = async (model, id, params) => {
	//return model.findByIdAndUpdate(id, params, { new: true }).exec();
	return model.findOneAndUpdate({ _id: id }, params, { new: true }).exec();
};

const removeOne = async (model, id) => {
	return model
		.deleteOne({
			_id: id,
		})
		.exec();
};

const find = async (model, filter = {}) => {
	return model.find(filter);
};

const findOne = async (model, filter = {}) => {
	return model.findOne(filter);
};

module.exports = {
	getOne,
	getAll,
	createOne,
	updateOne,
	removeOne,
	find,
	findOne,
};

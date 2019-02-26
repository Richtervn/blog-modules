import data from "./data";

const arr = [];
for (let i = 1; i <= 50; i++) {
	arr.push(i);
}

export default () => {
	return data.map(q => {
		arr.forEach(i => {
			q.question = q.question.replace(`Câu ${i}.`, "");
		});
		q.question = q.question.trim();
		return q;
	});
};

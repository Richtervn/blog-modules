import Crawler from "crawler";
import Promise from "bluebird";

const questions = [];
const answers = [];

export default () => {
    const crawler = new Crawler({ maxConnections: 1 });
    return new Promise((resolve, reject) =>
        crawler.direct({
            uri:
                "https://vndoc.com/cau-hoi-trac-nghiem-ve-te-nan-xa-hoi-va-bao-luc-hoc-duong-co-dap-an/download",
            callback: async (err, res) => {
                const $ = res.$;

                const elems = $(".maincontent.textview").children();

                for (let i = 0; i < elems.length; i++) {
                    if (elems[i].name == "p") {
                        const pElem = elems[i];
                        if (pElem.children && pElem.children.length > 0) {
                            const sElem = pElem.children[pElem.children.length - 1];
                            if (sElem.children && sElem.children.length > 0) {
                                const emElem = sElem.children[0];
                                if (emElem.children && emElem.children[0].data) {
                                    questions.push(emElem.children[0].data);
                                }
                            }
                        }
                    }
                    if (elems[i].name == "ol") {
                        const olElem = elems[i];
                        if (olElem.children && olElem.children.length > 0) {
                            const answer = { choices: [], correct: "" };
                            olElem.children.forEach(liElem => {
                                if (liElem.children && liElem.children[0]) {
                                    if (liElem.children[0].data) {
                                        answer.choices.push(liElem.children[0].data);
                                    }
                                    if (
                                        liElem.children[0].children &&
                                        liElem.children[0].children.length > 0
                                    ) {
                                        answer.correct = liElem.children[0].children[0].data;
                                    }
                                }
                            });
                            answers.push(answer);
                        }
                    }
                }

                const rawResult = {
                    questions: questions.filter((q, i) => i < questions.length - 1),
                    answers: answers.filter((a, i) => i != 103)
                };

                const result = [];
                for (let i = 0; i < 112; i++) {
                    result.push({
                        question: questions[i],
                        answers: answers[i]
                    });
                }

                return resolve(result);
            }
        })
    );
};

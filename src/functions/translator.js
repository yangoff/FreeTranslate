const translate = require("@vitalets/google-translate-api");

module.exports.translater = async (words) => {
  try {
    const res = await translate(words, { to: "pt" });
    console.log(res.from.language.iso);
    return res.text;
  } catch (error) {
    console.error("LOGANDO : ", error);
    return error;
  }
};

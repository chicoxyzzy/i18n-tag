export function createI18n(vocabulary) {
  return function i18n(strings, ...values) {
    const templateKey = strings.slice(0, -1).reduceRight((result, curr, i) => `${curr}{${i}}${result}`, strings[strings.length - 1]);
    const template = vocabulary[templateKey];

    if (template) {
      return template.replace(/{(\d)}/g, (_, index) => values[Number(index)]);
    }

    console.warn(`No translation for template: "${templateKey}"`);
    return '';
  };
}

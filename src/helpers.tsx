export function pick(o, ...props) {
  return Object.assign({}, ...props.map((prop) => ({ [prop]: o[prop] })));
}
export function getFormData(files, options) {
  const formData = new FormData();
  files.forEach((file, i) => {
    const name = options && options.fileName && options.fileName[i] ? options.fileName[i] : file.name;
    const fieldname = options && options.preserveFilenames && options.fieldName ? options.fieldName : 'file';
    formData.append(fieldname, file, name);
  });
  if (options) {
    ['preserveFilenames', 'includeAssetIDInPath', 'ignoreDuplicates', 'deduplicate'].forEach((key) => {
      if (key in options) {
        formData.append(key, `${options[key]}`);
      }
    });
  }
  return formData;
}

export function truncate(str, chars = 40) {
  str = (str || '').replace(/(\r\n|\n|\r)/gm, '');
  return str.slice(0, chars) + (str.length > chars ? '...' : '');
}

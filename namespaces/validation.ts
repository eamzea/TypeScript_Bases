namespace Validations {
  export const validateText = (text: string): boolean => {
    return text.length > 3 ? true : false;
  };

  const validateDate = (date: Date): boolean => {
    return isNaN(date.valueOf()) ? false : true;
  };
}

Validations.validateText('Zea');

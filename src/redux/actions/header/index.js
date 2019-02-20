
import intl from 'react-intl-universal';
export const FETCH_TAB_LANGUAGE = 'FETCH_TAB_LANGUAGE';

const locales = {
    "zh-TW": require('../../../locales/zh-TW.json'),
    "zh-CN": require('../../../locales/zh-CN.json'),
    "zh-EN": require('../../../locales/zh-EN.json'),
};
export const tabLanguange = (language) => (dispatch) => {
    intl.init({
        currentLocale: language, // TODO: determine locale here
        locales,
    })
    dispatch({
        type:FETCH_TAB_LANGUAGE,
        data: language
    })
};
  
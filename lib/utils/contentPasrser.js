import CONFIG from '@config/config.json';

const UI_BASE_URL = CONFIG.site.base_url;
const BE_BASE_URL = CONFIG.site.BE_base_url;

export const contentParser = (content) => {
    return content ? replaceBaseURL(content) : '';
}

const replaceBaseURL = (content)=>{
    return content.replace(UI_BASE_URL,BE_BASE_URL)
}
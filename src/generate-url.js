import generateQueryString from "query-string";

const ONMETA_URLS = {
  STAGING: "https://stg.platform.onmeta.in/",
  PRODUCTION: "https://platform.onmeta.in/",
};

function generateUrl(config, channelName) {
  let queryParams = {};
  let queryString = "";

  if (config && config.apiKey) {
    Object.keys(config).map((key) => {
      if (config[key] instanceof Object) {
        queryParams[key] = JSON.stringify(config[key]);
      } else queryParams[key] = config[key];
    });

    queryParams["eventChannel"] = channelName;
    queryString = generateQueryString.stringify(queryParams, {
      arrayFormat: "comma",
    });
  } else throw "Please enter your API Key";

  return `${ONMETA_URLS[config.environment || "PRODUCTION"]}?${queryString}`;
}

export { generateUrl };

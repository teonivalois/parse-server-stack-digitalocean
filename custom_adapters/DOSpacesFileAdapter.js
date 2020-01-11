var AWS = require("aws-sdk");
var S3Adapter = require('@parse/s3-files-adapter');

class DOSpacesFileAdapter extends S3Adapter {
  constructor(...args) {
    //Set Digital Ocean Spaces EndPoint
    const spacesEndpoint = new AWS.Endpoint(process.env.SPACES_ENDPOINT);
    
    //Define S3 options
    var s3Options = {
      bucket: process.env.SPACES_BUCKET_NAME,
      baseUrl: process.env.SPACES_BASE_URL,
      region: process.env.SPACES_REGION,
      bucketPrefix: process.env.SPACES_BUCKET_PREFIX,
      s3overrides: {
        accessKeyId: process.env.SPACES_ACCESS_KEY,
        secretAccessKey: process.env.SPACES_SECRET_KEY,
        endpoint: spacesEndpoint
      }
    };
    super(s3Options);
  }
}

module.exports = DOSpacesFileAdapter;
module.exports.default = DOSpacesFileAdapter;
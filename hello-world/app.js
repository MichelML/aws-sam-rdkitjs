const {elapsed_time} = require("./time");
const initRDKit = require("@rdkit/rdkit");
/**
 *
 * Event doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html#api-gateway-simple-proxy-for-lambda-input-format
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 *
 * Context doc: https://docs.aws.amazon.com/lambda/latest/dg/nodejs-prog-model-context.html
 * @param {Object} context
 *
 * Return doc: https://docs.aws.amazon.com/apigateway/latest/developerguide/set-up-lambda-proxy-integrations.html
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 *
 */
exports.lambdaHandler = async (event, context) => {
  try {
    const RDKit = await initRDKit();
    const smiles = event["queryStringParameters"]["smiles"];
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: RDKit.get_mol(smiles).get_inchi(),
        // message: RDKit.get_mol("CN1C=NC2=C1C(=O)N(C(=O)N2C)C").get_inchi(),
        elapsed_time: elapsed_time(),
        testField: 2
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};

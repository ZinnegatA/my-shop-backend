import { APIGatewayProxyEvent } from 'aws-lambda';
import { productsService } from '../../../../services/products';

export const getProductsById = async (
  event: APIGatewayProxyEvent,
): Promise<object | undefined> => {
  try {
    const { pathParameters } = event;

    if (!pathParameters) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Path parameters not provided' }),
      };
    }

    const { id } = pathParameters;

    if (!id) {
      return {
        statusCode: 400,
        body: JSON.stringify({
          error: 'ID not provided in path parameters',
        }),
      };
    }

    const product = await productsService.getProductsById(id);

    if (product) {
      return {
        statusCode: 200,
        body: JSON.stringify(product),
      };
    }

    return {
      statusCode: 404,
      body: JSON.stringify({ message: `Product with id ${id} not found` }),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

export const handler = getProductsById;

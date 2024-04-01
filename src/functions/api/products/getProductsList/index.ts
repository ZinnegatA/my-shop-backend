import { APIGatewayProxyEvent } from 'aws-lambda';
import { productsService } from '../../../../services/products';

export const getProductsList = async (
  event: APIGatewayProxyEvent,
): Promise<object | undefined> => {
  try {
    const products = await productsService.getProductsList();

    return {
      statusCode: 200,
      body: JSON.stringify(products),
    };
  } catch (error) {
    console.error(error);

    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Internal Server Error' }),
    };
  }
};

export const handler = getProductsList;

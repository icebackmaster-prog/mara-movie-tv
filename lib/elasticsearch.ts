import { Client } from '@elastic/elasticsearch';

const client = new Client({
  cloud: { id: process.env.ELASTIC_CLOUD_ID! },
  auth: { apiKey: process.env.ELASTIC_API_KEY! },
});

export const searchWithElastic = async (query: string) => {
  const result = await client.search({
    index: process.env.ELASTIC_INDEX_NAME,
    query: {
      multi_match: {
        query,
        fields: ['title', 'overview'],
      },
    },
  });
  return result.hits.hits.map((hit: any) => hit._source);
};

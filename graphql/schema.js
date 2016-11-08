import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
  GraphQLID
} from 'graphql';

import {
  connectionDefinitions,
  connectionArgs,
  connectionFromPromisedArray,
  mutationWithClientMutationId,
  globalIdField,
  fromGlobalId,
  nodeDefinitions
} from 'graphql-relay';

let schema = (db) => {
  class Data {};
  let data = new Data();

  let nodeDefs = nodeDefinitions(
    (globalId) => {
      let {type} = fromGlobalId(globalId);
      if (type === 'Data') {
        return data;
      }
      return null;
    },
    (obj) => {
      if (obj instanceof Data) {
        return dataSchema;
      }
      return null;
    }
  );

  let dataSchema = new GraphQLObjectType({
    name: "Data",
    fields: () => ({
      id: globalIdField("Data"),
      example: { type: GraphQLString, resolve: () => 'example' }
    }),
    interfaces: [nodeDefs.nodeInterface]
  })

  let QueryType = new GraphQLObjectType({
    name: "Query",
    fields: () => ({
      node: nodeDefs.nodeField,
      data: {
        type: dataSchema,
        resolve: () => data
      },
    })
  });

  return new GraphQLSchema({
    query: QueryType
  });
}

export default schema;

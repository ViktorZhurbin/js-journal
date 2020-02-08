import { QueryResolvers } from "../@types/types";

const Query: QueryResolvers = {
    todos: async (_, __, { models }) => {
        return await models.todoModel.find({});
    }
};

export { Query };

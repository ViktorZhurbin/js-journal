import { GraphQLResolveInfo } from 'graphql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  _FieldSet: any;
};





export type Todo = {
  __typename?: 'Todo';
  id: Scalars['String'];
  task: Scalars['String'];
  isComplete: Scalars['Boolean'];
};

export type TodoInput = {
  id: Scalars['String'];
  task: Scalars['String'];
  isComplete: Scalars['Boolean'];
};

export type ResponseMessage = {
  __typename?: 'ResponseMessage';
  success: Scalars['Boolean'];
};

export type Id = {
  __typename?: 'Id';
  id: Scalars['String'];
};

export type TodoDeleteResponse = {
  __typename?: 'TodoDeleteResponse';
  success: Scalars['Boolean'];
  data: Id;
};

export type TodoUpdateResponse = {
  __typename?: 'TodoUpdateResponse';
  success: Scalars['Boolean'];
  data: Todo;
};

export type Query = {
  __typename?: 'Query';
  todos: Array<Maybe<Todo>>;
};

export type TodoUpdateAllResponse = {
  __typename?: 'TodoUpdateAllResponse';
  success: Scalars['Boolean'];
  data?: Maybe<Query>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createTodo: TodoUpdateResponse;
  deleteTodo: TodoDeleteResponse;
  deleteAllTodos: ResponseMessage;
  editTodo: TodoUpdateResponse;
  toggleTodo: TodoUpdateResponse;
  updateAllTodos: TodoUpdateAllResponse;
};


export type MutationCreateTodoArgs = {
  task: Scalars['String'];
};


export type MutationDeleteTodoArgs = {
  id: Scalars['String'];
};


export type MutationEditTodoArgs = {
  id: Scalars['String'];
  task: Scalars['String'];
};


export type MutationToggleTodoArgs = {
  id: Scalars['String'];
  isComplete: Scalars['Boolean'];
};


export type MutationUpdateAllTodosArgs = {
  todos: Array<Maybe<TodoInput>>;
};


export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type LegacyStitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type NewStitchingResolver<TResult, TParent, TContext, TArgs> = {
  selectionSet: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type StitchingResolver<TResult, TParent, TContext, TArgs> = LegacyStitchingResolver<TResult, TParent, TContext, TArgs> | NewStitchingResolver<TResult, TParent, TContext, TArgs>;
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Todo: ResolverTypeWrapper<Todo>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  TodoInput: TodoInput;
  ResponseMessage: ResolverTypeWrapper<ResponseMessage>;
  Id: ResolverTypeWrapper<Id>;
  TodoDeleteResponse: ResolverTypeWrapper<TodoDeleteResponse>;
  TodoUpdateResponse: ResolverTypeWrapper<TodoUpdateResponse>;
  Query: ResolverTypeWrapper<{}>;
  TodoUpdateAllResponse: ResolverTypeWrapper<TodoUpdateAllResponse>;
  Mutation: ResolverTypeWrapper<{}>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Todo: Todo;
  String: Scalars['String'];
  Boolean: Scalars['Boolean'];
  TodoInput: TodoInput;
  ResponseMessage: ResponseMessage;
  Id: Id;
  TodoDeleteResponse: TodoDeleteResponse;
  TodoUpdateResponse: TodoUpdateResponse;
  Query: {};
  TodoUpdateAllResponse: TodoUpdateAllResponse;
  Mutation: {};
}>;

export type TodoResolvers<ContextType = any, ParentType extends ResolversParentTypes['Todo'] = ResolversParentTypes['Todo']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  task?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  isComplete?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type ResponseMessageResolvers<ContextType = any, ParentType extends ResolversParentTypes['ResponseMessage'] = ResolversParentTypes['ResponseMessage']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type IdResolvers<ContextType = any, ParentType extends ResolversParentTypes['Id'] = ResolversParentTypes['Id']> = ResolversObject<{
  id?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TodoDeleteResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoDeleteResponse'] = ResolversParentTypes['TodoDeleteResponse']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['Id'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type TodoUpdateResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoUpdateResponse'] = ResolversParentTypes['TodoUpdateResponse']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  data?: Resolver<ResolversTypes['Todo'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  todos?: Resolver<Array<Maybe<ResolversTypes['Todo']>>, ParentType, ContextType>;
}>;

export type TodoUpdateAllResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes['TodoUpdateAllResponse'] = ResolversParentTypes['TodoUpdateAllResponse']> = ResolversObject<{
  success?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  data?: Resolver<Maybe<ResolversTypes['Query']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createTodo?: Resolver<ResolversTypes['TodoUpdateResponse'], ParentType, ContextType, RequireFields<MutationCreateTodoArgs, 'task'>>;
  deleteTodo?: Resolver<ResolversTypes['TodoDeleteResponse'], ParentType, ContextType, RequireFields<MutationDeleteTodoArgs, 'id'>>;
  deleteAllTodos?: Resolver<ResolversTypes['ResponseMessage'], ParentType, ContextType>;
  editTodo?: Resolver<ResolversTypes['TodoUpdateResponse'], ParentType, ContextType, RequireFields<MutationEditTodoArgs, 'id' | 'task'>>;
  toggleTodo?: Resolver<ResolversTypes['TodoUpdateResponse'], ParentType, ContextType, RequireFields<MutationToggleTodoArgs, 'id' | 'isComplete'>>;
  updateAllTodos?: Resolver<ResolversTypes['TodoUpdateAllResponse'], ParentType, ContextType, RequireFields<MutationUpdateAllTodosArgs, 'todos'>>;
}>;

export type Resolvers<ContextType = any> = ResolversObject<{
  Todo?: TodoResolvers<ContextType>;
  ResponseMessage?: ResponseMessageResolvers<ContextType>;
  Id?: IdResolvers<ContextType>;
  TodoDeleteResponse?: TodoDeleteResponseResolvers<ContextType>;
  TodoUpdateResponse?: TodoUpdateResponseResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  TodoUpdateAllResponse?: TodoUpdateAllResponseResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
}>;


/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = any> = Resolvers<ContextType>;

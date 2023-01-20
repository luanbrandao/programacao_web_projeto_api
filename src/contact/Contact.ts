import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Contact {
  @Field()
  name: string;
  @Field()
  mail: string;
  @Field()
  fone: string;
  @Field()
  interest: string;
}

export { Contact };

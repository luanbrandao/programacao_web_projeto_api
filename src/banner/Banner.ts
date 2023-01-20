import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Banner {
  @Field()
  description: string;
  @Field()
  title: string;
  @Field()
  category: string;
}

export { Banner };

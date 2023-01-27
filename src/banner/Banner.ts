import { ObjectType, Field } from "type-graphql";

@ObjectType()
class Banner {
  @Field()
  description: string;
  @Field()
  title: string;
  @Field()
  category: string;
  @Field()
  imageUrl: string;
}

export { Banner };

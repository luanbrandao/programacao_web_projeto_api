import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Banner } from "./Banner";
import BannerSchema from "./BannerSchema";

@InputType()
class BannerInput {
  @Field()
  description: string;
  @Field()
  title: string;
  @Field()
  category: string;
  @Field()
  imageUrl: String;
}

@Resolver()
class BannerResolver {
  @Mutation(() => Banner)
  async addBanner(@Arg("bannerInput") bannerInput: BannerInput) {
    console.log({ bannerInput });
    const banner = await BannerSchema.create(bannerInput);
    return banner;
  }

  @Query(() => [Banner])
  async banners() {
    const banners = BannerSchema.find();
    return banners;
  }
}

export { BannerResolver };

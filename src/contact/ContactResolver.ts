import { Arg, Field, InputType, Mutation, Query, Resolver } from "type-graphql";
import { Contact } from "./Contact";
import ContactSchema from "./ContactSchema";

@InputType()
class ContactInput {
  @Field()
  name: string;
  @Field()
  mail: string;
  @Field()
  fone: string;
  @Field()
  interest: string;
}

@Resolver()
class ContactResolver {
  @Mutation(() => Contact)
  async addContact(@Arg("contactInput") contactInput: ContactInput) {
    console.log({ contactInput });
    const contact = await ContactSchema.create(contactInput);
    return contact;
  }

  @Query(() => [Contact])
  async contacts() {
    const contacts = ContactSchema.find();
    return contacts;
  }
}

export { ContactResolver };

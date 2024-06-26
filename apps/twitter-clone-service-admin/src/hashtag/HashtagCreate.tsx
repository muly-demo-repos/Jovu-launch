import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  TextInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { TweetTitle } from "../tweet/TweetTitle";

export const HashtagCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="metadata" multiline source="metadata" />
        <TextInput label="name" source="name" />
        <ReferenceArrayInput
          source="tweets"
          reference="Tweet"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={TweetTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Create>
  );
};
